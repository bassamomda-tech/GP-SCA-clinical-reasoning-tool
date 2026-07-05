/* ============================================================
   Reasoning GP — Hot Seat cases 11 & 12
   Added as a supplementary file: pushes into window.SCA_CASES
   and registers extras/knowledge, so every tool (Hot Seat,
   Circuit, Role-play packs, Progress) picks them up.
   Load AFTER sca-cases.js and sca-extras.js, BEFORE sca-practice.js.
   ============================================================ */

(function(){

  const c11 = {
    id:'zopiclone-fall', title:'The sleeping tablet repeat', type:'video', duration:12,
    meta:{ age:76, sex:'F', setting:'Booked after reception flagged an early repeat request.', system:'Prescribing / Older adults' },
    brief:'Mrs Jean Hardcastle, 76, joins a video consultation (set up with her daughter\'s help) to ask for her zopiclone repeat "and something a bit stronger if possible". She has taken zopiclone 7.5 mg nightly for 12 years, started after her husband Arthur died. Last week she fell getting up to the toilet at 3am — bruised hip, no fracture (seen in UTC). PMH: hypertension, OA hands. Meds: amlodipine 5 mg, zopiclone 7.5 mg. Lives alone, daughter nearby. The repeat is two weeks early.',
    script:{
      opening:'"It\u2019s just my sleeping tablets, doctor. The chemist said I had to see you. And between you and me — they\u2019re not working like they used to. My friend Brenda gets the blue ones, temazepam — could I try those?"',
      facts:[
        { topic:'The fall',          text:'Fell last Tuesday at 3am on the way to the toilet. "My legs just weren\u2019t under me." Bruised hip and shoulder; X-ray clear. First fall, but she\u2019s felt "woozy" at night for months.' },
        { topic:'Sleep pattern',     text:'Takes the tablet at 9.30pm, asleep by 10.30, wakes at 2–3am most nights and lies awake. Naps in the chair most afternoons. Believes without the tablet she would "never sleep again".' },
        { topic:'Usage',             text:'Has crept up: occasionally takes "a half extra" when wakeful at 3am — which is why the repeat is early. Embarrassed when this surfaces.' },
        { topic:'Why it started',    text:'Started the month Arthur died, 12 years ago. "Dr Pearson said it would just be for a few weeks." Nobody has ever reviewed it since.' },
        { topic:'Evenings & mood',   text:'Evenings are the hard part — "the house gets very quiet at nine o\u2019clock". Not depressed by her account: enjoys church, bowls club Tuesdays, the grandchildren. But dreads the nights.' },
        { topic:'Alcohol / caffeine', text:'Sherry "most evenings, just the one". Tea all day including with supper. Watches TV in bed when wakeful.' },
      ],
      ice:{
        ideas:'The tablets have "stopped working" and a stronger one would fix the waking.',
        concerns:'Terrified of nights without a tablet — "I lie there thinking about Arthur". Quietly shaken by the fall but hasn\u2019t connected it to the zopiclone.',
        expectations:'A repeat today, ideally something stronger. Definitely not "being told off".'
      },
      cues:['"The house gets very quiet at nine o\u2019clock" — the loneliness behind the insomnia.','Looks down and goes quiet when the early repeat is mentioned — shame, not deceit.','"I don\u2019t want to end up doddery like my sister" — fear of falling and of decline, the lever for change.']
    },
    checkpoints:[
      { dom:'tasks', text:'Connects the fall to the zopiclone explicitly (sedative-hypnotics roughly double fall risk in over-65s) and checks orthostatic symptoms / reviews amlodipine timing' },
      { dom:'tasks', text:'Recognises tolerance and dependence after 12 years — names them without blame, and does NOT escalate to temazepam or prescribe "something stronger"' },
      { dom:'tasks', text:'Negotiates a gradual taper (e.g. 7.5 → 3.75 mg alternating, over weeks-to-months) — never abrupt cessation; explicitly warns against stopping suddenly' },
      { dom:'tasks', text:'Offers what replaces the tablet: sleep-restriction/CBT-I principles, caffeine and sherry timing, no TV in bed, afternoon nap capped' },
      { dom:'rto',   text:'Hears the grief and the quiet house — the insomnia is partly loneliness, and says so kindly' },
      { dom:'rto',   text:'Handles the early-repeat shame gently — curiosity, not accusation' },
      { dom:'rto',   text:'Uses HER motivation (fear of falls, "doddery like my sister") as the engine of the taper, not the GP\u2019s agenda' },
      { dom:'gs',    text:'Safety-nets the taper: rebound insomnia for a fortnight is expected and temporary; falls advice (light on, sit on bed edge first); books named follow-up in 2–4 weeks' },
    ],
    worked:[
      { lbl:'Reframe, don\u2019t refuse',  txt:'"I\u2019m not going to take your tablet away today. But the fall changes things — these tablets and 3am legs are a known bad mix, and I\u2019d be a poor doctor if I just made them stronger."' },
      { lbl:'Name the tolerance',     txt:'"After twelve years the tablet isn\u2019t really giving you sleep any more — your body has learned it. What it IS still doing is the wooziness that put you on the floor last week."' },
      { lbl:'The early repeat',       txt:'"Lots of people take an extra half at 3am — you\u2019re not in trouble. It tells me the tablet has stopped doing its job, not that you\u2019ve done something wrong."' },
      { lbl:'Hear the nights',        txt:'"Tell me about nine o\u2019clock. What would a good evening look like, if the house weren\u2019t so quiet?"' },
      { lbl:'Her lever',              txt:'"You said it yourself — you don\u2019t want to end up like your sister. The single best fall-prevention step you can take is the one we\u2019ve just talked about."' },
      { lbl:'Safety-net',             txt:'"The first two weeks of cutting down, sleep gets briefly worse before it resets — that\u2019s the tablet leaving, not your insomnia returning. If you\u2019re struggling, ring me rather than ride it out alone. I want to see you in three weeks either way."' },
    ],
    learning:'Z-drugs and benzodiazepines in over-65s roughly double fall and fracture risk, and tolerance makes long-term use ineffective for sleep. The exam skill is deprescribing as a negotiation: validate the fear, harness the patient\u2019s own motivation, taper slowly (never stop abruptly), and replace the tablet with something — CBT-I principles and attention to the loneliness driving the 3am waking. Escalating to temazepam is the station\u2019s trapdoor.',
    knowledge:{
      guideline:'NICE TA77 / CKS Insomnia · BNF sedative-hypnotics in elderly · STOPP/START',
      points:[
        { h:'Diagnose the real problem', t:'Twelve years of a z-drug = dependence and tolerance, not "insomnia needing a stronger tablet". The 3am waking with afternoon napping and evening loneliness is a behavioural-circadian pattern the tablet cannot fix.' },
        { h:'Red flags & same-day action', t:'The fall IS the red flag: sedative-related nocturnal falls in a 76-year-old predict fracture. Check orthostatic BP, review all sedating/hypotensive medication, ask about syncope, vision and home hazards.' },
        { h:'Work-up to consider', t:'Falls review: lying/standing BP, medication review (amlodipine timing, OTC sedating antihistamines), gait check, bone health (FRAX — consider DEXA), alcohol units honestly counted (nightly sherry + zopiclone potentiate).' },
        { h:'Manage — the taper', t:'Switch-equivalent then reduce: zopiclone 7.5 → 3.75 mg, or alternate-night stepping, over 4–12 weeks; some need diazepam-equivalent conversion. Pair every reduction with CBT-I elements: fixed rising time, no TV in bed, nap cap, caffeine cut-off 2pm.' },
        { h:'Never do', t:'Never stop abruptly after long-term use (rebound insomnia, anxiety, rarely seizures); never escalate to temazepam/another hypnotic; never prescribe past a fall without a falls-and-meds review.' },
        { h:'Safety-net & follow-up', t:'Warn that sleep transiently worsens for ~2 weeks per step; falls advice for the interim (light on, sit before standing); named review every 2–4 weeks through the taper. Door open if she wobbles — relapse is part of tapering.' },
        { h:'Marking edge', t:'The grief is the engine of the insomnia ("the house gets quiet at nine") and her sister is the engine of change. Candidates who find both convert a medication row into a shared project — that is the Clear Pass.' }
      ]
    }
  };

  const c12 = {
    id:'fit-positive', title:'The positive FIT result', type:'telephone', duration:12,
    meta:{ age:61, sex:'M', setting:'Results call-back — booked by GP after lab report.', system:'Investigations / Lower GI' },
    brief:'Mr Trevor Bailey, 61, is called back to discuss results. He saw the nurse 3 weeks ago with 8 weeks of looser stools and vague lower abdominal discomfort; a FIT test was arranged. Result: FIT 47 \u00b5g Hb/g (threshold \u226510). FBC: Hb 128 (mild anaemia), ferritin 18. PMH: hypertension. His brother died of bowel cancer at 66. He has not yet been told the results.',
    script:{
      opening:'"Hello doctor. Look, before you start — if this is about that sample test, I\u2019m pretty sure it\u2019s just my piles playing up. I\u2019ve had them for years. I\u2019m flat out at work this month, so if we can keep this quick…"',
      facts:[
        { topic:'Bowel habit',       text:'Looser, more frequent stools for ~8 weeks. Goes 2–3 times most mornings, used to be once. Occasional mucus. No black stools. The bright red blood he attributes to piles "same as always".' },
        { topic:'Systemic',          text:'Belt one notch tighter — "maybe half a stone" without trying, which he credits to being busy. More tired than usual; afternoon slumps.' },
        { topic:'Piles history',     text:'Intermittent bright-red bleeding on the paper for 10+ years; GP confirmed haemorrhoids in his 40s. Why he is genuinely, sincerely unconcerned.' },
        { topic:'Brother',           text:'Brother Raymond died of bowel cancer at 66, four years ago — diagnosed late, "they opened him up and closed him again". Trevor stopped going to anything medical around then. He has skipped two NHS bowel-screening kits.' },
        { topic:'Work / life',       text:'Runs a small roofing firm, two employees depend on him. Married, two adult kids. "I can\u2019t be off sick, simple as."' },
        { topic:'If asked directly', text:'No vomiting, no obstruction symptoms. Appetite slightly down. No urinary symptoms. Never had a colonoscopy.' },
      ],
      ice:{
        ideas:'It\u2019s piles — it has always been piles. The test probably "picked up the piles blood".',
        concerns:'Underneath: Raymond. He watched his brother die badly and is managing the terror by not looking at it. "If it\u2019s what he had, I don\u2019t want to know" — said only if real trust is built.',
        expectations:'A quick reassuring call. Maybe some cream. Definitely not a camera test — he\u2019s heard "they go in and find what they find".'
      },
      cues:['"If we can keep this quick" — the armour goes on before the result is even given.','Mentions Raymond only obliquely at first: "my brother had no luck with his insides".','Long silence after the result is given straight — do not fill it too fast.']
    },
    checkpoints:[
      { dom:'tasks', text:'Gives the result plainly and early — a number, what the test measures, and that 47 with his symptoms needs urgent investigation; does NOT bury it in small talk' },
      { dom:'tasks', text:'Recognises NICE NG12 criteria are met several ways over (FIT \u226510 \u00b5g Hb/g with bowel-habit change; weight loss; iron-deficiency anaemia 60+) and arranges a 2-week-wait lower-GI referral on this call' },
      { dom:'tasks', text:'Does not allow the piles explanation to stand: haemorrhoids do not cause weight loss, iron deficiency or 8 weeks of looser stools — says so clearly but kindly' },
      { dom:'tasks', text:'Explains colonoscopy honestly — what it involves, sedation, that most FIT-positive patients do NOT have cancer, and that finding things early is the entire point' },
      { dom:'rto',   text:'Finds Raymond — and lets the real fear ("diagnosed late, opened and closed") be said out loud before countering it' },
      { dom:'rto',   text:'Reframes against the brother\u2019s story: Raymond was diagnosed late BECAUSE he wasn\u2019t tested; this test exists so Trevor\u2019s story can be different' },
      { dom:'rto',   text:'Addresses work concretely — the referral timeline, what can flex, that two employees need him alive more than they need him this fortnight' },
      { dom:'gs',    text:'Safety-nets: chase the appointment if not heard within a week; A&E for heavy bleeding, obstruction symptoms; books a named follow-up call and confirms his number' },
    ],
    worked:[
      { lbl:'The result, straight',   txt:'"The test looks for invisible blood in the stool. Yours came back at 47 — the level where we investigate is 10. With the change in your bowels and the weight loss, this needs looking at properly and quickly. I want to refer you on the urgent two-week pathway today."' },
      { lbl:'Dismantle "piles", kindly', txt:'"You might be right that the piles contribute. But piles don\u2019t make you lose half a stone, they don\u2019t drop your iron, and they don\u2019t change your mornings for eight weeks. Something else is going on, and I\u2019d be failing you if I put it all on the piles."' },
      { lbl:'Find Raymond',           txt:'"You mentioned your brother\u2019s insides. Tell me what happened to Raymond — because I suspect he\u2019s in this phone call with us."' },
      { lbl:'Reframe the fear',       txt:'"Raymond\u2019s story went the way it did because it was found late. This test is how we make your story a different one. Most people with your result don\u2019t have cancer — and the ones who do, found at this stage, are very often cured."' },
      { lbl:'The work objection',     txt:'"It\u2019s one morning, with sedation, likely within the fortnight. Your firm can survive a morning. The other road — the one Raymond took — costs a lot more than a morning."' },
      { lbl:'Safety-net',             txt:'"The hospital should contact you within two weeks — if you\u2019ve heard nothing in a week, ring me, don\u2019t sit on it. Heavy bleeding, can\u2019t open your bowels with pain and bloating, or vomiting — that\u2019s A&E, today. And I\u2019m ringing you after the scope either way."' },
    ],
    learning:'NICE NG12: FIT \u226510 \u00b5g Hb/g in a symptomatic adult warrants urgent suspected-cancer (2WW) lower-GI referral — and this man qualifies independently via unexplained weight loss and iron-deficiency anaemia at 60+. The consultation skill is the reframe: the brother\u2019s late diagnosis is the reason FOR the colonoscopy, not against it. Letting "it\u2019s just piles" stand, or softening the urgency to spare his feelings, is how this station is failed.',
    knowledge:{
      guideline:'NICE NG12 (May 2025) — suspected colorectal cancer · BSG/ACPGBI FIT guidance',
      points:[
        { h:'Diagnose the situation', t:'FIT 47 + 8 weeks looser stools + unintentional weight loss + Hb 128 with ferritin 18 in a 61-year-old: this is a suspected-cancer presentation until colonoscopy says otherwise. "Piles" is an anchor, not an explanation.' },
        { h:'Red flags — the NG12 thresholds', t:'2WW lower-GI referral: FIT \u226510 \u00b5g Hb/g with abdominal pain/weight loss/bowel-habit change/IDA; ALSO refer even with negative FIT if rectal mass, anal mass/ulceration, or ongoing strong suspicion. IDA in 60+ is an NG12 criterion in its own right.' },
        { h:'Investigate', t:'Already done: FIT, FBC, ferritin. The referral triggers colonoscopy (gold standard). Do not repeat the FIT to "double-check" — a positive FIT is actioned, never re-tested into silence.' },
        { h:'Refer — say the pathway out loud', t:'Urgent suspected cancer (2-week-wait) lower-GI referral, NICE NG12, sent today during the call. Tell him what the letter says, when the hospital will ring, and what colonoscopy involves (bowel prep, sedation, one morning).' },
        { h:'Manage the human being', t:'Most FIT-positives do not have cancer (~1 in 10 do at this level) — honest base-rate hope. Early-stage colorectal cancer is commonly curable; late diagnosis is what killed Raymond. Screen-avoider pattern: he\u2019s skipped two kits — this call is the system\u2019s last good chance.' },
        { h:'Safety-net', t:'Chase-the-letter instruction (1 week), interim emergency triggers (obstruction: colicky pain, distension, absolute constipation, vomiting; heavy bleeding → A&E), named GP follow-up after the scope regardless of result.' },
        { h:'Marking edge', t:'The silence after the number lands is the consultation\u2019s hinge — hold it. Then find Raymond before selling the colonoscopy. Candidates who reassure too early ("it\u2019s probably nothing") fail the station while being kind.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c11, c12);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {
    'zopiclone-fall': {
      ceg: ['Prescribing & pharmacology', 'Older adults'],
      stem: {
        name: 'Jean Hardcastle', age: '76 years · female',
        pmh: ['Hypertension', 'OA hands', 'UTC attendance last week: fall at home, bruised hip — X-ray no fracture'],
        meds: ['Amlodipine 5 mg OD', 'Zopiclone 7.5 mg ON — on repeat since 2014, last reviewed: never'],
        allergy: 'NKDA',
        recent: '⚠ Pharmacy note: repeat requested 2 weeks early. Reception: patient asks if she can have "something stronger" for sleep. Widowed 2014 (husband Arthur). Lives alone; daughter nearby.',
        reason: 'Medication review — hypnotic repeat.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'She leads with the transaction (repeat + "the blue ones"). Don\u2019t contest it yet — "tell me about your sleep" buys the real story.' },
        { t:'1–5',  h:'History + the fall',    d:'Sleep pattern, the extra halves, the sherry, the naps — and the fall, in detail. The grief origin (Arthur, 2014) and the quiet house surface here if you let them.' },
        { t:'5–6',  h:'Summarise & share',     d:'"Twelve years on, the tablet has stopped giving sleep and started giving falls. I won\u2019t make it stronger — and I won\u2019t snatch it away either."' },
        { t:'6–10', h:'Negotiate the taper',   d:'Her lever (the sister, the fall) drives it. Concrete first step: alternate-night 3.75 mg, fixed rising time, caffeine cut-off, no TV in bed. Falls measures tonight.' },
        { t:'10–12',h:'Safety-net & close',    d:'Rebound insomnia is expected and temporary — say it now or lose her at day four. Review in 3 weeks, named. Door open: "ring me before you give up."' }
      ],
      wordPics: {
        fail: 'Issues the repeat (or temazepam) to keep the peace — or refuses flatly and lectures about addiction; never asks about the fall; the early repeat is treated as misbehaviour; Arthur and the quiet house never surface; no follow-up.',
        pass: 'Links the fall to the zopiclone; declines escalation with a reason; proposes a gradual taper with sleep-hygiene replacement; acknowledges the grief; warns against abrupt cessation; books review.',
        exc:  'Converts the consultation from a prescription dispute into a shared falls-prevention project using HER fears as the engine; handles the early-repeat shame with visible kindness; the taper plan is concrete (doses, steps, dates) with rebound insomnia pre-framed; the loneliness gets a plan too — evening structure, bowls, the daughter; named review booked.'
      },
      avoid: [
        { dont:'"These tablets are addictive and at your age they\u2019re dangerous — we need to get you off them."', instead:'"These tablets put you on the floor last Tuesday. I\u2019d like to get the sleep without the falls — and there is a way to do that, gently."', why:'The lecture triggers defence of the only thing that gets her through the night; the fall reframed as their shared enemy recruits her.' },
        { dont:'"Why are you taking extra ones? That\u2019s not how they\u2019re prescribed."', instead:'"Lots of people end up taking a half extra at 3am — it tells me the tablet\u2019s stopped working, not that you\u2019ve done wrong."', why:'Shame closes the only honest channel you have; normalising keeps it open.' },
        { dont:'"Have you tried a nice milky drink and some sleep hygiene?"', instead:'"The hours after nine are the real problem, aren\u2019t they — the quiet. Let\u2019s plan the evening, not just the night."', why:'Leaflet-grade advice insults twelve years of bad nights; naming the loneliness is the actual treatment.' }
      ]
    },
    'fit-positive': {
      ceg: ['Investigations & results', 'Long-term conditions & cancer'],
      stem: {
        name: 'Trevor Bailey', age: '61 years · male',
        pmh: ['Hypertension', 'Haemorrhoids (confirmed age 47)', 'Brother died of colorectal cancer age 66 (2022)'],
        meds: ['Ramipril 5 mg OD'],
        allergy: 'NKDA',
        recent: '⚠ Results for action: FIT 47 µg Hb/g (threshold ≥10). Hb 128 g/L, ferritin 18 µg/L. Requested after nurse appt (8/52 looser stools, lower abdo discomfort). NHS bowel screening: 2 kits not returned. Patient unaware of results.',
        reason: 'Telephone call-back — abnormal results.'
      },
      timeMap: [
        { t:'0–1',  h:'Open & listen',        d:'He opens with armour: "it\u2019s piles, keep it quick". Note it, don\u2019t fight it. Set the agenda honestly: "the result needs a proper conversation — I have the time if you do."' },
        { t:'1–4',  h:'The result + the story', d:'Give the number early and plainly. Then re-take the history he minimised: stools, the half stone, the tiredness, the skipped screening kits. Hold the silence after the number.' },
        { t:'4–6',  h:'Find Raymond',          d:'"My brother had no luck with his insides" — go through that door. The fear of dying like Raymond is the actual obstacle to the colonoscopy.' },
        { t:'6–10', h:'Refer & reframe',       d:'2WW lower-GI referral (NICE NG12) made today, said out loud. Colonoscopy demystified. The reframe: Raymond was found late; this is how Trevor gets found early. Work logistics solved concretely.' },
        { t:'10–12',h:'Safety-net & close',    d:'Chase-the-letter rule (1 week). A&E triggers: obstruction, heavy bleeding. Named follow-up after the scope. Teach-back: "what will you tell your wife tonight?"' }
      ],
      wordPics: {
        fail: 'Accepts "it\u2019s the piles" and arranges a repeat FIT or routine review; the number is never actually given; Raymond is never explored; the 2WW pathway is not named or is left "for him to think about"; call ends with the patient reassured and unreferred.',
        pass: 'Gives the result clearly; links FIT + weight loss + anaemia to the need for urgent referral; makes the 2WW referral on the call; explains colonoscopy; touches the brother\u2019s story; basic safety-net.',
        exc:  'The number lands early and the silence afterwards is held; Raymond\u2019s late diagnosis is found and explicitly inverted into the reason FOR testing; honest base-rates carry hope without false reassurance; work objections get practical answers; the chase-the-letter instruction, A&E triggers and a named GP follow-up close it. He hangs up scared but going.'
      },
      avoid: [
        { dont:'"Try not to worry — it\u2019s probably just the haemorrhoids bleeding a little."', instead:'"The piles may be part of it. But piles don\u2019t cause weight loss or low iron — and I won\u2019t gamble your next ten years on \u2018probably\u2019."', why:'False reassurance is the precise mechanism by which this station — and real patients — are lost.' },
        { dont:'"The result was abnormal so we\u2019ll repeat the test in a few weeks to see."', instead:'"A positive result is our signal to look properly, once, with the camera — repeating the stool test just delays the answer."', why:'Re-testing a positive FIT is a recognised real-world error NG12 exists to prevent.' },
        { dont:'"You really should have returned those screening kits."', instead:'"The kits are hard to face when you\u2019ve watched your brother go through it. You\u2019re facing it now — that\u2019s what counts."', why:'Scolding the avoidance reinforces it; absolving it releases him to act.' }
      ]
    }
  });

})();
