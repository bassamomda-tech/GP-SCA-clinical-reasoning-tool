/* ============================================================
   Reasoning GP — SCA new cases, batch r (upload 124)
   Ten new remote (video / telephone) stations, each self-contained:
   stem, patient-voice role-player script, RCGP-domain checkpoints
   (dg = Data gathering & diagnosis, cm = Clinical management &
   medical complexity, ro = Relating to others), model consultation,
   knowledge, knowledge-by-theme, playbook, links, pitfalls, time
   map, word pictures (Clear fail / Fail / Pass / Clear pass) and
   avoid-phrases — all inline on the case object.
   Loaded after sca-cases80.js and before the overlay files.
   Educational; original content. Last checked: October 2026.
   ============================================================ */
(function(){
  var C = [];

  /* ===== r1. SMI annual physical health check (clozapine) — video ===== */
  C.push({
    id:'smi-health-check',
    title:"“The nurse said I had to go through my health check results with you — is it bad news?”",
    type:'video', duration:12,
    meta:{ age:44, sex:'M',
      setting:'Video — follow-up of an annual physical health check booked by the practice nurse.',
      system:'Mental health / Prescribing — SMI physical health check on clozapine: cardiometabolic risk, smoking cessation and clozapine levels, constipation',
      checked:'October 2026',
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Mental health & addiction','Prescribing','Long-term conditions & cancer','Investigations & results'], type:'video', thirdParty:false }
    },
    ceg:['Mental health & addiction','Long-term conditions & cancer','Investigations & results'],
    brief:'Mr Desmond Clarke, 44, has schizophrenia, stable for six years on clozapine 400 mg (hospital clozapine clinic supplies it). His annual severe mental illness (SMI) physical health check found obesity (BMI 34.6), non-diabetic hyperglycaemia (HbA1c 45), an adverse lipid profile and a QRISK3 of 13.8% with 20 cigarettes a day recorded. The obvious task is the cardiometabolic plan. The hidden, safety-critical task: ten days ago he STOPPED SMOKING (switched to a vape) and has not told the clozapine clinic. Tobacco smoke induces CYP1A2, which metabolises clozapine; stopping smoking can raise clozapine levels by about 50% within one to two weeks (nicotine replacement and vapes do not induce the enzyme). He now has new sedation, more drooling, unsteadiness, occasional myoclonic jerks and five days without opening his bowels — features of a rising clozapine level and of clozapine-induced gastrointestinal hypomotility, which can be fatal. He is also on hyoscine for hypersalivation (anticholinergic, worsens constipation). The candidate should uncover the smoking change, link it to his symptoms, arrange same-day contact with the clozapine clinic or psychiatrist for a level and dose review (never advise restarting smoking; never stop clozapine abruptly without specialist advice), treat the constipation actively with a stimulant and softener with clear ileus safety-netting, and still deliver the cardiometabolic plan: atorvastatin 20 mg for QRISK3 at least 10%, the NHS Diabetes Prevention Programme, weight support and annual review — while praising the quit attempt.',
    stem:{
      name:'Desmond Clarke', age:'44-year-old man',
      pmh:['Schizophrenia — under the community mental health team; stable on clozapine for 6 years (two admissions, last 2017)','Obesity','No known cardiovascular disease'],
      meds:['Clozapine 400 mg at night — supplied by the hospital clozapine clinic (latest blood monitoring 3 weeks ago: green)','Hyoscine hydrobromide 300 micrograms at night — repeat (for hypersalivation)','No laxative on repeat'],
      allergy:'No known drug allergies',
      recent:'Practice nurse — SMI annual physical health check, 6 days ago: weight 108 kg, BMI 34.6, waist 112 cm. BP 138/88, pulse 96 regular. Smoking: 20 cigarettes/day (as recorded at booking 4 weeks ago — not re-checked). Alcohol about 6 units/week. Bloods: HbA1c 45 mmol/mol; total cholesterol 6.1, HDL 0.9, TC:HDL ratio 6.8, non-HDL 5.2 mmol/L; U&E, LFT, TSH normal. QRISK3 (SMI and atypical antipsychotic recorded): 13.8%. Bowels: “fine”. Nurse booked a GP review of results.',
      reason:'Video appointment to go through his health check results.'
    },
    script:{
      opening:"“Hiya doctor. The nurse said I had to go through my results with you. Is it bad news? Because I have been trying, you know.”",
      facts:[
        { topic:'The health check', text:"“She weighed me and took my blood. I know I’m big — about four stone went on after I started the clozapine. I’m hungry all the time on it.”" },
        { topic:'Smoking (only if asked how much he smokes now)', text:"“I’ve stopped! Ten days ago. My sister got me a vape. Not one cigarette since.” Smile — you are proud." },
        { topic:'Has the clozapine clinic been told? (if asked)', text:"“No. Why would they need to know? It’s good news, isn’t it?” You last saw them three weeks ago, before you stopped." },
        { topic:'Sleepiness and side effects (only if asked how he feels or about side effects)', text:"“I’m sleeping loads — twelve hours — and still dozy in the day. My pillow’s soaking, I’m dribbling more. My legs feel a bit wobbly when I get up.” If asked about twitching or jerks: “Once or twice my arm jumped as I was dropping off.” No fits, no falls, no blackouts." },
        { topic:'Bowels (only if asked directly)', text:"“Not been for five days. Normally every two or three days. Bit bloated.” If asked more: “I’m still passing wind. No sick. Tummy’s a bit sore — maybe three out of ten.” No blood, no diarrhoea overflow." },
        { topic:'Other red flags (answer no if asked)', text:"No fever, no sore throat or mouth ulcers, no chest pain, no breathlessness, no fainting. Heart “goes a bit fast sometimes, always has on this tablet”." },
        { topic:'Mental health', text:"“Voices are quiet. I’m alright in myself. I take my tablets every night — Marcia, my sister, checks.” No thoughts of harming yourself." },
        { topic:'Diet and activity', text:"“Takeaways mostly. Cola — about two litres a day. I walk to the shops. I do a gardening project two days a week.”" },
        { topic:'Family history', text:"“My mum had sugar diabetes. My dad had a stroke when he was 60.”" },
        { topic:'Social', text:"Lives alone in a flat; sister Marcia lives five minutes away and is happy to be involved. Does not drive. Alcohol: “a couple of cans at the weekend.” No drugs." },
        { topic:'Role-player direction', text:'Be cheerful and proud about stopping smoking. Mention the sleepiness, drooling and bowels only when asked about side effects, how you feel, or bowels — and play them down (“it’s just the tablets”). If the link to smoking is explained kindly, become worried: “So should I start smoking again?” If you feel told off about your weight, go quiet and give short answers. You agree to the clozapine clinic being called today and to Marcia being told, if the doctor explains why.' }
      ],
      ice:{
        ideas:'“The nurse wants me on more tablets because I’m fat.”',
        concerns:'HIDDEN AGENDA — he is proud of quitting and expects praise; he has not connected the new sleepiness, drooling, wobbliness and constipation with stopping smoking. Underneath he is frightened that any change to his clozapine could make him unwell and “end up back in hospital”, which is why he never asks questions about it.',
        expectations:'To hear whether the results are bad, and maybe get “that weight injection” he saw on TV.'
      },
      cues:[
        '“I have been trying, you know.” — pride, and fear of being judged about his weight.',
        '“I’m sleeping loads lately — it’s just the tablets.” — new sedation that started recently, not six years ago.',
        '“My sister got me onto the vape.” — the smoking change the clozapine clinic does not know about.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Uses the health-check data already in the notes (BMI, BP, HbA1c 45, lipids, QRISK3 13.8%) without re-asking, and checks the one item likely to be out of date — current smoking status' },
      { dom:'dg', text:'Discovers he stopped smoking ten days ago and links the new sedation, hypersalivation, unsteadiness, myoclonic jerks and constipation to a probable rise in clozapine level' },
      { dom:'dg', text:'Assesses constipation severity and clozapine red flags: abdominal pain, distension, vomiting, flatus, overflow; fever or sore throat; chest pain, palpitations or breathlessness; seizures' },
      { dom:'cm', text:'Arranges same-day contact with the clozapine clinic or psychiatrist for a clozapine level and dose review; advises not to restart smoking and not to stop or change clozapine himself' },
      { dom:'cm', text:'Treats the constipation actively (stimulant plus softener, not bulk-forming), reviews the anticholinergic hyoscine with the specialist team, and gives explicit same-day and 999 advice for ileus symptoms or a seizure' },
      { dom:'cm', text:'Delivers the cardiometabolic plan: offers atorvastatin 20 mg (QRISK3 at least 10%), NHS Diabetes Prevention Programme for HbA1c 42–47, weight and diet support (sugary drinks), and repeat checks; explains that weight-loss injections have strict NHS eligibility' },
      { dom:'ro', text:'Praises the quit attempt genuinely and frames the clozapine issue as a reason to adjust the dose, not to go back to cigarettes; avoids blaming language about weight' },
      { dom:'ro', text:'Responds to his fear of relapse, uses plain language, checks understanding, involves his sister with consent, and agrees a review within a few days' }
    ],
    worked:[
      { lbl:'Check what may have changed', txt:'“The nurse wrote down 20 cigarettes a day when you booked. Is that still right, or has anything changed since?”' },
      { lbl:'Praise, then link', txt:'“Stopping smoking is the single best thing you could do for your heart — well done. There is one catch I need to tell you about: cigarette smoke makes the body clear clozapine faster. When you stop, the level of clozapine in your blood can climb over a week or two. The sleepiness, the dribbling, the wobbly legs and the bowels all fit with that.”' },
      { lbl:'Not back to smoking', txt:'“So the answer is not to start smoking again. The answer is for the clozapine team to check your level today and probably lower your dose a little. Please don’t change the dose yourself.”' },
      { lbl:'Take the bowels seriously', txt:'“Clozapine slows the gut, and that can become dangerous. I’m going to start two laxatives today. If your tummy becomes really painful or swollen, you’re sick, or you stop passing wind, that is a 999 or A&E situation — not something to wait on.”' },
      { lbl:'Then the heart plan', txt:'“Your results say your chance of a heart attack or stroke in the next ten years is about 14 in 100. A cholesterol tablet called atorvastatin brings that down. Your sugar is in the warning zone, not diabetes — there is a free NHS programme that helps turn that around. Swapping the cola would be a big win.”' },
      { lbl:'Safety-net and follow-up', txt:'“I’ll ring the clozapine clinic as soon as we finish and call you back this afternoon. Can I speak to Marcia too, so she knows what to look out for? I’ll see you again on video in three days to check your bowels and how sleepy you are.”' }
    ],
    learning:'An SMI physical health check is not a box-ticking exercise: the most dangerous finding here was not in the bloods but in a change the record did not show. Smoking induces the liver enzyme CYP1A2, which clears clozapine; stopping smoking (vapes and nicotine replacement do not induce it) can raise clozapine levels substantially within days to two weeks, causing sedation, hypersalivation, ataxia, myoclonus and seizures, and worsening clozapine-induced gastrointestinal hypomotility — a potentially fatal adverse effect that needs active laxative treatment (stimulant plus softener) and urgent assessment if there is pain, distension, vomiting or absent flatus. The right response is to support the quit, contact the clozapine clinic the same day for a level and dose review, and never advise restarting smoking. Then complete the cardiometabolic work: people with SMI die 15–20 years earlier, mostly from cardiovascular disease; QRISK3 includes SMI and antipsychotic use, so offer atorvastatin 20 mg at 10% or more, refer non-diabetic hyperglycaemia to the Diabetes Prevention Programme, address diet (sugary drinks) and weight, and share the plan with the mental health team.',
    knowledge:{
      guideline:'NHS England — Improving the physical health of people living with severe mental illness (2018) · NICE CG178 Psychosis and schizophrenia in adults (2014) · NICE NG238 Cardiovascular disease: risk assessment and reduction, including lipid modification (2023) · NICE PH38 Type 2 diabetes: prevention in people at high risk (2012, updated 2017) · MHRA Drug Safety Update: clozapine — reminder of potentially fatal risk of intestinal obstruction, faecal impaction and paralytic ileus (2017) · MHRA Drug Safety Update: clozapine and other antipsychotics — monitoring blood concentrations for toxicity (2020) · NICE NG209 Tobacco: preventing uptake, promoting quitting and treating dependence (2021)',
      summary:'Support the quit, but recognise that stopping smoking raises clozapine levels: same-day clozapine clinic contact, active treatment of constipation with ileus safety-netting — then the statin, prediabetes and weight plan.',
      points:[
        { h:'Smoking and clozapine', t:'Polycyclic hydrocarbons in tobacco smoke induce CYP1A2. Stopping (or switching to a vape or NRT) removes the induction: clozapine levels can rise by around 50% within 1–2 weeks. Starting to smoke again lowers levels and risks relapse. Any change in smoking needs the clozapine team told and a level checked (MHRA 2020).' },
        { h:'Toxicity features', t:'Sedation, hypersalivation, unsteadiness or ataxia, myoclonic jerks, confusion, tachycardia, hypotension and seizures. Myoclonus is a warning sign of seizure risk. Do not stop clozapine abruptly without specialist advice: rebound psychosis and cholinergic rebound can occur, and a break of more than 48 hours means re-titration.' },
        { h:'Clozapine-induced gastrointestinal hypomotility', t:'Constipation is common and can progress to faecal impaction, ileus, bowel ischaemia and death. Ask about bowels at every contact; treat with a stimulant plus a softener (for example senna with docusate or macrogol), avoid bulk-forming laxatives, and review other anticholinergics such as hyoscine. Pain, distension, vomiting or absent flatus need same-day hospital assessment.' },
        { h:'Cardiometabolic check', t:'The annual SMI check covers BMI and waist, BP and pulse, lipids, HbA1c or glucose, smoking, alcohol and substance use, plus follow-up interventions. QRISK3 includes SMI and atypical antipsychotics. Offer atorvastatin 20 mg if QRISK3 is 10% or more after lifestyle discussion; check lipids, ALT and HbA1c baseline and at 3 months.' },
        { h:'Non-diabetic hyperglycaemia and weight', t:'HbA1c 42–47 mmol/mol: refer to the NHS Diabetes Prevention Programme and repeat HbA1c at least yearly. Antipsychotic weight gain: diet (sugary drinks), activity, and specialist discussion of options such as metformin. Weight-management medicines (for example tirzepatide) are being rolled out on the NHS in phases with strict eligibility — explain, do not promise.' },
        { h:'Other clozapine safety', t:'Neutropenia: fever, sore throat or mouth ulcers need an urgent FBC. Myocarditis and cardiomyopathy: chest pain, breathlessness, palpitations, fever. Infection can also raise clozapine levels. Keep the clozapine on the GP record as a hospital-only medicine to prevent interactions.' },
        { h:'Marking edge', t:'The Clear pass candidate checks the smoking status that “everyone knows”, celebrates the quit, makes the CYP1A2 link out loud, acts the same day on both the level and the bowels, and still delivers a respectful cardiometabolic plan in the time.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Desmond, it’s Dr Shah. Can you hear and see me OK? Before we look at the results, how have you been getting on?', dom:'ro', why:'Opens with the person, not the numbers' },
      { who:'pt', text:'Alright. The nurse said I had to talk to you. Is it bad news? I have been trying, you know.' },
      { who:'dr', text:'It’s not bad news, and I can hear you’ve been working at things. Tell me what you’ve been trying.', dom:'ro', why:'Picks up the cue “I have been trying” instead of moving on' },
      { who:'pt', text:'I’ve stopped smoking! Ten days now. My sister got me a vape.' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'That is brilliant — honestly the best thing you could do for your heart. Can I ask, since you stopped, have you noticed any changes — sleep, how alert you feel, dribbling, your bowels?', dom:'dg', why:'Asks about features of a rising clozapine level straight after hearing the smoking change' },
      { who:'pt', text:'I’m sleeping loads, twelve hours, still dozy. Dribbling more. Legs a bit wobbly. It’s just the tablets.' },
      { who:'dr', text:'Any jerks or twitches, fits, or falls? And when did you last open your bowels?', dom:'dg', why:'Screens for myoclonus, seizures and constipation' },
      { who:'pt', text:'My arm jumped a couple of times going to sleep. No fits. Bowels — five days. Bit bloated.' },
      { who:'dr', text:'Is your tummy painful, swollen, or have you been sick? Are you still passing wind? Any fever, sore throat or chest pain?', dom:'dg', why:'Severity of hypomotility plus neutropenia and myocarditis red flags' },
      { who:'pt', text:'Bit sore, three out of ten. Still passing wind. No sick, no fever, no chest pain.' },
      { who:'dr', text:'Does the clozapine clinic know you’ve stopped smoking? And how is your mood — are the voices quiet?', dom:'dg', why:'Checks whether the specialist team knows; mental state' },
      { who:'pt', text:'No, I didn’t tell them. Why would they need to know? The voices are quiet.' },
      { phase:'Explanation', clock:'5–8 min', who:'dr', text:'Here’s why it matters. Cigarette smoke makes your liver clear clozapine faster. When you stop, the clozapine can build up over a week or two. The sleepiness, dribbling, wobbly legs, jerks and bowels all fit with a level that is too high. That can be fixed — but it needs sorting today.', dom:'ro', why:'Plain-language explanation of the CYP1A2 link' },
      { who:'pt', text:'So should I start smoking again?' },
      { who:'dr', text:'No — please don’t. Stay off them. The fix is for the clozapine team to check your blood level today and probably lower your dose a bit. Don’t change the dose yourself. Does that make sense?', dom:'cm', why:'Correct management: dose review, not relapse to smoking' },
      { who:'pt', text:'I’m scared they’ll mess with it and I’ll get ill again.' },
      { who:'dr', text:'That’s a fair worry — your clozapine has kept you well for six years. Lowering the dose to match your new non-smoking body keeps the level where it’s been working. They will check it carefully.', dom:'ro', why:'Addresses the hidden fear of relapse' },
      { who:'dr', text:'For your bowels I’m prescribing senna at night and docusate twice a day, and I’ll ask the team whether you still need the hyoscine, as that slows the bowel too. If your tummy gets really painful or swollen, you’re sick, or you stop passing wind — call 999 or go to A&E. Same if you have a fit.', dom:'cm', why:'Active laxatives, anticholinergic review, explicit ileus and seizure safety-net' },
      { phase:'Results and plan', clock:'8–11 min', who:'dr', text:'Now your results. Your risk of a heart attack or stroke in the next ten years is about 14 in 100. A cholesterol tablet, atorvastatin, lowers that. Your sugar is in the warning zone, not diabetes — there’s a free NHS programme to help. Swapping the cola for sugar-free would be a big win. How does that sound?', dom:'cm', why:'QRISK3 as a natural frequency, statin offer, Diabetes Prevention Programme, one concrete diet change' },
      { who:'pt', text:'OK. What about the weight injection off the telly?' },
      { who:'dr', text:'Those injections are coming in slowly on the NHS with strict rules about who can have them, so I can’t start one today — but I’ll check if you qualify and refer you to weight support. The clozapine makes you hungry, so it’s not about willpower.', dom:'cm', why:'Honest about eligibility; no blame' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'So: I ring the clozapine clinic after this and call you back today, you start the laxatives, no cigarettes, and we talk again in three days. Can I tell Marcia what to watch for? What will you tell her?', dom:'ro', why:'Summary, consent to involve sister, teach-back and follow-up' },
      { who:'pt', text:'Yeah, tell Marcia. No smoking, take the bowel tablets, wait for your call — and 999 if my belly gets bad.' }
    ],
    kb:{
      social:[
        { h:'Living with SMI', t:'He lives alone with a supportive sister nearby and structured activity (gardening project). Involving Marcia with his consent strengthens monitoring for both toxicity and relapse.' },
        { h:'Food environment and medication hunger', t:'Clozapine increases appetite; takeaways and two litres of cola a day are major drivers of weight and HbA1c. One specific swap beats a lecture.' }
      ],
      legal:[
        { h:'Capacity and consent', t:'He has capacity for these decisions. Sharing information with his sister requires his consent; sharing with the clozapine clinic is direct care and should be explained.' }
      ],
      professional:[
        { h:'Hospital-only medicines on the GP record', t:'Clozapine is supplied by the hospital but must be recorded in the GP system so that interactions (smoking change, ciprofloxacin, fluvoxamine, infection) are flagged.' },
        { h:'Reducing health inequality', t:'People with SMI die 15–20 years earlier, mostly from preventable physical illness. The annual check is only useful if the results lead to action.' }
      ],
      community:[
        { h:'Support', t:'NHS Diabetes Prevention Programme; local stop smoking service (to support the switch and keep the clozapine team informed); community mental health team and clozapine clinic; Rethink Mental Illness resources.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Smoking status change — and whether the clozapine team knows','Sedation, hypersalivation, unsteadiness, myoclonus, seizures','Constipation severity: pain, distension, vomiting, absent flatus, overflow','Fever, sore throat, mouth ulcers (neutropenia); chest pain, breathlessness, palpitations (myocarditis)'],
        psychosocial:['Who supports him day to day (sister)','Diet, sugary drinks, activity','Fear of relapse and of hospital','Alcohol and other substances'],
        ice:['Idea: “They want me on more tablets because I’m fat”','Concern: changes to clozapine could make him ill again','Expectation: results explained; asks about weight injection'],
        core:['Review the health-check data rather than re-ask it','Mental state and adherence (sister checks)','Family history of diabetes and stroke']
      },
      diagnosis:'Probable rising clozapine level after stopping smoking, with clozapine-associated constipation; plus raised cardiovascular risk (QRISK3 13.8%), non-diabetic hyperglycaemia and obesity.',
      diagnosisLay:'“Stopping smoking means your body clears the clozapine more slowly, so it has built up — that’s why you’re so sleepy and your bowels have slowed. Separately, your heart risk and sugar are higher than we’d like, and we can bring both down.”',
      management:{
        reflectIce:'“You’ve worked hard to stop smoking, and you’re worried that changing your clozapine might make you unwell. We’re adjusting the dose to keep you exactly as well as you’ve been — not taking it away.”',
        psychosocial:'Involve Marcia with consent; use the gardening project for activity; one diet swap (cola).',
        sharedPlan:['Same-day call to the clozapine clinic or psychiatrist: clozapine level and dose review','Senna plus docusate now; ask the team about stopping hyoscine','Stay smoke-free; stop smoking service support','Atorvastatin 20 mg with lipids, ALT and HbA1c at 3 months','NHS Diabetes Prevention Programme; weight support; check eligibility for weight-management medicines'],
        safetyNet:['999 or A&E for severe abdominal pain, swelling, vomiting or no wind, or a seizure','Same-day call for fever, sore throat or chest pain','GP video review in 3 days; call-back today after speaking to the clinic']
      }
    },
    links:[
      { ic:'📋', t:'Psychosis and schizophrenia', s:'Case walkthrough', href:'../cases/psychosis-schizophrenia.html' },
      { ic:'💠', t:'Smoking cessation', s:'Management protocol', href:'management/smoking-cessation.html' },
      { ic:'🧮', t:'QRISK3', s:'Calculator', href:'calculators.html#qrisk3' }
    ],
    pitfalls:{
      intro:'This station looks like a results-and-lifestyle chat. It is failed by candidates who never re-check the smoking status, or who hear “I’ve stopped smoking” and simply congratulate.',
      items:[
        { dom:'dg', fail:'Accepts the recorded “20 a day” and never asks about smoking now — so the toxicity picture is never uncovered.', why:'Records go out of date; the safety-critical change was ten days old. Missing it leaves a patient with rising clozapine levels and a slowing gut.', fix:'Check the one item most likely to have changed: “Is the 20 a day still right?” — then ask about side effects since.' },
        { dom:'cm', fail:'Recognises the constipation but offers ispaghula or “more fibre and fluids, see how it goes”.', why:'Bulk-forming laxatives can worsen impaction in hypomotility; clozapine constipation is a recognised cause of death and needs active treatment and explicit ileus safety-netting.', fix:'Stimulant plus softener today, review anticholinergics, 999 or A&E for pain, distension, vomiting or absent flatus, and review in days.' },
        { dom:'ro', fail:'Opens with the BMI and a lecture on weight, so he shuts down and never mentions the sleepiness.', why:'Blame closes the consultation; he only volunteers symptoms when he feels safe.', fix:'Start with what he is proud of, use his words (“I have been trying”), and present weight as a medication effect, not a failure.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Let him say “I have been trying” — and ask what he’s been trying.' },
      { t:'1–5', h:'Smoking change and toxicity screen', d:'Stopped ten days ago → sedation, drooling, wobbliness, jerks, bowels. Severity and red flags. Does the clinic know?' },
      { t:'5–8', h:'Explain and act', d:'The CYP1A2 link in plain words. Same-day clozapine clinic contact; do not restart smoking; laxatives and ileus safety-net.' },
      { t:'8–11', h:'Results plan', d:'QRISK3 13.8% → atorvastatin 20 mg; HbA1c 45 → Diabetes Prevention Programme; cola swap; honest answer on weight injections.' },
      { t:'11–12', h:'Close', d:'Sister involved with consent, teach-back, call-back today, review in 3 days.' }
    ],
    wordPics:{
      clearFail:'Congratulates him on stopping smoking and moves on; no link to clozapine; constipation not asked about or dismissed; a lecture on weight; no safety-net.',
      fail:'Delivers a reasonable statin and lifestyle plan but never connects the smoking change to the sedation and bowels, or recognises it but advises him to “cut back down slowly on the vape” and see the clinic at the next routine visit.',
      pass:'Finds the smoking change, links it to the symptoms, arranges same-day clozapine clinic contact, starts laxatives with ileus safety-netting, and offers a statin and Diabetes Prevention Programme referral in plain language.',
      clearPass:'All of the Pass, woven naturally: praises the quit and explicitly protects it, answers his fear of relapse, reviews hyoscine, involves Marcia with consent, gives QRISK as “14 in 100”, handles the weight-injection question honestly, and closes with teach-back and a dated review.'
    },
    avoid:[
      { dont:'“Well done for stopping — anyway, about your cholesterol…”', instead:'“Well done — and since you stopped, have you noticed any changes in sleep, dribbling or your bowels?”', why:'The praise is right; moving on without asking misses the safety issue.' },
      { dont:'“Maybe have the odd cigarette until the clinic sorts it.”', instead:'“Stay off cigarettes — the clinic will lower your dose to match.”', why:'Restarting smoking would drop the level unpredictably and undo the health gain.' },
      { dont:'“You need to lose weight or you’ll get diabetes.”', instead:'“Clozapine makes you hungrier, so this isn’t about willpower — let’s find one change that helps.”', why:'Blame reduces engagement in a group already disadvantaged in physical care.' }
    ]
  });

  /* ===== r2. Chronic widespread pain (fibromyalgia) — video ===== */
  C.push({
    id:'fibromyalgia',
    title:"“I ache everywhere and I’m exhausted — I just want a scan to find out what’s causing it”",
    type:'video', duration:12,
    meta:{ age:46, sex:'F',
      setting:'Video — follow-up of normal blood tests for widespread aches and tiredness.',
      system:'MSK / Pain — chronic widespread pain: making a positive diagnosis, NICE chronic primary pain management, opioid review',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['New & undifferentiated presentations','Long-term conditions & cancer','Prescribing','Investigations & results'], type:'video', thirdParty:false }
    },
    ceg:['New & undifferentiated presentations','Long-term conditions & cancer','Investigations & results'],
    brief:'Mrs Joanne Riley, 46, school administrator, has 18 months of widespread pain, fatigue, unrefreshing sleep and poor concentration. Bloods (inflammatory markers, thyroid, CK, calcium, vitamin D, coeliac serology, ferritin) are normal, and a physiotherapist found widespread tenderness without synovitis or neurological signs. She wants “a full-body MRI to find the cause”. A locum started co-codamol 30/500 three months ago; she now takes 8 a day and has near-daily headaches (likely medication-overuse headache). The task: a focused history that screens for alternative diagnoses (inflammatory arthritis, connective tissue disease, PMR, hypothyroidism, myositis, neurological disease, depression), then a POSITIVE, validating diagnosis of fibromyalgia as a form of chronic primary pain, explaining why more scans would not help, and a NICE NG193 plan: supervised exercise programme, psychological therapy (CBT or ACT), acupuncture as an option, and an antidepressant option (amitriptyline or duloxetine are commonly chosen; NICE lists amitriptyline, citalopram, duloxetine, fluoxetine, paroxetine or sertraline) after discussing benefits and harms; NOT starting gabapentinoids, opioids, NSAIDs, paracetamol or benzodiazepines; and a shared plan to taper the co-codamol (also treating the overuse headache). Hidden agenda: an attendance review meeting at work next week, and a husband who says it is “all in her head”; underneath, she fears multiple sclerosis because her cousin has it. Screen mood and suicidal thoughts. Fit note and workplace adjustments.',
    stem:{
      name:'Joanne Riley', age:'46-year-old woman',
      pmh:['Low mood 2019 — sertraline for 9 months, stopped','Irritable bowel syndrome','Migraine without aura (infrequent)'],
      meds:['Co-codamol 30/500 mg, 2 tablets up to four times a day when required — started by a locum 3 months ago; issued 4 times since','Sumatriptan 50 mg when required'],
      allergy:'No known drug allergies',
      recent:'Bloods 3 weeks ago for “aching all over and exhausted”: FBC, ESR 8, CRP 3, U&E, LFT, bone profile, TSH, CK, HbA1c, ferritin 64 µg/L, vitamin D 58 nmol/L, coeliac serology — all normal. Physiotherapy letter (2 weeks ago): “Widespread soft-tissue tenderness. Full range of movement in all joints, no synovitis. Neurological screen normal. Very fatigued and tearful. Reluctant to exercise — worried it will make the pain worse.”',
      reason:'Video appointment to discuss her results and “next steps”.'
    },
    script:{
      opening:"“Hello doctor. So the bloods were all normal again. I don’t understand — something is obviously wrong with me. I really think I need a proper scan, a full-body MRI, to find out what’s causing it.”",
      facts:[
        { topic:'The pain', text:"“It’s everywhere — neck, shoulders, back, hips, even my arms and legs. It moves about. A deep ache, burning sometimes. It’s been about a year and a half.” Worse after a busy day and when stressed or cold." },
        { topic:'Tiredness and sleep', text:"“I’m in bed by nine and wake up like I haven’t slept. My head’s foggy — I lose words at work.”" },
        { topic:'Stiffness and joints (if asked)', text:"“Stiff for maybe twenty minutes in the morning.” No swollen joints, no hot joints, no rashes, no mouth ulcers, no dry eyes or mouth, no hair loss, no fevers." },
        { topic:'Neurology (if asked)', text:"“Sometimes my hands feel tingly but it comes and goes, both hands.” No weakness, no loss of vision or double vision, no walking or balance problems, no bladder or bowel changes." },
        { topic:'Weight and general (if asked)', text:"No weight loss, no night sweats. Appetite fine. Muscles not weak — “I can lift things, it just hurts”." },
        { topic:'Painkillers (if asked how she’s managing)', text:"“The co-codamol takes the edge off. I’m taking two, four times a day now — every day.” If asked about headaches: “I get a headache most mornings, so I take two more.” Constipated, which you put down to IBS." },
        { topic:'Mood (if asked)', text:"“I’m fed up and weepy. I used to love walking the dog.” If asked about harming yourself: “No — I’d never do that. I just want my life back.”" },
        { topic:'Work', text:"Full-time school administrator. Eight days off sick this term. “I’ve got an attendance review meeting next Thursday. I’m terrified I’ll lose my job.” (Say this only if work is explored.)" },
        { topic:'Home', text:"Married, two teenagers. If asked how your husband feels: “Paul thinks it’s all in my head. That I just need to get on with it.” (Upset.)" },
        { topic:'Your fear (only if asked what you’re worried it is)', text:"“My cousin has MS. She started with aches and tiredness and they kept telling her it was nothing.”" },
        { topic:'Role-player direction', text:'Start frustrated and a little defensive. If the doctor dismisses you or says “all your tests are normal, so there’s nothing wrong”, become upset and insist on the MRI. If they ask what you fear, tell them about your cousin. If they explain the condition in a way that believes you and takes the MS fear seriously, soften and accept a plan without a scan. You are reluctant about exercise but open to it if it is graded and supervised. You are worried about stopping co-codamol (“it’s the only thing that helps”) but will agree to a slow reduction.' }
      ],
      ice:{
        ideas:'“Something is being missed — a scan will find it.”',
        concerns:'HIDDEN AGENDA — her cousin has multiple sclerosis that was dismissed for years; she fears the same. She is also frightened of losing her job at next week’s attendance meeting, and hurt that her husband says it is “all in her head”.',
        expectations:'A full-body MRI; at least a referral to a specialist “who will take me seriously”.'
      },
      cues:[
        '“Something is obviously wrong with me.” — needs validation before explanation.',
        '“They kept telling her it was nothing.” (if she mentions her cousin) — the MS fear.',
        '“I’ve got a meeting at work next week.” — the practical crisis.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Takes a focused pain history and screens for alternative diagnoses: inflammatory arthritis, connective tissue disease, PMR, myositis (CK normal), hypothyroidism, neurological symptoms (MS features), weight loss or night sweats' },
      { dom:'dg', text:'Uses the normal bloods and the physiotherapy findings already available, and explores sleep, fatigue, cognition, mood (including suicidal thoughts) and the impact on work and home' },
      { dom:'dg', text:'Identifies daily co-codamol use with morning headaches as probable medication-overuse headache and opioid harm' },
      { dom:'dg', text:'Makes and names a positive diagnosis — fibromyalgia, a type of chronic primary pain — rather than a diagnosis of exclusion' },
      { dom:'cm', text:'Explains why an MRI would not help (and the harm of incidental findings), while addressing the specific MS fear with the features that would change that' },
      { dom:'cm', text:'Offers NICE-consistent options: supervised graded exercise, psychological therapy (CBT or ACT), acupuncture as an option, and an antidepressant option with benefits and harms; does not start gabapentinoids, opioids, NSAIDs or benzodiazepines' },
      { dom:'cm', text:'Agrees a gradual co-codamol taper, supports work (fit note “may be fit for work” with adjustments, occupational health), and arranges review with safety-netting for new neurological or inflammatory features' },
      { dom:'ro', text:'Validates the pain as real, explores the husband’s view and the work meeting, and builds a shared plan she believes in' }
    ],
    worked:[
      { lbl:'Believe her first', txt:'“Your pain is real. Normal blood tests don’t mean nothing is wrong — they tell us what it isn’t, and that matters too.”' },
      { lbl:'Ask the fear', txt:'“When you imagine what the scan might show, what are you most worried about?”' },
      { lbl:'Name it positively', txt:'“This pattern has a name — fibromyalgia. It’s a condition where the nervous system’s pain volume is turned up, so normal signals are felt as pain. It’s diagnosed by its pattern, which you have, not by a scan.”' },
      { lbl:'MS, directly', txt:'“The things that make me think of MS — loss of vision, double vision, weakness in a limb, trouble walking or with your bladder — you haven’t had any. If any of those happened, I’d want to see you quickly, and that’s when a scan helps.”' },
      { lbl:'The co-codamol', txt:'“Codeine every day can actually cause the morning headaches, and it doesn’t work well for this kind of pain over time. I’d like us to cut it down slowly together — not stop it suddenly.”' },
      { lbl:'Work', txt:'“Let’s get you ready for Thursday — a fit note saying you may be fit for work with adjustments, and a letter about the diagnosis, could help your manager understand.”' }
    ],
    learning:'Chronic widespread pain with fatigue, unrefreshing sleep and cognitive symptoms, normal inflammatory markers, thyroid and CK, and no synovitis or neurological signs is fibromyalgia — classified by NICE as chronic primary pain. The skill is a positive, validating diagnosis after a targeted screen for alternatives (inflammatory arthritis, connective tissue disease, PMR over 50, myositis, hypothyroidism, neurological disease, malignancy features), not a diagnosis of exclusion delivered as “there’s nothing wrong”. Address the specific fear (here MS) by naming the features that would change the plan; more imaging finds incidental abnormalities and reinforces illness worry. NICE recommends supervised group exercise programmes, psychological therapies (CBT or ACT), acupuncture within a defined course, and considering an antidepressant (amitriptyline, citalopram, duloxetine, fluoxetine, paroxetine or sertraline) for pain, quality of life and sleep after discussing benefits and harms. Do not start opioids, gabapentinoids or other antiepileptics, NSAIDs, paracetamol, benzodiazepines, antipsychotics or ketamine for chronic primary pain; if she is already taking them, review and agree a shared, gradual reduction. Daily codeine with morning headaches suggests medication-overuse headache. Screen mood and suicidal thoughts; support work with a fit note and adjustments.',
    knowledge:{
      guideline:'NICE NG193 Chronic pain (primary and secondary) in over 16s: assessment of all chronic pain and management of chronic primary pain (2021) · EULAR revised recommendations for the management of fibromyalgia (2016; international) · NICE NG215 Medicines associated with dependence or withdrawal symptoms (2022) · NICE CG150 Headaches in over 12s: diagnosis and management (2012, updated 2021) · DWP Getting the most out of the fit note: guidance for healthcare professionals (2022)',
      summary:'Believe, screen, name it positively, explain why a scan will not help, and offer exercise, psychological therapy and an antidepressant option — while tapering the co-codamol.',
      points:[
        { h:'Diagnosis', t:'Widespread pain for 3 months or more, fatigue, unrefreshing sleep and cognitive symptoms, with normal ESR/CRP, FBC, TSH, CK, bone profile and no synovitis. The 2016 ACR criteria (widespread pain index and symptom severity) support a clinical diagnosis; tender-point counting is no longer required.' },
        { h:'Alternatives to screen for', t:'Inflammatory arthritis (morning stiffness over 30–60 minutes, joint swelling), connective tissue disease (rash, ulcers, sicca, Raynaud’s), PMR (over 50, proximal stiffness, raised ESR), myositis (weakness, raised CK — statins), hypothyroidism, neurological disease (focal deficits), malignancy (weight loss, night sweats, bone pain), and depression.' },
        { h:'What works', t:'Supervised group exercise programmes; psychological therapies (CBT, ACT); acupuncture within a single course; and an antidepressant after discussing benefits and harms — amitriptyline at night (10 mg, titrate) or duloxetine are often chosen. Sleep hygiene and pacing.' },
        { h:'What NICE says not to start', t:'Opioids, gabapentinoids and other antiepileptics, NSAIDs, paracetamol, benzodiazepines, antipsychotics, local anaesthetic or steroid trigger-point injections, ketamine. For someone already taking them: explain the lack of evidence, then agree a shared, gradual reduction.' },
        { h:'Co-codamol taper', t:'Reduce by about 10–25% of the dose every 1–2 weeks (for example 8 → 6 → 4 → 2 → 0 tablets daily), using the paracetamol component alone briefly if needed; warn of transient worsening of pain and headache; review weekly to fortnightly. Medication-overuse headache improves after withdrawal.' },
        { h:'Work', t:'A fit note can say “may be fit for work” with phased return, altered hours or adjusted duties. Suggest an occupational health referral via her employer; reasonable adjustments may apply if the condition has a long-term substantial effect.' },
        { h:'Marking edge', t:'The pass is the positive diagnosis and a plan without scans or new analgesics. The Clear pass finds the MS fear and the work crisis and changes the plan because of them.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Joanne, I’m Dr Mensah. I’ve seen your blood results and the physio letter. Before I go through them, tell me how things are for you at the moment.', dom:'ro', why:'Open question; signals the records have been read' },
      { who:'pt', text:'Awful. The bloods were all normal again. Something is obviously wrong. I really think I need a full-body MRI.' },
      { who:'dr', text:'I can hear how frustrating that is — you feel unwell, and “normal” doesn’t feel like an answer. Can you tell me about the pain itself?', dom:'ro', why:'Validates before explaining' },
      { who:'pt', text:'It’s everywhere, it moves about, deep ache, burning. Eighteen months now. And I’m exhausted, my head’s foggy.' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'Any swollen or hot joints, stiffness for more than half an hour in the morning, rashes, mouth ulcers, dry eyes, weight loss or night sweats?', dom:'dg', why:'Screens for inflammatory and systemic disease' },
      { who:'pt', text:'Stiff maybe twenty minutes. None of the rest.' },
      { who:'dr', text:'Any weakness, numbness in one area, changes to your vision, double vision, problems walking or with your bladder?', dom:'dg', why:'Neurological screen' },
      { who:'pt', text:'My hands tingle sometimes, both of them. Nothing else. Why do you ask that?' },
      { who:'dr', text:'I’m checking for things that would need a different plan. When you picture what a scan might show, what worries you most?', dom:'ro', why:'Explores the hidden fear' },
      { who:'pt', text:'My cousin has MS. They told her it was nothing for years.' },
      { who:'dr', text:'That makes complete sense of wanting a scan. Can I ask how you’re managing the pain day to day — and how your mood is?', dom:'dg', why:'Moves to medication and mood' },
      { who:'pt', text:'Co-codamol, two, four times a day. I get a headache most mornings so I take more. I’m weepy. Not suicidal — I just want my life back.' },
      { who:'dr', text:'And how is this affecting work and home?', dom:'dg', why:'Impact and psychosocial context' },
      { who:'pt', text:'Attendance meeting next Thursday. Paul thinks it’s all in my head.' },
      { phase:'Explanation', clock:'5–8 min', who:'dr', text:'I believe you, and it’s not in your head the way Paul means. This pattern — widespread pain, exhaustion, poor sleep, foggy thinking, with normal tests — is called fibromyalgia. The nerves that carry pain have their volume turned up. It’s diagnosed by the pattern, which you have.', dom:'dg', why:'Positive, named, validating diagnosis' },
      { who:'dr', text:'About MS: the signs that would point there — losing vision, double vision, a weak limb, trouble walking or with your bladder — you haven’t had. An MRI now would likely show small, unimportant findings that cause more worry. If any of those signs appear, I’d see you quickly and scan.', dom:'cm', why:'Explains why not to scan; targeted safety-net' },
      { who:'pt', text:'So what can actually help?' },
      { phase:'Plan', clock:'8–11 min', who:'dr', text:'The things with the best evidence are a supervised exercise programme that starts very gently, talking therapy that helps you live with pain, and there’s also the option of acupuncture or a medicine like amitriptyline at night that can help pain and sleep. Which of those appeals?', dom:'cm', why:'NICE NG193 options offered for shared choice' },
      { who:'pt', text:'Amitriptyline for sleep, and maybe the exercise if it’s gentle. But not stopping the co-codamol.' },
      { who:'dr', text:'Codeine every day can cause those morning headaches and doesn’t help this pain long term. Let’s cut it slowly — six tablets a day for a fortnight, then four — and I’ll check in with you each time. For Thursday, I’ll do a fit note saying you may be fit for work with adjustments, and suggest occupational health.', dom:'cm', why:'Shared opioid taper and work support' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'Would it help if Paul came to the next appointment so we can explain it together? Tell me what you’ll take away from today.', dom:'ro', why:'Addresses husband’s view; teach-back' },
      { who:'pt', text:'It’s called fibromyalgia, it’s real, no scan unless I get those nerve symptoms, amitriptyline, physio class, cut the co-codamol slowly. And yes — bring Paul.' }
    ],
    kb:{
      social:[
        { h:'Family belief', t:'A partner who believes it is “all in her head” undermines recovery. A joint appointment with consent can reframe it as a real, explainable condition.' },
        { h:'Work', t:'Attendance management is a crisis point; a fit note with adjustments and occupational health advice can protect employment.' }
      ],
      legal:[
        { h:'Equality Act 2010', t:'If the condition has a substantial and long-term effect on day-to-day activities, the employer may need to make reasonable adjustments.' }
      ],
      professional:[
        { h:'Stewardship of investigations', t:'Imaging without a clinical question generates incidental findings and anxiety. Explaining why a test is not needed is a skill, not a refusal.' },
        { h:'Inherited prescribing', t:'A locum’s opioid becomes your responsibility at review. NICE advises reviewing and reducing medicines that are not helping chronic primary pain.' }
      ],
      community:[
        { h:'Resources', t:'Local pain management or ESCAPE-pain type programmes; NHS Talking Therapies for long-term conditions; Versus Arthritis and Fibromyalgia Action UK information.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Weight loss, night sweats, fever','Joint swelling, prolonged morning stiffness, rash, ulcers, sicca','Focal neurology, visual loss, bladder symptoms','Muscle weakness; suicidal thoughts'],
        psychosocial:['Work attendance meeting','Husband’s disbelief','Lost activities (walking the dog)'],
        ice:['Idea: something is being missed','Concern: MS like her cousin; losing her job','Expectation: full-body MRI'],
        core:['Distribution, duration and character of pain','Sleep, fatigue, cognition','Analgesic use and headache pattern']
      },
      diagnosis:'Fibromyalgia (chronic primary pain) with probable medication-overuse headache from daily co-codamol.',
      diagnosisLay:'“Your pain system has become over-sensitive — like a smoke alarm that goes off when you make toast. The pain is real, but it isn’t caused by damage a scan would show.”',
      management:{
        reflectIce:'“You wanted a scan because your cousin’s MS was missed. You don’t have the signs of MS, and I’ve told you exactly what would make me scan.”',
        psychosocial:'Fit note and occupational health for Thursday; offer a joint appointment with Paul.',
        sharedPlan:['Supervised graded exercise programme','Psychological therapy (CBT or ACT) via Talking Therapies','Amitriptyline 10 mg at night, titrate','Gradual co-codamol taper with fortnightly review','Fit note “may be fit for work” with adjustments'],
        safetyNet:['Urgent review if visual loss, double vision, limb weakness, walking or bladder problems','Review for joint swelling, rash, weight loss or fevers','Seek help if mood worsens or thoughts of self-harm']
      }
    },
    links:[
      { ic:'📋', t:'Chronic pain', s:'Case walkthrough', href:'../cases/chronic-pain.html' },
      { ic:'💠', t:'Chronic pain', s:'Management protocol', href:'management/chronic-pain.html' },
      { ic:'🧮', t:'PHQ-9', s:'Mood screen', href:'calculators.html#phq9' }
    ],
    pitfalls:{
      intro:'This station is failed either by ordering the scan to end the conflict, or by a cold “your tests are normal” that leaves her unheard.',
      items:[
        { dom:'ro', fail:'“All your tests are normal, so there’s nothing seriously wrong.”', why:'It sounds like disbelief; she escalates and the plan collapses.', fix:'Validate the pain, then give a positive diagnosis with a clear explanation.' },
        { dom:'cm', fail:'Adds pregabalin or increases codeine to “give her something”.', why:'NICE advises against starting gabapentinoids or opioids for chronic primary pain; harms outweigh benefits.', fix:'Offer exercise, psychological therapy, acupuncture or an antidepressant, and taper the opioid.' },
        { dom:'dg', fail:'Never asks what she fears the scan will show, so the MS worry is never answered.', why:'Unaddressed fear drives repeat attendance and investigation requests.', fix:'Ask the fear, then name the specific features that would change the plan.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Let her say she wants the MRI; acknowledge the frustration.' },
      { t:'1–5', h:'Screen and explore', d:'Inflammatory, neurological and systemic red flags; analgesia; mood; work; husband; the fear.' },
      { t:'5–8', h:'Name it', d:'Positive diagnosis of fibromyalgia; why no scan; MS features to watch for.' },
      { t:'8–11', h:'Plan', d:'Exercise, therapy, amitriptyline or other options; co-codamol taper; fit note.' },
      { t:'11–12', h:'Close', d:'Teach-back, joint appointment with Paul, review date.' }
    ],
    wordPics:{
      clearFail:'Orders an MRI or refers to rheumatology simply to satisfy the request, or dismisses her; adds pregabalin or more opioid; no mood screen.',
      fail:'Gives a vague “it may be fibromyalgia, try exercise” without exploring the fear or the codeine use; plan she does not believe.',
      pass:'Screens appropriately, names fibromyalgia positively, explains why no scan, offers NICE options and a co-codamol taper, and safety-nets for neurological features.',
      clearPass:'All of the Pass, plus uncovers and answers the MS fear specifically, spots medication-overuse headache, supports her for the work meeting, invites Paul, and she leaves feeling believed with a plan she chose.'
    },
    avoid:[
      { dont:'“There’s nothing wrong with you.”', instead:'“Your tests show what it isn’t — and the pattern tells us what it is.”', why:'Normal tests are reassuring only when paired with a positive explanation.' },
      { dont:'“It’s probably stress.”', instead:'“Stress and poor sleep can turn the pain volume up, but the pain is real.”', why:'Attributing it to stress alone feels dismissive and echoes her husband.' },
      { dont:'“Let’s just do the MRI to put your mind at rest.”', instead:'“A scan would likely find small things that don’t matter and worry you more. Here’s what would make me scan.”', why:'Reassurance scans rarely reassure and can cause harm.' }
    ]
  });

  /* ===== r3. Rough sleeper with a leg wound — video from a day centre ===== */
  C.push({
    id:'homeless-patient',
    title:"“Bev made me do this — it’s only my leg, it’ll heal on its own”",
    type:'video', duration:12,
    meta:{ age:49, sex:'M',
      setting:'Video call from a day centre for people experiencing homelessness; a support worker is present with his agreement.',
      system:'Health disadvantage / Infection — lower-limb cellulitis in a rough sleeper: assessment, a workable plan, alcohol and safeguarding',
      checked:'October 2026',
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Health disadvantage & vulnerabilities','Urgent & unscheduled care','Mental health & addiction','Prescribing'], type:'video', thirdParty:true }
    },
    ceg:['Health disadvantage & vulnerabilities','Urgent & unscheduled care','Mental health & addiction'],
    brief:'Mr Piotr Nowak, 49, Polish, has been sleeping rough for four months after a relationship breakdown and losing his construction job. He was registered two days ago using the practice address after the day centre intervened (another practice had wrongly turned him away for lacking proof of address). The outreach nurse found left-leg cellulitis spreading from a graze, temperature 38.0 °C, heart rate 104, otherwise stable (NEWS2 1), alert, and trench-foot-type skin changes. He drinks about 3 litres of strong cider a day and had a withdrawal seizure two years ago. He refuses hospital. Hidden agenda: his dog Bruno — he will not leave him, and fears losing his sleeping place and belongings; he also fears the Home Office because he lost his ID and thinks his settled-status paperwork “is not right”. The task: assess severity and sepsis risk (no sepsis red flags now; consider DVT; capillary glucose done), respect his capacity while making the safest plan he will accept — oral flucloxacillin 1 g four times daily (or clarithromycin if penicillin allergy) for 5–7 days with daily outreach-nurse review and a pen-marked margin, readily accessible supply (prescription cost help, pharmacy near the centre, dosing tied to centre routines), wound and foot care, and clear escalation if worse; address alcohol safely (do not advise sudden stopping; thiamine; plan for withdrawal if admitted; offer alcohol service), offer housing support with consent (local authority housing options, StreetLink), confirm that GP care is free regardless of immigration status and that the practice does not share information with the Home Office for this, and check he is happy for the support worker to stay.',
    stem:{
      name:'Piotr Nowak', age:'49-year-old man',
      pmh:['Registered 2 days ago (no fixed abode — practice address used); previous records requested','Self-reported: alcohol withdrawal seizure 2 years ago (records awaited)'],
      meds:['None prescribed'],
      allergy:'None known — says he has “had penicillin before, no problem”',
      recent:'Homeless health outreach nurse, at the day centre today 10:05: left lower leg — 3-day spreading redness from a graze (fall 6 days ago). Erythema 14 × 9 cm, warm, tender, edge marked with pen. Small sloughy wound, no pus, no crepitus, no blistering or necrosis. Calf not swollen beyond the redness. Both feet: macerated, white, wrinkled skin with cracks between toes. Temp 38.0 °C, HR 104, BP 128/80, RR 18, SpO2 97% on air, alert and oriented (NEWS2 1). Capillary glucose 7.2 mmol/L. Smells of alcohol; fine tremor of hands. Nurse note: “Declines hospital.”',
      reason:'Video call from the day centre — support worker (Bev) present.'
    },
    script:{
      opening:"(Bev, the support worker, holds the tablet) “Hi doctor, I’m Bev from the day centre — Piotr’s here with me, he’s happy for me to stay.” (Piotr) “Hello. Bev made me do this. It’s only my leg. It will heal on its own.”",
      facts:[
        { topic:'The leg', text:"“I fell on the steps by the canal, six days ago. Scraped it. Three days ago it went red and hot. Now it’s bigger. It throbs.” Can show it on camera: red, pen line visible; redness has crept past the pen line a little since this morning (about 1 cm)." },
        { topic:'Feeling unwell? (if asked)', text:"“Hot and cold last night. Shivering a bit.” No confusion, no breathlessness, no vomiting, still passing urine normally, can walk on it but it hurts. No calf pain separate from the red area." },
        { topic:'Feet (if asked)', text:"“My feet are always wet. My boots have holes.”" },
        { topic:'Allergies and medicines', text:"“Penicillin is fine — I had it in Poland.” No regular medicines. Not diabetic as far as you know." },
        { topic:'Alcohol (if asked — be honest if asked kindly)', text:"“Cider. The strong one. Maybe three big bottles a day.” (3 litres.) First drink at 7am “for the shakes”. Two years ago you stopped suddenly in a hostel and had a fit." },
        { topic:'Eating (if asked)', text:"“The centre gives breakfast. Otherwise not much.”" },
        { topic:'Sleeping place and the dog (only if asked why you don’t want hospital)', text:"“I have Bruno — my dog. Nobody can take him. And if I leave my place under the bridge, somebody takes it, and my bag.”" },
        { topic:'Papers (only if asked whether anything else worries you, or about previous GP problems)', text:"“I lost my ID. The other surgery said no address, no doctor. I think maybe the Home Office will find me. I have the settled status — I think. I am not sure it is right.”" },
        { topic:'Mood', text:"“It’s hard. But I don’t want to kill myself.” Sleeps badly, cold. Would like a hostel place “if they take Bruno”." },
        { topic:'Bev (support worker), if asked', text:"“We can keep his bag and Bruno at the centre during the day. The outreach nurse comes in daily, 9 till 11. The pharmacy is next door. We open 8 till 4.”" },
        { topic:'Role-player direction', text:'Piotr is polite but guarded and wants to finish quickly. He refuses hospital at first. If the doctor explains the risk clearly and asks why he does not want to go, he talks about Bruno and his place. If the doctor works with him (dog care, daily nurse checks, tablets he can actually get), he agrees to tablets and checks — and agrees he would go to hospital if he becomes worse, if Bruno is looked after. If asked privately whether he is happy for Bev to stay, he says yes. The role-player can voice Bev briefly when asked.' }
      ],
      ice:{
        ideas:'“It’s only a scratch — it will heal.”',
        concerns:'HIDDEN AGENDA — he will not go to hospital because of his dog and fear of losing his sleeping place and belongings; he is also afraid that seeing a doctor will lead to the Home Office because his ID is lost and he is unsure of his settled status.',
        expectations:'To get it over with; maybe “some cream”.'
      },
      cues:[
        '“It will heal on its own.” — minimising and wanting to avoid escalation.',
        '“The other surgery said no address, no doctor.” — a past refusal and distrust.',
        '“Nobody can take Bruno.” — the real barrier to admission.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Confirms Piotr is happy for the support worker to be present, and uses the outreach nurse’s findings and the video (pen-marked margin, spread since morning) without repeating them' },
      { dom:'dg', text:'Assesses severity: systemic symptoms (rigors), sepsis red flags (confusion, breathlessness, low urine output, mottling), DVT and necrotising infection features; identifies cellulitis with mild systemic features but no sepsis criteria now' },
      { dom:'dg', text:'Takes an alcohol history (amount, morning drinking, previous withdrawal seizure) and screens nutrition, feet, mood and housing' },
      { dom:'cm', text:'Respects his capacity to decline admission while explaining risks; builds a safe alternative: oral flucloxacillin 1 g four times daily for 5–7 days (or clarithromycin if penicillin allergy), daily outreach-nurse review, the marked margin, and readily accessible supply' },
      { dom:'cm', text:'Manages alcohol safely: does not advise sudden stopping, explains withdrawal-seizure risk and that hospital teams can treat withdrawal, offers oral thiamine and referral to alcohol services' },
      { dom:'cm', text:'Clear escalation plan with the support worker: 999 or A&E for confusion, breathlessness, rapidly spreading redness, blistering or black skin, severe pain, collapse, or not improving at 48 hours' },
      { dom:'cm', text:'Addresses the social determinants: foot care and dry socks or boots, housing options referral or StreetLink with consent, practical help with prescription costs; reassures that GP care is free regardless of immigration status and signposts free advice on his settled status' },
      { dom:'ro', text:'Explores why he refuses hospital, finds the dog and belongings concern, and negotiates a plan he accepts without judgement about alcohol or homelessness' }
    ],
    worked:[
      { lbl:'Consent for the third party', txt:'“Piotr, are you happy for Bev to stay while we talk? You can ask her to step out at any time.”' },
      { lbl:'Explain the risk honestly', txt:'“This is an infection in the skin, and your temperature and pulse show it’s affecting the rest of you a bit. Usually it gets better with tablets, but sometimes it spreads into the blood, which is dangerous.”' },
      { lbl:'Ask the barrier', txt:'“You’d rather not go to hospital — can you tell me what makes that hard?”' },
      { lbl:'Work with the barrier', txt:'“If Bev can look after Bruno and your bag during the day, the nurse checks your leg every morning, and you get the tablets from the pharmacy next door, shall we try that — and agree now what would mean hospital?”' },
      { lbl:'Alcohol without judgement', txt:'“Please don’t stop drinking suddenly — after the fit last time, that could be dangerous. If you ever need to go into hospital, tell them how much you drink so they can give you medicine for the shakes.”' },
      { lbl:'Papers', txt:'“Seeing a GP is free for everyone, and we don’t contact the Home Office about our patients for treatment like this. Bev can help you get free advice about your settled status.”' }
    ],
    learning:'Inclusion health means designing the safest plan the person can actually follow. Lower-limb cellulitis with fever and tachycardia but no sepsis red flags (alert, normal BP, respiratory rate and oxygen saturation, NEWS2 1) can be treated with oral flucloxacillin (500 mg to 1 g four times daily for 5–7 days; clarithromycin, erythromycin in pregnancy, or doxycycline if penicillin allergic) when the person declines admission and has capacity — but only with a robust safety-net: a marked margin, daily review by the outreach nurse, rapid escalation if spreading, systemic deterioration, blistering, necrosis or severe pain, and admission considered if not improving at 48 hours. Ask why he refuses: practical barriers (a dog, belongings, losing a sleeping place) are often solvable. People experiencing homelessness can register with a GP without proof of address or identity; GP care is free regardless of immigration status. Alcohol: do not advise abrupt cessation in a dependent drinker with previous withdrawal seizures; offer thiamine and alcohol-service referral, and ensure any admitting team knows his intake. Address feet (immersion foot), nutrition, housing (local authority housing options, StreetLink) with consent, and mood.',
    knowledge:{
      guideline:'NICE NG141 Cellulitis and erysipelas: antimicrobial prescribing (2019) · NICE NG214 Integrated health and social care for people experiencing homelessness (2022) · NICE NG253 Suspected sepsis in people aged 16 and over (2025) · NICE CG100 Alcohol-use disorders: diagnosis and management of physical complications (2010, updated 2017) · NHS England Primary Medical Care Policy and Guidance Manual — patient registration (no proof of address or identity required; check current edition) · Homelessness Reduction Act 2017',
      summary:'Assess for sepsis, respect capacity, remove the real barrier (the dog), make the oral-antibiotic plan workable with daily nurse checks, and handle alcohol, feet, housing and immigration fears.',
      points:[
        { h:'Severity', t:'Fever and tachycardia with an alert patient, normal BP, RR and SpO2 = systemic features without sepsis criteria. Admit or refer for IV therapy if severely unwell, sepsis red flags, rapidly spreading infection, suspected necrotising fasciitis (pain out of proportion, bullae, necrosis, crepitus), orbital involvement, or failure of oral treatment.' },
        { h:'Antibiotics', t:'Flucloxacillin 500 mg to 1 g four times daily for 5–7 days (higher dose reasonable in a heavier adult with systemic features). Penicillin allergy: clarithromycin 500 mg twice daily, or doxycycline. Review at 48–72 hours; redness may spread a little in the first 24–48 hours.' },
        { h:'Making it workable', t:'Link doses to the day centre opening hours and the outreach nurse; the pharmacy next door; prescription charge support (exemption if on qualifying benefits, otherwise NHS Low Income Scheme via an HC1 form); pen-marked margin; photographs for comparison; somewhere to keep medicines safe.' },
        { h:'Alcohol', t:'Morning drinking “for the shakes” and a previous withdrawal seizure indicate dependence and high withdrawal risk. Do not advise sudden stopping. Offer oral thiamine (people who drink harmfully and are malnourished or at risk) and referral to alcohol services; any admission needs early assessment and treatment of withdrawal.' },
        { h:'Rights and access', t:'No proof of address or ID is needed to register; the practice address can be used. GP care is free regardless of immigration status. EU citizens with settled-status queries can get free help from advice services. Hospitals have a duty to refer to housing under the Homelessness Reduction Act; GPs can refer to the local authority with consent.' },
        { h:'Feet and wounds', t:'Wet, cold feet cause immersion (trench) foot and fungal infection; dry socks and boots, drying the feet, and nurse review. Clean and dress the graze daily.' },
        { h:'Marking edge', t:'Pass candidates treat the cellulitis; Clear pass candidates find the dog, use the support worker and day centre as resources, and leave a plan Piotr can actually follow.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Piotr, hello Bev, I’m Dr Ahmed. Piotr, are you happy for Bev to stay while we talk?', dom:'ro', why:'Confirms consent to the third party' },
      { who:'pt', text:'Yes, she can stay. It’s only my leg. It will heal on its own.' },
      { who:'dr', text:'I’ve read the nurse’s notes from this morning. Can you show me the leg on the camera, next to the pen line?', dom:'dg', why:'Uses recorded findings and video inspection' },
      { who:'pt', text:'(shows) It’s gone past the line a bit.' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'Have you had shivers or shaking, felt confused or breathless, or been passing less urine? Any blisters or black areas, or pain much worse than it looks?', dom:'dg', why:'Sepsis and necrotising infection screen' },
      { who:'pt', text:'Hot and cold last night. Shivering. Nothing else.' },
      { who:'dr', text:'Thanks. Can I ask about drinking — how much do you have most days, and do you need a drink first thing?', dom:'dg', why:'Non-judgemental alcohol history' },
      { who:'pt', text:'Three big bottles of cider. First one at seven, for the shakes. Two years ago I stopped and had a fit.' },
      { who:'dr', text:'That’s really important, thank you for telling me. How are your feet, and are you managing to eat?', dom:'dg', why:'Feet, nutrition' },
      { who:'pt', text:'Feet always wet. Boots have holes. I eat breakfast here.' },
      { phase:'Explanation', clock:'5–7 min', who:'dr', text:'This is cellulitis — an infection in the skin. Your temperature and pulse show it is affecting the rest of you a little. Hospital would be the safest place. What makes hospital hard for you?', dom:'ro', why:'Honest explanation, then explores the barrier' },
      { who:'pt', text:'Bruno, my dog. And my place under the bridge, my bag — somebody takes them.' },
      { who:'pt', text:'(Bev) We can keep Bruno and his bag here in the day. The nurse is in every morning.' },
      { phase:'Plan', clock:'7–11 min', who:'dr', text:'Then let’s try this. Flucloxacillin, two capsules four times a day for seven days, from the pharmacy next door. The nurse checks the leg every morning against the pen line. If you’re not clearly better in two days, we think again about hospital. Can you manage four times a day?', dom:'cm', why:'Oral antibiotic plan linked to resources; capacity respected' },
      { who:'pt', text:'If Bev reminds me. I can’t pay for the prescription.' },
      { who:'dr', text:'Bev, could you help with the HC1 form for free prescriptions? Piotr — please don’t stop drinking suddenly; that’s what caused the fit. I’m adding vitamin B1 tablets. If you go into hospital, tell them how much you drink so they can stop the shakes.', dom:'cm', why:'Practical cost help; safe alcohol advice and thiamine' },
      { who:'dr', text:'Call 999 or go to A&E if you get confused, breathless, very shaky and unwell, the redness races up the leg, blisters or black skin, or the pain becomes severe. Bev, will you call us if he isn’t better by Thursday morning?', dom:'cm', why:'Explicit escalation with a named person and time' },
      { who:'pt', text:'OK. One more thing — will the Home Office know? I lost my ID.' },
      { who:'dr', text:'No. Seeing a GP is free for everyone and we don’t contact the Home Office about treatment like this. There are free advisers who can check your settled status — Bev can help. Would you like us to refer you to the council’s housing team too, ideally somewhere that accepts dogs?', dom:'ro', why:'Answers hidden fear; housing referral with consent' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'So, tell me back the plan in your words.', dom:'ro', why:'Teach-back' },
      { who:'pt', text:'Tablets four times a day, the nurse looks every morning, no stopping the cider fast, hospital if it gets bad — and Bev keeps Bruno.' }
    ],
    kb:{
      social:[
        { h:'Barriers are practical', t:'A dog, belongings and a sleeping spot are common reasons people experiencing homelessness decline admission. Solving them is clinical work.' },
        { h:'Trauma and trust', t:'Previous refusal at a surgery erodes trust. Making access easy (practice address registration, flexible appointments, outreach) is part of the treatment.' }
      ],
      legal:[
        { h:'Capacity', t:'He has capacity to decline admission; document the information given, his understanding, and the agreed safety-net. Reassess capacity if he becomes confused or intoxicated.' },
        { h:'Housing duties', t:'The Homelessness Reduction Act 2017 places a duty to refer on specified public bodies (including emergency departments and hospitals); GPs may refer to the local authority with consent.' }
      ],
      professional:[
        { h:'Registration', t:'Refusing registration for lack of proof of address or ID is contrary to NHS England guidance; practices can use the practice address for people with no fixed abode.' }
      ],
      community:[
        { h:'Support network', t:'Day centre, outreach nurses, StreetLink, local alcohol services, dog-friendly hostels, and free immigration advice services for EU Settlement Scheme queries.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Rigors, confusion, breathlessness, reduced urine, mottled skin','Rapid spread, bullae, necrosis, crepitus, pain out of proportion','Calf swelling (DVT)','Withdrawal seizure history'],
        psychosocial:['Sleeping situation and belongings','The dog','Food, feet, money, ID and immigration worries','Mood'],
        ice:['Idea: it will heal on its own','Concern: losing Bruno and his place; Home Office','Expectation: “some cream”, quick consultation'],
        core:['Mechanism and time course','Allergies','Diabetes check (glucose 7.2)']
      },
      diagnosis:'Left lower-limb cellulitis with mild systemic features (no sepsis criteria), in a man with alcohol dependence, immersion-type foot changes and rough sleeping.',
      diagnosisLay:'“A skin infection that has started to make you feverish. Tablets usually work, but we need to watch it closely.”',
      management:{
        reflectIce:'“You want to stay with Bruno and keep your place. Let’s build the plan around that, and agree when hospital becomes the right choice.”',
        psychosocial:'Use the day centre: dog and bag minding, medicine reminders, outreach nurse, pharmacy next door, HC1 help, housing referral.',
        sharedPlan:['Flucloxacillin 1 g four times daily for 7 days','Daily nurse review against the pen line; dressing and foot care','Thiamine; do not stop alcohol suddenly; alcohol service referral','Housing options referral with consent; immigration advice signposting'],
        safetyNet:['999 or A&E for confusion, breathlessness, collapse, rapid spread, blisters or black skin, severe pain','Not clearly improving at 48 hours → reassess for admission or IV therapy','Bev to call the practice if concerns']
      }
    },
    links:[
      { ic:'💠', t:'Cellulitis', s:'Management protocol', href:'management/cellulitis.html' },
      { ic:'💠', t:'Alcohol — problem drinking', s:'Management protocol', href:'management/alcohol-problem-drinking.html' },
      { ic:'🧮', t:'NEWS2', s:'Calculator', href:'calculators.html#news2' }
    ],
    pitfalls:{
      intro:'This station is failed by candidates who either insist on admission and lose him, or prescribe antibiotics without a plan he can follow.',
      items:[
        { dom:'ro', fail:'Repeats “you need to go to hospital” without asking why he will not.', why:'He disengages; the infection is then untreated.', fix:'Ask the barrier, then solve it with the support worker.' },
        { dom:'cm', fail:'Prescribes flucloxacillin and says “come back if it gets worse”.', why:'He has no phone credit, address or reminders; a generic safety-net is unusable.', fix:'Named daily nurse review, a marked margin, a time-limited trigger for hospital, and a person (Bev) who will act.' },
        { dom:'cm', fail:'Tells him to stop drinking now.', why:'Abrupt cessation after a previous withdrawal seizure risks another seizure or delirium tremens.', fix:'Advise not to stop suddenly, add thiamine, offer alcohol services and ensure admitting teams know.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open and consent', d:'Check he is happy for Bev to stay. Use the nurse’s findings.' },
      { t:'1–5', h:'Severity and context', d:'Sepsis and necrotising features; alcohol and seizure history; feet; food.' },
      { t:'5–7', h:'Explain and explore', d:'Cellulitis with systemic features; hospital is safest — what makes it hard? The dog.' },
      { t:'7–11', h:'Workable plan', d:'Oral flucloxacillin, daily nurse checks, prescription cost, alcohol safety, escalation triggers, housing and Home Office worry.' },
      { t:'11–12', h:'Close', d:'Teach-back; Bev’s role; review at 48 hours.' }
    ],
    wordPics:{
      clearFail:'Lectures about alcohol and admission, or prescribes and closes; no sepsis screen; tells him to stop drinking; no consent check for the support worker.',
      fail:'Correct antibiotic but a plan that ignores where he sleeps, how he will get or pay for the medicine, and who will check the leg; the dog never discovered.',
      pass:'Assesses severity, respects capacity, finds the barrier, agrees oral antibiotics with daily nurse review and clear escalation, handles alcohol safely.',
      clearPass:'All of the Pass, plus uses the day centre as a partner, answers the Home Office fear and registration rights, refers for housing with consent, and Piotr can repeat the plan back.'
    },
    avoid:[
      { dont:'“You really need to stop drinking.”', instead:'“Please don’t stop suddenly — after the fit last time that’s risky. If you want help cutting down, I can arrange it.”', why:'Safe advice and an open door, not a demand.' },
      { dont:'“If it gets worse, ring the surgery.”', instead:'“The nurse checks it at 9 every morning, and Bev will ring us if it’s spreading.”', why:'Safety-nets must fit the person’s real resources.' },
      { dont:'“Do you have a proper address?”', instead:'“We’ve registered you with the practice address — that’s fine.”', why:'Registration rights should be clear and non-stigmatising.' }
    ]
  });

  /* ===== r4. Possible modern slavery — video ===== */
  C.push({
    id:'modern-slavery',
    title:"“My hands are very sore and cracked — my friend says I need a cream”",
    type:'video', duration:12,
    meta:{ age:22, sex:'F',
      setting:'Video — a young woman with sore hands; a friend is with her on the call and has booked the appointment.',
      system:'Safeguarding / Ethics — recognising possible modern slavery: seeing alone, interpreting, safety, consent and referral routes',
      checked:'October 2026',
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Health disadvantage & vulnerabilities','Professional & ethical','Ethnicity, culture & diversity'], type:'video', thirdParty:true }
    },
    ceg:['Health disadvantage & vulnerabilities','Professional & ethical dilemmas','Ethnicity, culture & diversity'],
    brief:'Ana Ionescu, 22, from Romania, registered four months ago at a shared house where eleven adults are registered; the mobile number on her record belongs to her “friend”, Daria, who booked the appointment and is on the video call answering for her and offering to interpret. Ana has irritant hand dermatitis from cleaning chemicals without gloves. Cues of labour exploitation: Daria controls the phone and passport, Ana works 12-hour days seven days a week for a hotel cleaning “agency” run by Daria’s partner, her wages go on “house and travel debt”, she is watched, and threats have been made about the police and her mother in Romania. The task: notice the cues; politely and safely see Ana alone (a standard “I always see patients on their own for part of the consultation”), check she is alone and can speak freely, and use a professional Romanian interpreter (not Daria); ask simple, open then direct questions about work, money, documents, freedom, threats and violence; assess immediate danger (999 if at immediate risk); explain options and seek consent — with her agreement, contact the police or a designated first responder organisation for a National Referral Mechanism referral (adults need consent; GPs are not first responders), and/or the Modern Slavery & Exploitation Helpline (08000 121 700) for advice and support; involve the practice safeguarding lead and consider an adult safeguarding concern to the local authority (modern slavery is a category of abuse under Care Act statutory guidance); consider others at the address (information can be shared without consent when there is a risk of serious harm to others); agree a safe way to contact her (not Daria’s phone) and a code word; document carefully; and treat the hands (emollient, soap substitute, short potent topical steroid, gloves). Respect her autonomy if she declines referral, keeping the door open.',
    stem:{
      name:'Ana Ionescu', age:'22-year-old woman',
      pmh:['Registered 4 months ago — address: a shared house (11 adults registered at this address)','No previous UK records'],
      meds:['None'],
      allergy:'Not recorded',
      recent:'Registration form completed in English by “D. Marin (friend)”. Mobile number on record: listed as “friend’s phone”. Local pharmacist (2 weeks ago, shared with consent): sold emollient for “sore, cracked hands”, advised GP appointment. Appointment booked by telephone by the same friend.',
      reason:'Video appointment: “rash on hands”.'
    },
    script:{
      opening:"(Daria, on screen next to Ana) “Hello doctor, I am Daria, her friend. Ana’s English is not so good — I will translate. Her hands are bad from cleaning. She just needs a strong cream, then we go, we are late for work.” (Ana, quietly) “Yes. My hands are very sore.”",
      facts:[
        { topic:'Hands', text:"(Ana) “Six weeks. Red, cracked, bleeding at the knuckles. It burns with the bleach.” Can show on camera: dry, fissured, red backs of hands and fingers. No gloves at work: “They don’t give.”" },
        { topic:'When Daria is asked to step out', text:'Daria resists: “She needs me to translate.” If the doctor is calm and firm (standard practice, a professional interpreter is available), Daria leaves the room. Ana checks the door before speaking. If the doctor offers a Romanian interpreter, accept with relief.' },
        { topic:'Work (once alone)', text:"“I clean hotel rooms. Every day — no day off. Twelve hours. The agency is Daria’s boyfriend.”" },
        { topic:'Money', text:"“They say I owe for the travel, for the house. So they keep the money. Maybe I get twenty pounds in a week.”" },
        { topic:'Documents and phone', text:"“Daria keeps my passport — ‘for safe’. My phone also, she keeps it.”" },
        { topic:'Freedom', text:"“I can go to the shop. But they always ask where, how long. I cannot go alone to other places.”" },
        { topic:'Threats and violence (only if asked directly)', text:"“They say if I go to police, police will put me in prison, because of my papers. They know where my mother lives in Romania.” Once pushed against a wall when you asked for your wages. Sexual violence: “No. Not that.”" },
        { topic:'Home', text:"“A house with many people — ten, eleven. Four in my room.” Others are also from Romania and work for the same agency." },
        { topic:'Health and mood', text:"Eats once a day; has lost weight. Sleeps badly. Cries at night. If asked about harming herself: “Sometimes I wish not to wake. But I will not do anything — my mother.” No current plan. LMP two weeks ago; not pregnant as far as she knows." },
        { topic:'What she wants', text:"“I want to work properly. Send money to my mother. I am afraid to make problems.”" },
        { topic:'Safe contact (if asked)', text:"“On Tuesday morning Daria goes to the bank. I can go to the pharmacy.” She has no phone of her own." },
        { topic:'Role-player direction', text:'Ana is frightened and polite, looks off-screen often while Daria is there, and lets Daria answer. If the role-player is alone, voice Daria’s lines as an off-screen voice until she leaves. If the doctor does not try to see her alone, Ana says nothing beyond her hands. Once alone with a calm, believing doctor, disclose step by step, checking the door. Agree to the helpline or police only if the doctor explains that she will not be arrested for being a victim and that she chooses what happens next; otherwise accept a safe follow-up plan and a code word but decline referral today.' }
      ],
      ice:{
        ideas:'“It is just from the chemicals.”',
        concerns:'HIDDEN AGENDA — she is being controlled and exploited (passport and phone held, wages taken for “debt”, no days off, threats against her and her mother) and believes she will be arrested if she tells anyone.',
        expectations:'A cream (Daria’s expectation); privately, to be safe without “making problems”.'
      },
      cues:[
        'Daria answers every question and offers to translate.',
        '“We are late for work” — on a Sunday, every day.',
        'Ana looks off-screen before answering and checks the door once alone.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Notices the cues in the record (11 adults at the address, friend’s phone number, friend completing forms) and in the consultation (friend answering, no professional interpreter)' },
      { dom:'dg', text:'Sees Ana alone safely: asks Daria to leave as standard practice, confirms Ana is alone and can speak freely, and uses a professional interpreter rather than the friend' },
      { dom:'dg', text:'Asks clear questions about work, hours, pay and debt, documents, phone, freedom of movement, threats and violence, housing, and mood including self-harm' },
      { dom:'cm', text:'Assesses immediate danger (999 if at immediate risk) and explains options: police, the Modern Slavery & Exploitation Helpline, and a National Referral Mechanism referral via a first responder organisation with her consent' },
      { dom:'cm', text:'Involves the practice safeguarding lead, considers an adult safeguarding concern to the local authority, and recognises the risk to others at the address as possible grounds to share information without consent' },
      { dom:'cm', text:'Agrees a safe contact route that does not use the friend’s phone, a code word, and a follow-up; documents carefully and securely' },
      { dom:'cm', text:'Treats the hand dermatitis: soap substitute and emollient, a short course of potent topical steroid, protective gloves' },
      { dom:'ro', text:'Believes her, reassures that victims are not arrested for being exploited, respects her choices, and keeps the door open without pressuring' }
    ],
    worked:[
      { lbl:'See alone', txt:'“Thank you, Daria. I see every patient on their own for part of the appointment, and I’ll use our telephone interpreter so nothing gets lost. Could you wait outside? I’ll call you back in.”' },
      { lbl:'Check safety to talk', txt:'“Ana, is anyone else in the room or able to hear you? If it’s not safe to talk, just say ‘my hands hurt’ and I’ll understand.”' },
      { lbl:'Ask directly', txt:'“Some people who come here to work have their passport or money kept by someone else. Does anyone keep your passport or your phone? Can you leave your job if you want to?”' },
      { lbl:'Remove the fear', txt:'“You have not done anything wrong. People who are made to work like this are treated as victims, not criminals. You decide what happens next.”' },
      { lbl:'Options', txt:'“There’s a free 24-hour helpline with Romanian interpreters, and with your agreement the police or a specialist charity can refer you for support — a safe place to stay, money, and help with your papers.”' },
      { lbl:'Safe follow-up', txt:'“I won’t call Daria’s phone. If you come to the pharmacy on Tuesday, they can call me. Let’s choose a word — if you say ‘blue gloves’, I’ll know you need help now.”' }
    ],
    learning:'Modern slavery often presents as an ordinary problem with a companion who controls the consultation. Cues: someone else answering or insisting on interpreting, booking and holding the phone, many adults at one address, inconsistent stories, withheld documents, debt bondage, long hours, restricted movement, fearfulness and untreated injuries or work-related conditions. Always try to see the person alone for part of the consultation, check they can speak freely, and use a professional interpreter, never a companion. Ask direct, simple questions. If there is immediate danger, call 999. Otherwise explain options and seek consent: adults need to consent to a National Referral Mechanism referral, which is made by designated first responder organisations (police, local authorities, and specified charities — GPs are not first responders); the Modern Slavery & Exploitation Helpline (08000 121 700) gives 24-hour advice to victims and professionals. Involve the practice safeguarding lead; modern slavery is a category of abuse under Care Act statutory guidance, so an adult safeguarding concern can be raised. Confidentiality can be breached without consent where there is a risk of serious harm to the patient or others (GMC). Agree a safe contact route and code word, document carefully, and keep the door open if she declines.',
    knowledge:{
      guideline:'Modern Slavery Act 2015 · Home Office Modern slavery: statutory guidance for England and Wales and National Referral Mechanism guidance (current versions) · Care Act 2014 and Care and support statutory guidance (abuse categories, including modern slavery) · GMC Confidentiality: good practice in handling patient information (2017) · NICE CKS Dermatitis — contact (irritant contact dermatitis management)',
      summary:'Spot the controlling companion, see her alone with a professional interpreter, ask directly, check for immediate danger, offer the helpline, police or NRM route with consent, involve safeguarding, and make a safe follow-up plan.',
      points:[
        { h:'Indicators', t:'Companion who speaks for the patient; documents or phone held by another; debt bondage; long hours, no days off; multiple occupants; restricted movement; signs of neglect or injury; fear of police or immigration; no registered address of their own.' },
        { h:'Seeing alone on video', t:'State it as standard practice; ask the companion to leave; ask the patient whether anyone can hear; agree a safe phrase; consider ending and re-booking if unsafe. Use telephone or video interpreting services — never the companion.' },
        { h:'Referral routes', t:'Immediate danger: 999. Advice and support: Modern Slavery & Exploitation Helpline 08000 121 700 (24 hours, interpreters). National Referral Mechanism: via a first responder organisation (police, local authority, specified charities) — adults must consent; without consent a first responder in a public authority makes an anonymous Duty to Notify report. Children never need consent.' },
        { h:'Safeguarding and confidentiality', t:'Discuss with the practice safeguarding lead; raise an adult safeguarding concern with the local authority. Sharing without consent is justified where there is risk of serious harm to her or others (others at the address) or to prevent serious crime — document the reasoning.' },
        { h:'Hands', t:'Irritant contact dermatitis: avoid irritants, protective gloves (cotton liners under rubber), soap substitute, frequent emollient, potent topical steroid (for example betamethasone valerate 0.1%) once or twice daily for 1–2 weeks.' },
        { h:'Autonomy', t:'An adult with capacity may decline referral. Respect that, give information she can keep safely (or memorise), agree how to make contact, and record carefully.' },
        { h:'Marking edge', t:'Candidates fail by accepting the friend as interpreter. The Clear pass sees her alone smoothly, removes the fear of arrest, and leaves a safe, specific way back.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello, I’m Dr Patel. Ana, thank you for showing me your hands. Daria, thank you for helping. For appointments where English isn’t the first language I use our professional interpreter, and I always see patients on their own for part of the time. Could you wait outside while I talk with Ana? I’ll call you back.', dom:'dg', why:'Separates patient and companion as routine practice' },
      { who:'pt', text:'(Daria) But she needs me. … OK. (leaves)' },
      { who:'dr', text:'Ana, with the interpreter now on the line — is anyone else in the room or able to hear? If it’s not safe, just say “my hands hurt”.', dom:'ro', why:'Checks it is safe to talk; safe phrase' },
      { who:'pt', text:'(checks the door) No one. It is OK.' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'Tell me about your work — what you do and how many hours.', dom:'dg', why:'Open question about work' },
      { who:'pt', text:'Hotel cleaning. Every day, twelve hours. The agency is Daria’s boyfriend.' },
      { who:'dr', text:'Who keeps your wages? And who has your passport and phone?', dom:'dg', why:'Direct questions on debt and documents' },
      { who:'pt', text:'They keep the money for the travel and the house. Daria has my passport and phone.' },
      { who:'dr', text:'Can you leave the job or the house if you want to? Has anyone hurt you or threatened you or your family?', dom:'dg', why:'Freedom, violence and threats' },
      { who:'pt', text:'They say the police will put me in prison. They know where my mother lives. Once he pushed me.' },
      { who:'dr', text:'How are you in yourself? Have you had thoughts of harming yourself?', dom:'dg', why:'Mood and risk' },
      { who:'pt', text:'Sometimes I wish not to wake. But I will not do anything — my mother.' },
      { phase:'Explanation', clock:'5–8 min', who:'dr', text:'Thank you for trusting me. What you describe — your passport and money taken, no days off, threats — is exploitation, and it’s a crime against you. You will not be arrested for this. You are a victim, and there is help.', dom:'ro', why:'Names it, removes fear, believes her' },
      { who:'pt', text:'I am afraid to make problems.' },
      { who:'dr', text:'You choose what happens. Are you in danger today — if you go back, will you be hurt? If ever you are, call 999.', dom:'cm', why:'Immediate risk assessment' },
      { who:'pt', text:'Today, no. If I do what they say.' },
      { phase:'Options and plan', clock:'8–11 min', who:'dr', text:'There’s a free 24-hour helpline with Romanian interpreters. With your agreement, the police or a specialist charity can refer you for support — somewhere safe to stay, money, and help with papers. Would you like me to call them with you now, or would you rather think?', dom:'cm', why:'Helpline and NRM with consent' },
      { who:'pt', text:'I need to think. Not today.' },
      { who:'dr', text:'That’s your choice. I’ll discuss this with our safeguarding lead, because others in the house may be at risk too. I won’t phone Daria’s number. On Tuesday at the pharmacy, they can call me. If you say “blue gloves”, I’ll know you need help now.', dom:'cm', why:'Safeguarding lead, risk to others, safe contact and code word' },
      { who:'dr', text:'For your hands: wash with this cream instead of soap, use the moisturiser often, and a steroid cream twice a day for two weeks. Ask the pharmacy for gloves — I’ll put them on the prescription note.', dom:'cm', why:'Treats the presenting complaint' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'Can you tell me the helpline plan and our word? I’ll write down only the cream for Daria to see.', dom:'ro', why:'Teach-back; protects her' },
      { who:'pt', text:'Pharmacy Tuesday. Blue gloves. Thank you, doctor.' }
    ],
    kb:{
      social:[
        { h:'Debt bondage', t:'Travel and housing “debts” that never reduce are a common control mechanism; threats to family abroad maintain compliance.' },
        { h:'Isolation', t:'No phone, no documents, a controlling companion and limited English isolate victims from help.' }
      ],
      legal:[
        { h:'Modern Slavery Act 2015', t:'Slavery, servitude, forced or compulsory labour and human trafficking are offences. Victims have a statutory defence for some offences committed as a direct consequence of exploitation.' },
        { h:'National Referral Mechanism', t:'The framework for identifying victims; adults must consent to referral by a first responder organisation; recognised victims receive support (accommodation, subsistence, legal advice).' }
      ],
      professional:[
        { h:'Interpreters', t:'Use professional interpreters; family or companions compromise accuracy, confidentiality and safety.' },
        { h:'Documentation', t:'Record the cues, her words, the companion’s behaviour, the advice given and the safe contact plan; avoid visible notes the controller could see (for example on the NHS App) — discuss record visibility with the safeguarding lead.' }
      ],
      community:[
        { h:'Organisations', t:'Modern Slavery & Exploitation Helpline (Unseen); police; local authority adult safeguarding; first responder charities; Romanian-speaking community support.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Immediate danger or violence','Documents and phone withheld','Threats to family','Self-harm thoughts','Others at the same address'],
        psychosocial:['Work hours, pay, debt','Housing and movement','Language and isolation','Goals: work and support her mother'],
        ice:['Idea: chemicals caused the rash','Concern: arrest, harm to her mother','Expectation: a cream, no trouble'],
        core:['Hand symptoms, irritants, gloves']
      },
      diagnosis:'Irritant hand dermatitis in a young woman with multiple indicators of labour exploitation (possible modern slavery).',
      diagnosisLay:'“The cream will help your hands. What worries me more is that someone is controlling your work, money and passport — that is not allowed, and it is not your fault.”',
      management:{
        reflectIce:'“You’re afraid of making problems and of the police. You won’t be arrested, and nothing happens without you agreeing unless someone is in serious danger.”',
        psychosocial:'Safe contact via the pharmacy, code word, no calls to the controller’s phone; helpline number she can memorise.',
        sharedPlan:['Helpline and NRM via police or first responder — offered, her choice','Safeguarding lead today; consider adult safeguarding concern; consider risk to others','Hand treatment and gloves','Follow-up on Tuesday via pharmacy'],
        safetyNet:['999 if in immediate danger','Code word “blue gloves” = needs help now','Seek help for worsening mood or self-harm thoughts']
      }
    },
    links:[
      { ic:'📋', t:'Safeguarding', s:'Case walkthrough', href:'../cases/safeguarding.html' },
      { ic:'🧭', t:'Consultation types', s:'Third parties and interpreters', href:'consultation-types.html' },
      { ic:'🧭', t:'Community orientation', s:'Local services and vulnerable groups', href:'community-orientation.html' }
    ],
    pitfalls:{
      intro:'This station is lost in the first minute if the friend becomes the interpreter.',
      items:[
        { dom:'dg', fail:'Accepts Daria as interpreter and treats the hands.', why:'The controller filters everything; the exploitation is never disclosed.', fix:'Routine separation and a professional interpreter, stated as standard practice.' },
        { dom:'cm', fail:'Calls the police immediately without her consent and without assessing immediate danger.', why:'For an adult with capacity, NRM referral needs consent; acting without her agreement can increase risk unless there is serious harm to her or others.', fix:'Assess danger, explain options, seek consent, involve the safeguarding lead, and consider others at risk.' },
        { dom:'cm', fail:'Plans follow-up by texting the number on the record.', why:'That phone belongs to the controller.', fix:'Agree a safe route (pharmacy, code word) and keep sensitive information off visible records.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Separate', d:'Routine request for the friend to step out; professional interpreter.' },
      { t:'1–5', h:'Safe questioning', d:'Work, pay, debt, documents, freedom, threats, violence, mood.' },
      { t:'5–8', h:'Name and reassure', d:'Exploitation, not her fault; not arrested; immediate danger check.' },
      { t:'8–11', h:'Options and plan', d:'Helpline, NRM with consent, safeguarding lead, others at risk, safe contact, hand treatment.' },
      { t:'11–12', h:'Close', d:'Teach-back of the safe plan; visible prescription only for the cream.' }
    ],
    wordPics:{
      clearFail:'Lets the friend interpret, prescribes a cream and closes; or confronts the friend on camera, putting Ana at risk.',
      fail:'Senses something is wrong but asks vague questions with the friend present, or gives the helpline number on a leaflet she cannot keep.',
      pass:'Sees her alone with a professional interpreter, identifies exploitation, checks immediate danger, offers the helpline and NRM with consent, involves the safeguarding lead, treats the hands.',
      clearPass:'All of the Pass, done calmly and safely: removes the fear of arrest, respects her choice, considers others at the address, and builds a safe contact route and code word that fit her life.'
    },
    avoid:[
      { dont:'“Your friend can translate, that’s fine.”', instead:'“I always use our professional interpreter.”', why:'Companions may be controllers.' },
      { dont:'“Why don’t you just leave?”', instead:'“Can you leave the job or house if you want to?”', why:'Blaming questions silence disclosure.' },
      { dont:'“I have to report this to the police now.”', instead:'“You choose what happens next — unless someone is in serious danger, then I may need to act and I’ll tell you.”', why:'Honest about limits while respecting autonomy.' }
    ]
  });

  /* ===== r5. Shared care request after private ADHD diagnosis — telephone ===== */
  C.push({
    id:'private-care-request',
    title:"“My ADHD clinic has sent you a letter — can you take over my prescription?”",
    type:'telephone', duration:12,
    meta:{ age:31, sex:'M',
      setting:'Telephone — a patient asking the GP to take over prescribing started by a private provider.',
      system:'Professional / Prescribing — the NHS–private interface: shared care requests, the right to decline, and safe alternatives',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Professional & ethical','Prescribing','Mental health & addiction'], type:'telephone', thirdParty:false }
    },
    ceg:['Professional & ethical dilemmas','Mental health & addiction'],
    brief:'Mr Daniel Okonkwo, 31, was diagnosed with ADHD five months ago by an online private provider (a consultant psychiatrist; DIVA-5 interview and collateral history) and titrated to lisdexamfetamine 50 mg. The provider has written asking the GP to take over prescribing under its shared care agreement, with an annual private review. The local ICB policy accepts adult ADHD shared care only from NHS-commissioned providers (including Right to Choose providers). The GP is entitled to decline shared care (it is a voluntary agreement; GMC guidance requires prescribers to be satisfied and competent, and to take responsibility for prescriptions they sign); NHS care must not subsidise private care, but a patient may move between private and NHS care at any time and is entitled to NHS care on the same basis as anyone else. Hidden agenda: he was made redundant six weeks ago and cannot afford private prescriptions (£120 a month); he has been taking an extra capsule some days and is sleeping four hours, drinking 3–4 beers a night to get to sleep, and his last pulse was 88 and weight down 4 kg. The task: explore the request and his situation; explain kindly and clearly why the practice cannot accept this shared care (local policy and governance — not a judgement on him or his diagnosis), without abandoning him; offer the NHS routes (Right to Choose referral to an NHS-commissioned adult ADHD provider, or the local NHS service), discuss bridging options honestly (the private provider remains responsible until transfer), and pick up the safety issues: extra dosing (a Schedule 2 controlled drug), sleep, alcohol, mood after job loss, cardiovascular monitoring, and with consent informing the private prescriber. Also screen suicide risk and signpost financial support.',
    stem:{
      name:'Daniel Okonkwo', age:'31-year-old man',
      pmh:['ADHD — diagnosed privately 5 months ago (online provider; consultant psychiatrist report on file)','Anxiety 2021 — CBT via NHS Talking Therapies, discharged'],
      meds:['Lisdexamfetamine 50 mg each morning — prescribed privately (not on NHS repeat)'],
      allergy:'No known drug allergies',
      recent:'Letter from private ADHD provider (3 days ago): “Stable on lisdexamfetamine 50 mg. We request that the GP takes over prescribing under our shared care agreement. Our follow-up: annual review (fee payable by patient).” Report: diagnosis by consultant psychiatrist using DIVA-5 with collateral history from his mother. Pre-treatment BP 124/78, pulse 72, weight 78 kg. At last private review (1 month ago): BP 132/84, pulse 88, weight 74 kg. Practice intranet — local ICB policy: adult ADHD shared care accepted only from NHS-commissioned providers (including Right to Choose providers).',
      reason:'Telephone call: “Wants to talk about my ADHD prescription.”'
    },
    script:{
      opening:"“Hi doctor, thanks for calling. My ADHD clinic sent you a letter — the shared care thing. I was hoping you could take over my prescription from this month? It’s honestly changed my life.”",
      facts:[
        { topic:'The diagnosis', text:"“I always struggled — school, losing jobs, never finishing things. My mum filled in a form for them. The psychiatrist did a long video assessment.”" },
        { topic:'Benefit', text:"“I can actually focus. I read a whole book. I’m not losing my keys every day.”" },
        { topic:'Why now (only if asked why the GP, why this month)', text:"“To be honest... I was made redundant six weeks ago. The prescription is £120 a month plus the appointments. I can’t keep paying.” (Embarrassed.)" },
        { topic:'How he takes it (if asked how he takes it / if he ever takes more)', text:"“Some days I take an extra one — the 20 milligram ones they gave me at the start — in the afternoon, when I’m doing job applications. I’ll run out early this month.”" },
        { topic:'Sleep and alcohol (if asked)', text:"“I’m sleeping about four hours. I have three or four beers at night to get off.” No other drugs. Doesn’t drive at the moment." },
        { topic:'Side effects (if asked)', text:"“Appetite’s gone. Heart races sometimes in the afternoon.” No chest pain, no fainting, no breathlessness. No family history of sudden death or heart problems." },
        { topic:'Mood (if asked)', text:"“Losing the job knocked me. I feel a bit useless.” If asked about suicidal thoughts: “No. I’ve got my girlfriend, and my little brother looks up to me.”" },
        { topic:'Expectation', text:"“I thought the GP just takes over — my friend’s GP did.”" },
        { topic:'Role-player direction', text:'Be friendly but anxious. If told “no” bluntly or made to feel the diagnosis is doubted (“online clinics”), become defensive and say “so I’m being punished for not waiting four years?”. If the doctor explains the reasons fairly and offers a real NHS route plus practical help, relax and admit the money problem and extra doses. Accept the plan if it includes a referral today and a clear answer about the next month’s supply.' }
      ],
      ice:{
        ideas:'“Shared care is automatic — the GP just takes over.”',
        concerns:'HIDDEN AGENDA — he has lost his job and cannot afford private prescriptions; he is taking extra doses, sleeping four hours and drinking to sleep; he fears losing the medicine that “changed his life”.',
        expectations:'An NHS prescription from this month.'
      },
      cues:[
        '“From this month” — urgency suggests a change in circumstances.',
        '“I can’t keep paying” (if explored) — financial pressure after redundancy.',
        '“I’ll run out early” — taking more than prescribed.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Clarifies the request and the background (diagnosis process, current dose, monitoring results already in the letter) without re-asking what is documented' },
      { dom:'dg', text:'Explores why now and uncovers the redundancy and financial pressure' },
      { dom:'dg', text:'Asks how he takes the medicine and identifies extra dosing, poor sleep, alcohol use to sleep, raised pulse and weight loss; screens mood and suicide risk after job loss' },
      { dom:'cm', text:'Explains clearly and kindly that the practice cannot enter this shared care agreement (voluntary agreement, local commissioning policy, prescriber responsibility), without doubting the diagnosis' },
      { dom:'cm', text:'Offers NHS routes: a Right to Choose referral to an NHS-commissioned adult ADHD provider, or the local NHS service, today; explains the private provider remains responsible for prescribing until any transfer' },
      { dom:'cm', text:'Addresses safety: not to take extra doses (Schedule 2 controlled drug; tolerance, cardiovascular and sleep effects), alcohol and sleep advice, and — with consent — informs the private prescriber of the extra dosing, pulse and weight' },
      { dom:'ro', text:'Acknowledges the benefit and the unfairness he feels about waiting lists; maintains rapport while declining; signposts financial support' },
      { dom:'ro', text:'Summarises, checks understanding and agrees follow-up (referral sent, call-back after he has spoken to the provider, mood review)' }
    ],
    worked:[
      { lbl:'Acknowledge the benefit', txt:'“It sounds like the treatment has made a real difference — reading a whole book, keeping on top of things. I don’t want you to lose that.”' },
      { lbl:'Ask why now', txt:'“Can I ask what’s made this month the time to move it over?”' },
      { lbl:'The no — with reasons', txt:'“Shared care is an agreement between a specialist service and a GP, and our local NHS only supports it with NHS-commissioned ADHD services. That’s about how the service is set up and who is responsible for monitoring — not about doubting your diagnosis.”' },
      { lbl:'The yes', txt:'“What I can do today is refer you through Right to Choose to an NHS-funded adult ADHD provider. They may accept your existing diagnosis after their own review, and then NHS shared care with us becomes possible.”' },
      { lbl:'The extra doses', txt:'“Taking extra capsules can push your heart rate and blood pressure up, wreck sleep and build tolerance. Please stick to the prescribed dose, and can I let your private psychiatrist know so they can review?”' },
      { lbl:'Bridging, honestly', txt:'“Until the NHS service takes over, your private clinic stays responsible for the prescription. Speak to them about your finances — some can reduce review costs — and call me after.”' }
    ],
    learning:'Shared care is a voluntary agreement in which a specialist initiates and stabilises treatment and the GP takes over prescribing with defined monitoring and specialist support; GPs can decline if they are not confident, if the arrangement does not meet local commissioning requirements, or if ongoing specialist support is not assured. Department of Health guidance requires NHS and private care to be kept as separate as possible and the NHS must not subsidise private care, but patients can move between private and NHS care and are entitled to NHS services on the same basis as others. For adult ADHD in England, an NHS route is a Right to Choose referral to an NHS-commissioned provider or the local service; the private provider remains responsible for prescribing until a transfer. Declining must not become abandoning: explain reasons neutrally, offer the NHS route the same day, and address safety. Lisdexamfetamine is a Schedule 2 controlled drug; extra self-dosing, poor sleep, alcohol use, rising pulse and weight loss need the prescriber informed (with consent) and monitoring. Job loss is a time to screen mood and suicide risk and signpost financial support.',
    knowledge:{
      guideline:'NICE NG87 Attention deficit hyperactivity disorder: diagnosis and management (2018, updated 2019) · NHS England Responsibility for prescribing between primary and secondary/tertiary care (2018) · Department of Health Guidance on NHS patients who wish to pay for additional private care (2009) · GMC Good practice in proposing, prescribing, providing and managing medicines and devices (2021) · NHS Choice Framework (DHSC; Right to Choose, England)',
      summary:'You can decline shared care with a non-commissioned private provider — but explain why, refer to an NHS route the same day, keep the private prescriber responsible until transfer, and act on the safety issues.',
      points:[
        { h:'What shared care is', t:'A documented agreement transferring prescribing and monitoring to primary care after specialist initiation and stabilisation, with named specialist support and a route back. It is voluntary for the GP.' },
        { h:'NHS–private interface', t:'NHS care must not subsidise private care; private and NHS episodes are kept separate. A patient can transfer to NHS care at any time and is entitled to NHS assessment and treatment on the same basis as others.' },
        { h:'NHS routes for adult ADHD (England)', t:'Right to Choose referral to an NHS-commissioned provider (who may review and accept a private diagnosis), or the local NHS adult ADHD service. Waiting times vary; providers set their own acceptance criteria.' },
        { h:'Monitoring stimulants', t:'Pulse and BP at each dose change and every 6 months; weight; sleep; mood; misuse or diversion risk. Refer to cardiology if sustained resting tachycardia, arrhythmia or BP above the 95th centile equivalent in adults on two occasions (NICE).' },
        { h:'Controlled drug rules', t:'Lisdexamfetamine is Schedule 2: prescriptions are limited to 30 days’ supply as good practice, and early requests or extra dosing need review. Driving: DVLA must be told if ADHD or its treatment affects safe driving.' },
        { h:'Professional duties', t:'Prescribers take responsibility for prescriptions they sign and must be satisfied the treatment is needed and monitoring is in place. Explain any decision not to prescribe and how the patient can get care elsewhere.' },
        { h:'Marking edge', t:'Pass candidates decline clearly and refer. Clear pass candidates do that without doubting the diagnosis, and find and act on the redundancy, extra doses, sleep, alcohol and mood.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello, is that Daniel Okonkwo? It’s Dr Wilson from the surgery. Can you confirm your date of birth, and are you somewhere you can talk?', dom:'ro', why:'Telephone identity and privacy check' },
      { who:'pt', text:'Yes, that’s me. My ADHD clinic sent a letter — can you take over my prescription from this month? It’s changed my life.' },
      { who:'dr', text:'I’ve read the letter and the report. It sounds like the treatment has made a big difference. What’s changed for you?', dom:'ro', why:'Acknowledges benefit; open question' },
      { who:'pt', text:'I can focus. I read a whole book. I’m not losing things.' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'That’s great to hear. Can I ask what’s made this month the time to move it to us?', dom:'dg', why:'Explores why now' },
      { who:'pt', text:'I was made redundant six weeks ago. It’s £120 a month. I can’t keep paying.' },
      { who:'dr', text:'I’m sorry — that’s a lot to deal with. How are you taking the lisdexamfetamine at the moment — always one in the morning, or does that vary?', dom:'dg', why:'Non-judgemental adherence question' },
      { who:'pt', text:'Some days an extra 20 in the afternoon for job applications. I’ll run out early.' },
      { who:'dr', text:'Thanks for being honest. How are you sleeping, and are you drinking to help with sleep? Any racing heart, chest pain or fainting?', dom:'dg', why:'Sleep, alcohol, cardiovascular symptoms' },
      { who:'pt', text:'Four hours. Three or four beers at night. Heart races sometimes. No pain or fainting.' },
      { who:'dr', text:'And how’s your mood since the redundancy — any thoughts of harming yourself?', dom:'dg', why:'Mood and suicide risk' },
      { who:'pt', text:'I feel useless sometimes. But no, I’ve got my girlfriend and my brother.' },
      { phase:'Explanation', clock:'5–8 min', who:'dr', text:'Let me be clear about the prescription. Shared care is an agreement between a specialist service and a GP. In our area, the NHS only supports it with NHS-commissioned ADHD services, so I can’t take over from your private clinic. That isn’t me doubting your diagnosis.', dom:'cm', why:'Clear, reasoned decline without doubting the patient' },
      { who:'pt', text:'So I’m being punished for not waiting four years?' },
      { who:'dr', text:'I understand why it feels like that. What I can do today is refer you through Right to Choose to an NHS-funded adult ADHD provider. They may accept your diagnosis after their own review, and then we can share your care on the NHS.', dom:'cm', why:'Offers the NHS route the same day' },
      { phase:'Safety and plan', clock:'8–11 min', who:'dr', text:'Until then, your private clinic stays responsible for the prescription — please tell them about the redundancy; some can help with costs. The extra doses worry me: they push your pulse up, which was already 88, affect sleep and build tolerance. Can I let your psychiatrist know?', dom:'cm', why:'Bridging responsibility; extra dosing; consent to inform prescriber' },
      { who:'pt', text:'Yes, OK. I didn’t think it mattered.' },
      { who:'dr', text:'Beer helps you fall asleep but wakes you up later — let’s try cutting that down and taking the capsule early. I’ll also send details of advice on benefits after redundancy.', dom:'cm', why:'Alcohol, sleep and financial support' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'So: referral today, you speak to your clinic, no extra doses, and I’ll call you in two weeks about sleep and mood. If you ever feel unsafe, call 111 or the Samaritans on 116 123. What will you do first?', dom:'ro', why:'Summary, safety-net and teach-back' },
      { who:'pt', text:'Ring the clinic about money, stick to one a day, and wait for the referral. Thanks — I thought you’d just say no.' }
    ],
    kb:{
      social:[
        { h:'Financial shock', t:'Private treatment costs become unaffordable after job loss; that pressure can drive unsafe self-management.' },
        { h:'Waiting lists', t:'Long NHS waits push people to private care; acknowledging this reduces conflict.' }
      ],
      legal:[
        { h:'Controlled drugs', t:'Lisdexamfetamine is a Schedule 2 controlled drug (Misuse of Drugs Regulations 2001); supply and record rules apply.' }
      ],
      professional:[
        { h:'Right to decline', t:'GPs may decline shared care they are not competent or commissioned to provide; they must explain their reasons and ensure the patient knows how to obtain care.' },
        { h:'Consistency and fairness', t:'Apply the local policy consistently; document the request, the decision and the alternatives offered.' }
      ],
      community:[
        { h:'Support', t:'Citizens Advice for benefits after redundancy; ADHD UK and AADD-UK; local Talking Therapies if mood worsens.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Taking more than prescribed; running out early','Chest pain, palpitations, syncope, raised pulse or BP','Sleep deprivation; alcohol to sleep','Low mood or suicidal thoughts after job loss'],
        psychosocial:['Redundancy and finances','Partner and family support','Driving'],
        ice:['Idea: GP takes over automatically','Concern: can’t afford it; losing the benefit','Expectation: NHS prescription this month'],
        core:['Diagnostic process and current dose','Monitoring results in the letter']
      },
      diagnosis:'A shared care request from a non-commissioned private provider, with emerging safety concerns (extra dosing, sleep, alcohol, tachycardia, weight loss) after redundancy.',
      diagnosisLay:'“I can’t take over this particular arrangement, but I can get you onto the NHS route today — and I’m worried about the extra doses and the sleep.”',
      management:{
        reflectIce:'“You expected me to take over because you can’t afford it any more. I can’t do that directly, but the referral is the way to NHS prescriptions.”',
        psychosocial:'Financial advice after redundancy; partner support; mood check.',
        sharedPlan:['Right to Choose referral today','Private provider remains prescriber until transfer — he contacts them about costs','No extra doses; inform private psychiatrist with consent','Alcohol and sleep advice','Call-back in 2 weeks'],
        safetyNet:['Chest pain, fainting or palpitations that do not settle → urgent care','Thoughts of self-harm → 111, Samaritans 116 123, or 999','Call earlier if supply runs out']
      }
    },
    links:[
      { ic:'📋', t:'ADHD', s:'Case walkthrough', href:'../cases/adhd.html' },
      { ic:'💠', t:'ADHD', s:'Management protocol', href:'management/adhd.html' },
      { ic:'💊', t:'Prescribing guide', s:'Controlled drugs and shared care', href:'prescribing-guide.html' }
    ],
    pitfalls:{
      intro:'This station is failed by an unexplained “no”, or by a “yes” to keep him happy.',
      items:[
        { dom:'cm', fail:'Agrees to prescribe “just this month” without shared care in place.', why:'Prescribing a controlled drug without specialist support, monitoring arrangements or a commissioned pathway breaks local policy and GMC prescribing principles.', fix:'Explain the decision and arrange the NHS route; keep the private prescriber responsible until transfer.' },
        { dom:'ro', fail:'Implies online private diagnoses are unreliable.', why:'He becomes defensive and the safety issues stay hidden.', fix:'Separate the policy from the person: “This isn’t about doubting your diagnosis.”' },
        { dom:'dg', fail:'Never asks how he takes the medicine.', why:'Extra dosing, sleep loss and alcohol use are missed.', fix:'Ask neutrally about dosing, sleep, alcohol and side effects.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Identity and privacy; hear the request.' },
      { t:'1–5', h:'Explore', d:'Why now (redundancy); how he takes it; sleep, alcohol, heart symptoms; mood.' },
      { t:'5–8', h:'Decision', d:'Explain the decline and the reasons; offer Right to Choose today.' },
      { t:'8–11', h:'Safety and bridging', d:'Private provider remains responsible; extra doses; inform prescriber; alcohol and sleep; financial help.' },
      { t:'11–12', h:'Close', d:'Summary, safety-net, follow-up call.' }
    ],
    wordPics:{
      clearFail:'Refuses abruptly and ends the call, or agrees to prescribe outside any shared care framework; no exploration of dosing or mood.',
      fail:'Declines correctly but offers no NHS route or explanation, or misses the extra dosing and alcohol.',
      pass:'Declines with clear reasons, refers via Right to Choose, clarifies who prescribes in the meantime, and addresses the extra doses and sleep.',
      clearPass:'All of the Pass, plus finds the redundancy early, keeps him on side without doubting the diagnosis, screens mood, informs the prescriber with consent, and arranges a follow-up call.'
    },
    avoid:[
      { dont:'“We don’t do private patients.”', instead:'“You’re our NHS patient — I can’t take over this private arrangement, but here is the NHS route.”', why:'He is entitled to NHS care; only the private arrangement is declined.' },
      { dont:'“Online clinics aren’t proper.”', instead:'“The NHS service will do its own review — that’s standard.”', why:'Undermines trust without helping.' },
      { dont:'“Just this once I’ll do a script.”', instead:'“Your clinic stays responsible until the NHS team takes over.”', why:'Ad hoc controlled-drug prescribing outside shared care is unsafe.' }
    ]
  });

  /* ===== r6. Adult eating disorder with medical risk — video ===== */
  C.push({
    id:'adult-eating-disorder',
    title:"“My periods have stopped and I’m cold all the time — can I just go on the pill to bring them back?”",
    type:'video', duration:12,
    meta:{ age:23, sex:'F',
      setting:'Video — follow-up of nurse observations and blood tests for missed periods and dizziness.',
      system:'Mental health / Urgent — restrictive eating with purging in a young adult: MEED risk assessment and urgent referral',
      checked:'October 2026',
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Mental health & addiction','Urgent & unscheduled care','Gender, reproductive & sexual health','Investigations & results'], type:'video', thirdParty:false }
    },
    ceg:['Mental health & addiction','Urgent & unscheduled care','Investigations & results'],
    brief:'Zara Malik, 23, software tester, asked for the combined pill to “bring back” periods absent for five months. Nurse observations yesterday: weight 45.2 kg (53.5 kg four months ago), BMI 16.4, heart rate 46, postural drop from 92/60 to 78/52 with dizziness, temperature 35.6 °C, struggled with the sit-up-squat-stand test; potassium 3.1, glucose 3.9, WCC 3.4, ALT 62; ECG sinus bradycardia, QTc 448 ms; pregnancy test negative. The underlying problem is an eating disorder (restriction under 600 kcal a day, running 10 km daily, and — hidden — vomiting after evening meals three to four times a week and taking about eight senna tablets at night). The task: sensitively explore eating, weight, exercise and compensatory behaviours (SCOFF-style questions), name the concern compassionately, and recognise the medical risk using MEED: rapid weight loss, bradycardia, symptomatic postural hypotension, hypothermia, hypokalaemia from purging and a failed SUSS test together warrant same-day medical assessment, plus an urgent referral to the adult eating disorder service (FREED early-intervention if available, as she is 18–25 and the illness is under three years). Do not use BMI alone to decide on referral (NICE). Explain why the pill is not the answer (it masks amenorrhoea and does not protect bone). Screen mood, self-harm and suicide; advise not to drive while dizzy; respect confidentiality (adult) while encouraging her to involve family; address her fear of being “forced to eat” and of her parents finding out about the vomiting.',
    stem:{
      name:'Zara Malik', age:'23-year-old woman',
      pmh:['Anxiety 2022 — referred to NHS Talking Therapies, did not attend'],
      meds:['None'],
      allergy:'No known drug allergies',
      recent:'Practice nurse, yesterday (booked for “missed periods and dizziness”): weight 45.2 kg, height 1.66 m, BMI 16.4 (weight 53.5 kg recorded 4 months ago). HR 46 regular. BP lying 92/60, standing 78/52 after 2 minutes — “felt dizzy”. Temp 35.6 °C (tympanic). Sit-up-squat-stand test: unable to stand from squat without using hands. Urine hCG negative. Bloods: Na 136, K 3.1 (3.5–5.3), phosphate 0.82 (0.8–1.5), Mg 0.71 (0.7–1.0), glucose 3.9 mmol/L, urea 2.1, creatinine 58; ALT 62 U/L (<40); WCC 3.4 (4.0–11.0), Hb 118 g/L. ECG (nurse): sinus bradycardia 46/min, QTc 448 ms, no other abnormality.',
      reason:'Video: “Results — and wants to go on the pill.”'
    },
    script:{
      opening:"“Hi. So I had the bloods and stuff yesterday. I’m fine, honestly — it’s just stress at work. I just want to go on the pill to get my periods back.”",
      facts:[
        { topic:'Periods', text:"“They stopped about five months ago. I’m definitely not pregnant.”" },
        { topic:'Weight (if asked gently)', text:"“I’ve lost a bit. I was trying to get healthier. Maybe a stone.” If asked how you feel about your body: “My stomach just feels huge.”" },
        { topic:'Eating (if asked what a typical day looks like)', text:"“Black coffee in the morning. Salad at lunch. Mum makes dinner, so I eat a bit with the family.” If asked about calories: “I try to keep under six hundred.”" },
        { topic:'Exercise', text:"“I run ten k every day before work. If I miss it I feel awful.”" },
        { topic:'Vomiting and laxatives (only if asked directly and kindly)', text:"Pause. “Sometimes after dinner I... make myself sick. Three or four times a week.” Laxatives: “Senna. About eight at night.” No diet pills. Not diabetic." },
        { topic:'Physical symptoms', text:"“Dizzy when I stand. I nearly fainted on the bus last week. Always cold. My hair’s coming out in the brush.” Palpitations sometimes at night. No chest pain. No blackouts." },
        { topic:'Driving (if asked)', text:"“I drive to the office twice a week.”" },
        { topic:'Mood and risk (if asked)', text:"“I feel anxious all the time. Low.” Used to scratch her arms at university, not now. Suicidal thoughts: “No. I don’t want to die. I just want to feel in control.”" },
        { topic:'Triggers (if asked what started it)', text:"“A break-up at Christmas. Then my auntie said at a wedding I’d ‘filled out’.”" },
        { topic:'Home', text:"Lives with parents and a younger brother. “Mum keeps saying I look ill. They don’t know about the being sick.” Alcohol: none. Drugs: none." },
        { topic:'Role-player direction', text:'Start brisk and minimising. If asked about weight in a judgemental way, become defensive. If the doctor is curious and kind, gradually disclose restriction, then exercise, then (last, and only if asked directly) vomiting and laxatives. When the doctor explains the heart and potassium risk, become frightened: “Are you going to section me? Will they force-feed me?” Accept same-day assessment if your fears are answered and you feel some control; ask that your parents are not told about the vomiting.' }
      ],
      ice:{
        ideas:'“It’s just stress — the pill will bring my periods back.”',
        concerns:'HIDDEN AGENDA — she is vomiting and taking laxatives in secret and is terrified of being “sectioned” or “force-fed”, of losing control, and of her parents finding out.',
        expectations:'A prescription for the pill and to be told she is fine.'
      },
      cues:[
        '“I’m fine, honestly.” — minimisation.',
        '“My stomach just feels huge.” — body-image disturbance.',
        '“I just want to feel in control.” — the function of the behaviour.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Uses the nurse’s observations, SUSS result, bloods and ECG already available and interprets them as a pattern of medical risk' },
      { dom:'dg', text:'Explores eating, weight change, body image, exercise and — directly but kindly — vomiting, laxatives, diet pills and diuretics' },
      { dom:'dg', text:'Screens physical symptoms (syncope, palpitations, chest pain), mood, self-harm and suicide risk, and driving' },
      { dom:'dg', text:'Shares the working diagnosis of an eating disorder (likely anorexia nervosa with purging) compassionately' },
      { dom:'cm', text:'Recognises MEED risk features (bradycardia, symptomatic postural hypotension, hypothermia, hypokalaemia with ongoing purging, rapid weight loss, failed SUSS) and arranges same-day medical assessment' },
      { dom:'cm', text:'Makes an urgent referral to the adult eating disorder service (FREED if available), not based on BMI alone; explains why the pill is not appropriate' },
      { dom:'cm', text:'Gives safety advice: do not drive, avoid running, do not take laxatives in a binge, and what to do if faint, palpitations or chest pain (999)' },
      { dom:'ro', text:'Responds to fears about sectioning and force-feeding honestly, preserves her sense of control, and discusses involving family while respecting confidentiality' }
    ],
    worked:[
      { lbl:'Gentle exploration', txt:'“Lots of people who lose weight quickly have been changing how they eat. Can you walk me through yesterday — what you ate and drank?”' },
      { lbl:'Ask the hard question', txt:'“Some people make themselves sick or use laxatives to control their weight. Has that ever happened for you?”' },
      { lbl:'Name it with care', txt:'“From what you’ve told me and the tests, I’m worried you have an eating disorder. That isn’t a failing — it’s an illness that can be treated, and earlier help works best.”' },
      { lbl:'Why today', txt:'“Your heart is beating very slowly, your blood pressure drops when you stand, and your potassium is low from being sick. Together those can upset the heart’s rhythm. I want you seen at the hospital today to check your heart and bloods.”' },
      { lbl:'The fears', txt:'“Being seen today isn’t being sectioned. The team checks your heart and blood salts and treats them. You’ll be involved in every decision about food.”' },
      { lbl:'The pill', txt:'“The pill would make you bleed every month, but it wouldn’t fix the reason your periods stopped or protect your bones — it would just hide a warning sign.”' }
    ],
    learning:'Amenorrhoea, dizziness and cold intolerance in a young woman with rapid weight loss should prompt sensitive questions about eating, exercise, body image and compensatory behaviours (vomiting, laxatives, diuretics, diet pills, insulin omission). The GP’s key task is risk assessment using MEED (Medical Emergencies in Eating Disorders, 2022): BMI and rate of weight loss, heart rate, lying and standing BP, temperature, SUSS test, bloods (potassium, phosphate, magnesium, glucose, LFT, FBC) and ECG (QTc). Several amber features plus active purging with hypokalaemia, symptomatic postural hypotension and bradycardia justify same-day medical assessment; any red feature means admission. Refer urgently to the eating disorder service and do not use a single measure such as BMI to decide whether to refer (NICE). FREED offers rapid early intervention for 16–25 year olds within three years of onset. The combined pill is not a treatment for amenorrhoea in anorexia: it masks the sign and does not protect bone density. Screen for self-harm and suicide (eating disorders carry high mortality), advise against driving while dizzy, and address fears about compulsion and confidentiality; encourage her to involve family.',
    knowledge:{
      guideline:'NICE NG69 Eating disorders: recognition and treatment (2017, updated 2020) · Royal College of Psychiatrists CR233 Medical emergencies in eating disorders (MEED): guidance on recognition and management (2022) · DVLA Assessing fitness to drive: a guide for medical professionals (current)',
      summary:'Ask kindly about purging, interpret the observations and bloods as MEED risk, arrange same-day medical assessment plus urgent eating disorder referral, and decline the pill with a clear explanation.',
      points:[
        { h:'Screening questions', t:'SCOFF-style: making yourself sick, losing control over eating, losing more than a stone in three months, believing yourself fat when others say you are thin, food dominating life. Ask about laxatives, diuretics, diet pills, exercise and (in diabetes) insulin omission.' },
        { h:'MEED assessment', t:'BMI and rate of loss; HR (bradycardia); lying and standing BP and pulse; temperature; SUSS test (muscle strength); bloods: U&E, potassium, phosphate, magnesium, glucose, LFT, FBC; ECG including QTc. Red features need admission; combinations of amber features, purging with electrolyte disturbance, or symptomatic hypotension need same-day medical assessment.' },
        { h:'Purging risks', t:'Hypokalaemia, hypochloraemic alkalosis, arrhythmia, dental erosion, oesophageal tears; abrupt laxative cessation may cause rebound oedema and constipation — specialist advice on reduction.' },
        { h:'Referral', t:'Urgent referral to the adult eating disorder service; FREED early-intervention pathway (ages 16–25, onset under 3 years) where available. NICE: do not use single measures such as BMI or duration of illness to decide whether to offer treatment.' },
        { h:'Hormones and bone', t:'Do not offer oral oestrogen to treat low bone density in adults with anorexia; consider bone density scanning after 2 years of underweight in adults (earlier if fractures or bone pain).' },
        { h:'Capacity and compulsion', t:'Most people are treated voluntarily. Capacity regarding food can be impaired in severe illness; the Mental Health Act is used rarely, for life-threatening risk. Be honest but reassuring.' },
        { h:'Marking edge', t:'Pass: names the eating disorder and refers. Clear pass: recognises that today’s numbers mean today’s assessment, asks about purging, answers the fear of compulsion, and declines the pill without losing her.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hi Zara, I’m Dr Osei. Thanks for coming on video. I’ve seen the nurse’s results. Before we go through them, how have you been?', dom:'ro', why:'Open question first' },
      { who:'pt', text:'Fine, honestly — just stress at work. I just want the pill to get my periods back.' },
      { who:'dr', text:'I hear you want your periods back — let’s work out why they stopped. The nurse found your weight has come down quite quickly. How has eating been?', dom:'dg', why:'Links her agenda to the clinical question' },
      { who:'pt', text:'I’m trying to be healthier. Coffee, salad, a bit of dinner.' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'How do you feel about your weight and your body at the moment?', dom:'dg', why:'Body image' },
      { who:'pt', text:'My stomach just feels huge.' },
      { who:'dr', text:'That sounds distressing. Are you exercising, and some people make themselves sick or use laxatives to control weight — has that happened for you?', dom:'dg', why:'Direct, kind question about compensatory behaviours' },
      { who:'pt', text:'(pause) I run ten k every day. And sometimes I make myself sick after dinner. And I take senna — about eight.' },
      { who:'dr', text:'Thank you for telling me — that took courage. Have you had dizziness, fainting, palpitations or chest pain? And how is your mood — any thoughts of harming yourself?', dom:'dg', why:'Physical risk and mental state' },
      { who:'pt', text:'Dizzy, nearly fainted on the bus. Palpitations at night. I’m low. I don’t want to die — I just want to feel in control.' },
      { phase:'Explanation', clock:'5–8 min', who:'dr', text:'From what you’ve told me and the tests, I’m worried you have an eating disorder. It’s an illness, not a failing, and it can get better. Right now your body is under real strain: your heart is slow, your blood pressure drops when you stand, your temperature is low, and your potassium is low from the vomiting. Together that can upset the heart rhythm.', dom:'dg', why:'Names the diagnosis and the medical risk' },
      { who:'pt', text:'Are you going to section me? Will they force-feed me?' },
      { who:'dr', text:'No, that isn’t what’s happening. I want you seen at the hospital today so they can check your heart and blood salts and correct them. You’ll be part of every decision. Most people get better without anything compulsory.', dom:'ro', why:'Answers the fear honestly' },
      { phase:'Plan', clock:'8–11 min', who:'dr', text:'I’ll call the medical team now to arrange that. I’m also referring you urgently to the eating disorder service — there’s a fast-track for people your age called FREED. Until you’re seen: no running, don’t drive, and if you faint, get chest pain or a racing heart, call 999.', dom:'cm', why:'Same-day assessment, urgent referral, safety advice' },
      { who:'pt', text:'And the pill?' },
      { who:'dr', text:'The pill would give you a bleed, but it wouldn’t fix why your periods stopped or protect your bones — it would hide a warning sign. Your periods come back as your body recovers.', dom:'cm', why:'Declines the pill with reasons' },
      { who:'pt', text:'Please don’t tell my parents about the being sick.' },
      { who:'dr', text:'You’re an adult, so I won’t share without your permission unless your life is in danger. Having someone with you today would help, though. Who could come?', dom:'ro', why:'Confidentiality while encouraging support' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'Tell me what happens next, in your words.', dom:'ro', why:'Teach-back' },
      { who:'pt', text:'Hospital today for my heart and blood, no running or driving, 999 if I faint, the eating disorder team will call. Maybe my mum can drive me.' }
    ],
    kb:{
      social:[
        { h:'Family meals and secrecy', t:'Eating with family while vomiting afterwards is common; secrecy and shame delay help.' },
        { h:'Triggers', t:'A relationship ending and comments about weight can precipitate restriction; control is a common function of the behaviour.' }
      ],
      legal:[
        { h:'Confidentiality', t:'At 23 she controls disclosure; breach only if there is a serious risk to life and she lacks capacity or refuses help in an emergency.' },
        { h:'Mental Health Act', t:'Rarely used in anorexia, for life-threatening risk; feeding can be treatment for the mental disorder under the Act.' }
      ],
      professional:[
        { h:'Avoid BMI gatekeeping', t:'Referral and treatment should not depend on a BMI threshold.' }
      ],
      community:[
        { h:'Support', t:'Beat (eating disorders charity) helpline; adult eating disorder service; FREED; NHS Talking Therapies for comorbid anxiety.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Fainting, palpitations, chest pain','Vomiting and laxative misuse','Suicidal thoughts or self-harm','Rapid weight loss; driving while dizzy'],
        psychosocial:['Family meals and secrecy','Work','Triggers and control'],
        ice:['Idea: stress; pill restores periods','Concern: sectioning, force-feeding, parents finding out','Expectation: pill and reassurance'],
        core:['24-hour diet recall','Exercise','Menstrual history; pregnancy excluded']
      },
      diagnosis:'Probable anorexia nervosa (restrictive with purging) with high medical risk (MEED): bradycardia, symptomatic postural hypotension, hypothermia, hypokalaemia, rapid weight loss, failed SUSS.',
      diagnosisLay:'“An eating disorder — an illness that has taken control of eating — and right now it is putting a strain on your heart.”',
      management:{
        reflectIce:'“You came for the pill and to be told you’re fine; I can’t do either honestly, but I can get you help today that keeps you in control.”',
        psychosocial:'Encourage a supportive person to accompany her; respect confidentiality about vomiting.',
        sharedPlan:['Same-day medical assessment (call acute medical team)','Urgent eating disorder service referral; FREED','No running, no driving, no laxative binge','GP follow-up after hospital assessment'],
        safetyNet:['999 for fainting, chest pain or palpitations','Urgent help if thoughts of self-harm','Contact the practice if unable to attend']
      }
    },
    links:[
      { ic:'📋', t:'Eating disorders', s:'Case walkthrough', href:'../cases/eating-disorders.html' },
      { ic:'💠', t:'Eating disorders', s:'Management protocol', href:'management/eating-disorders.html' },
      { ic:'🧮', t:'SCOFF', s:'Screening questions', href:'calculators.html#scoff' }
    ],
    pitfalls:{
      intro:'This station is failed by prescribing the pill or by a routine referral when the numbers say “today”.',
      items:[
        { dom:'cm', fail:'Refers routinely to the eating disorder service and reviews in a month.', why:'Bradycardia, symptomatic postural hypotension and hypokalaemia with ongoing purging are medical risks needing same-day assessment.', fix:'Interpret the observations as a MEED pattern and act today.' },
        { dom:'dg', fail:'Never asks about vomiting or laxatives.', why:'The cause of the hypokalaemia and the biggest arrhythmia risk is missed.', fix:'Ask directly and kindly, normalising the question.' },
        { dom:'ro', fail:'Leads with BMI and “you need to eat more”.', why:'Shame increases secrecy and disengagement.', fix:'Curiosity, validation and a clear explanation of physical risk.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Hear the pill request; acknowledge it.' },
      { t:'1–5', h:'Explore', d:'Diet, body image, exercise, vomiting, laxatives, symptoms, mood.' },
      { t:'5–8', h:'Name and explain risk', d:'Eating disorder; heart and potassium; answer sectioning fear.' },
      { t:'8–11', h:'Act', d:'Same-day medical assessment; urgent ED and FREED referral; safety advice; decline the pill.' },
      { t:'11–12', h:'Close', d:'Confidentiality, support person, teach-back.' }
    ],
    wordPics:{
      clearFail:'Prescribes the pill or reassures that results are “nearly normal”; no question about purging; no recognition of medical risk.',
      fail:'Recognises an eating disorder and refers, but misses the urgency of the observations or never asks about vomiting and laxatives.',
      pass:'Explores eating and purging, names the eating disorder, arranges same-day medical assessment and urgent referral, gives safety advice and declines the pill.',
      clearPass:'All of the Pass, plus a compassionate, non-judgemental style that gets the disclosure, honest reassurance about compulsion, FREED, involvement of family by consent, and clear teach-back.'
    },
    avoid:[
      { dont:'“Your BMI isn’t low enough for the eating disorder service.”', instead:'“The service sees people based on the whole picture, not one number.”', why:'BMI thresholds delay care and are not NICE-consistent.' },
      { dont:'“You just need to eat more.”', instead:'“Eating disorders are illnesses — the team will help you with food in a way you can manage.”', why:'Simplistic advice increases shame.' },
      { dont:'“Let’s start the pill and see.”', instead:'“The pill would hide the warning sign without fixing it.”', why:'It masks amenorrhoea and gives false reassurance about bone health.' }
    ]
  });

  /* ===== r7. Sex worker — contraception, STI concerns and a violent incident — video ===== */
  C.push({
    id:'sex-worker-health',
    title:"“I need emergency contraception and an STI test — something happened at work”",
    type:'video', duration:12,
    meta:{ age:27, sex:'F',
      setting:'Video — online consultation request for emergency contraception and sexual health testing.',
      system:'Sexual health / Safeguarding — non-consensual condom removal and assault of a sex worker: emergency contraception, PEP, SARC, safety and confidentiality',
      checked:'October 2026',
      blueprint:{ difficulty:3, lifeStage:'adult', groups:['Gender, reproductive & sexual health','Health disadvantage & vulnerabilities','Urgent & unscheduled care','Professional & ethical'], type:'video', thirdParty:false }
    },
    ceg:['Gender, reproductive & sexual health','Health disadvantage & vulnerabilities','Urgent & unscheduled care'],
    brief:'Mia Kowalska, 27, a student nurse who works independently as an escort, submitted an online request for emergency contraception and STI testing. About 40 hours ago a client removed the condom during sex without her consent and, when she objected, slapped her and grabbed her arm. She is on day 13 of a regular 28-day cycle and not using hormonal contraception. The task: a non-judgemental, trauma-informed consultation that establishes the timeline and nature of the incident, injuries (including head injury and non-fatal strangulation, which she has not had), and safety; recognises that non-consensual condom removal can constitute rape; offers emergency contraception (copper IUD most effective, up to 5 days; oral ulipristal is more effective than levonorgestrel around ovulation — give oral EC today in case the IUD is delayed, and advise waiting 5 days before starting hormonal contraception after ulipristal); arranges same-day sexual health or SARC assessment for HIV PEP risk assessment (must start within 72 hours, so about 32 hours remain), hepatitis B vaccination and STI testing (now and repeat at the window periods); offers SARC forensic examination (possible within 7 days for vaginal assault; self-referral without police involvement is possible); explains police reporting is her choice and mentions anonymous reporting schemes for sex workers (National Ugly Mums); screens for coercion or third-party control, mood and safety; and addresses the hidden agenda — fear that her GP record or the GP will tell her university and end her nursing career — with clear confidentiality boundaries. Longer-term contraception and PrEP discussion can follow at the clinic.',
    stem:{
      name:'Mia Kowalska', age:'27-year-old woman',
      pmh:['Chlamydia treated 2023 (sexual health clinic letter)','Depression 2024 — stopped the combined pill because of mood'],
      meds:['None currently'],
      allergy:'No known drug allergies',
      recent:'Online consultation form (yesterday 22:40): “I need emergency contraception and an STI test. Something happened at work. Please can it be video not phone.” Weight 62 kg recorded 2024. No other recent contacts.',
      reason:'Video appointment — contraception and sexual health.'
    },
    script:{
      opening:"“Hi. Thanks for doing it on video. I need the morning-after pill — I know it’s late — and an STI test. Something happened at work and I just want it sorted.”",
      facts:[
        { topic:'Timing', text:"“Saturday, about eleven at night.” (Now Monday afternoon — about 40 hours.) Period started 13 days ago; cycle regular, 28 days." },
        { topic:'Work (if asked what you mean by work)', text:"Pause, then: “I’m an escort. Independent — I work from a flat I rent. I’m also a student nurse.” Watch the doctor’s reaction." },
        { topic:'What happened (if asked gently)', text:"“He took the condom off halfway. I didn’t agree to that. When I told him to stop he slapped me and grabbed my arm. Then he left.” Ejaculated inside. Vaginal only." },
        { topic:'Injuries (if asked)', text:"Bruise on left upper arm (can show on camera), sore cheek. No loss of consciousness, no headache now, no vomiting, no vision problems. If asked about the neck: “No, nothing round my neck.” No genital bleeding; a bit sore." },
        { topic:'The client', text:"“A regular-ish. I don’t know his HIV status. I don’t think he’s from a high-risk group but I don’t know.” You have his phone number." },
        { topic:'Contraception and health', text:"No contraception other than condoms. Stopped the pill in 2024 because of mood. No regular medicines. No liver problems, no epilepsy medicines. Hepatitis B: “I had one injection at uni — not sure about the rest.”" },
        { topic:'Safety and control (if asked)', text:"No one takes your money or controls you. You work alone. “I’m a bit scared to go back to the flat.”" },
        { topic:'Mood (if asked)', text:"“Shaky. Not sleeping. I keep replaying it.” No thoughts of harming yourself. Drinking a bit more wine since." },
        { topic:'Police (if raised)', text:"“I don’t want the police. They’ll judge me.”" },
        { topic:'Your fear (only if asked what worries you most, or about confidentiality)', text:"“Will this go on my record? If my university finds out I do sex work, I’ll be kicked off the course.”" },
        { topic:'Role-player direction', text:'Be matter-of-fact at first, testing whether the doctor judges you. If the doctor reacts awkwardly or moralises, keep answers short and do not mention the slap. If the doctor is calm and non-judgemental, describe what happened. When the doctor explains confidentiality clearly, relax visibly. Agree to go to the sexual health clinic today if the doctor explains the time limit for PEP and the IUD. You may want to think about the SARC.' }
      ],
      ice:{
        ideas:'“I just need the morning-after pill and a test.”',
        concerns:'HIDDEN AGENDA — that her GP record or the GP will tell her university about her sex work and end her nursing career; also fear of HIV and of being judged by police.',
        expectations:'A pill today and STI tests; no fuss.'
      },
      cues:[
        '“Something happened at work.” — invites a careful question.',
        '“I just want it sorted.” — minimising an assault.',
        '“Will this go on my record?” — the confidentiality fear.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Establishes the timeline (about 40 hours), cycle day 13, contraceptive history and interacting medicines' },
      { dom:'dg', text:'Asks non-judgementally about the incident and recognises non-consensual condom removal and assault; screens injuries including head injury and strangulation' },
      { dom:'dg', text:'Assesses safety, third-party control or coercion, mood, alcohol and support' },
      { dom:'cm', text:'Offers emergency contraception correctly: copper IUD most effective (up to 5 days), and oral ulipristal today in case the IUD is delayed; advises waiting 5 days before starting hormonal contraception after ulipristal' },
      { dom:'cm', text:'Arranges same-day sexual health clinic or SARC assessment for HIV PEP (within 72 hours), hepatitis B vaccination and STI tests, with repeat testing at window periods' },
      { dom:'cm', text:'Explains SARC options (forensic examination within days, self-referral without police), police reporting as her choice, and anonymous reporting schemes for sex workers' },
      { dom:'cm', text:'Explains confidentiality accurately: no disclosure to her university; limits only for serious risk of harm; discusses record wording' },
      { dom:'ro', text:'Maintains a calm, non-judgemental, trauma-informed tone, validates that what happened was not her fault, and agrees a shared plan she can carry out today' }
    ],
    worked:[
      { lbl:'Neutral curiosity', txt:'“Thanks for telling me. Can you tell me as much as you’re comfortable with about what happened?”' },
      { lbl:'Name it', txt:'“Removing a condom without your agreement isn’t a contraception accident — it can be a serious sexual offence, and hitting you is assault. None of this is your fault.”' },
      { lbl:'Time-critical', txt:'“There are two clocks running. HIV prevention medicine has to start within 72 hours, so we have about a day and a half. And the coil, which is the most effective emergency contraception, can go in up to five days.”' },
      { lbl:'Cover today', txt:'“I’ll prescribe ulipristal today so you’re covered if the coil can’t be fitted straight away. If you take it, wait five days before starting any pill.”' },
      { lbl:'Confidentiality', txt:'“What you tell me stays between you and the health team. I won’t tell your university — that’s not my role and I wouldn’t. I’d only share anything without your consent if someone was at serious risk of harm.”' },
      { lbl:'Choices', txt:'“Reporting to the police is your choice, now or later. The sexual assault centre can see you without the police, and there’s an anonymous scheme where sex workers can warn each other about dangerous clients.”' }
    ],
    learning:'Sex workers face high rates of violence and barriers to care; a non-judgemental, trauma-informed approach is essential. Non-consensual condom removal can constitute rape in English law (consent conditional on condom use). Clarify timing and cycle: emergency contraception — the copper IUD is the most effective method and can be fitted up to 5 days after unprotected intercourse (or up to 5 days after the earliest likely ovulation); oral ulipristal 30 mg (up to 120 hours) is more effective than levonorgestrel around ovulation; give oral EC when an IUD cannot be fitted immediately; wait 5 days after ulipristal before starting hormonal contraception. HIV PEP must start within 72 hours (ideally within 24): refer the same day to a sexual health clinic or SARC for risk assessment, hepatitis B vaccination (accelerated course), STI testing (repeat at window periods: chlamydia and gonorrhoea at 2 weeks, HIV at 45 days, syphilis at 12 weeks). Offer SARC forensic examination and support (self-referral, no police required), explain police reporting is her choice, and mention anonymous reporting schemes (National Ugly Mums). Screen injuries (head, strangulation), safety, coercion, mood and alcohol. Confidentiality: GMC duties apply; no disclosure to her university; information is shared without consent only where there is a serious risk of harm to others or required by law.',
    knowledge:{
      guideline:'CoSRH (formerly FSRH) Clinical guideline: Emergency contraception (2017, with later amendments) · BHIVA/BASHH UK guideline for the use of HIV post-exposure prophylaxis (2021) · GMC Confidentiality: good practice in handling patient information (2017) · NHS England Sexual Assault Referral Centres service specification (current) · BASHH UK national guideline on the management of adult and adolescent complainants of sexual assault (current)',
      summary:'Non-judgemental, time-critical care: EC (IUD best; ulipristal today), same-day PEP and STI assessment, SARC offered, police her choice, injuries and safety screened, and confidentiality made clear.',
      points:[
        { h:'Emergency contraception', t:'Cu-IUD: most effective; up to 5 days after UPSI or within 5 days of the earliest estimated ovulation. Ulipristal 30 mg: up to 120 hours, more effective than levonorgestrel close to ovulation; reduced by enzyme inducers; wait 5 days before starting hormonal contraception. Levonorgestrel 1.5 mg (3 mg if BMI over 26 or weight over 70 kg, or with enzyme inducers): up to 72 hours.' },
        { h:'HIV PEP', t:'Start as soon as possible and within 72 hours. Decisions depend on the source’s likely status and the type of exposure; for receptive vaginal sex with a source of unknown status from a low-prevalence group, PEP is often not recommended, but assault and injury change the assessment — this is for the clinic to decide quickly.' },
        { h:'STIs and hepatitis B', t:'Baseline tests now; repeat chlamydia and gonorrhoea NAAT at 2 weeks, HIV at 45 days (4th-generation test), syphilis at 12 weeks. Hepatitis B accelerated vaccination if not immune.' },
        { h:'SARC and police', t:'SARCs offer forensic examination (vaginal assault: evidence may be recoverable up to 7 days), emergency contraception, PEP, Independent Sexual Violence Advisers and counselling; self-referral without police is possible and samples can be stored.' },
        { h:'Safety', t:'Ask about strangulation (non-fatal strangulation needs urgent assessment), head injury, ongoing threats, coercion or exploitation; anonymous reporting (National Ugly Mums); support organisations for sex workers.' },
        { h:'Confidentiality and records', t:'Record clinically relevant facts accurately but proportionately; patients can discuss record wording and sensitive-information settings. Universities have no right to GP records without consent.' },
        { h:'Marking edge', t:'Pass: correct EC and PEP referral. Clear pass: done without judgement, with the assault named, injuries and safety screened, and the university fear answered so she engages.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hi Mia, I’m Dr Clarke. Thanks for your message. Are you somewhere private where you can talk?', dom:'ro', why:'Privacy check' },
      { who:'pt', text:'Yes, I’m at home. I need the morning-after pill — I know it’s late — and an STI test. Something happened at work.' },
      { who:'dr', text:'Of course. Can you tell me as much as you’re comfortable with about what happened, and when?', dom:'ro', why:'Open, non-judgemental invitation' },
      { who:'pt', text:'Saturday night, about eleven. I’m an escort. He took the condom off halfway. When I told him to stop, he slapped me and grabbed my arm.' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'I’m really sorry that happened. It wasn’t your fault. Are you hurt? Any head injury, blacking out, or did he put pressure on your neck?', dom:'dg', why:'Validation; injury and strangulation screen' },
      { who:'pt', text:'Bruise on my arm, sore cheek. Nothing on my neck. No blacking out.' },
      { who:'dr', text:'When did your last period start, and are you using any contraception or taking any medicines?', dom:'dg', why:'EC history' },
      { who:'pt', text:'Thirteen days ago, regular. Just condoms. No medicines.' },
      { who:'dr', text:'Do you know anything about his HIV status? And are you safe — does anyone else control your work or money?', dom:'dg', why:'PEP risk and coercion screen' },
      { who:'pt', text:'No idea about HIV. I work for myself. I’m scared to go back to the flat, though.' },
      { phase:'Explanation', clock:'5–8 min', who:'dr', text:'Taking off a condom without your agreement can be rape, and hitting you is assault. There are two clocks running: HIV prevention medicine has to start within 72 hours — so about a day and a half left — and the coil, the best emergency contraception, can go in up to five days.', dom:'cm', why:'Names the offence; explains time-critical options' },
      { who:'pt', text:'Will this go on my record? I’m a student nurse. If uni finds out, I’m finished.' },
      { who:'dr', text:'What you tell me stays within your healthcare. I won’t tell your university, and they can’t see your records without your consent. I’d only share anything without permission if someone was at serious risk. We can talk about how it’s worded in your notes.', dom:'cm', why:'Accurate confidentiality explanation' },
      { phase:'Plan', clock:'8–11 min', who:'dr', text:'I’ll prescribe ulipristal now so you’re covered, and ring the sexual health clinic to see you today for the coil, the HIV medicine assessment, hepatitis B vaccine and tests. If you take ulipristal, wait five days before starting any pill.', dom:'cm', why:'EC and same-day referral' },
      { who:'pt', text:'Do I have to go to the police?' },
      { who:'dr', text:'That’s your choice, now or later. The sexual assault centre can examine you and keep evidence without involving the police, and they have advisers who can support you. There’s also National Ugly Mums, where you can report him anonymously to warn others.', dom:'cm', why:'SARC, police choice, anonymous reporting' },
      { who:'dr', text:'How are you sleeping and coping? Any thoughts of harming yourself?', dom:'dg', why:'Mood and risk' },
      { who:'pt', text:'Shaky, not sleeping. No thoughts like that. A bit more wine.' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'Let’s recap: ulipristal from the pharmacy now, the clinic this afternoon, think about the SARC, and I’ll call you on Friday. If you get headaches, vomiting or feel unsafe, call 999. What will you do first?', dom:'ro', why:'Summary, safety-net, teach-back' },
      { who:'pt', text:'Pharmacy, then the clinic today. I’ll think about the SARC. Thank you for not being weird about it.' }
    ],
    kb:{
      social:[
        { h:'Stigma and violence', t:'Sex workers experience high levels of violence and often avoid services for fear of judgement or police involvement.' },
        { h:'Dual identity', t:'Student or professional status raises fear of exposure; reassurance about confidentiality increases engagement.' }
      ],
      legal:[
        { h:'Consent', t:'Consent conditional on condom use: deliberate removal without agreement can be rape (Sexual Offences Act 2003; case law).' },
        { h:'Sex work law', t:'Selling sex is not illegal in England; some related activities are. Avoid offering legal opinions beyond safety advice; signpost specialist support.' }
      ],
      professional:[
        { h:'Confidentiality', t:'GMC: disclose without consent only where required by law or justified in the public interest (serious harm). Universities have no access to records without consent.' }
      ],
      community:[
        { h:'Services', t:'Sexual health clinic; SARC and ISVA; National Ugly Mums; specialist sex worker support projects; Rape Crisis.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Head injury, strangulation','Ongoing danger or coercion','Time since exposure (PEP within 72 h)','Self-harm risk'],
        psychosocial:['Work context and safety','University fear','Support network','Alcohol'],
        ice:['Idea: just needs EC and tests','Concern: record and university; HIV; police judgement','Expectation: quick prescription'],
        core:['LMP and cycle length','Contraception and medicines','Nature of exposure']
      },
      diagnosis:'Unprotected intercourse through non-consensual condom removal with physical assault ~40 hours ago, mid-cycle — needs EC, PEP assessment, STI and hepatitis B care, and assault support.',
      diagnosisLay:'“What happened was an assault. Medically, we need to prevent pregnancy, consider HIV prevention, and test for infections — and some of that has a time limit.”',
      management:{
        reflectIce:'“You wanted this sorted quietly — we can do that, and your university won’t be told.”',
        psychosocial:'Safety for return to work; anonymous reporting; mood follow-up.',
        sharedPlan:['Ulipristal 30 mg today','Same-day sexual health clinic: Cu-IUD, PEP assessment, hepatitis B, STI tests','SARC offered (self-referral)','GP follow-up call in 4 days'],
        safetyNet:['999 if in danger or new head injury symptoms','Repeat tests at window periods','Contact the practice if low mood worsens']
      }
    },
    links:[
      { ic:'🗺️', t:'Emergency contraception', s:'Pathway', href:'algorithms/emergency-contraception.html' },
      { ic:'💠', t:'Contraception', s:'Management protocol', href:'management/contraception.html' },
      { ic:'💠', t:'HIV', s:'Management protocol (incl. PEP)', href:'management/hiv.html' }
    ],
    pitfalls:{
      intro:'This station is failed by judgement, by missing the time limits, or by treating an assault as a contraception request.',
      items:[
        { dom:'ro', fail:'Moralising or visibly awkward reaction to her work.', why:'She stops disclosing and may disengage from care.', fix:'Neutral, curious and calm; focus on her health and safety.' },
        { dom:'cm', fail:'Gives levonorgestrel and a routine STI test in two weeks.', why:'Misses the more effective options (IUD, ulipristal) and the 72-hour PEP window.', fix:'IUD first-line, ulipristal today, same-day clinic for PEP assessment.' },
        { dom:'dg', fail:'Never asks about injuries or safety.', why:'Head injury, strangulation and ongoing risk need assessment.', fix:'Ask directly about head, neck and safety.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Privacy; invite her account.' },
      { t:'1–5', h:'History', d:'Timeline, cycle, contraception, the incident, injuries, HIV risk, coercion.' },
      { t:'5–8', h:'Name and explain', d:'Assault; two clocks (PEP 72 h, IUD 5 days); confidentiality.' },
      { t:'8–11', h:'Plan', d:'Ulipristal today; same-day clinic; SARC; police her choice; anonymous reporting; mood.' },
      { t:'11–12', h:'Close', d:'Recap, safety-net, follow-up.' }
    ],
    wordPics:{
      clearFail:'Judgemental; prescribes levonorgestrel and books routine tests; does not ask about the incident, injuries or PEP.',
      fail:'Correct EC but no PEP urgency or SARC offer; confidentiality fear not addressed so she disengages.',
      pass:'Non-judgemental; correct EC with IUD offered; same-day clinic for PEP and tests; SARC and police options; injury and safety screen.',
      clearPass:'All of the Pass, plus names the assault clearly, answers the university fear precisely, mentions anonymous reporting, screens mood and alcohol, and agrees a specific follow-up.'
    },
    avoid:[
      { dont:'“Well, that’s a risk of the job, isn’t it?”', instead:'“Nobody deserves that. It wasn’t your fault.”', why:'Victim-blaming is harmful and unprofessional.' },
      { dont:'“You must report this to the police.”', instead:'“Reporting is your choice — the SARC can help either way.”', why:'Autonomy for adults with capacity.' },
      { dont:'“I’ll need to put everything on your record.”', instead:'“I’ll record what’s needed for your care — let’s agree the wording.”', why:'Accurate but proportionate records support trust.' }
    ]
  });

  /* ===== r8. ECG result — new atrial fibrillation — telephone ===== */
  C.push({
    id:'results-ecg-af',
    title:"“The nurse said my heart tracing wasn’t quite right — what does that mean?”",
    type:'telephone', duration:12,
    meta:{ age:72, sex:'M',
      setting:'Telephone — results call after an ECG taken by the practice nurse at a routine review this morning.',
      system:'Cardiovascular / Results — new atrial fibrillation on ECG: explanation, CHA2DS2-VASc and ORBIT, anticoagulation, rate control, medicines review',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'older adult', groups:['Investigations & results','Long-term conditions & cancer','Older adults','Prescribing'], type:'telephone', thirdParty:false }
    },
    ceg:['Investigations & results','Long-term conditions & cancer','Older adults'],
    brief:'Mr Tariq Mahmood, 72, retired postman with hypertension and type 2 diabetes, had an irregular pulse at his diabetes review; the nurse’s 12-lead ECG shows atrial fibrillation with a ventricular rate of 112, no ischaemic changes. He is asymptomatic and haemodynamically stable. The task (telephone): confirm identity and privacy; screen for symptoms that would need same-day or emergency care (chest pain, breathlessness, syncope, stroke symptoms, heart failure); establish onset is unknown; explain AF in plain language; calculate and explain CHA2DS2-VASc = 3 (age 65–74, hypertension, diabetes) and ORBIT = 1 (antiplatelet use; Hb, eGFR normal, no bleeding history) — so anticoagulation is recommended; offer a DOAC (for example apixaban 5 mg twice daily; no dose-reduction criteria met; creatinine clearance about 74 mL/min) and STOP aspirin 75 mg (no vascular indication) and over-the-counter ibuprofen; start rate control (bisoprolol 2.5 mg daily, titrate; check no asthma or bradycardia), and arrange an echocardiogram; bloods are recent (TFT, U&E, FBC, LFT normal); review alcohol and sleep apnoea; DVLA — Group 1 drivers need not notify unless AF causes distracting or disabling symptoms. Hidden agenda: his brother had a brain bleed on warfarin, and he is flying to Lahore in three weeks for his granddaughter’s wedding and fears he will be stopped from going. Reassure: flying is generally fine with stable AF on treatment, declare it for travel insurance, carry medicines in hand luggage, and review before travel.',
    stem:{
      name:'Tariq Mahmood', age:'72-year-old man',
      pmh:['Hypertension (2014)','Type 2 diabetes (2019)','Osteoarthritis of both knees'],
      meds:['Amlodipine 10 mg once daily','Ramipril 5 mg once daily','Metformin 500 mg twice daily','Aspirin 75 mg once daily (started 2016 — no vascular event recorded)','Ibuprofen 400 mg — bought over the counter, “most days for the knees” (nurse note)'],
      allergy:'No known drug allergies',
      recent:'Practice nurse, diabetes review this morning: pulse irregular, about 110/min. BP 146/88 (repeat 142/86). SpO2 97%. “No symptoms.” 12-lead ECG (nurse-acquired, 25 mm/s, 10 mm/mV): ventricular rate 112/min; rhythm irregularly irregular; no discernible P waves, fine fibrillatory baseline; QRS axis +20°; PR not measurable; QRS 94 ms; QT/QTc 340/432 ms; no ST elevation or depression; T waves normal; no LVH by voltage criteria; no pathological Q waves. No previous ECG on file. Bloods 2 weeks ago: Hb 138 g/L, platelets 210, creatinine 92 µmol/L, eGFR 68, K 4.6, ALT 22, TSH 1.8, HbA1c 52 mmol/mol. Weight 82 kg.',
      reason:'Telephone call to discuss his ECG result.'
    },
    script:{
      data:{ kind:'12-lead ECG report (practice nurse, this morning)', values:[
        ['Ventricular rate','112/min','60–100/min'],
        ['Rhythm','Irregularly irregular','Regular sinus rhythm'],
        ['P waves','None discernible; fine fibrillatory baseline','Present before each QRS'],
        ['QRS axis','+20°','−30° to +90°'],
        ['PR interval','Not measurable','120–200 ms'],
        ['QRS duration','94 ms','<120 ms'],
        ['QT / QTc','340 / 432 ms','QTc <450 ms (men)'],
        ['ST segments','No elevation or depression','Isoelectric'],
        ['T waves','Normal','Upright in most leads'],
        ['Voltage / Q waves','No LVH; no pathological Q waves','—'] ] },
      opening:"“Hello doctor. The nurse said my heart tracing wasn’t quite right and you would ring. Is my heart going to stop? I feel absolutely fine.”",
      facts:[
        { topic:'Symptoms (if asked)', text:"“Nothing. Maybe a bit more puffed going up the hill to the mosque, but I’m 72.” No chest pain, no fainting, no palpitations he has noticed, no ankle swelling, no breathlessness lying flat." },
        { topic:'Stroke symptoms (if asked)', text:"No weakness, numbness, speech problems, facial droop or vision loss — ever." },
        { topic:'Onset', text:"“I don’t know when it started. Last time anyone felt my pulse was at the review a year ago — they didn’t say anything.”" },
        { topic:'Bleeding history (if asked)', text:"No bleeding problems, no black stools, no ulcers. Bruises easily “because of the aspirin”." },
        { topic:'Medicines (if asked)', text:"“Aspirin for the heart since 2016 — the doctor then said it was a good idea.” Ibuprofen “most days for the knees”." },
        { topic:'Alcohol and lifestyle', text:"Does not drink alcohol. Ex-smoker (stopped 20 years ago). Snores — wife complains — but not sleepy in the day. Walks daily." },
        { topic:'Driving', text:"Drives a car locally. No HGV or taxi licence." },
        { topic:'Your brother (only if blood thinners are mentioned)', text:"“My brother was on warfarin. He had a bleed in the brain. He was never the same.” Anxious." },
        { topic:'The trip (only if asked whether anything is coming up, or what worries you)', text:"“My granddaughter’s wedding in Lahore — I fly in three weeks. Will they stop me flying?”" },
        { topic:'Role-player direction', text:'Polite, a little anxious, and keen to be told he is fine. If the doctor uses jargon (“anticoagulation”, “CHA2DS2-VASc”), say “I don’t understand.” Mention your brother as soon as blood thinners come up. Only mention the trip if asked about plans or worries, or near the end (“one more thing…”). Accept treatment if the risks are explained with numbers you can understand and the trip is addressed.' }
      ],
      ice:{
        ideas:'“Something wrong with the electrics — is my heart going to stop?”',
        concerns:'HIDDEN AGENDA — his brother had a brain haemorrhage on warfarin, so he fears blood thinners; and he is flying to Lahore for his granddaughter’s wedding in three weeks and fears he will be told he cannot go.',
        expectations:'To be told he is fine; if not, to still be able to travel.'
      },
      cues:[
        '“Is my heart going to stop?” — needs a clear, calm explanation.',
        '“My brother had a bleed.” — the anticoagulation fear.',
        '“One more thing…” — the trip.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Confirms identity and privacy, interprets the ECG (AF, rate 112, no ischaemia) and uses the recent bloods and observations without re-requesting them' },
      { dom:'dg', text:'Screens for features needing same-day or emergency care: chest pain, breathlessness, syncope, heart failure, stroke or TIA symptoms; establishes onset unknown' },
      { dom:'dg', text:'Calculates CHA2DS2-VASc (3) and ORBIT (1) and identifies aspirin and over-the-counter ibuprofen as bleeding-risk factors' },
      { dom:'cm', text:'Recommends anticoagulation with a DOAC at the correct dose (apixaban 5 mg twice daily; creatinine clearance calculated), stopping aspirin and ibuprofen, with alternative knee analgesia' },
      { dom:'cm', text:'Starts rate control (for example bisoprolol 2.5 mg daily, titrated) after checking contraindications; arranges echocardiogram and review; considers sleep apnoea' },
      { dom:'cm', text:'Addresses driving (Group 1: no need to notify unless symptoms affect driving), flying and travel insurance, and safety-nets with 999 for stroke symptoms, chest pain, collapse or severe breathlessness' },
      { dom:'ro', text:'Explains AF and stroke and bleeding risk in plain language with numbers; addresses the brother’s brain bleed (DOACs carry less intracranial bleeding risk than warfarin; ORBIT low)' },
      { dom:'ro', text:'Elicits and addresses the trip, shares the decision, checks understanding and agrees follow-up' }
    ],
    worked:[
      { lbl:'What AF is', txt:'“The top chambers of your heart are quivering instead of beating in a steady rhythm. It isn’t going to make your heart stop. The main risk is that blood can pool and form a clot, which can travel to the brain and cause a stroke.”' },
      { lbl:'The numbers', txt:'“With your age, blood pressure and diabetes, the risk of stroke is roughly 3 in every 100 people like you each year without treatment. A blood thinner cuts that by about two-thirds.”' },
      { lbl:'The brother', txt:'“I’m so sorry about your brother. The newer blood thinners cause fewer bleeds in the brain than warfarin, and your bleeding-risk score is low — especially once we stop the aspirin and ibuprofen.”' },
      { lbl:'Medicines tidy-up', txt:'“The aspirin isn’t needed — it doesn’t protect against AF strokes and adds bleeding. The ibuprofen I’d like you to stop too; paracetamol and a gel for the knees are safer with a blood thinner.”' },
      { lbl:'The trip', txt:'“You can still go to the wedding. Plenty of people fly with AF. Tell your travel insurer, keep your tablets in your hand luggage, and let’s speak before you fly to check your heart rate.”' },
      { lbl:'Safety-net', txt:'“If you get chest pain, collapse, severe breathlessness, or any sign of stroke — face drooping, arm weakness, speech problems — call 999 straight away.”' }
    ],
    learning:'New AF found incidentally needs a structured telephone consultation: confirm the ECG findings (irregularly irregular, no P waves, rate 112, no ischaemia), screen for features requiring emergency or same-day care (haemodynamic instability, chest pain, heart failure, syncope, stroke symptoms, onset under 48 hours if rhythm control is being considered), and make a shared anticoagulation decision. NICE uses CHA2DS2-VASc for stroke risk (anticoagulate if 2 or more; consider in men with 1) and ORBIT for bleeding risk, addressing modifiable bleeding risks (here aspirin without a vascular indication and over-the-counter NSAIDs). Offer a DOAC (apixaban, dabigatran, edoxaban or rivaroxaban) dosed by creatinine clearance, age and weight. Do not withhold anticoagulation on the basis of falls risk or age alone, and do not use aspirin for stroke prevention in AF. Rate control (beta-blocker or rate-limiting calcium-channel blocker) is first-line for most; arrange echocardiography; check TFT, U&E, FBC, LFT; consider triggers such as alcohol and sleep apnoea. DVLA: Group 1 drivers need not notify AF unless it causes distracting or disabling symptoms. Explain risk with natural frequencies and address personal fears, such as a relative’s bleed on warfarin and travel plans.',
    knowledge:{
      guideline:'NICE NG196 Atrial fibrillation: diagnosis and management (2021) · DVLA Assessing fitness to drive: a guide for medical professionals (current edition) · MHRA apixaban dosing (current)',
      summary:'Confirm AF, screen for emergencies, CHA2DS2-VASc 3 and ORBIT 1 → DOAC; stop aspirin and ibuprofen; rate control; echo; address the brother’s bleed and the trip.',
      points:[
        { h:'ECG interpretation', t:'Irregularly irregular rhythm, absent P waves, fibrillatory baseline; ventricular rate 112. Narrow QRS, normal QTc, no ST changes — no evidence of ischaemia or pre-excitation.' },
        { h:'Same-day or emergency triggers', t:'Haemodynamic instability, ventricular rate over 150, chest pain, syncope, signs of heart failure, stroke or TIA symptoms, or new AF under 48 hours where rhythm control is considered.' },
        { h:'Stroke risk', t:'CHA2DS2-VASc: CHF 1, Hypertension 1, Age ≥75 2, Diabetes 1, Stroke/TIA 2, Vascular disease 1, Age 65–74 1, Sex category (female) 1. Score 3 here — anticoagulation recommended.' },
        { h:'Bleeding risk', t:'ORBIT: low Hb or anaemia 2, age over 74 1, bleeding history 2, eGFR under 60 1, antiplatelet treatment 1. Score 1 (low) here. Use it to modify risks, not to withhold anticoagulation.' },
        { h:'DOAC choice and dose', t:'Apixaban 5 mg twice daily; reduce to 2.5 mg twice daily if two of: age 80 or over, weight 60 kg or less, creatinine 133 µmol/L or more. Calculate creatinine clearance (Cockcroft–Gault): about 74 mL/min here. Stop aspirin; avoid NSAIDs.' },
        { h:'Rate control and work-up', t:'Beta-blocker (for example bisoprolol 2.5 mg, titrate to symptoms — ESC lenient target resting rate under 110, lower if symptomatic) or diltiazem/verapamil (avoid in heart failure with reduced EF). Echocardiogram; TFT, U&E, FBC, LFT; consider sleep apnoea; refer for rhythm control if symptomatic despite rate control or other indications.' },
        { h:'Marking edge', t:'Pass: correct DOAC, rate control and stopping aspirin. Clear pass: a calm explanation in numbers, the ibuprofen spotted, the brother’s bleed answered, and the wedding trip handled.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello, is that Mr Mahmood? It’s Dr Evans from the surgery. Can you confirm your date of birth, and is now a good time to talk privately?', dom:'ro', why:'Telephone identity and privacy' },
      { who:'pt', text:'Yes. The nurse said my heart tracing wasn’t right. Is my heart going to stop? I feel fine.' },
      { who:'dr', text:'No, it isn’t going to stop, and I’m glad you feel well. The tracing shows your heart is beating irregularly and a bit fast. Before I explain, can I ask a few questions?', dom:'ro', why:'Immediate reassurance and signposting' },
      { phase:'Data gathering', clock:'1–4 min', who:'dr', text:'Any chest pain, fainting, feeling your heart racing, breathlessness lying flat, or swollen ankles?', dom:'dg', why:'Emergency and heart-failure screen' },
      { who:'pt', text:'A bit puffed on the hill. Nothing else.' },
      { who:'dr', text:'Have you ever had sudden weakness, numbness, trouble speaking, a drooping face or loss of vision?', dom:'dg', why:'Stroke and TIA screen' },
      { who:'pt', text:'Never.' },
      { who:'dr', text:'Any bleeding problems — black stools, ulcers? And I see aspirin and ibuprofen on your notes — how often do you take the ibuprofen?', dom:'dg', why:'Bleeding history and modifiable risks' },
      { who:'pt', text:'No bleeding. Ibuprofen most days for my knees. Aspirin since 2016.' },
      { phase:'Explanation', clock:'4–7 min', who:'dr', text:'This is atrial fibrillation. The top chambers of the heart quiver instead of beating steadily. It’s common at your age. The main danger isn’t the heart stopping — it’s that a clot can form and cause a stroke. With your age, blood pressure and diabetes, that’s about 3 in 100 people like you each year. A blood thinner reduces it by around two-thirds.', dom:'ro', why:'Plain explanation with natural frequencies' },
      { who:'pt', text:'Blood thinner? My brother was on warfarin. He had a bleed in his brain.' },
      { who:'dr', text:'I’m so sorry. That must make this frightening. The newer blood thinners, like apixaban, cause fewer brain bleeds than warfarin, and your own bleeding risk is low — even lower once we stop the aspirin and ibuprofen, which add bleeding risk and don’t prevent AF strokes.', dom:'cm', why:'Addresses the fear; DOAC; stops antiplatelet and NSAID' },
      { phase:'Plan', clock:'7–10 min', who:'dr', text:'So I suggest: apixaban 5 mg twice a day, stop the aspirin and ibuprofen — paracetamol and a gel for your knees instead — and bisoprolol 2.5 mg once a day to slow your heart. I’ll arrange a heart scan, and the nurse will check your pulse and blood pressure in two weeks. How does that sound?', dom:'cm', why:'Complete management plan, shared' },
      { who:'pt', text:'OK. One more thing — I’m flying to Lahore in three weeks for my granddaughter’s wedding. Will they stop me?' },
      { who:'dr', text:'No — you can go. Tell your travel insurer about the AF, keep your tablets in your hand luggage with a list, keep moving on the plane, and we’ll check your pulse before you fly. Driving a car is fine too unless you get symptoms that affect it.', dom:'cm', why:'Travel and DVLA advice' },
      { phase:'Close', clock:'10–12 min', who:'dr', text:'If you get chest pain, collapse, severe breathlessness, or signs of a stroke — face drooping, arm weakness, speech problems — call 999. If you see black stools or blood in your urine, call us the same day. Can you tell me the plan back?', dom:'cm', why:'Safety-net and teach-back' },
      { who:'pt', text:'Apixaban twice a day, bisoprolol once, no aspirin or ibuprofen, heart scan, nurse in two weeks, and I can go to the wedding. 999 for a stroke.' },
      { who:'dr', text:'Exactly. I’ll send the prescription to your pharmacy now and the pharmacist will go through the new medicines with you.', dom:'ro', why:'Practical close' }
    ],
    kb:{
      social:[
        { h:'Family experience', t:'A relative’s bleed on warfarin shapes risk perception; acknowledge it before presenting evidence.' },
        { h:'Travel and family events', t:'Major family events drive adherence and anxiety; integrate them into the plan.' }
      ],
      legal:[
        { h:'Driving', t:'DVLA Group 1: AF need not be notified unless it causes distracting or disabling symptoms; Group 2 rules are stricter.' }
      ],
      professional:[
        { h:'Inherited prescribing', t:'Aspirin for primary prevention is no longer recommended; reviewing it is part of safe prescribing when starting a DOAC.' },
        { h:'Over-the-counter medicines', t:'Ask about NSAIDs and supplements; they matter for bleeding risk.' }
      ],
      community:[
        { h:'Support', t:'Community pharmacist New Medicine Service for the DOAC; Arrhythmia Alliance and AF Association information.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Chest pain, syncope, breathlessness, heart failure','Stroke or TIA symptoms','Bleeding history','Rate over 150'],
        psychosocial:['Brother’s brain bleed','Travel in three weeks','Driving'],
        ice:['Idea: heart may stop','Concern: blood thinners; travel ban','Expectation: told he is fine'],
        core:['Onset and symptoms','Medicines incl. OTC NSAIDs','Alcohol, sleep apnoea, thyroid']
      },
      diagnosis:'New atrial fibrillation (onset unknown), ventricular rate 112, haemodynamically stable; CHA2DS2-VASc 3, ORBIT 1.',
      diagnosisLay:'“An irregular heartbeat called atrial fibrillation. Not dangerous in itself today, but it raises the risk of stroke, which we can lower.”',
      management:{
        reflectIce:'“You’re worried about your brother’s bleed and about the wedding — the plan protects you from stroke with a lower bleeding risk, and you can still fly.”',
        psychosocial:'Plan around the trip; involve family if he wishes.',
        sharedPlan:['Apixaban 5 mg twice daily','Stop aspirin and ibuprofen; paracetamol and topical NSAID gel','Bisoprolol 2.5 mg daily, titrate','Echocardiogram; nurse review in 2 weeks; pre-travel check'],
        safetyNet:['999 for stroke symptoms, chest pain, collapse, severe breathlessness','Same-day contact for bleeding','Travel insurance declaration']
      }
    },
    links:[
      { ic:'📋', t:'Atrial fibrillation', s:'Case walkthrough', href:'../cases/atrial-fibrillation.html' },
      { ic:'🧮', t:'CHA2DS2-VASc', s:'Calculator', href:'calculators.html#chads-vasc' },
      { ic:'🧮', t:'ORBIT', s:'Bleeding risk calculator', href:'calculators.html#orbit' }
    ],
    pitfalls:{
      intro:'This station is usually passed on knowledge and failed on communication — or on the aspirin.',
      items:[
        { dom:'cm', fail:'Starts a DOAC and leaves aspirin and ibuprofen running.', why:'Triple bleeding risk without benefit.', fix:'Review every medicine affecting bleeding when anticoagulating.' },
        { dom:'ro', fail:'Quotes “CHA2DS2-VASc of 3 and ORBIT of 1” without translation.', why:'He cannot weigh risks he cannot understand.', fix:'Use natural frequencies: “about 3 in 100 a year”.' },
        { dom:'dg', fail:'Never asks about symptoms before reassuring.', why:'Stroke, chest pain or heart failure would change urgency.', fix:'Screen first, then explain.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Identity, privacy, immediate reassurance.' },
      { t:'1–4', h:'Screen', d:'Symptoms, stroke, bleeding, medicines.' },
      { t:'4–7', h:'Explain', d:'AF and stroke risk in numbers; the brother’s bleed.' },
      { t:'7–10', h:'Plan', d:'DOAC, stop aspirin and NSAID, rate control, echo, the trip, driving.' },
      { t:'10–12', h:'Close', d:'Safety-net and teach-back.' }
    ],
    wordPics:{
      clearFail:'No symptom screen; no anticoagulation or aspirin continued as stroke prevention; jargon throughout; trip never discovered.',
      fail:'Correct diagnosis and a DOAC, but aspirin and ibuprofen not stopped, brother’s bleed brushed aside, or no safety-net.',
      pass:'Screens appropriately, explains AF, recommends a correctly dosed DOAC, stops aspirin, starts rate control, arranges echo and safety-nets.',
      clearPass:'All of the Pass, plus natural-frequency risk explanation, the ibuprofen found, the brother’s fear addressed with evidence, the wedding trip and driving handled, and teach-back.'
    },
    avoid:[
      { dont:'“Your CHA2DS2-VASc is 3 so you need anticoagulation.”', instead:'“Your stroke risk is about 3 in 100 a year; a blood thinner cuts that by two-thirds.”', why:'Numbers in lay terms enable a real decision.' },
      { dont:'“Keep the aspirin too for extra protection.”', instead:'“The aspirin adds bleeding without preventing AF strokes, so we’ll stop it.”', why:'Antiplatelets add bleeding risk without stroke benefit in AF.' },
      { dont:'“You shouldn’t fly.”', instead:'“You can fly — tell your insurer and keep your tablets with you.”', why:'Stable AF is not a contraindication to flying.' }
    ]
  });

  /* ===== r9. Spirometry result in a smoker — video ===== */
  C.push({
    id:'results-spirometry',
    title:"“The nurse did the blowing test — I just need a stronger inhaler, don’t I?”",
    type:'video', duration:12,
    meta:{ age:58, sex:'F',
      setting:'Video — results of spirometry done for breathlessness.',
      system:'Respiratory / Results — spirometry interpretation and a new COPD diagnosis: smoking cessation, inhaler plan, pulmonary rehabilitation',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Investigations & results','Long-term conditions & cancer','Mental health & addiction'], type:'video', thirdParty:false }
    },
    ceg:['Investigations & results','Long-term conditions & cancer'],
    brief:'Mrs Linda Barker, 58, care-home night worker, about 32 pack-years, has two years of exertional breathlessness, morning cough with white sputum and two “chest infections” last winter. Quality-assured post-bronchodilator spirometry shows FEV1 1.66 L (68% predicted), FVC 2.90 L (95%), FEV1/FVC 0.57, with only 80 mL (5%) improvement after salbutamol — persistent airflow obstruction without significant reversibility, consistent with COPD (moderate, FEV1 50–79% predicted). Chest X-ray shows hyperinflation without a mass; eosinophils 0.2; no asthmatic features. The task: interpret and explain the spirometry in plain language, confirm the diagnosis is consistent with history and exclude red flags (haemoptysis, weight loss, chest pain — none), and deliver the NICE NG115 plan: smoking cessation as the most effective treatment (very brief advice, referral to stop smoking service, combination NRT or varenicline, or a vape), SABA as needed with inhaler technique (LABA+LAMA if still breathless or exacerbating, as there are no asthmatic features), pulmonary rehabilitation (MRC 3), vaccinations (flu, pneumococcal, COVID-19 as eligible), a self-management plan, and review. Hidden agenda: her mother died at 66 on home oxygen with “emphysema” and she fears the same; she says she has “cut down” but still smokes 20 a day and feels ashamed; she worries about losing her job.',
    stem:{
      name:'Linda Barker', age:'58-year-old woman',
      pmh:['Hypertension','Anxiety','Two lower respiratory tract infections last winter (amoxicillin; one course of prednisolone from out-of-hours)'],
      meds:['Amlodipine 5 mg once daily','Salbutamol 100 micrograms inhaler — 2 puffs when required (issued by out-of-hours in January; using 2–3 times a week)'],
      allergy:'No known drug allergies',
      recent:'Spirometry (practice nurse, ARTP-certified; good quality, 3 acceptable and repeatable blows) 1 week ago — see report. MRC dyspnoea grade 3. BMI 23. SpO2 96%. FBC: Hb 146 g/L, eosinophils 0.2 × 10⁹/L. Chest X-ray 3 weeks ago: hyperinflated lungs, no focal lesion or mass. Smoking status at booking: “cutting down”. Pack-years documented: about 32.',
      reason:'Video appointment to discuss her breathing test results.'
    },
    script:{
      data:{ kind:'Spirometry report (pre and post salbutamol 400 micrograms)', values:[
        ['FEV1 pre-bronchodilator','1.58 L (65% predicted)','≥80% predicted'],
        ['FEV1 post-bronchodilator','1.66 L (68% predicted)','≥80% predicted'],
        ['FVC pre-bronchodilator','2.84 L (93% predicted)','≥80% predicted'],
        ['FVC post-bronchodilator','2.90 L (95% predicted)','≥80% predicted'],
        ['FEV1/FVC post-bronchodilator','0.57','≥0.70 (LLN 0.68)'],
        ['Change in FEV1 after salbutamol','+80 mL (+5%)','>400 mL suggests asthma'],
        ['Test quality','Grade A — 3 acceptable, repeatable blows','—'] ] },
      opening:"“Hiya. So the nurse did the blowing test. I’ve just got a smoker’s cough really — I need a stronger inhaler, don’t I? The blue one isn’t doing much.”",
      facts:[
        { topic:'Breathlessness', text:"“About two years. I get puffed going up the stairs at work — I have to stop halfway. I walk slower than my friends.”" },
        { topic:'Cough', text:"“Every morning — white phlegm. Worse in winter.” No blood ever. No chest pain." },
        { topic:'Weight and general (if asked)', text:"No weight loss, appetite fine, no night sweats, no ankle swelling." },
        { topic:'Asthma features (if asked)', text:"No asthma as a child, no hay fever or eczema, no night-time waking with wheeze, no big day-to-day swings." },
        { topic:'Smoking (if asked honestly and kindly)', text:"First says: “I’ve cut down.” If asked how many now: “...about twenty. I told the nurse less. I’m ashamed.” Started at 15. Tried patches once — “gave me nightmares”. Never tried a vape or medicine." },
        { topic:'Work', text:"Night shifts at a care home — lifting, stairs. “I can’t afford to lose this job.”" },
        { topic:'Your mum (only if asked what you think it is or what worries you)', text:"“My mum had emphysema. She ended up on oxygen at home, couldn’t leave the house, died at 66. Is that what I’ve got?” Tearful." },
        { topic:'Inhaler use', text:"Uses salbutamol 2–3 times a week. If asked to show technique: presses and breathes at the same time, no spacer, holds breath only briefly." },
        { topic:'Vaccines (if asked)', text:"Had flu jab at work last year. Not sure about pneumonia jab." },
        { topic:'Role-player direction', text:'Start upbeat and dismissive (“smoker’s cough”). Tell the smoking truth only if asked without judgement. When COPD is named, become worried and mention your mum. If the doctor explains that stopping smoking now changes the outlook and that your lungs are not like your mum’s at the end, you become motivated and accept the stop smoking referral. React badly to lecturing: “I know, I know.”' }
      ],
      ice:{
        ideas:'“Just a smoker’s cough — I need a stronger inhaler.”',
        concerns:'HIDDEN AGENDA — her mother died at 66 housebound on oxygen with emphysema and she fears the same; she is ashamed that she still smokes 20 a day despite saying she has cut down; she fears losing her job.',
        expectations:'A stronger inhaler.'
      },
      cues:[
        '“Just a smoker’s cough.” — minimising.',
        '“I’ve cut down.” — invites a kind, specific question.',
        '“Is that what I’ve got?” (about her mum) — the fear.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Interprets the spirometry correctly: post-bronchodilator FEV1/FVC 0.57 (obstruction), FEV1 68% predicted (moderate), minimal reversibility (80 mL) — consistent with COPD not asthma' },
      { dom:'dg', text:'Confirms the clinical picture (exertional breathlessness, productive cough, smoking history) and asks about asthmatic features and red flags (haemoptysis, weight loss, chest pain), using the CXR and FBC already done' },
      { dom:'dg', text:'Takes an accurate current smoking history non-judgementally and checks inhaler technique' },
      { dom:'cm', text:'Makes smoking cessation the priority: very brief advice, referral to stop smoking service, and options (combination NRT, varenicline, or a vape)' },
      { dom:'cm', text:'Inhaler plan: SABA with correct technique and spacer; explains next step (LABA+LAMA) if still breathless or exacerbating; not an inhaled steroid without asthmatic features' },
      { dom:'cm', text:'Refers to pulmonary rehabilitation (MRC 3), offers vaccinations, a self-management plan for exacerbations, and annual review' },
      { dom:'ro', text:'Explores and answers the fear about her mother: explains moderate COPD and that stopping smoking slows decline; addresses work concerns' },
      { dom:'ro', text:'Avoids lecturing; uses plain language; checks understanding and agrees follow-up' }
    ],
    worked:[
      { lbl:'Explain the numbers', txt:'“The test measures how much air you can blow out and how fast. You can blow out a normal amount overall, but it comes out slowly — that’s what we call narrowing of the airways. The inhaler didn’t open it much, which tells us this is COPD rather than asthma.”' },
      { lbl:'The honest question', txt:'“Lots of people find it hard to cut down. Roughly how many a day are you smoking at the moment?”' },
      { lbl:'Her mum', txt:'“Your test shows moderate COPD — your lungs are working at about two-thirds of what we’d expect, not the stage your mum reached. The single biggest thing that slows it down is stopping smoking, and that’s still in your hands.”' },
      { lbl:'Stop smoking offer', txt:'“The best chance of stopping is support plus medication — that makes you about three times more likely to succeed than willpower alone. Can I refer you to the stop smoking service today?”' },
      { lbl:'Inhaler', txt:'“A stronger inhaler won’t help much while the technique isn’t right. Let’s add a spacer and practise — and if you’re still breathless, there’s a two-in-one long-acting inhaler next.”' },
      { lbl:'Rehab', txt:'“Pulmonary rehab is an exercise and education course. People do better on it than on almost any inhaler — and it could help with the stairs at work.”' }
    ],
    learning:'COPD is diagnosed by symptoms and risk factors plus post-bronchodilator spirometry showing FEV1/FVC below 0.7; severity is graded by FEV1 % predicted (mild 80% or more with symptoms, moderate 50–79%, severe 30–49%, very severe under 30%). Large reversibility (over 400 mL) suggests asthma. Explain spirometry in plain language. NICE management: smoking cessation is the most effective intervention (offer behavioural support plus pharmacotherapy — combination NRT or varenicline — and e-cigarettes as an option); offer pneumococcal and annual flu vaccination (and COVID-19 as eligible); pulmonary rehabilitation for those functionally limited (MRC 3 or more, or 2 if limited); a personalised self-management plan; optimise treatable traits and comorbidities. Inhalers: SABA or SAMA first; if still limited and no asthmatic or steroid-responsive features, LABA+LAMA; consider LABA+ICS only with asthmatic features or raised eosinophils. Check technique before escalating. Address emotional responses (fear from a family history, shame about smoking) to support engagement.',
    knowledge:{
      guideline:'NICE NG115 Chronic obstructive pulmonary disease in over 16s: diagnosis and management (2018, updated 2019) · NICE NG209 Tobacco: preventing uptake, promoting quitting and treating dependence (2021) · NICE QS10 Chronic obstructive pulmonary disease in adults (quality standard; 2011, updated 2016)',
      summary:'Obstructive, non-reversible spirometry with symptoms and smoking = moderate COPD. Priority is stopping smoking; then technique, SABA, rehab, vaccines, self-management — and answering her fear.',
      points:[
        { h:'Interpreting spirometry', t:'Post-bronchodilator FEV1/FVC 0.57 (below 0.7 and below LLN) = obstruction. FEV1 68% predicted = moderate. FVC preserved. Reversibility 80 mL (5%) = not significant; over 400 mL suggests asthma.' },
        { h:'Exclude other causes', t:'Chest X-ray (done) for alternative diagnoses and lung cancer features; FBC for anaemia or polycythaemia; BMI. Red flags: haemoptysis, weight loss, chest pain, hoarseness — consider suspected cancer pathway referral.' },
        { h:'Smoking cessation', t:'Very brief advice (ask, advise, act); referral to stop smoking service; combination NRT, varenicline or e-cigarettes. Behavioural support plus medicine roughly triples quit rates compared with unassisted attempts.' },
        { h:'Inhaled therapy', t:'SABA or SAMA as required. If breathless or exacerbating despite this and no asthmatic features: LABA+LAMA. Asthmatic features or eosinophils supporting steroid responsiveness: consider LABA+ICS. Always check technique, adherence and smoking first.' },
        { h:'Non-drug care', t:'Pulmonary rehabilitation (MRC 3 or more); flu and pneumococcal vaccines; self-management plan with rescue pack if appropriate; nutrition; anxiety and depression screening; annual review.' },
        { h:'Prognosis framing', t:'Moderate COPD; stopping smoking slows the decline of lung function to near that of a non-smoker. Oxygen is used only for chronic hypoxaemia, not breathlessness alone.' },
        { h:'Marking edge', t:'Pass: correct interpretation and plan. Clear pass: the truthful smoking history obtained without judgement, the mother’s story addressed, and a plan she is motivated to follow.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello Linda, I’m Dr Ali. I’ve got your breathing test results. Before we look at them, what did you make of the test?', dom:'ro', why:'Elicits her idea first' },
      { who:'pt', text:'Just a smoker’s cough. I need a stronger inhaler — the blue one isn’t doing much.' },
      { who:'dr', text:'Let’s see what the test says and then sort the inhaler. Tell me about the breathing — what’s it stopping you doing?', dom:'dg', why:'Function and impact' },
      { who:'pt', text:'Stairs at work, I stop halfway. Cough every morning with white phlegm.' },
      { phase:'Data gathering', clock:'1–4 min', who:'dr', text:'Any blood in the phlegm, weight loss, chest pain? Any asthma, hay fever, or night-time wheeze?', dom:'dg', why:'Red flags and asthmatic features' },
      { who:'pt', text:'No, none of that.' },
      { who:'dr', text:'And smoking — lots of people find it hard to cut down. Roughly how many a day at the moment?', dom:'dg', why:'Non-judgemental smoking history' },
      { who:'pt', text:'(pause) About twenty. I told the nurse less. I’m ashamed.' },
      { who:'dr', text:'Thank you for telling me — that helps me help you. Could you show me how you use the blue inhaler?', dom:'dg', why:'Technique check' },
      { who:'pt', text:'(presses and breathes at the same time, short breath-hold)' },
      { phase:'Explanation', clock:'4–7 min', who:'dr', text:'The test shows you can blow out a normal amount of air, but it comes out slowly — your airways are narrowed. The inhaler didn’t open them much, so this is COPD, not asthma. It’s at a moderate level — your lungs work at about two-thirds of what we’d expect.', dom:'dg', why:'Plain-language interpretation and diagnosis' },
      { who:'pt', text:'COPD? My mum had emphysema. She ended up on oxygen, stuck in the house. Is that me?' },
      { who:'dr', text:'I’m sorry — that must have been hard to watch. You’re not where your mum was at the end. And the biggest thing that slows COPD down is stopping smoking — it’s still in your hands.', dom:'ro', why:'Addresses the fear and builds motivation' },
      { phase:'Plan', clock:'7–11 min', who:'dr', text:'With support and medication, you’re around three times more likely to stop than on willpower. Would you like a referral to the stop smoking service today? Options include patches with a fast-acting spray or gum, varenicline tablets, or a vape.', dom:'cm', why:'Smoking cessation as priority with options' },
      { who:'pt', text:'Yes. The patches gave me nightmares though.' },
      { who:'dr', text:'Taking them off at night often helps, or varenicline might suit you. For the inhaler, let’s add a spacer — slow breath in, hold for ten. If you’re still breathless in a few weeks, the next step is a long-acting two-in-one inhaler.', dom:'cm', why:'Tailored cessation; technique before escalation; next step' },
      { who:'dr', text:'I’d also like you to do pulmonary rehab — an exercise course that helps breathlessness more than most inhalers — and have the pneumonia jab and flu jab. The nurse will write you a plan for flare-ups.', dom:'cm', why:'Rehab, vaccines, self-management' },
      { who:'pt', text:'Will I lose my job?' },
      { who:'dr', text:'Many people keep working with COPD. If the stairs are a problem, a fit note can suggest adjustments while rehab helps. If you get a fever, more phlegm that turns green, or more breathlessness, contact us the same day; if you’re very breathless or have chest pain, call 999.', dom:'cm', why:'Work and safety-net' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'What will you take away from today?', dom:'ro', why:'Teach-back' },
      { who:'pt', text:'It’s COPD, not as bad as Mum’s, stopping smoking is the main thing, spacer, rehab, jabs. And I’m not stuck yet.' }
    ],
    kb:{
      social:[
        { h:'Family history and fear', t:'Watching a parent die of COPD shapes beliefs; use it as motivation, not threat.' },
        { h:'Work', t:'Physically demanding night shifts; rehab and adjustments can help keep her working.' }
      ],
      legal:[
        { h:'Equality Act 2010', t:'COPD may be a disability if it has a substantial long-term effect, triggering reasonable adjustments.' }
      ],
      professional:[
        { h:'Honest data', t:'Under-reported smoking is common; non-judgemental questions get accurate histories.' }
      ],
      community:[
        { h:'Support', t:'Local stop smoking service; pulmonary rehabilitation; Asthma + Lung UK Breathe Easy groups.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Haemoptysis, weight loss, chest pain','Hypoxia, cor pulmonale signs','Severe exacerbations'],
        psychosocial:['Mother’s death from COPD','Shame about smoking','Job security'],
        ice:['Idea: smoker’s cough','Concern: ending up like her mum','Expectation: stronger inhaler'],
        core:['Breathlessness, cough, sputum','Smoking pack-years; current use','Inhaler technique']
      },
      diagnosis:'COPD, moderate (post-bronchodilator FEV1/FVC 0.57, FEV1 68% predicted, not reversible), MRC 3, current smoker 20/day.',
      diagnosisLay:'“Your airways are narrowed from smoking — a lung condition called COPD. It’s moderate, and stopping smoking is the best way to protect what you have.”',
      management:{
        reflectIce:'“You wanted a stronger inhaler and you’re frightened of ending up like your mum. Stopping smoking and rehab will do more than any inhaler.”',
        psychosocial:'Address shame; work adjustments; family support for quitting.',
        sharedPlan:['Stop smoking service referral; varenicline or combination NRT or vape','Spacer and technique; LABA+LAMA if still symptomatic','Pulmonary rehabilitation','Pneumococcal and flu vaccines','Self-management plan; review in 4–6 weeks'],
        safetyNet:['Same-day contact for exacerbation symptoms','999 for severe breathlessness or chest pain','Report haemoptysis or weight loss']
      }
    },
    links:[
      { ic:'📋', t:'COPD', s:'Case walkthrough', href:'../cases/copd.html' },
      { ic:'💠', t:'Smoking cessation', s:'Management protocol', href:'management/smoking-cessation.html' },
      { ic:'🧮', t:'MRC dyspnoea scale', s:'Calculator', href:'calculators.html#mrc-dyspnoea' }
    ],
    pitfalls:{
      intro:'This station is failed by escalating inhalers on request, or by a smoking lecture that shuts her down.',
      items:[
        { dom:'cm', fail:'Prescribes a steroid-containing inhaler because she asked for something stronger.', why:'Without asthmatic features ICS adds pneumonia risk; technique and smoking are the real issues.', fix:'Check technique, add a spacer, and explain the LABA+LAMA step.' },
        { dom:'ro', fail:'Lectures about smoking.', why:'Shame increases concealment and reduces quit attempts.', fix:'Ask kindly, praise honesty, offer support with medicine.' },
        { dom:'dg', fail:'Misreads the spirometry as asthma or as normal because FVC is normal.', why:'The ratio defines obstruction; reversibility is minimal.', fix:'Ratio first, FEV1 for severity, reversibility for asthma.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Her idea: smoker’s cough, stronger inhaler.' },
      { t:'1–4', h:'Focused history', d:'Red flags, asthma features, true smoking, technique.' },
      { t:'4–7', h:'Explain', d:'Spirometry in plain words; COPD moderate; her mum.' },
      { t:'7–11', h:'Plan', d:'Stop smoking, technique and spacer, next inhaler step, rehab, vaccines, work.' },
      { t:'11–12', h:'Close', d:'Teach-back; review.' }
    ],
    wordPics:{
      clearFail:'Misinterprets the spirometry or gives an inhaled steroid on request; no smoking discussion or a lecture; red flags not checked.',
      fail:'Correct diagnosis but jargon-heavy explanation; smoking discussed without a concrete referral; mother’s story missed.',
      pass:'Interprets spirometry correctly, explains COPD, prioritises smoking cessation with referral, checks technique, offers rehab and vaccines.',
      clearPass:'All of the Pass, plus an honest smoking history obtained without judgement, the fear about her mother addressed with realistic hope, work concerns handled, and a motivated, specific plan.'
    },
    avoid:[
      { dont:'“Your FEV1/FVC ratio is 0.57.”', instead:'“The air comes out more slowly than it should.”', why:'Plain language builds understanding.' },
      { dont:'“You have to stop smoking or you’ll end up like your mum.”', instead:'“Stopping now is the biggest thing you can do to stay active.”', why:'Fear-based threats reduce engagement.' },
      { dont:'“Here’s a stronger inhaler.”', instead:'“Let’s get the technique right first, then step up if needed.”', why:'Escalation without technique checks is ineffective.' }
    ]
  });

  /* ===== r10. Blood panel — cholestatic liver tests — telephone ===== */
  C.push({
    id:'results-bloods-panel',
    title:"“You wanted to speak to me about my blood tests — I was only having them before starting a statin”",
    type:'telephone', duration:12,
    meta:{ age:54, sex:'F',
      setting:'Telephone — results call about blood tests taken before starting a statin.',
      system:'Hepatology / Results — isolated cholestatic liver blood tests in an asymptomatic woman: pattern recognition, urgency and next steps',
      checked:'October 2026',
      blueprint:{ difficulty:2, lifeStage:'adult', groups:['Investigations & results','New & undifferentiated presentations','Long-term conditions & cancer','Ethnicity, culture & diversity'], type:'telephone', thirdParty:false }
    },
    ceg:['Investigations & results','New & undifferentiated presentations','Long-term conditions & cancer'],
    brief:'Mrs Priya Nair, 54, teacher, had baseline bloods before a planned statin (QRISK3 11.6%). Results show a cholestatic pattern: ALP 324 U/L and GGT 196 U/L, with only mildly raised ALT 54, normal bilirubin, albumin and platelets; total cholesterol 7.1 with HDL 1.9. She has hypothyroidism (autoimmune), uses transdermal HRT, and takes a turmeric supplement. The task (telephone): explain the result pattern simply (the raised GGT shows the ALP is from the liver, not bone); take a targeted history — itch, fatigue, dry eyes and mouth, jaundice, dark urine, pale stools, abdominal pain, fever, weight loss, alcohol, medicines and supplements (turmeric can cause liver injury), IBD symptoms; recognise that she is well and not jaundiced, so this is urgent but not an emergency; arrange a liver ultrasound (within about 2 weeks) and a liver aetiology screen including anti-mitochondrial antibody (AMA), ANA, smooth muscle antibody, immunoglobulins, hepatitis B and C serology, ferritin, and repeat LFTs; advise stopping turmeric; defer the statin decision until results (statins are not contraindicated by a mild rise but the picture needs clarifying; high HDL may mean QRISK overestimates); and safety-net for jaundice, pale stools and dark urine, fever with right-upper-quadrant pain, or weight loss. Probable primary biliary cholangitis (middle-aged woman, autoimmune thyroid disease, night-time itch, dry eyes) — if AMA-positive, refer to hepatology; ursodeoxycholic acid is first-line. Hidden agenda: her sister died of pancreatic cancer three years ago, which “started with itching and a liver test”. Address the fear honestly: painless jaundice would trigger a suspected cancer pathway referral; her pattern and absence of jaundice point more to other causes, and the scan will look at the bile ducts.',
    stem:{
      name:'Priya Nair', age:'54-year-old woman',
      pmh:['Hypothyroidism (2015)','Menopause — HRT since 2023','QRISK3 11.6% at review 2 weeks ago — statin discussed; baseline bloods requested'],
      meds:['Levothyroxine 75 micrograms once daily','Estradiol gel 0.06% 2 pumps daily','Micronised progesterone 100 mg at night','Turmeric capsules — self-bought (nurse note)'],
      allergy:'No known drug allergies',
      recent:'Bloods 4 days ago: bilirubin 13 µmol/L (<21); ALT 54 U/L (<40); ALP 324 U/L (30–130); GGT 196 U/L (<40); albumin 42 g/L (35–50); total protein 78 g/L; Hb 128 g/L; platelets 262 × 10⁹/L; U&E normal; TSH 2.1 mU/L; HbA1c 37 mmol/mol; total cholesterol 7.1, HDL 1.9, non-HDL 5.2 mmol/L. Alcohol about 4 units/week. BMI 26. No previous LFTs on record.',
      reason:'Telephone call to discuss blood results (lab flagged abnormal liver tests).'
    },
    script:{
      data:{ kind:'Blood panel (4 days ago)', values:[
        ['Bilirubin','13 µmol/L','<21'],
        ['ALT','54 U/L','<40'],
        ['ALP','324 U/L','30–130'],
        ['GGT','196 U/L','<40'],
        ['Albumin','42 g/L','35–50'],
        ['Total protein','78 g/L','60–80'],
        ['Haemoglobin','128 g/L','115–165'],
        ['Platelets','262 × 10⁹/L','150–400'],
        ['TSH','2.1 mU/L','0.3–4.2'],
        ['HbA1c','37 mmol/mol','<42'],
        ['Total cholesterol / HDL','7.1 / 1.9 mmol/L','<5.0 / >1.2'] ] },
      opening:"“Hello, Priya speaking. The receptionist said the doctor wanted to talk about my blood tests. I was only having them before the statin. Is something wrong?”",
      facts:[
        { topic:'Symptoms (if asked)', text:"“I feel fine. A bit tired, but I’m a teacher in October.”" },
        { topic:'Itch (if asked about itching)', text:"“Actually — yes. My skin itches at night, especially my palms and soles, for about three months. I thought it was dry skin or the HRT.”" },
        { topic:'Eyes and mouth (if asked)', text:"“My eyes are gritty and dry — I use drops.”" },
        { topic:'Jaundice and urine/stool (if asked)', text:"No yellow eyes or skin noticed, urine normal colour, stools normal colour. No abdominal pain, no fever or shivers, no weight loss, appetite fine, no vomiting." },
        { topic:'Bowels (if asked)', text:"No diarrhoea, blood or mucus." },
        { topic:'Alcohol and medicines', text:"“A glass of wine at the weekend.” HRT gel and progesterone since 2023, levothyroxine for years. Turmeric capsules “for my joints — about six months”. No other supplements, no recent antibiotics, no herbal teas." },
        { topic:'Risk factors (if asked)', text:"No tattoos, no transfusions, no injecting drugs. Born in Kerala, moved to the UK aged 10." },
        { topic:'Family (only if asked about family history or what worries you)', text:"“My sister Meera died of pancreatic cancer three years ago. She was 58. It started with itching and they said her liver test was off.” (Voice breaks.)" },
        { topic:'Role-player direction', text:'Calm and articulate at first. When you hear “liver”, ask “Is it serious?” Disclose the itch only if asked about it directly. If asked what worries you, or if the doctor says the word “cancer”, talk about Meera. If the doctor rushes to reassure without explaining, you stay anxious (“How can you know?”). If they acknowledge your sister, explain why your situation looks different, and arrange tests quickly with clear warning signs, you settle.' }
      ],
      ice:{
        ideas:'“Maybe the HRT is affecting my liver?”',
        concerns:'HIDDEN AGENDA — her sister died of pancreatic cancer that began with itching and an abnormal liver test; she fears the same.',
        expectations:'To be told whether it is serious and whether she can still start the statin.'
      },
      cues:[
        '“Is something wrong?” — anxious from the first sentence.',
        '“I thought it was dry skin.” (if itch asked) — the cholestatic itch.',
        '“It started with itching.” (about her sister) — the fear.'
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Interprets the panel: cholestatic pattern (ALP and GGT raised more than ALT), GGT confirming hepatic origin, normal bilirubin, albumin and platelets (preserved synthetic function)' },
      { dom:'dg', text:'Takes a targeted history: itch, fatigue, sicca, jaundice, dark urine, pale stools, pain, fever, weight loss, alcohol, medicines and supplements (turmeric, HRT), IBD symptoms, viral risk factors' },
      { dom:'dg', text:'Forms a differential: primary biliary cholangitis (likely), drug or supplement-induced cholestasis, biliary obstruction (stones, stricture, malignancy), PSC, infiltrative disease' },
      { dom:'cm', text:'Arranges liver ultrasound within about 2 weeks and a liver aetiology screen including AMA, ANA, ASMA, immunoglobulins, hepatitis B and C, ferritin, with repeat LFTs; stops turmeric' },
      { dom:'cm', text:'Explains urgency correctly (well, not jaundiced: urgent outpatient work-up) and the escalation path: jaundice → suspected cancer pathway or same-day assessment; fever with RUQ pain → same day' },
      { dom:'cm', text:'Defers the statin decision until results with a reason, and plans review and hepatology referral if AMA-positive or the scan is abnormal' },
      { dom:'ro', text:'Discovers and addresses the sister’s pancreatic cancer with empathy, explaining honestly why the pattern looks different and what the scan will check' },
      { dom:'ro', text:'Uses plain language on the phone, checks understanding, and agrees how results will be communicated' }
    ],
    worked:[
      { lbl:'Pattern in plain words', txt:'“The tests that relate to the bile ducts are raised, while the liver’s main working tests — how it makes protein and clears yellow pigment — are normal. So the liver is working well, but something is irritating the bile system.”' },
      { lbl:'The itch', txt:'“Have you had any itching recently — especially at night or on your palms and soles?”' },
      { lbl:'Ask the fear', txt:'“You sound worried. Is there something in particular on your mind?”' },
      { lbl:'Honest reassurance', txt:'“I’m so sorry about Meera. I can’t promise anything before the scan, but your results look different from what we see when a tumour blocks the bile duct — you’re not yellow, your bilirubin is normal, and you’ve lost no weight. A common cause of this pattern is an autoimmune condition called primary biliary cholangitis, which is treatable, especially in someone with an underactive thyroid like you.”' },
      { lbl:'Plan', txt:'“I’m booking an ultrasound in the next couple of weeks and some extra blood tests, including one antibody test that is usually positive in that condition. Please stop the turmeric for now.”' },
      { lbl:'Safety-net', txt:'“If your skin or eyes go yellow, your urine goes dark or your stools pale, or you get a fever with pain under your right ribs, call us the same day.”' }
    ],
    learning:'Abnormal liver blood tests should be interpreted by pattern: hepatocellular (ALT/AST predominant) versus cholestatic (ALP and GGT predominant), plus synthetic function (albumin, INR, bilirubin, platelets). A raised GGT with raised ALP confirms a hepatic source of ALP. The British Society of Gastroenterology recommends a standard liver aetiology screen for abnormal LFTs, including abdominal ultrasound, hepatitis B surface antigen and hepatitis C antibody, autoantibodies (AMA, ANA, ASMA), immunoglobulins, ferritin and transferrin saturation. In a well, middle-aged woman with autoimmune thyroid disease, nocturnal itch and sicca symptoms, a cholestatic pattern suggests primary biliary cholangitis: diagnosis rests on raised ALP plus positive AMA; first-line treatment is ursodeoxycholic acid via hepatology. Always consider drugs and supplements (turmeric has been linked with liver injury) and biliary obstruction (ultrasound). Urgency depends on the clinical picture: painless jaundice in people aged 40 and over warrants a suspected cancer pathway referral for pancreatic cancer; cholangitis features need same-day assessment. Address family experiences directly and explain why the picture differs, without false certainty.',
    knowledge:{
      guideline:'British Society of Gastroenterology guidelines on the management of abnormal liver blood tests (Newsome et al., Gut 2018) · BSG/UK-PBC guidelines for the management of primary biliary cholangitis (Hirschfield et al., Gut 2018) · NICE NG12 Suspected cancer: recognition and referral (2015, updated April 2026) · NICE NG238 Cardiovascular disease: risk assessment and reduction, including lipid modification (2023)',
      summary:'Cholestatic LFTs with normal synthetic function in a well woman: targeted history, ultrasound and aetiology screen including AMA, stop turmeric, defer the statin, safety-net for jaundice and cholangitis, and answer the fear about her sister.',
      points:[
        { h:'Pattern', t:'Cholestatic: ALP and GGT raised more than ALT. Hepatocellular: ALT/AST predominant. GGT confirms hepatic ALP. Normal bilirubin, albumin and platelets indicate preserved liver function.' },
        { h:'Differential', t:'Primary biliary cholangitis; drug or supplement induced (co-amoxiclav, flucloxacillin, oral oestrogens, herbal products including turmeric); biliary obstruction (gallstones, stricture, pancreatic or biliary malignancy); primary sclerosing cholangitis (IBD); infiltration (metastases, sarcoid, lymphoma); congestive hepatopathy.' },
        { h:'Investigations', t:'Liver ultrasound; AMA, ANA, ASMA, immunoglobulins (IgM raised in PBC); hepatitis B and C; ferritin and transferrin saturation; repeat LFTs; consider coeliac serology and lipid profile. Calculate FIB-4 where relevant.' },
        { h:'Primary biliary cholangitis', t:'Mostly women aged 40–60; associations: autoimmune thyroid disease, Sjögren’s. Symptoms: fatigue, itch, sicca. Diagnosis: raised ALP plus AMA positive. Treatment: ursodeoxycholic acid 13–15 mg/kg/day; refer to hepatology; second-line options for inadequate response; colestyramine for itch; monitor bone density.' },
        { h:'Urgency', t:'Jaundice aged 40 or over → suspected pancreatic cancer pathway referral. Fever, rigors and RUQ pain → same-day assessment (cholangitis). Synthetic failure (raised INR, low albumin) or encephalopathy → urgent specialist input. Well and anicteric → urgent routine work-up.' },
        { h:'Statin', t:'Statins are not contraindicated by mildly abnormal LFTs (caution if transaminases above 3 times the upper limit). Clarifying the diagnosis first is reasonable; in PBC, high HDL is common and cardiovascular risk may be overestimated.' },
        { h:'Marking edge', t:'Pass: correct interpretation, ultrasound and AMA. Clear pass: finds the itch and the turmeric, answers the sister’s story honestly, and sets clear escalation triggers.' }
      ]
    },
    model:[
      { phase:'Opening', clock:'0–1 min', who:'dr', text:'Hello, is that Priya Nair? It’s Dr Brennan from the surgery. Can you confirm your date of birth, and are you somewhere you can talk?', dom:'ro', why:'Telephone identity and privacy' },
      { who:'pt', text:'Yes. Is something wrong? I was only having them before the statin.' },
      { who:'dr', text:'Most of the results were fine. A couple of the liver tests were raised, so I wanted to talk it through and ask a few questions. Your liver is working well overall.', dom:'ro', why:'Headline first, avoids alarming' },
      { phase:'Data gathering', clock:'1–5 min', who:'dr', text:'Have you noticed any itching, yellow eyes or skin, dark urine or pale stools?', dom:'dg', why:'Cholestasis and jaundice screen' },
      { who:'pt', text:'Actually — itching at night, palms and soles, for three months. I thought it was dry skin. Nothing yellow.' },
      { who:'dr', text:'That’s helpful. Any tummy pain, fevers, weight loss, dry eyes or mouth, or change in your bowels?', dom:'dg', why:'Pain, cholangitis, malignancy, sicca and IBD features' },
      { who:'pt', text:'Dry gritty eyes. Nothing else.' },
      { who:'dr', text:'Could you tell me everything you take, including anything from a shop or health store, and how much alcohol you drink?', dom:'dg', why:'Drugs, supplements, alcohol' },
      { who:'pt', text:'Levothyroxine, HRT gel and progesterone, turmeric for my joints for six months. A glass of wine at weekends.' },
      { who:'dr', text:'You sound worried. Is there something in particular on your mind?', dom:'ro', why:'Explores the concern' },
      { who:'pt', text:'My sister Meera died of pancreatic cancer. It started with itching and a liver test.' },
      { phase:'Explanation', clock:'5–8 min', who:'dr', text:'I’m so sorry. No wonder this call frightened you. I can’t give certainty until we’ve done tests, but your results look different from what happens when a tumour blocks the bile duct — you’re not yellow, the bilirubin is normal, and you haven’t lost weight.', dom:'ro', why:'Empathy plus honest, specific reassurance' },
      { who:'dr', text:'The pattern — raised bile-duct tests, night-time itch, dry eyes, and an underactive thyroid — often fits an autoimmune condition called primary biliary cholangitis. It’s treatable with a tablet. The turmeric could also be playing a part.', dom:'dg', why:'Working diagnosis and differential in plain words' },
      { phase:'Plan', clock:'8–11 min', who:'dr', text:'So: a liver ultrasound in the next two weeks to look at the liver and bile ducts, and blood tests including an antibody test for that condition, viral hepatitis, and a repeat of these. Please stop the turmeric for now. I’d hold off the statin until we have the answers.', dom:'cm', why:'Ultrasound, aetiology screen, stop supplement, defer statin' },
      { who:'pt', text:'Is the HRT to blame?' },
      { who:'dr', text:'The gel is unlikely to cause this, so carry on with it. If the antibody test is positive, I’ll refer you to the liver team, and there’s good treatment.', dom:'cm', why:'Answers her idea; referral plan' },
      { phase:'Close', clock:'11–12 min', who:'dr', text:'Please ring us the same day if your eyes or skin go yellow, urine darkens or stools go pale, or you get a fever with pain under your right ribs. I’ll call you when the results are back. What will you do first?', dom:'cm', why:'Specific safety-net and follow-up' },
      { who:'pt', text:'Stop the turmeric, book the bloods, wait for the scan letter — and ring if I go yellow. Thank you for listening about Meera.' }
    ],
    kb:{
      social:[
        { h:'Bereavement and health anxiety', t:'A sibling’s cancer frames every abnormal result; acknowledge the loss explicitly.' }
      ],
      legal:[
        { h:'Results communication', t:'Practices should have systems to act on abnormal results promptly and document the conversation and plan.' }
      ],
      professional:[
        { h:'Supplements', t:'Ask about herbal and over-the-counter products; report suspected adverse reactions via the Yellow Card scheme.' },
        { h:'Honest uncertainty', t:'Reassurance should be specific and conditional, not absolute, before investigations.' }
      ],
      community:[
        { h:'Support', t:'PBC Foundation; British Liver Trust information.' }
      ]
    },
    playbook:{
      history:{
        redFlags:['Jaundice, dark urine, pale stools','Fever, rigors, RUQ pain','Weight loss, anorexia','Signs of liver failure'],
        psychosocial:['Sister’s death from pancreatic cancer','Work and stress'],
        ice:['Idea: HRT affecting the liver','Concern: pancreatic cancer like her sister','Expectation: is it serious; statin?'],
        core:['Itch, fatigue, sicca','Medicines, supplements, alcohol','Viral risk factors; IBD symptoms']
      },
      diagnosis:'Cholestatic liver blood tests with preserved function; probable primary biliary cholangitis (autoimmune thyroid disease, itch, sicca), with supplement-induced injury and biliary obstruction to exclude.',
      diagnosisLay:'“The bile-duct side of the liver is irritated. The liver is working well. One likely cause is an autoimmune condition that is treatable; the scan and blood tests will tell us.”',
      management:{
        reflectIce:'“You’re frightened because of Meera. The scan will look directly at the bile ducts, and I’ve told you exactly what signs would mean we act the same day.”',
        psychosocial:'Acknowledge bereavement; agree how and when results will be shared.',
        sharedPlan:['Liver ultrasound within 2 weeks','AMA, ANA, ASMA, immunoglobulins, hepatitis B and C, ferritin, repeat LFTs','Stop turmeric','Defer statin decision','Hepatology referral if AMA positive or scan abnormal'],
        safetyNet:['Same-day contact for jaundice, dark urine, pale stools','Same-day for fever with RUQ pain','GP call with results']
      }
    },
    links:[
      { ic:'📋', t:'Abnormal LFTs', s:'Case walkthrough', href:'../cases/abnormal-lfts.html' },
      { ic:'🗺️', t:'Abnormal LFTs', s:'Pathway', href:'algorithms/abnormal-lfts.html' },
      { ic:'🧪', t:'Lab results', s:'Interpreting blood tests', href:'lab-results.html' }
    ],
    pitfalls:{
      intro:'This station is failed by vague reassurance (“probably nothing, repeat in three months”) or by alarming her without a plan.',
      items:[
        { dom:'dg', fail:'Treats it as “slightly raised liver tests” and repeats in three months.', why:'An ALP over twice the upper limit with raised GGT needs an aetiology screen and imaging.', fix:'Recognise the cholestatic pattern and investigate now.' },
        { dom:'dg', fail:'Never asks about supplements or itch.', why:'Turmeric and PBC are both key; itch is a major clue.', fix:'Ask specifically about over-the-counter products and itch.' },
        { dom:'ro', fail:'“Don’t worry, it’s definitely not cancer.”', why:'False certainty undermines trust if results change.', fix:'Explain why it looks different, what will be checked, and what would prompt urgent action.' }
      ]
    },
    timeMap:[
      { t:'0–1', h:'Open', d:'Identity, privacy, headline that the liver is working well.' },
      { t:'1–5', h:'Targeted history', d:'Itch, jaundice, pain, fever, weight, sicca, medicines, turmeric, alcohol; her worry.' },
      { t:'5–8', h:'Explain', d:'Pattern in plain words; sister; likely PBC; differential.' },
      { t:'8–11', h:'Plan', d:'Ultrasound, aetiology screen, stop turmeric, defer statin, referral criteria.' },
      { t:'11–12', h:'Close', d:'Safety-net, results plan, teach-back.' }
    ],
    wordPics:{
      clearFail:'Misreads the pattern or dismisses it; no history; starts the statin without comment; no safety-net.',
      fail:'Arranges some tests but misses imaging or the AMA, or the turmeric and itch; the sister’s story never heard.',
      pass:'Interprets the cholestatic pattern, takes a targeted history, arranges ultrasound and an aetiology screen including AMA, stops turmeric and safety-nets for jaundice and cholangitis.',
      clearPass:'All of the Pass, plus finds the itch and sicca, names PBC as a likely, treatable cause, addresses the sister’s death with honest specificity, defers the statin with reasoning, and closes with teach-back.'
    },
    avoid:[
      { dont:'“Your ALP and GGT are elevated with a cholestatic picture.”', instead:'“The tests linked to the bile ducts are raised, but your liver is working well.”', why:'Jargon on the telephone increases anxiety.' },
      { dont:'“It’s definitely not cancer.”', instead:'“It looks different from what we see with a blockage, and the scan will check the ducts.”', why:'Honest, conditional reassurance.' },
      { dont:'“Start the statin anyway — your liver will be fine.”', instead:'“Let’s get the answers first, then decide about the statin.”', why:'Clarifying the diagnosis first is reasonable and safer.' }
    ]
  });

  /* ===== RCGP-domain scorecards (dg / cm / ro), authored per case ===== */
  function I(t, d, pts){ return { t:t, d:d, pts:pts || 1 }; }
  var SC = {
    'smi-health-check':{
      dg:[ I('Uses the health-check data','Interprets BMI, BP, HbA1c 45, lipids and QRISK3 13.8% from the notes without re-asking.'),
           I('Re-checks smoking status','Finds he stopped smoking 10 days ago (switched to a vape).',2),
           I('Links symptoms to clozapine level','Sedation, hypersalivation, unsteadiness, myoclonus and constipation after stopping smoking.',2),
           I('Screens clozapine red flags','Constipation severity (pain, distension, vomiting, flatus); fever or sore throat; chest pain; seizures.') ],
      cm:[ I('Same-day specialist contact','Clozapine clinic or psychiatrist today for level and dose review; does not advise restarting smoking or self-adjusting.',2),
           I('Treats constipation actively','Stimulant plus softener; reviews hyoscine; explicit 999/A&E advice for ileus or seizure.',2),
           I('Cardiometabolic plan','Atorvastatin 20 mg; Diabetes Prevention Programme; diet (sugary drinks); honest answer on weight injections.'),
           I('Follow-up','Call-back today; video review in 3 days; shares plan with the mental health team.') ],
      ro:[ I('Praises the quit','Genuine praise and protection of the quit attempt.'),
           I('Addresses fear of relapse','Explains a dose adjustment keeps him as well as before.'),
           I('No blame about weight','Frames weight as a medication effect; one achievable change.'),
           I('Involves sister with consent; teach-back','Checks understanding and agrees who knows what.') ]
    },
    'fibromyalgia':{
      dg:[ I('Focused pain history','Distribution, duration, sleep, fatigue, cognition.'),
           I('Screens alternatives','Inflammatory, connective tissue, PMR, myositis, thyroid, neurological and malignancy features.',2),
           I('Identifies opioid overuse','Daily co-codamol with morning headaches — probable medication-overuse headache.'),
           I('Positive diagnosis','Names fibromyalgia (chronic primary pain) rather than “nothing wrong”.',2) ],
      cm:[ I('Explains why no MRI','Incidental findings; names the features that would prompt imaging.'),
           I('NICE options','Supervised exercise, CBT or ACT, acupuncture, antidepressant option with benefits and harms.',2),
           I('Avoids harmful drugs','No gabapentinoids, opioids, NSAIDs or benzodiazepines started; gradual co-codamol taper.',2),
           I('Work and follow-up','Fit note with adjustments, occupational health, review and safety-net.') ],
      ro:[ I('Validates the pain','Believes her before explaining.'),
           I('Finds the MS fear','Asks what she fears a scan would show and answers it.'),
           I('Explores home and work','Husband’s view; attendance meeting.'),
           I('Shared plan and teach-back','She chooses options; offer to include her husband.') ]
    },
    'homeless-patient':{
      dg:[ I('Consent for support worker','Checks Piotr is happy for Bev to stay.'),
           I('Uses recorded findings and video','Marked margin, spread since morning, obs and NEWS2.'),
           I('Severity and sepsis screen','Rigors, confusion, breathlessness, urine output, necrotising features, DVT.',2),
           I('Alcohol and context','Dependence, withdrawal seizure, feet, nutrition, mood, housing.',2) ],
      cm:[ I('Workable antibiotic plan','Flucloxacillin 1 g QDS 5–7 days (or clarithromycin), daily nurse review, accessible supply and cost help.',2),
           I('Safe alcohol advice','Do not stop suddenly; thiamine; alcohol services; inform admitting teams.'),
           I('Explicit escalation','999/A&E triggers and 48-hour reassessment with a named person.',2),
           I('Social determinants','Housing referral with consent, foot care, registration and immigration reassurance.') ],
      ro:[ I('Explores refusal','Finds the dog and belongings barrier.'),
           I('Non-judgemental','No moralising about alcohol or homelessness.'),
           I('Answers Home Office fear','GP care free; no reporting for treatment.'),
           I('Teach-back','Piotr repeats the plan.') ]
    },
    'modern-slavery':{
      dg:[ I('Notices cues','Record cues and a companion who answers and offers to interpret.'),
           I('Sees her alone safely','Routine request; checks no one can hear; professional interpreter.',2),
           I('Direct questions','Work, pay, debt, documents, phone, freedom, threats, violence, housing.',2),
           I('Mood and risk','Self-harm screen; others at the address.') ],
      cm:[ I('Immediate danger check','999 if at immediate risk.'),
           I('Referral options with consent','Helpline 08000 121 700; police or first responder for NRM; consent needed for adults.',2),
           I('Safeguarding','Practice safeguarding lead; adult safeguarding concern; risk to others.',2),
           I('Safe follow-up and hands','No contact via controller’s phone; code word; documentation; dermatitis treatment.') ],
      ro:[ I('Believes her','Calm, unhurried, non-judgemental.'),
           I('Removes fear of arrest','Explains she is a victim, not a criminal.'),
           I('Respects autonomy','Her choice; door kept open.'),
           I('Teach-back of safe plan','Checks she knows the route back.') ]
    },
    'private-care-request':{
      dg:[ I('Clarifies request and background','Uses the provider letter and monitoring data.'),
           I('Why now','Finds the redundancy and financial pressure.'),
           I('How he takes it','Extra doses, sleep, alcohol, pulse and weight.',2),
           I('Mood and risk','Low mood after job loss; suicide screen.') ],
      cm:[ I('Clear, reasoned decline','Voluntary shared care; local commissioning; prescriber responsibility.',2),
           I('NHS route today','Right to Choose or local service referral; private prescriber responsible until transfer.',2),
           I('Safety actions','No extra doses (Schedule 2 CD); inform prescriber with consent; alcohol and sleep advice.'),
           I('Follow-up and support','Call-back; financial advice; safety-net.') ],
      ro:[ I('Acknowledges benefit','Values what treatment has given him.'),
           I('Does not doubt the diagnosis','Separates policy from person.'),
           I('Handles frustration','Responds to “punished for not waiting”.'),
           I('Summary and teach-back','Checks the plan is understood.') ]
    },
    'adult-eating-disorder':{
      dg:[ I('Interprets observations and bloods','Bradycardia, postural drop, hypothermia, K 3.1, failed SUSS, ECG.',2),
           I('Eating and compensatory behaviours','Restriction, exercise, vomiting, laxatives — asked directly and kindly.',2),
           I('Physical and mental risk','Syncope, palpitations, mood, self-harm, suicide, driving.'),
           I('Names the diagnosis','Likely anorexia nervosa with purging, shared compassionately.') ],
      cm:[ I('Same-day medical assessment','MEED risk recognised and acted on today.',2),
           I('Urgent ED referral','Adult eating disorder service, FREED; not BMI-gated.'),
           I('Declines the pill with reasons','Masks amenorrhoea; no bone protection.'),
           I('Safety advice','No driving or running; 999 for faint, chest pain, palpitations.') ],
      ro:[ I('Non-judgemental curiosity','Gets disclosure without shame.'),
           I('Answers fear of compulsion','Honest about sectioning and feeding.'),
           I('Confidentiality and family','Respects adult confidentiality; encourages support.'),
           I('Teach-back','She can repeat the plan.') ]
    },
    'sex-worker-health':{
      dg:[ I('Timeline and cycle','~40 hours; day 13; contraception and interacting drugs.'),
           I('The incident','Non-consensual condom removal and assault recognised.',2),
           I('Injuries and safety','Head injury, strangulation, coercion, mood, alcohol.'),
           I('HIV and STI risk','Source status; hepatitis B status.') ],
      cm:[ I('Emergency contraception','Cu-IUD first-line; ulipristal today; 5-day wait before hormonal contraception.',2),
           I('Same-day clinic','PEP within 72 hours, hepatitis B, STI tests and repeat windows.',2),
           I('SARC and police options','Self-referral, forensic window, reporting her choice, anonymous reporting.'),
           I('Confidentiality','No disclosure to university; limits explained; record wording.') ],
      ro:[ I('Non-judgemental','Calm reaction to her work.'),
           I('Validates','Names it as not her fault.'),
           I('Finds the university fear','Answers it precisely.'),
           I('Shared plan and follow-up','Teach-back and a dated call.') ]
    },
    'results-ecg-af':{
      dg:[ I('Interprets the ECG','AF, rate 112, narrow QRS, no ischaemia.'),
           I('Emergency screen','Chest pain, syncope, heart failure, stroke or TIA symptoms; onset.',2),
           I('Risk scores','CHA2DS2-VASc 3; ORBIT 1.'),
           I('Medicines review','Finds aspirin and OTC ibuprofen.') ],
      cm:[ I('Anticoagulation','DOAC at correct dose (apixaban 5 mg BD; CrCl calculated).',2),
           I('Stops aspirin and NSAID','Alternative knee analgesia.'),
           I('Rate control and work-up','Bisoprolol titrated; echo; sleep apnoea; review.',2),
           I('Driving, flying, safety-net','Group 1 rules; travel insurance; 999 for stroke signs.') ],
      ro:[ I('Plain-language explanation','AF and risk in natural frequencies.'),
           I('Brother’s bleed','Acknowledged and answered with evidence.'),
           I('Finds the trip','Integrates the wedding into the plan.'),
           I('Teach-back','He repeats the plan.') ]
    },
    'results-spirometry':{
      dg:[ I('Interprets spirometry','Ratio 0.57 obstruction; FEV1 68% moderate; 80 mL not reversible.',2),
           I('Clinical correlation','Symptoms, asthma features, red flags, CXR and FBC used.'),
           I('True smoking history','Obtained without judgement.'),
           I('Inhaler technique','Observed and corrected.') ],
      cm:[ I('Smoking cessation first','Very brief advice; referral; NRT, varenicline or vape.',2),
           I('Inhaler plan','SABA with spacer; LABA+LAMA next; no ICS without asthmatic features.',2),
           I('Rehab, vaccines, self-management','Pulmonary rehab (MRC 3); flu and pneumococcal; plan.'),
           I('Work and safety-net','Adjustments; exacerbation advice; 999 triggers.') ],
      ro:[ I('Elicits her idea','“Smoker’s cough”, stronger inhaler.'),
           I('Addresses her mother’s death','Realistic hope, not threat.'),
           I('No lecturing','Praises honesty.'),
           I('Teach-back','She restates the plan.') ]
    },
    'results-bloods-panel':{
      dg:[ I('Interprets the panel','Cholestatic pattern; GGT confirms hepatic ALP; function preserved.',2),
           I('Targeted history','Itch, sicca, jaundice, urine and stool, pain, fever, weight, IBD.'),
           I('Medicines and supplements','Finds turmeric; HRT route considered.'),
           I('Differential','PBC likely; drug-induced; obstruction; PSC; infiltration.') ],
      cm:[ I('Investigations','Ultrasound within ~2 weeks; AMA, ANA, ASMA, immunoglobulins, hepatitis B and C, ferritin, repeat LFTs.',2),
           I('Urgency and escalation','Jaundice → suspected cancer pathway or same-day; cholangitis → same day.',2),
           I('Statin decision','Deferred with reasons.'),
           I('Next steps','Stop turmeric; hepatology if AMA positive or scan abnormal; results call.') ],
      ro:[ I('Headline first','Avoids alarming on the phone.'),
           I('Finds the sister’s story','Explores the worry.'),
           I('Honest, specific reassurance','No false certainty.'),
           I('Teach-back','She repeats the plan and safety-net.') ]
    }
  };
  function sum(a){ return a.reduce(function(s, x){ return s + x.pts; }, 0); }
  C.forEach(function(c){
    var s = SC[c.id]; if (!s) return;
    c.scorecard = { dg:s.dg, cm:s.cm, ro:s.ro, maxDg:sum(s.dg), maxCm:sum(s.cm), maxRo:sum(s.ro), total:sum(s.dg) + sum(s.cm) + sum(s.ro), grades:['Clear pass','Pass','Fail','Clear fail'] };
    c.scorecardRcgp = c.scorecard; /* kept under a second name: the current overlay builder (sca-enrich.js) replaces c.scorecard */
  });

  if (window.SCA_CASES) window.SCA_CASES.push.apply(window.SCA_CASES, C);
})();
