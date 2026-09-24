/* ============================================================
   Consultation Conversation Lab — content + logic
   Trains the "Relating to Others" thread: follow-the-patient,
   cue-spotting, natural ICE, the psychosocial door, looping
   cues into management, and shared plans / negotiation.
   Loaded after site.js. Renders into #clTabs and #clMount.
   ============================================================ */
(function(){
  'use strict';
  const $  = q => document.querySelector(q);
  const esc = s => String(s ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));

  /* ---------------- CONTENT ---------------- */

  // Module 1 — principle cards
  const PRINCIPLE = {
    intro: "The SCA is a conversation, not a form. The examiner is watching whether you and the patient build something together — not whether you completed a checklist. Hold your structure in your head as <b>territory to cover</b>; let the patient's story decide the <b>order</b> you cover it in.",
    cards: [
      { ic:'🎧', t:'Follow the patient, hold the structure', p:"You need both. The framework (history, red flags, ICE, psychosocial, examination, management) is your safety net so nothing is missed. The patient's words are your <b>route through it</b>. A great consultation feels led by the patient but quietly covers everything." },
      { ic:'⏳', t:'The golden minute', p:"Open, then <b>be quiet</b>. \u201cTell me what's brought you in\u201d → then listen, with minimal interruptions, for the first ~60 seconds. Patients give you most of your cues, ideas and concerns here for free — if you don't talk over them." },
      { ic:'🔁', t:'Acknowledge, then ask', p:"The single most useful habit: before your next planned question, <b>respond to the last thing they said</b>. \u201cThat sounds frightening — tell me more,\u201d then continue. This is what stops you sounding like an interrogation." },
      { ic:'🚦', t:'Follow emotion now, defer data later', p:"An <b>emotional or concern cue</b> → respond immediately, every time. A <b>factual tangent</b> that breaks your flow → you may signpost and park it: \u201cThat's important, I'll come back to it — first, can I ask…\u201d Never park an emotion." },
      { ic:'🪧', t:'Signpost when you change direction', p:"When you move from listening to asking, or from history to examination/management, say so: \u201cThanks, that's really helpful. Can I ask a few specific questions now?\u201d Structure the patient can feel = an organised consultation the examiner can see." },
      { ic:'🎯', t:"Order doesn't score — responsiveness does", p:"There are no marks for asking in a fixed sequence. There are marks for the patient feeling <b>heard</b> and for you weaving ICE and psychosocial naturally as they arise. Stop worrying about the \u2018right order\u2019 and react to what's in front of you." }
    ]
  };

  // Module 2 — cue-spotting MCQ + live coach
  const CUES = {
    intro: "A <b>cue</b> is anything the patient offers that hints at an idea, concern, emotion or piece of context they haven't fully put into words. They can be <b>verbal</b> (\u201cI just hope it's nothing serious\u201d), <b>paraverbal</b> (a sigh, a wavering voice, going quiet) or <b>contextual</b> (\u201cI booked the day off for this\u201d). The cardinal sin is <b>cue-stepping</b> — ploughing past it with your next closed question. The formula: <b>Acknowledge → Explore (open) → then continue.</b>",
    mcq: [
      { ctx:'Opening line, sore throat', line:"\u201cIt's probably nothing, but my friend was told hers was just a virus and it turned out to be her thyroid…\u201d",
        opts:[
          {t:"\u201cHow many days have you had the sore throat?\u201d", ok:false},
          {t:"\u201cIt sounds like your friend's experience is on your mind — are you worried this might be something like that for you?\u201d", ok:true},
          {t:"\u201cThyroid problems are quite different from a sore throat, don't worry.\u201d", ok:false},
          {t:"\u201cLet me examine your throat.\u201d", ok:false} ],
        why:"The cue is the hidden idea/concern (\u201ccould this be my thyroid / something serious?\u201d). Name it and explore it. Jumping to duration or examination steps over it; flat reassurance dismisses it before you understand it." },
      { ctx:'Tired all the time', line:"(sighs) \u201cI'm just so exhausted… I don't know how much longer I can keep going like this.\u201d",
        opts:[
          {t:"\u201cAny weight loss or night sweats?\u201d", ok:false},
          {t:"\u201cThat sounds really tough. When you say you don't know how much longer you can keep going — tell me more about that.\u201d", ok:true},
          {t:"\u201cWe'll do some blood tests and get to the bottom of it.\u201d", ok:false},
          {t:"\u201cHow many hours of sleep are you getting?\u201d", ok:false} ],
        why:"This is an emotional cue with a possible safety flag (\u201ccan't keep going\u201d). You must follow it immediately and gently — it may open mood/risk. Red-flag screening and sleep questions can come after you've acknowledged and explored." },
      { ctx:'Knee pain, mentions work', line:"\u201cI'm a self-employed plumber, so… yeah. I've just got to get on with it really.\u201d",
        opts:[
          {t:"\u201cDoes the knee click or lock?\u201d", ok:false},
          {t:"\u201cBeing self-employed, I imagine time off isn't easy — how is the knee affecting your work?\u201d", ok:true},
          {t:"\u201cYou should rest it completely for two weeks.\u201d", ok:false},
          {t:"\u201cOK. Any swelling?\u201d", ok:false} ],
        why:"Contextual cue about occupation and impact (and a hint that rest advice may be unrealistic). Exploring it shows you're tailoring to his life — and stops you giving management he can't follow." },
      { ctx:'Headache', line:"\u201cMy mum had a brain tumour, so I suppose that's why I'm here, really.\u201d",
        opts:[
          {t:"\u201cWhere exactly is the headache?\u201d", ok:false},
          {t:"\u201cI'm sorry about your mum. It makes complete sense that's brought you in — is a tumour the thing you're most worried about?\u201d", ok:true},
          {t:"\u201cBrain tumours are very rare, it's almost certainly tension headache.\u201d", ok:false},
          {t:"\u201cHave you had any visual problems?\u201d", ok:false} ],
        why:"An explicit idea + concern + emotional context handed to you. Acknowledge the loss, validate the fear, confirm the specific worry — then you can examine and, crucially, address that exact fear in your explanation later." },
      { ctx:'Contraception review', line:"\u201cMy husband doesn't really like me being on the pill, but…\u201d (trails off)",
        opts:[
          {t:"\u201cWhich pill are you taking currently?\u201d", ok:false},
          {t:"\u201cIt sounds like there's a bit more to that — would it help to talk about what's going on?\u201d", ok:true},
          {t:"\u201cWell, it's your body and your choice.\u201d", ok:false},
          {t:"\u201cLet me check your blood pressure.\u201d", ok:false} ],
        why:"A trailing-off cue often hides a sensitive agenda (control, relationship, safety). Open it gently and safely rather than closing it down or going biomedical — this is where a hidden, scoring concern can emerge." },
      { ctx:'Diabetes review', line:"\u201cI've stopped taking the metformin actually. Just… couldn't be bothered with it all.\u201d",
        opts:[
          {t:"\u201cYou really need to take it or your sugars will climb.\u201d", ok:false},
          {t:"\u201c\u2018Couldn't be bothered with it all\u2019 — that sounds like more than the tablets. How have things been generally?\u201d", ok:true},
          {t:"\u201cOK, I'll note that you've stopped it.\u201d", ok:false},
          {t:"\u201cWere you getting side effects from it?\u201d", ok:false} ],
        why:"\u201cAll of it\u201d is a cue that may point to low mood, burnout or burden of treatment. Reflect his own words back and open it up. Side-effects is a reasonable line too — but the emotional cue comes first." }
    ],
    coach: {
      lines: [
        { ctx:'Chest pain, anxious', line:"\u201cMy dad died of a heart attack at 52. I'm 50 now.\u201d" },
        { ctx:'Insomnia', line:"\u201cWork's just been a nightmare since the restructure… I lie there going over it all.\u201d" },
        { ctx:'Recurrent UTI', line:"\u201cIt always seems to happen after… well, after I've been with my partner.\u201d" },
        { ctx:'Child with cough, parent', line:"\u201cI've been up all night with him. My partner thinks I'm overreacting bringing him in.\u201d" },
        { ctx:'Menopause', line:"\u201cI just don't feel like myself anymore. My husband's noticed it too.\u201d" }
      ]
    }
  };

  // Module 3 — ICE naturally
  const ICE = {
    intro: "ICE — <b>Ideas, Concerns, Expectations</b> — is the highest-yield, most-failed skill in the exam. It fails when it's bolted on as three robotic questions (\u201cDo you have any ideas, concerns or expectations?\u201d). Done well it's <b>woven in early and as cues arise</b>, in the patient's own language, and then <b>used</b> in your explanation. It belongs near the start, not as an afterthought before you examine.",
    banks: [
      { k:'Ideas', sub:'What do they think is going on?', good:[
        "\u201cWhat's been going through your mind about what might be causing this?\u201d",
        "\u201cDid you have any thoughts yourself about what it might be?\u201d",
        "\u201cHas anything in particular made you wonder about a specific cause?\u201d" ],
        bad:"\u201cDo you have any ideas about your condition?\u201d (clinical, closed, easy to say \u2018no\u2019 to)" },
      { k:'Concerns', sub:'What are they afraid of?', good:[
        "\u201cWas there something in particular you were worried it might be?\u201d",
        "\u201cWhat's the worst-case scenario that's been on your mind?\u201d",
        "\u201cMany people coming in with this have a specific worry — is there one for you?\u201d" ],
        bad:"\u201cAny concerns?\u201d (too thin — almost always gets \u2018no, not really\u2019)" },
      { k:'Expectations', sub:'What were they hoping for today?', good:[
        "\u201cWhat were you hoping we might be able to do today?\u201d",
        "\u201cHad you thought about how I might be able to help?\u201d",
        "\u201cWas there something specific you wanted from today's appointment?\u201d" ],
        bad:"\u201cWhat do you expect me to do?\u201d (can sound defensive or confrontational)" }
    ],
    rate: [
      { line:"\u201cBefore we go on — has anything been worrying you about what this could be?\u201d", verdict:'good', why:"Natural, open, invites the concern in the patient's own terms, well-timed early. This scores." },
      { line:"\u201cDo you have any ideas, concerns or expectations today?\u201d", verdict:'bad', why:"The textbook recited verbatim. Feels like a form, bundles three different questions, and usually gets a blank \u2018no'. Split them and use plain language." },
      { line:"\u201cYou mentioned your sister had something similar — what happened with her?\u201d", verdict:'good', why:"Picks up a cue and explores the idea/concern behind it organically. This is ICE done the way examiners reward." },
      { line:"\u201cAnd finally, just ticking a box — any concerns?\u201d", verdict:'bad', why:"\u2018Ticking a box' tells the patient (and examiner) you don't really want the answer. Late, dismissive, closed." },
      { line:"\u201cWhat were you hoping we could sort out for you today?\u201d", verdict:'good', why:"Warm, collaborative expectation question that sets up shared management. Good." }
    ]
  };

  // Module 4 — psychosocial door
  const PSY = {
    intro: "Opening the <b>psychological and social</b> door is what separates a biomedical history from a holistic one — and it's where hidden agendas, mood and risk live. The skill is the <b>bridge</b>: linking naturally from the physical complaint into how the person is in themselves, at home and at work, without it feeling like a sudden interrogation about their feelings.",
    bridges: [
      { from:'From a physical symptom → mood', ex:"\u201cLiving with this pain for months would get anyone down — how has it been affecting your mood?\u201d" },
      { from:'Normalising to open up', ex:"\u201cA lot of people going through something like this find it hits them emotionally too. How have you been in yourself?\u201d" },
      { from:'Impact on life', ex:"\u201cHow's all this affecting your day-to-day — work, home, the things you'd normally do?\u201d" },
      { from:'Home & relationships', ex:"\u201cWho's at home with you? How are things there?\u201d" },
      { from:'Into mood properly', ex:"\u201cHow's your mood been? And how are you sleeping — and finding enjoyment in things?\u201d" },
      { from:'Sensitive risk (when indicated)', ex:"\u201cWhen people feel this low, they sometimes have dark thoughts, even about not wanting to be here. Has anything like that crossed your mind?\u201d" }
    ],
    notes: [
      "Ask the bridge question, then <b>stop and listen</b> — the silence after \u201chow's your mood?\u201d is where the answer lives.",
      "Risk questions don't plant ideas. Asking directly and calmly is safer than not asking — and examiners look for it when low mood is on the table.",
      "Social context (work, money, caring, housing) is clinical information: it changes what management is realistic. Treat it as part of the history, not small talk."
    ]
  };

  // Module 5 — closing the loop
  const LOOP = {
    intro: "This is the highest-scoring move in the whole consultation and the one most candidates forget under pressure: <b>bring the cue and concern back into your explanation and plan</b>. ICE you gathered but never used scores nothing. Naming the patient's specific worry and addressing it directly is what makes management feel shared and safe.",
    examples: [
      { concern:"Patient feared the headache was a brain tumour (mum had one).",
        weak:"\u201cThis looks like a tension-type headache. I'd suggest simple painkillers and we'll review in two weeks.\u201d",
        strong:"\u201cYou told me you were worried this could be a tumour like your mum's — so let me address that head-on. The things that would point that way are X and Y, and you don't have them, which is genuinely reassuring. What this looks like instead is a tension-type headache, and here's what we can do…\u201d",
        why:"The strong version answers the actual fear before delivering the plan. Same diagnosis, completely different consultation — and it's the difference the examiner is grading." },
      { concern:"Self-employed plumber, can't take time off, wanted to keep working.",
        weak:"\u201cYou need to rest the knee completely for two weeks and avoid kneeling.\u201d",
        strong:"\u201cI know being self-employed means time off really matters, so let's find a plan that keeps you working safely. We can't stop you completely, but if we modify how you kneel, add this, and review in a week…\u201d",
        why:"Management built around the expectation he told you. Advice he can actually follow > textbook advice he'll ignore." },
      { concern:"Wanted antibiotics for a sore throat; worried about a holiday in 3 days.",
        weak:"\u201cIt's viral, you don't need antibiotics.\u201d",
        strong:"\u201cYou mentioned the holiday — so I understand why you want this sorted fast. The good news is this should settle before you fly. Antibiotics wouldn't speed that up and can cause side-effects, but here's what will help, and here's a back-up plan if it's not improving by Friday…\u201d",
        why:"Acknowledges the expectation and the deadline, explains the reasoning, and safety-nets around their actual concern instead of just refusing." }
    ]
  };

  // Module 6 — shared management & negotiation
  const SHARED = {
    intro: "Modern GP management is <b>shared</b>, not handed down. The pattern: <b>offer options → elicit preferences → give your recommendation → agree together → safety-net</b>. \u201cI'm starting you on X\u201d loses marks the moment the patient has a view you didn't ask for. Negotiation is the same skill under pressure, when what the patient wants and what's clinically right don't match.",
    sdm: [
      { t:'Offer options', p:"\u201cThere are a few ways we could approach this — we could do A, or B, or for now simply C. Let me explain each.\u201d" },
      { t:'Elicit preferences', p:"\u201cWhat matters most to you here?\u201d · \u201cHow do you feel about those options?\u201d · \u201cWhich of those sits best with you?\u201d" },
      { t:"Recommend (don't abdicate)", p:"Shared ≠ leaving them to choose alone. \u201cGiven everything, my own recommendation would be B — but I want it to feel right for you too.\u201d" },
      { t:'Agree & safety-net', p:"\u201cSo shall we go with that? And if X happens, here's exactly what to do…\u201d Check-back: \u201cJust so I know I've explained it well — what's your understanding of the plan?\u201d" }
    ],
    negotiation: [
      { want:'Wants antibiotics (viral illness)',
        steps:["Acknowledge the request and the why (\u201cI can see you want to get better fast\u201d)","Explore the concern/deadline behind it","Share your reasoning honestly (no benefit, real harms)","Offer an alternative + back-up (delayed script, self-care, clear safety-net)","Agree and leave the door open"] },
      { want:'Wants a scan / referral not indicated',
        steps:["Acknowledge the worry driving it","Explain what the test would and wouldn't tell us, and the downsides (incidental findings, delay, radiation)","Offer the safer plan: review, watchful waiting, clear red-flags","Agree a clear trigger for escalating to the scan","Document the discussion"] },
      { want:'Wants strong opioids for chronic pain',
        steps:["Validate the pain is real and is affecting their life","Explain the evidence (limited benefit, real harm in chronic primary pain)","Pivot to what does help (movement, psychological, the right adjuncts)","Negotiate a shared, time-limited trial with review","Agree how you'll judge whether it's working"] },
      { want:'Wants a sick note they may not need / longer than indicated',
        steps:["Explore what's going on at work and what they fear","Explain \u2018may be fit for work' and adjustments as an option","Find the middle ground (a shorter note, a phased return)","Agree the plan and a review","Signpost support (OH, fit-note adjustments)"] }
    ],
    coach: {
      scenarios: [
        { ctx:'Antibiotic request', setup:"A patient with 2 days of a cold is asking firmly for antibiotics because they 'always need them'. They've just said: \u201cLook, I know my body — I always end up needing them, so can you just give me them today?\u201d" },
        { ctx:'Scan request', setup:"A patient with 4 weeks of mechanical low back pain, no red flags, says: \u201cI really think I need an MRI. My neighbour had one and they found a slipped disc. Can you refer me?\u201d" },
        { ctx:'Refusing statin', setup:"A patient with a QRISK of 18% says: \u201cI don't want to take a statin — my brother had terrible muscle pains on it and I don't like the idea of being on a tablet for life.\u201d" }
      ]
    }
  };

  /* ---------------- RENDER ENGINE ---------------- */
  const MODULES = [
    { id:'principle', n:'1', tab:'Follow the patient', sub:'order vs story' },
    { id:'cues',      n:'2', tab:'Cue Lab',            sub:'pick up what they offer' },
    { id:'ice',       n:'3', tab:'ICE, naturally',     sub:'without the robot' },
    { id:'psy',       n:'4', tab:'Psychosocial door',  sub:'mood, home, risk' },
    { id:'loop',      n:'5', tab:'Close the loop',     sub:'cues → management' },
    { id:'shared',    n:'6', tab:'Shared plan',        sub:'& negotiation' }
  ];
  let active = 'principle';

  function tabs(){
    $('#clTabs').innerHTML = MODULES.map(m=>`<button class="cl-tab ${m.id===active?'sel':''}" data-m="${m.id}"><span class="cl-tn">${m.n}</span><span><b>${esc(m.tab)}</b><small>${esc(m.sub)}</small></span></button>`).join('');
  }

  function render(){
    tabs();
    const host = $('#clMount');
    if(active==='principle') host.innerHTML = renderPrinciple();
    else if(active==='cues') host.innerHTML = renderCues();
    else if(active==='ice') host.innerHTML = renderIce();
    else if(active==='psy') host.innerHTML = renderPsy();
    else if(active==='loop') host.innerHTML = renderLoop();
    else if(active==='shared') host.innerHTML = renderShared();
    wireActive();
    host.scrollIntoView ? null : null;
    window.scrollTo({top:0,behavior:'smooth'});
  }

  function intro(t){ return `<div class="cl-intro">${t}</div>`; }

  function renderPrinciple(){
    return intro(PRINCIPLE.intro) +
      `<div class="cl-cards">${PRINCIPLE.cards.map(c=>`<div class="cl-card"><div class="cl-ci">${c.ic}</div><div><div class="cl-ct">${esc(c.t)}</div><div class="cl-cp">${c.p}</div></div></div>`).join('')}</div>` +
      nextBtn('cues','Now learn to pick up cues →');
  }

  function renderCues(){
    return intro(CUES.intro) +
      `<h3 class="cl-h">Spot the cue — choose the best response</h3>
       <div class="cl-mcq" id="cueMcq"></div>` +
      coachBlock('cueCoach','Live cue coach','The patient says something. Type what you would say next — the AI coach grades whether you caught the cue, stayed open, and avoided premature closure.', CUES.coach.lines) +
      nextBtn('ice','Next: ICE without the robot →');
  }

  function renderIce(){
    return intro(ICE.intro) +
      `<h3 class="cl-h">Phrase banks — natural, not recited</h3>
       <div class="cl-banks">${ICE.banks.map(b=>`
         <div class="cl-bank"><div class="cl-bk">${esc(b.k)}<small>${esc(b.sub)}</small></div>
           <ul>${b.good.map(g=>`<li class="ok">${esc(g)}</li>`).join('')}</ul>
           <div class="cl-bad">✗ ${esc(b.bad)}</div></div>`).join('')}</div>
       <h3 class="cl-h">Good or clunky? — tap to judge each opening</h3>
       <div class="cl-rate" id="iceRate"></div>` +
      nextBtn('psy','Next: opening the psychosocial door →');
  }

  function renderPsy(){
    return intro(PSY.intro) +
      `<h3 class="cl-h">Bridge phrases — physical → personal</h3>
       <div class="cl-bridges">${PSY.bridges.map(b=>`<div class="cl-bridge"><div class="cl-bf">${esc(b.from)}</div><div class="cl-be">${esc(b.ex)}</div></div>`).join('')}</div>
       <div class="cl-notes">${PSY.notes.map(n=>`<div class="cl-note">💡 ${n}</div>`).join('')}</div>` +
      nextBtn('loop','Next: close the loop into management →');
  }

  function renderLoop(){
    return intro(LOOP.intro) +
      `<div class="cl-exs">${LOOP.examples.map((e,i)=>`
        <div class="cl-ex">
          <div class="cl-ex-c">🎯 ${esc(e.concern)}</div>
          <div class="cl-ba"><div class="cl-weak"><div class="cl-lbl weak">Steps over it</div><p>${esc(e.weak)}</p></div>
          <div class="cl-strong"><div class="cl-lbl strong">Closes the loop</div><p>${esc(e.strong)}</p></div></div>
          <div class="cl-exwhy"><b>Why it scores:</b> ${esc(e.why)}</div>
        </div>`).join('')}</div>` +
      nextBtn('shared','Last: shared plans & negotiation →');
  }

  function renderShared(){
    return intro(SHARED.intro) +
      `<h3 class="cl-h">The shared decision pattern</h3>
       <div class="cl-sdm">${SHARED.sdm.map((s,i)=>`<div class="cl-step"><div class="cl-sn">${i+1}</div><div><div class="cl-st">${esc(s.t)}</div><div class="cl-sp">${s.p}</div></div></div>`).join('')}</div>
       <h3 class="cl-h">Negotiation playbooks — when wants ≠ what's right</h3>
       <div class="cl-negs">${SHARED.negotiation.map(n=>`<div class="cl-neg"><div class="cl-nw">⚖️ ${esc(n.want)}</div><ol>${n.steps.map(s=>`<li>${esc(s)}</li>`).join('')}</ol></div>`).join('')}</div>` +
      coachBlock('shCoach','Live negotiation coach','Read the scenario, type how you would respond, and the AI coach grades your acknowledgement, reasoning, alternative and safety-net.', SHARED.coach.scenarios, true) +
      `<div class="cl-done">🎓 That's the full thread — from the patient's first words to a plan you've built together. Loop back to the <a href="#" data-goto="principle">start</a> any time, or take it live in the <a href="sca-simulator.html">AI Patient Simulator</a>.</div>`;
  }

  function nextBtn(id,label){ return `<div class="cl-next"><button class="cl-nextbtn" data-goto="${id}">${esc(label)}</button></div>`; }

  // ---- live AI coach block (shared by cue + negotiation) ----
  function coachBlock(id, title, blurb, items, isScenario){
    const first = items[0];
    return `<div class="cl-coach" id="${id}">
      <div class="cl-coach-hd"><span class="cl-coach-ic">✨</span><div><div class="cl-coach-t">${esc(title)}</div><div class="cl-coach-b">${esc(blurb)}</div></div></div>
      <div class="cl-coach-ctx" data-ctx>${esc(first.ctx)}</div>
      <div class="cl-coach-line" data-line>${esc(isScenario?first.setup:first.line)}</div>
      <textarea class="cl-coach-ta" data-ta placeholder="Type exactly what you'd say next to the patient…"></textarea>
      <div class="cl-coach-ctl">
        <button class="cl-btn pri" data-grade>✨ Coach my response</button>
        <button class="cl-btn" data-next>Another ${isScenario?'scenario':'line'} ↻</button>
      </div>
      <div class="cl-coach-out" data-out></div>
    </div>`;
  }

  /* ---------------- INTERACTIVITY ---------------- */
  function wireActive(){
    // tab + goto navigation
    document.querySelectorAll('[data-goto]').forEach(b=>b.addEventListener('click',e=>{ e.preventDefault(); active=b.dataset.goto; render(); }));

    if(active==='cues') wireMcq();
    if(active==='ice') wireRate();
    if(active==='cues') wireCoach('cueCoach', CUES.coach.lines, false);
    if(active==='shared') wireCoach('shCoach', SHARED.coach.scenarios, true);
  }

  function wireMcq(){
    const host=$('#cueMcq'); if(!host) return;
    host.innerHTML = CUES.mcq.map((q,qi)=>`
      <div class="cl-q" data-q="${qi}">
        <div class="cl-qctx">${esc(q.ctx)}</div>
        <div class="cl-qline">${esc(q.line)}</div>
        <div class="cl-opts">${q.opts.map((o,oi)=>`<button class="cl-opt" data-o="${oi}">${esc(o.t)}</button>`).join('')}</div>
        <div class="cl-qwhy">${esc(q.why)}</div>
      </div>`).join('');
    host.querySelectorAll('.cl-q').forEach(qel=>{
      const qi=+qel.dataset.q; const q=CUES.mcq[qi];
      qel.querySelectorAll('.cl-opt').forEach(btn=>btn.addEventListener('click',()=>{
        if(qel.classList.contains('done')) return;
        qel.classList.add('done');
        const oi=+btn.dataset.o;
        qel.querySelectorAll('.cl-opt').forEach((b,i)=>{ b.disabled=true; if(q.opts[i].ok) b.classList.add('right'); });
        if(!q.opts[oi].ok) btn.classList.add('wrong');
        qel.querySelector('.cl-qwhy').classList.add('on');
      }));
    });
  }

  function wireRate(){
    const host=$('#iceRate'); if(!host) return;
    host.innerHTML = ICE.rate.map((r,i)=>`
      <div class="cl-rrow" data-r="${i}">
        <div class="cl-rline">${esc(r.line)}</div>
        <div class="cl-rbtns"><button class="cl-rb good" data-v="good">👍 Good</button><button class="cl-rb bad" data-v="bad">👎 Clunky</button></div>
        <div class="cl-rwhy">${esc(r.why)}</div>
      </div>`).join('');
    host.querySelectorAll('.cl-rrow').forEach(row=>{
      const i=+row.dataset.r; const r=ICE.rate[i];
      row.querySelectorAll('.cl-rb').forEach(b=>b.addEventListener('click',()=>{
        if(row.classList.contains('done')) return;
        row.classList.add('done');
        const correct = b.dataset.v===r.verdict;
        row.classList.add(correct?'correct':'incorrect');
        row.querySelector('.cl-rwhy').classList.add('on');
        row.querySelectorAll('.cl-rb').forEach(x=>{ x.disabled=true; if(x.dataset.v===r.verdict) x.classList.add('is'); });
      }));
    });
  }

  function wireCoach(id, items, isScenario){
    const root=$('#'+id); if(!root) return;
    let idx=0;
    const ctxEl=root.querySelector('[data-ctx]'), lineEl=root.querySelector('[data-line]'),
          ta=root.querySelector('[data-ta]'), out=root.querySelector('[data-out]'),
          gradeBtn=root.querySelector('[data-grade]'), nextBtnEl=root.querySelector('[data-next]');
    nextBtnEl.addEventListener('click',()=>{
      idx=(idx+1)%items.length; const it=items[idx];
      ctxEl.textContent=it.ctx; lineEl.textContent=isScenario?it.setup:it.line; ta.value=''; out.innerHTML='';
    });
    gradeBtn.addEventListener('click',async ()=>{
      const resp=(ta.value||'').trim();
      if(!resp){ out.innerHTML=`<div class="cl-coach-warn">Type your response first.</div>`; return; }
      gradeBtn.disabled=true; const orig=gradeBtn.textContent; gradeBtn.textContent='✨ Coaching…';
      const it=items[idx];
      const prompt = isScenario
        ? `You are an experienced RCGP SCA examiner coaching a GP trainee on shared management and negotiation. SCENARIO: ${it.setup}\nThe trainee's response to the patient was:\n"""${resp}"""\nReturn STRICT JSON only: {"verdict":"strong|reasonable|weak","ticks":["..what they did well, 1-3.."],"misses":["..what would score more, 1-3.."],"model":"one model sentence or two the trainee could have said"}. Judge: did they acknowledge the request/feeling, explore the why, share honest reasoning, offer a safe alternative, and move toward an agreed, safety-netted plan?`
        : `You are an experienced RCGP SCA examiner coaching a GP trainee on cue-handling and the data-gathering relationship. The patient said:\n"""${it.line}"""\nThe trainee's next response was:\n"""${resp}"""\nReturn STRICT JSON only: {"verdict":"strong|reasonable|weak","ticks":["..what they did well, 1-3.."],"misses":["..what would score more, 1-3.."],"model":"one model response the trainee could have said"}. Judge: did they ACKNOWLEDGE the cue, stay OPEN (not jump to a closed question), show empathy, and avoid premature reassurance or closure?`;
      try{
        if(!(window.claude && window.claude.complete)) throw new Error('unavailable');
        let raw=await window.claude.complete({messages:[{role:'user',content:prompt}]});
        raw=(raw||'').replace(/```json|```/g,'').trim();
        const j=JSON.parse(raw.slice(raw.indexOf('{'), raw.lastIndexOf('}')+1));
        out.innerHTML = coachResult(j);
      }catch(err){
        out.innerHTML = (err.message==='unavailable')
          ? `<div class="cl-coach-warn">The AI coach needs the assistant connection (live site, Chrome). Self-check instead: did you <b>acknowledge</b> what they said, stay <b>open</b>, show <b>empathy</b>, and avoid jumping to a closed question or premature reassurance?</div>`
          : `<div class="cl-coach-warn">Couldn't reach the coach just now — try again.</div>`;
      }finally{ gradeBtn.disabled=false; gradeBtn.textContent=orig; }
    });
  }
  function coachResult(j){
    const vmap={strong:['Strong','vg'],reasonable:['Reasonable','vr'],weak:['Needs work','vw']};
    const v=vmap[(j.verdict||'').toLowerCase()]||vmap.reasonable;
    return `<div class="cl-cr ${v[1]}">
      <div class="cl-cr-v">${v[0]}</div>
      ${Array.isArray(j.ticks)&&j.ticks.length?`<div class="cl-cr-sec"><b>✓ What worked</b><ul>${j.ticks.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div>`:''}
      ${Array.isArray(j.misses)&&j.misses.length?`<div class="cl-cr-sec"><b>↑ To score more</b><ul>${j.misses.map(t=>`<li>${esc(t)}</li>`).join('')}</ul></div>`:''}
      ${j.model?`<div class="cl-cr-model"><b>Model:</b> \u201c${esc(j.model)}\u201d</div>`:''}
    </div>`;
  }

  /* ---------------- INIT ---------------- */
  $('#clTabs').addEventListener('click',e=>{ const b=e.target.closest('.cl-tab'); if(!b) return; active=b.dataset.m; render(); });
  render();
})();
