/* ============================================================
   Reasoning GP — Case Library batch 13: "The liver result"
   Three ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 noted where a presentation genuinely maps (painless
   jaundice in older patients; haematemesis/upper-GI).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases12.js.
   ============================================================ */

(function(){

  /* ============ 46. VIDEO — Jaundice in a returning traveller ============ */
  const c46 = {
    id:'liver-jaundice-traveller', title:'Yellow, and back from Goa', type:'video', duration:12,
    meta:{ age:26, sex:'M', setting:'Video consultation — jaundice 10 days after returning from travel.', system:'GI / Infective hepatitis' },
    brief:'Mr Jay Mistry, 26, chef in a busy restaurant. Back 12 days from a month backpacking in India/SE Asia. Now jaundiced (yellow eyes for 4 days), dark urine, pale stools, nausea, off food, ache under the right ribs, "wiped out". No fever now. Bloods arranged via e-consult today: ALT 1840, AST 1100, bilirubin 96, ALP mildly up, INR normal. PMH: nil. Meds: none. No regular alcohol excess.',
    script:{
      opening:'"Cheers for seeing me on video — I didn\u2019t want to sit in the waiting room looking like a Simpson. So yeah, I\u2019ve gone proper yellow, my wee\u2019s like Coke and I feel rotten. I figured I picked up some bug travelling. I mainly need to know how long till it clears, because honestly I just need to get back to work — and is there a tablet that speeds it up?"',
      facts:[
        { topic:'The illness',         text:'If explored: prodrome of fever, nausea and aches a couple of weeks ago that he shrugged off; now jaundiced, dark urine, pale stools, RUQ ache, anorexia, profound fatigue. Ate street food and salads constantly, drank local water/ice at times. Picture fits acute viral hepatitis (A or E most likely).' },
        { topic:'The hidden exposure',  text:'HIDDEN AGENDA — reachable only with a non-judgemental sexual/risk history: he had unprotected sex with a couple of new partners on the trip, and got a spur-of-the-moment tattoo in a backpacker town. He is privately terrified this is something blood-borne or sexual (hepatitis B, hepatitis C, HIV) that he\u2019ll have to disclose to his girlfriend back home. The "how long till it clears" is partly a wish that it\u2019s a simple tummy bug.' },
        { topic:'The relationship fear', text:'If reached: been with his girlfriend two years; the trip was "lads before he settles down"; the guilt is enormous and the fear of having to tell her — and of having infected her — is what\u2019s really keeping him awake.' },
        { topic:'The work issue',        text:'He is a CHEF — a food handler — and desperate to get back to work for money. Has not connected that hepatitis A/E is faeco-orally spread and that he must NOT handle food until cleared; sees the question purely as "when can I earn again."' },
        { topic:'What he wants',        text:'Officially: a quick fix and a return-to-work date. Actually: to know whether this is a simple travel bug or something he caught sexually that threatens his relationship and his health — and to be tested and told honestly, without a lecture.' },
      ],
      ice:{
        ideas:'He caught a travel tummy bug that turned his liver yellow; it\u2019ll pass and there might be a tablet to hurry it.',
        concerns:'HIDDEN AGENDA — unprotected sex with new partners and an unsterile tattoo abroad; private terror this is blood-borne/sexual (hep B, hep C, HIV) and that he\u2019ll have to confess to and may have infected his girlfriend.',
        expectations:'A cure and a return-to-work date. Underneath: honest testing and answers about whether this threatens his relationship and his future health.'
      },
      cues:['"How long till it clears / get back to work" — fixed on a quick fix; the worry underneath isn\u2019t voiced yet.','A pause or deflection when asked openly about the trip beyond food — the sex and tattoo waiting to be asked about safely.','"A bug travelling" stated a bit too firmly — the preferred, less-frightening explanation.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises acute hepatitis from the picture and the markedly raised transaminases (ALT >1000) — most likely viral hepatitis A or E given the travel and faeco-oral exposure — and conveys that most acute viral hepatitis is self-limiting, while taking it seriously' },
      { dom:'tasks', text:'Takes a proper exposure history non-judgementally, covering food/water AND the higher-risk routes: unprotected sex, tattoos/piercings, injections/medical/dental procedures, drug use — and so elicits the hidden blood-borne risk' },
      { dom:'tasks', text:'Orders the right work-up: hepatitis A/B/C/E serology, HIV test (with consent), repeat LFTs + INR (synthetic function), and considers other travel causes (malaria film if any fever, lepto, etc.); explains why HIV/hepatitis B and C testing matters given his exposures' },
      { dom:'tasks', text:'Identifies the food-handler public-health duty: acute hepatitis A/E is notifiable and he must NOT handle food or work as a chef until cleared by public health/per guidance — explains this clearly as protecting others, and that household/close contacts may need assessment/vaccination' },
      { dom:'tasks', text:'Screens for red flags of acute liver failure: any confusion/drowsiness (encephalopathy), bruising/bleeding, deepening jaundice, persistent vomiting, rising INR — and knows these mean urgent/same-day hospital assessment' },
      { dom:'rto',   text:'Creates a safe, non-judgemental space that lets the sexual and tattoo exposure — and the relationship fear — be disclosed, rather than taking "just a travel bug" at face value' },
      { dom:'rto',   text:'Handles the partner/disclosure anxiety with compassion and without moralising: explains testing windows honestly, that some results take time, and supports him on if/how to talk to his girlfriend and on her testing' },
      { dom:'gs',    text:'Safety-nets and follows up clearly: alcohol/hepatotoxic-drug avoidance (incl. paracetamol caution dosing), red flags for same-day return, results/serology follow-up arranged, work-exclusion confirmed in writing, and partner-testing/sexual-health signposting' },
    ],
    worked:[
      { lbl:'Take it seriously, calmly', txt:'"You\u2019ve got an inflamed liver — that\u2019s what the yellow, the dark wee and the pale stools mean, and your blood test confirms it. The good news up front: most of the time, when this comes from a travel infection, it settles on its own over a few weeks. But \u2018which infection\u2019 actually matters a lot, so let\u2019s work that out properly rather than guess."' },
      { lbl:'Open the risk history',    txt:'"I ask everyone with this the same full set of questions, no judgement attached, because the cause changes the plan. Food and water abroad, yes — but also: any new sexual partners on the trip, any tattoos or piercings, any injections or procedures? \u2026 Thank you for being straight with me. That\u2019s genuinely useful, not something to feel bad about."' },
      { lbl:'Name the real fear',       txt:'"I get the sense the thing keeping you up isn\u2019t the yellow — it\u2019s wondering whether this is something you caught that you\u2019d have to tell your girlfriend about. Let\u2019s meet that head-on instead of you carrying it alone. We\u2019ll test for the bugs that spread through food, and the ones that spread through sex and blood, so you actually KNOW rather than dread."' },
      { lbl:'Honest about testing',     txt:'"Some of these show up straight away; a couple — like HIV and hepatitis C — have a window where an early test can miss them, so we may repeat them. I\u2019m not going to pretend I can tell you today that everything\u2019s fine. What I can promise is we find out properly, and whatever it is, there\u2019s a plan — these are far more manageable than the 3am version in your head."' },
      { lbl:'The chef conversation',    txt:'"Now the bit you didn\u2019t expect: because the likely cause spreads through food and you\u2019re a chef, you must not handle food or go back to the kitchen until you\u2019re cleared — this type of hepatitis is notifiable and there are rules to protect your customers and colleagues. I know that hits your income, and we\u2019ll sort a sick note and the public-health side together. Your housemates may also need checking or a vaccine."' },
      { lbl:'Safety-net + support',     txt:'"While you recover: no alcohol at all, be careful with painkillers — I\u2019ll tell you exactly what\u2019s safe. If you get confused or drowsy, start bruising or bleeding, can\u2019t keep fluids down, or go more yellow — that\u2019s straight to hospital, don\u2019t wait. I\u2019ll chase your results and see you to go through them. And when you\u2019re ready, we can think together about talking to your girlfriend and her getting tested. You\u2019re not dealing with this on your own."' },
    ],
    learning:'Jaundice in a young returning traveller with ALT >1000 is acute viral hepatitis until proven otherwise — most likely A or E (faeco-oral) given the travel, and usually self-limiting. But the case is built on two things beyond the diagnosis. First, the public-health duty: he is a CHEF, hepatitis A/E is notifiable and faeco-orally spread, so he must be excluded from food handling until cleared and contacts considered for vaccination. Second, the hidden agenda: a non-judgemental risk history reveals unprotected sex and an unsterile tattoo abroad and a terror of blood-borne/sexual infection (hep B, C, HIV) and of confessing to his girlfriend. Test the full panel (with HIV consent and honest windows), screen for acute liver failure red flags, give hepatotoxin/alcohol advice, and support the disclosure and partner-testing with compassion rather than a lecture. (Note: painless jaundice in an OLDER patient is a different animal — an NG12 pancreatic/biliary 2WW pathway — which is why pinning the cause matters.)',
    knowledge:{
      guideline:'NICE CKS jaundice / hepatitis · UKHSA viral hepatitis & notifiable disease guidance · BASHH testing · NICE NG12 (painless jaundice, older patients)',
      points:[
        { h:'Pattern-read the LFTs', t:'Hepatocellular pattern (ALT/AST in the hundreds–thousands ≫ ALP) points to hepatitis (viral, drug/toxin, ischaemic, autoimmune). Marked ALT elevation in a returning traveller = acute viral hepatitis A or E most likely; check synthetic function (INR, albumin) and bilirubin for severity.' },
        { h:'Take the FULL exposure history', t:'Food/water (hep A/E), but also unprotected sex, tattoos/piercings, injections, transfusions, IV drug use (hep B/C, HIV), animal/freshwater contact (lepto), mosquito exposure/fever (malaria). The undisclosed blood-borne/sexual risk is found only by asking openly and without judgement.' },
        { h:'Investigate appropriately', t:'Hepatitis A IgM, E, B (sAg/core), C antibody ± RNA, HIV (with consent); repeat LFTs + INR; malaria films if any fever; consider EBV/CMV and a baseline autoimmune/metabolic screen if unclear. Counsel HIV/HCV testing windows — early tests can miss; repeat as advised.' },
        { h:'Public health: the food-handler duty', t:'Acute hepatitis A (and E) is notifiable to UKHSA. Food handlers, healthcare and childcare workers with hepatitis A must be EXCLUDED from work until cleared per guidance (typically ~7 days after jaundice onset / per UKHSA). Assess close/household contacts for hepatitis A vaccine or immunoglobulin.' },
        { h:'Red flags for acute liver failure', t:'Encephalopathy (confusion, drowsiness, asterixis), coagulopathy/bruising/bleeding, rising INR, intractable vomiting, deepening jaundice → urgent same-day hospital assessment. Avoid alcohol and hepatotoxins; counsel safe paracetamol limits.' },
        { h:'Never do', t:'Never accept "just a travel bug" without a sexual/blood-borne risk history; never miss the food-handler exclusion in a chef; never test for HIV without consent or imply false reassurance during window periods; never moralise about the exposures.' },
        { h:'Safety-net & follow-up', t:'No alcohol, hepatotoxin caution; ALF red flags → same-day hospital; results/serology follow-up booked; work exclusion and notification handled; partner-testing and sexual-health signposting; support around disclosure to his girlfriend.' }
      ]
    }
  };

  /* ============ 47. VIDEO — Raised ferritin: haemochromatosis & the family cascade ============ */
  const c47 = {
    id:'liver-haemochromatosis', title:'"Is it something I\u2019ve passed on?"', type:'video', duration:12,
    meta:{ age:52, sex:'M', setting:'Video consultation — incidental raised ferritin; iron-overload result.', system:'GI / Hereditary haemochromatosis' },
    brief:'Mr Iwan Pryce, 52, Welsh, builder. Ferritin 1180 µg/L on bloods done for fatigue/joint aches; fasting transferrin saturation 78% (high); ALT mildly raised; HbA1c 47; normal FBC/CRP. Genetic test pending. PMH: "achy hands", reduced libido he hasn\u2019t mentioned. Alcohol ~20 units/week. Two adult children (24, 21); one brother. Booked to discuss "the iron result".',
    script:{
      opening:'"So the nurse said my iron\u2019s sky high and you\u2019d explain. I\u2019ll be honest, I went straight online and now I\u2019m worried I\u2019ve got some sort of iron disease — and then I read it can be passed down, and that\u2019s the bit that\u2019s really getting me, because if I\u2019ve got it, have I given it to my kids? My son\u2019s 24. Have I done that to him without knowing?"',
      facts:[
        { topic:'The symptoms',        text:'If explored: tired for a couple of years, aching hands/knuckles (2nd/3rd MCP joints), reduced libido and erectile difficulties he\u2019s been too embarrassed to raise, skin "tans easily even in a Welsh winter". All quietly attributed to "getting older / the job".' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA — the guilt of inheritance. His real distress is not his own health but the fear he has passed a disease to his two children and that it\u2019s "his fault". He half-knows his late father had "liver trouble" and "bronze" skin, never diagnosed, died at 60 — and now wonders if he ignored a clue he should have acted on.' },
        { topic:'The father',           text:'If reached: father had diabetes, "went a funny colour", and heart failure; family always said it was the drink. Iwan now suspects it was this, undiagnosed — and is frightened of repeating it and of having handed it on.' },
        { topic:'The minimised alcohol', text:'~20 units/week he initially downplays; relevant because alcohol compounds iron-related liver injury — needs addressing without making the whole thing about drinking (which would echo the family\u2019s wrong story about his dad).' },
        { topic:'What he wants',        text:'Officially: an explanation of the iron result. Actually: to know whether he\u2019s harmed his children, whether this is treatable, whether he\u2019s repeating his father\u2019s death — and reassurance that something can be done.' },
      ],
      ice:{
        ideas:'He has "an iron disease" that is inherited and may already have damaged him and been passed to his kids.',
        concerns:'HIDDEN AGENDA — guilt and fear about hereditary transmission to his two adult children ("have I done that to him?"), shadowed by a father who likely had the same undiagnosed condition and died at 60.',
        expectations:'An explanation and, underneath, reassurance that it\u2019s treatable, that his children can be tested/protected, and that he isn\u2019t simply repeating his father\u2019s fate.'
      },
      cues:['"Have I given it to my kids?" — the consultation is about the family cascade and guilt as much as his own diagnosis.','Aching MCP joints + tanned skin + low libido + diabetes-range HbA1c — the haemochromatosis constellation hiding in "getting older".','Alcohol downplayed and tied to the father\u2019s story — handle without making it the whole narrative.']
    },
    checkpoints:[
      { dom:'tasks', text:'Explains the result clearly: very high ferritin with high transferrin saturation indicates iron overload, most likely hereditary haemochromatosis (genetic, often HFE) — and frames it as a common, treatable condition, not a cancer or a death sentence' },
      { dom:'tasks', text:'Connects his "ageing" symptoms to the diagnosis: fatigue, MCP-joint arthralgia, skin pigmentation, reduced libido/ED, dysglycaemia — validating that these were the iron, not just age, and that treatment can help several of them' },
      { dom:'tasks', text:'Addresses the central hidden agenda directly and accurately: it IS inherited (autosomal recessive HFE), so first-degree relatives — his two children and his brother — should be offered genetic testing and iron studies; but reframes guilt — he could not have known, it is no one\u2019s fault, and CASCADE testing means any affected relative is caught early and protected' },
      { dom:'tasks', text:'Explains treatment and prognosis honestly: regular venesection is effective, often normalises iron and improves symptoms/outcomes, and early treatment prevents the complications (cirrhosis, diabetes, cardiomyopathy); arranges genetic confirmation and assessment of organ impact (LFTs/fibrosis assessment, consideration of liver imaging/specialist referral)' },
      { dom:'tasks', text:'Handles alcohol proportionately: advises minimising/avoiding alcohol because it compounds iron-related liver damage — without reducing the whole diagnosis to drinking (which would repeat the family\u2019s mislabelling of his father)' },
      { dom:'rto',   text:'Recognises that the guilt about his children is the emotional core and responds to it first, rather than burying it in iron physiology' },
      { dom:'rto',   text:'Gently explores and validates the father connection and the embarrassment-laden symptoms (libido/ED), making it safe to discuss' },
      { dom:'gs',    text:'Safety-nets and plans: genetic test + organ-assessment results follow-up, referral as needed (hepatology/haematology), cascade testing for children and brother explained and supported, HCC-surveillance awareness if cirrhosis is found, and a clear next-review — leaving him with hope and a concrete cascade plan' },
    ],
    worked:[
      { lbl:'Name it and defuse it', txt:'"Let\u2019s take the scary word off the table first. Your body is storing too much iron, and the most likely reason is a condition called haemochromatosis. I know \u2018disease\u2019 and \u2018genetic\u2019 sound frightening, but here\u2019s the headline: it\u2019s common, it\u2019s very treatable, and it is NOT cancer. People do well when it\u2019s found — and yours has been found."' },
      { lbl:'Reconnect the symptoms', txt:'"And actually this might explain things you\u2019ve been blaming on age: the achy knuckles, feeling wiped out, tanning easily, and — tell me if I\u2019m right — maybe things being a bit flat in the bedroom? Those can all be the iron, not just getting older. Treating it can help with several of them."' },
      { lbl:'The children, head-on',  txt:'"Now the thing that\u2019s really frightening you — your kids. Yes, this runs in families, so your son, your daughter and your brother should all be offered a simple blood and gene test. But hear me on the guilt: you could not possibly have known, and this is nobody\u2019s fault. The opposite of guilt is what we\u2019re doing right now — because you\u2019ve been diagnosed, we can check them EARLY, and anyone affected gets protected long before any harm. You haven\u2019t handed them a fate; you\u2019ve handed them a head start."' },
      { lbl:'The father, gently',     txt:'"You mentioned your dad — diabetes, a funny colour, heart trouble, blamed on the drink. It\u2019s very possible he had exactly this, undiagnosed, in an era when nobody tested for it. That\u2019s not you having missed something — and it\u2019s precisely why catching it in you, and in your children, changes the story."' },
      { lbl:'Treatment + alcohol',    txt:'"The treatment is almost old-fashioned in how simple it is: we remove blood regularly — like donating — to bring the iron down, and it works. To confirm it we\u2019ll do the gene test and check how your liver is doing. One honest thing: alcohol adds to the strain on an iron-loaded liver, so cutting right down really helps — that\u2019s about protecting your liver, not a comment on your character or your dad\u2019s."' },
      { lbl:'Cascade plan + net',     txt:'"So: I\u2019ll confirm the genetics, check your liver properly and likely involve a specialist for the venesection. I\u2019ll give you the information to pass to your son, daughter and brother so they can get tested — and I\u2019m happy to see them too. We\u2019ll keep an eye on your liver long-term. You came in afraid you\u2019d harmed your family. What\u2019s actually happened is you\u2019ve given them the chance to never get ill from this. That\u2019s a good day, even if it doesn\u2019t feel like it yet."' },
    ],
    learning:'A very high ferritin with high transferrin saturation is iron overload — most likely hereditary haemochromatosis — and the constellation often hides as "ageing": fatigue, MCP arthralgia, bronze skin, reduced libido/ED, dysglycaemia. It is common, treatable with venesection, and good outcomes follow early detection. The examinable core is the hidden agenda: the patient\u2019s distress is not his own health but GUILT about hereditary transmission to his children, shadowed by a father who likely had it undiagnosed. Handle the genetics accurately (autosomal recessive HFE; first-degree relatives offered genetic + iron-study cascade testing) while actively reframing the guilt — he could not have known, and diagnosis means his relatives are caught early and protected. Address alcohol proportionately (it compounds liver injury) without reducing the diagnosis to drinking and repeating the family\u2019s mislabelling, assess organ impact, and consider HCC surveillance if cirrhosis is present.',
    knowledge:{
      guideline:'NICE CKS haemochromatosis · BSG/EASL iron-overload guidance · genetic cascade-testing principles',
      points:[
        { h:'Interpret the iron studies', t:'Raised ferritin is non-specific (inflammation, alcohol, metabolic, malignancy) — the discriminator is fasting TRANSFERRIN SATURATION. High ferritin + high transferrin sat (>~45–50%) suggests iron overload/haemochromatosis; confirm with HFE genotyping (C282Y homozygosity most common in Northern European/Celtic populations).' },
        { h:'Recognise the multi-system picture', t:'Fatigue, arthralgia (classically 2nd/3rd MCP joints), skin pigmentation ("bronze"), hypogonadism/ED, diabetes, hepatomegaly/deranged LFTs, cardiomyopathy/arrhythmia. Often mislabelled as ageing or alcohol for years.' },
        { h:'The family cascade — the heart of this case', t:'Hereditary haemochromatosis is autosomal recessive. Offer first-degree relatives (children, siblings, parents) genetic testing and iron studies. Frame positively: diagnosis enables early detection and prevention in relatives. Address inheritance guilt explicitly — it could not have been known and is no one\u2019s fault.' },
        { h:'Treatment and organ assessment', t:'Venesection is effective — regular removal of blood until iron normalises, then maintenance; improves fatigue, skin, glycaemia and prevents progression. Assess liver impact (LFTs, fibrosis assessment/elastography, imaging) and other organs; refer hepatology/haematology as needed. If cirrhosis is present, enrol in HCC surveillance (the iron-overload cancer risk).' },
        { h:'Alcohol — proportionate, not the whole story', t:'Advise minimising/avoiding alcohol as it compounds iron-related hepatic injury — but do not reduce the diagnosis to "drinking", which both misframes the disease and may echo a family\u2019s wrong narrative about an affected parent.' },
        { h:'Never do', t:'Never read a high ferritin as cancer without transferrin saturation/context; never miss the haemochromatosis constellation as "ageing"; never leave the inheritance guilt unaddressed; never fail to arrange cascade testing; never make it solely an alcohol consultation.' },
        { h:'Safety-net & follow-up', t:'Genetic confirmation + organ-assessment results; specialist referral for venesection; cascade testing for children and siblings (with support/information); HCC surveillance if cirrhotic; alcohol advice; defined review.' }
      ]
    }
  };

  /* ============ 48. VIDEO — The deteriorating drinker who needs same-day action ============ */
  const c48 = {
    id:'liver-deteriorating-drinker', title:'"I\u2019m stopping on Monday, on my own"', type:'video', duration:12,
    meta:{ age:47, sex:'M', setting:'Video consultation — heavy drinker, "wants to cut down".', system:'Urgent / Alcohol — withdrawal & decompensation' },
    brief:'Mr Sean Doherty, 47, scaffolder, off work 3 months. Drinks ~½ bottle of vodka + cans daily for years; recent escalation. Booked online: "need help cutting down the drink." On the call he looks unwell — jaundiced tinge, tremulous, says he had "a couple of shakes and sweats" this morning until he had a drink. Mentions, almost in passing, he\u2019s decided to quit cold turkey on Monday. Last bloods (months ago): MCV high, ALT/AST raised, low platelets.',
    script:{
      opening:'"Right, I\u2019ll not waste your time — I know the drink\u2019s out of hand and I\u2019m done with it. I\u2019ve decided: Monday, that\u2019s it, I\u2019m stopping dead, no more. I just wanted to tell someone official so it\u2019s real. I don\u2019t need rehab or any of that, I\u2019ve got the willpower this time. So really I\u2019m just letting you know — unless there\u2019s a tablet that helps with the willpower?"',
      facts:[
        { topic:'The dependence',      text:'If explored: drinks first thing to stop the shakes (relief drinking), morning sweats/tremor, anxiety, has had a "fit" once years ago during a previous attempt to stop suddenly. This is physical alcohol dependence — abrupt unplanned cessation risks withdrawal seizures and delirium tremens.' },
        { topic:'The hidden bleed',     text:'HIDDEN AGENDA / red flag — reachable with direct questioning: twice this week he vomited "coffee-ground" / some bright blood, and his stools have been "black and sticky". He\u2019s terrified this means cancer or that he\u2019s "dying inside", so he\u2019s told no one and is minimising it. This is a possible variceal/upper-GI bleed — an EMERGENCY hiding under the "cutting down" agenda.' },
        { topic:'Decompensation signs',  text:'If asked/observed: yellow tinge, ankle swelling, abdomen "bloated", more forgetful/muddled this week (his partner says he\u2019s "vague"). Possible decompensated liver disease (jaundice, ascites, early encephalopathy).' },
        { topic:'The despair',          text:'If reached gently: the "Monday, on my own" plan is partly bravado over fear; he\u2019s frightened, ashamed, his partner has threatened to leave, and there\u2019s a flicker of "everyone\u2019d be better off" — needs a sensitive risk/mood screen.' },
        { topic:'What he wants',        text:'Officially: to announce he\u2019s quitting and maybe get a "willpower tablet". Actually: to be made safe — he is closer to a withdrawal seizure and a serious bleed than he realises — and to be met with help, not judgement, for a problem that frightens him.' },
      ],
      ice:{
        ideas:'Willpower is all he needs; stopping abruptly on his own on Monday is the responsible plan; maybe a tablet helps.',
        concerns:'HIDDEN AGENDA — a concealed upper-GI bleed (coffee-ground vomit, melaena) he\u2019s hiding from fear it\u2019s cancer/dying; plus shame, a relationship in crisis, and a flicker of hopelessness.',
        expectations:'To be told to go ahead and stop. What he actually needs: recognition that abrupt cessation is dangerous in dependence, urgent assessment of a possible bleed and decompensation, and compassionate help with detox and mood.'
      },
      cues:['"I\u2019m stopping dead, on my own, Monday" — in physical dependence this is dangerous, not admirable; do not simply praise it.','Morning shakes relieved by drinking + a past "fit" — physical dependence with seizure risk.','"Black sticky stools / brought up some blood" mentioned almost as an aside — the emergency hiding under the stated agenda.']
    },
    checkpoints:[
      { dom:'tasks', text:'Identifies the concealed upper-GI bleed as an EMERGENCY: coffee-ground/fresh haematemesis + melaena in a likely-cirrhotic drinker suggests variceal or other upper-GI bleeding — arranges immediate emergency admission (999/acute medical/upper-GI), not a routine plan' },
      { dom:'tasks', text:'Recognises physical alcohol DEPENDENCE and the danger of abrupt unplanned cessation: relief drinking, morning tremor/sweats, prior withdrawal seizure → abrupt stopping risks seizures and delirium tremens; does NOT simply endorse "stopping dead on Monday on his own"' },
      { dom:'tasks', text:'Assesses for decompensated liver disease and encephalopathy: jaundice, ascites/abdominal swelling, ankle oedema, confusion/vagueness — and factors these into urgency and admission' },
      { dom:'tasks', text:'Explains safe alcohol withdrawal management: medically-supported detox (community or inpatient depending on risk — inpatient/urgent given seizure history, decompensation and the bleed), the role of benzodiazepine regimens and thiamine (Pabrinex/oral) to prevent Wernicke\u2019s — rather than a "willpower tablet"' },
      { dom:'tasks', text:'Carries out a sensitive risk/mood assessment: shame, relationship breakdown, hopelessness and any suicidal ideation — and responds appropriately to the flicker of "everyone\u2019d be better off"' },
      { dom:'rto',   text:'Reframes "stopping on my own" without crushing his motivation: harnesses the readiness to change while making clear that doing it safely, with support, is what protects him — turning bravado into a real, supported plan' },
      { dom:'rto',   text:'Responds to the concealed bleed and the fear behind it (cancer/dying) with calm seriousness and compassion, so he accepts urgent care rather than fleeing it' },
      { dom:'gs',    text:'Acts on the emergency now and scaffolds the rest: immediate admission for the bleed/decompensation, thiamine, alcohol-team/detox referral, mood/safeguarding follow-up, and partner/social support — a coordinated plan, not a leaflet' },
    ],
    worked:[
      { lbl:'Catch the red flag',    txt:'"Sean, before anything else — you mentioned bringing up something dark and your stools going black and sticky. I need to stop you there, because that can mean bleeding inside, and with your liver that\u2019s something we treat as an emergency today, not Monday. I\u2019m really glad you said it, even in passing. Tell me exactly how much and when."' },
      { lbl:'Don\u2019t praise the plan', txt:'"I can hear how ready you are to stop, and that genuinely matters — but I have to be honest with you, because it could save your life: when someone\u2019s body is as used to alcohol as yours is, stopping dead on your own can cause fits and a dangerous confused state. You\u2019ve even had a fit before stopping suddenly. So we don\u2019t cancel your plan — we make it SAFE, with support and medication, so it actually works and doesn\u2019t harm you."' },
      { lbl:'Check the liver signs',  txt:'"Can I check a few things — the yellow tinge, your tummy feeling bloated, your ankles, and your partner saying you\u2019ve been a bit vague this week? Those tell me your liver\u2019s under real strain right now, which is another reason today needs to be about getting you assessed properly, not waiting."' },
      { lbl:'Safe detox, not willpower', txt:'"There isn\u2019t a \u2018willpower tablet\u2019 — and the fact you need a drink in the morning to stop the shakes isn\u2019t weak willpower, it\u2019s your body being physically dependent, which is a medical thing we treat. Safe stopping uses medication to cover the withdrawal and vitamin B1 to protect your brain. Done right, with the alcohol team, you get through the dangerous bit and out the other side."' },
      { lbl:'Open the despair',       txt:'"This sounds like it\u2019s been a brutal few months — off work, things hard at home. When people are this low, sometimes the thought comes that everyone\u2019d be better off without them. Has anything like that crossed your mind? \u2026 Thank you for telling me. You\u2019re not a burden, and you\u2019re not doing this alone from here."' },
      { lbl:'Coordinated plan',       txt:'"So here\u2019s what happens now: because of the bleeding and how your liver\u2019s doing, I\u2019m arranging for you to be seen in hospital today — that\u2019s the urgent bit. They\u2019ll keep you safe through stopping the alcohol too, with the right medication and vitamins. I\u2019ll link you with the alcohol team and make sure your mood and your home situation are part of the plan. You came in to tell someone you\u2019re done with the drink — and I\u2019m going to make sure that decision doesn\u2019t cost you your life on the way."' },
    ],
    learning:'"I want to cut down" can conceal two emergencies. First, the hidden red flag: coffee-ground/fresh haematemesis and melaena in a likely-cirrhotic drinker is a possible variceal bleed — an immediate admission, not a routine plan; it hides here because the patient is terrified it means cancer. Second, the danger in his stated plan: physical alcohol dependence (relief drinking, morning tremor, a prior withdrawal seizure) makes abrupt unplanned cessation hazardous — seizures and delirium tremens — so "stopping dead on Monday on my own" must be redirected to medically-supported detox with benzodiazepines and thiamine (Wernicke\u2019s prevention), not praised. Add assessment for decompensation (jaundice, ascites, encephalopathy) and a sensitive risk/mood screen (shame, relationship crisis, hopelessness). The skill is to catch the bleed, refuse to endorse unsafe self-detox without crushing motivation, act on the emergency today, and wrap the patient in coordinated, compassionate care.',
    knowledge:{
      guideline:'NICE CG100/CG115 alcohol-use disorders · NICE NG12 (haematemesis/upper-GI) · SIGN/BSG variceal bleeding · Wernicke\u2019s prevention (thiamine)',
      points:[
        { h:'Find the emergency under "cutting down"', t:'Haematemesis (coffee-ground or fresh) and melaena (black, tarry, sticky stools) in a chronic drinker with likely cirrhosis suggest variceal or peptic upper-GI bleeding — a medical emergency needing immediate admission. Patients minimise it from fear; ask directly about vomiting blood and stool colour.' },
        { h:'Recognise physical dependence', t:'Relief/morning drinking to stop tremor and sweats, escalating tolerance, and prior withdrawal seizures indicate physical dependence. Abrupt, unsupported cessation risks withdrawal seizures and delirium tremens (potentially fatal). Never simply endorse "stopping dead on my own".' },
        { h:'Assess decompensation', t:'Jaundice, ascites/abdominal distension, peripheral oedema, and confusion/encephalopathy (vagueness, asterixis) signal decompensated liver disease and raise urgency. Combined with a bleed, this is same-day hospital territory.' },
        { h:'Safe withdrawal management', t:'Medically-assisted detox: benzodiazepine regimen (e.g. chlordiazepoxide) titrated to withdrawal severity; thiamine (parenteral Pabrinex then oral) to prevent Wernicke\u2019s encephalopathy. Inpatient/urgent detox if seizure history, decompensation, acute bleed, or high-risk — not a community plan here. There is no "willpower tablet"; relapse-prevention agents come later.' },
        { h:'Screen mood and risk', t:'Heavy-drinking crises carry high suicide risk; explore shame, relationship breakdown, hopelessness and suicidal ideation sensitively, and respond/safeguard appropriately. Harness motivation to change without endorsing an unsafe method.' },
        { h:'Never do', t:'Never miss haematemesis/melaena as an aside; never praise abrupt self-detox in dependence; never treat this as a routine "cut down" consultation; never offer a "willpower tablet"; never skip the mood/risk screen.' },
        { h:'Safety-net & follow-up', t:'Immediate admission for the bleed/decompensation; thiamine; alcohol-team/detox referral; mood and safeguarding follow-up; partner/social support engaged — a coordinated emergency-plus-recovery plan.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c46, c47, c48);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'liver-jaundice-traveller': {
      ceg: ['Urgent & unscheduled care', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Jay Mistry', age: '26 years · male',
        pmh: ['Previously well', 'Back 12 days from a month in India/SE Asia', 'Bloods: ALT 1840, AST 1100, bilirubin 96, ALP mildly raised, INR normal'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Jaundice 4 days, dark urine, pale stools, nausea, RUQ ache. Works as a chef (food handler).',
        reason: 'Video consultation — jaundice after travel.'
      },
      timeMap: [
        { t:'0–2',  h:'Calm seriousness',    d:'Acute hepatitis (yellow, dark urine, pale stools, ALT >1000) — most likely A/E from travel and usually self-limiting. Take it seriously without alarming.' },
        { t:'2–5',  h:'Full risk history',    d:'Food/water AND sex, tattoos, piercings, injections, drug use — asked openly, no judgement. This surfaces the unprotected sex and the tattoo, and the partner fear.' },
        { t:'5–7',  h:'Name the real fear',   d:'The worry isn\u2019t the yellow — it\u2019s whether he caught something sexual to confess to his girlfriend. Meet it head-on; test A/B/C/E + HIV (consent), honest about windows.' },
        { t:'7–10', h:'The chef duty',        d:'Hepatitis A/E is notifiable and faeco-oral — he must NOT handle food until cleared; contacts may need vaccine. Sick note + public health handled together.' },
        { t:'10–12',h:'Safety-net + support',  d:'No alcohol, paracetamol caution; ALF red flags (confusion, bleeding, deepening jaundice) → same-day hospital; results follow-up; partner-testing and disclosure support.' }
      ],
      wordPics: {
        fail: 'Diagnoses "a travel bug", reassures it\u2019ll pass, never takes a sexual/blood-borne history so HIV/hep B/C go untested and the partner fear stays hidden; misses that a chef must be excluded from food handling; no ALF red flags, no notification.',
        pass: 'Recognises acute viral hepatitis, orders the serology panel incl. HIV with consent, gives the food-handler exclusion and notification, and safety-nets for liver failure.',
        exc:  'Takes a genuinely non-judgemental full-risk history that surfaces the sex and tattoo and the relationship terror; meets that fear directly and honestly (windows, support, partner testing) without moralising; handles the chef public-health duty clearly; screens ALF red flags; and leaves him tested, safe, excluded-from-work appropriately, and not carrying the disclosure alone.'
      },
      avoid: [
        { dont:'"It\u2019s probably just a travel tummy bug that\u2019s affected your liver — it\u2019ll settle."', instead:'"It\u2019s an inflamed liver from a travel infection and usually settles — but WHICH infection matters, so let\u2019s test properly, including the ones that spread through sex and blood."', why:'Settling for "travel bug" skips the sexual/blood-borne history and the hidden fear that is the real consultation.' },
        { dont:'"Did you do anything risky out there?" (judgemental tone)', instead:'"I ask everyone the same full set, no judgement: any new sexual partners, tattoos, piercings or injections on the trip?"', why:'A judgemental framing shuts down disclosure; a normalised, universal question opens it.' },
        { dont:'"You can go back to work once you feel up to it."', instead:'"Because you\u2019re a chef and this spreads through food, you must not handle food until you\u2019re cleared — it\u2019s notifiable and there are rules to protect others. We\u2019ll sort the sick note and public-health side together."', why:'Missing the food-handler exclusion endangers the public and overlooks a key SCA marking point.' }
      ]
    },

    'liver-haemochromatosis': {
      ceg: ['Long-term conditions & cancer', 'Investigations & results'],
      stem: {
        name: 'Iwan Pryce', age: '52 years · male',
        pmh: ['Fatigue + achy hands; reduced libido (unmentioned)', 'Ferritin 1180, transferrin saturation 78%, ALT mildly raised, HbA1c 47', 'Genetic (HFE) test pending'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Alcohol ~20 units/week. Two adult children (24, 21), one brother. Father: diabetes, "bronze", died at 60 — never diagnosed.',
        reason: 'Video consultation — discussing a high iron result.'
      },
      timeMap: [
        { t:'0–2',  h:'Defuse + name it',   d:'High ferritin + high transferrin sat = iron overload, likely haemochromatosis. Common, treatable, NOT cancer. Take the scary word off the table first.' },
        { t:'2–4',  h:'Reconnect symptoms',  d:'Achy MCP joints, tiredness, easy tanning, low libido/ED, borderline glucose — the iron, not just age. Treatment can help several.' },
        { t:'4–7',  h:'The children, head-on',d:'Autosomal recessive — children and brother offered gene + iron-study testing. Reframe guilt: he couldn\u2019t have known; diagnosis gives them a head start, not a fate.' },
        { t:'7–10', h:'Father + treatment',   d:'His dad likely had it undiagnosed — why catching it now matters. Venesection is simple and effective; confirm genetics + assess liver. Alcohol cut-down to protect the liver, proportionately.' },
        { t:'10–12',h:'Cascade plan + net',   d:'Genetic + organ-assessment follow-up; specialist for venesection; cascade testing info for relatives; HCC surveillance if cirrhotic; clear review.' }
      ],
      wordPics: {
        fail: 'Explains the iron result mechanically, frames "genetic" frighteningly or glosses it; never arranges cascade testing for the children/brother; leaves the inheritance guilt untouched; makes it an alcohol lecture echoing the family\u2019s wrong story about the father; misses the symptom constellation as "ageing".',
        pass: 'Diagnoses haemochromatosis, connects the symptoms, explains venesection, arranges genetic confirmation and organ assessment, and offers cascade testing to relatives.',
        exc:  'Defuses the fear and names a common, treatable condition; recognises the multi-system picture hidden as ageing incl. the embarrassing libido/ED; addresses the children-guilt as the emotional core and reframes cascade testing as protection not blame; ties in the father compassionately; handles alcohol proportionately without making it the story; and leaves him with hope, a concrete cascade plan and HCC-surveillance awareness.'
      },
      avoid: [
        { dont:'"Your ferritin is very high, which can sometimes indicate a serious problem — we\u2019ll need more tests."', instead:'"Your iron stores are high and the most likely cause is haemochromatosis — common, treatable, and not cancer. Let me explain and then sort the family side, which I know is your real worry."', why:'Ominous vagueness amplifies the cancer fear and delays the reassurance and cascade plan he needs.' },
        { dont:'"It is hereditary, yes — your children could have inherited it from you."', instead:'"It runs in families, so your kids and brother should be offered testing — but you could not have known, and because we\u2019ve found it, they get caught early and protected. You\u2019ve given them a head start, not a fate."', why:'A bald "they inherited it from you" lands as confirmed guilt; pair the genetics with reframing and a protective plan.' },
        { dont:'"You\u2019ll need to stop drinking — alcohol is clearly part of this."', instead:'"Cutting right down on alcohol helps protect an iron-loaded liver — that\u2019s about your liver, not a comment on your character or your dad\u2019s. The core problem is the iron, and that\u2019s what we treat."', why:'Reducing it to drinking misframes the disease and repeats the family\u2019s mislabelling of his father.' }
      ]
    },

    'liver-deteriorating-drinker': {
      ceg: ['Urgent & unscheduled care', 'Mental health & addiction'],
      stem: {
        name: 'Sean Doherty', age: '47 years · male',
        pmh: ['Chronic heavy drinking (~½ bottle vodka + cans daily), recent escalation', 'Prior withdrawal seizure on a previous abrupt stop', 'Old bloods: high MCV, raised ALT/AST, low platelets'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ Jaundiced tinge, tremulous; morning shakes relieved by drinking. Mentions coffee-ground vomit + black stools in passing. Plans to "stop dead on Monday, on my own".',
        reason: 'Video consultation — "wants help cutting down".'
      },
      timeMap: [
        { t:'0–2',  h:'Catch the bleed',     d:'Coffee-ground vomit + black tarry stools in a likely-cirrhotic drinker = possible variceal/upper-GI bleed. Stop everything: this is an emergency TODAY, not Monday.' },
        { t:'2–4',  h:'Don\u2019t praise the plan', d:'Morning relief-drinking + a past withdrawal fit = physical dependence. Abrupt solo cessation risks seizures and DTs. Redirect, don\u2019t endorse.' },
        { t:'4–6',  h:'Decompensation check', d:'Jaundice, ascites/bloating, oedema, vagueness (encephalopathy) — liver under real strain; raises urgency to same-day admission.' },
        { t:'6–9',  h:'Safe detox + mood',    d:'Not a "willpower tablet" — medically-assisted detox (benzodiazepine + thiamine for Wernicke\u2019s), inpatient given the risks. Then a sensitive risk/mood screen — the "better off without me" flicker.' },
        { t:'9–12', h:'Coordinated plan',     d:'Admit today for bleed/decompensation; thiamine; alcohol-team/detox; mood + safeguarding; partner/social support. Harness his readiness without endorsing the unsafe method.' }
      ],
      wordPics: {
        fail: 'Praises his resolve and supports "stopping on Monday on his own"; misses the haematemesis/melaena entirely; offers a relapse-prevention "willpower tablet"; no thiamine, no decompensation assessment, no mood/risk screen — sends a man with a likely variceal bleed and seizure risk home to detox alone.',
        pass: 'Catches the bleed and arranges urgent admission; recognises dependence and the danger of abrupt cessation; gives thiamine and refers for medically-assisted detox; screens mood.',
        exc:  'Spots the concealed upper-GI bleed immediately and treats it as today\u2019s emergency; refuses to endorse unsafe solo detox while protecting his motivation; assesses decompensation/encephalopathy; explains real medically-assisted withdrawal (benzodiazepine + thiamine) over a mythical willpower tablet; screens mood/suicidality sensitively and meets the despair; and coordinates admission plus alcohol-team, mood and social support into one compassionate plan.'
      },
      avoid: [
        { dont:'"Good for you for deciding to stop — willpower is half the battle."', instead:'"Your readiness genuinely matters — but stopping dead on your own is dangerous when your body\u2019s this dependent; you\u2019ve had a fit before. Let\u2019s make stopping SAFE, with support, so it works and doesn\u2019t harm you."', why:'Praising abrupt solo cessation in dependence risks withdrawal seizures and delirium tremens.' },
        { dont:'"The black stools are probably just your diet or iron — let\u2019s focus on the drinking."', instead:'"Black tarry stools and bringing up dark vomit can mean bleeding inside, and with your liver that\u2019s an emergency today. I\u2019m glad you mentioned it — we act on this now."', why:'Dismissing melaena/haematemesis misses a life-threatening variceal bleed hiding under the stated agenda.' },
        { dont:'"I\u2019ll prescribe something to help with the cravings and see you next week."', instead:'"There isn\u2019t a willpower tablet, and next week is too late for what\u2019s happening today — you need urgent assessment for the bleeding and a safe, supported detox with the right medication and vitamins."', why:'A craving script and routine follow-up ignores both the emergency bleed and the seizure risk of unsupported withdrawal.' }
      ]
    }
  });

})();
