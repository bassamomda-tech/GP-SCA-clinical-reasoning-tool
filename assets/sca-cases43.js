/* ============================================================
   Reasoning GP — Case Library batch 43:
   "The result you didn't go looking for"
   Four ORIGINAL cases on incidental & abnormal findings.
   The recurring skill: a result that arrived without being
   asked for (a CXR, a routine FBC, a blood-service letter, a
   tired-screen panel) is OWNED, explained as a story, and
   routed down the correct next test / NICE NG12 pathway —
   never softened away with "but you feel fine".
   Three carry an explicit NG12 2WW / direct-access pathway;
   the fourth (NAFLD panel) genuinely has no NG12 cancer link
   and does not invent one.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases42.js.
   ============================================================ */

(function(){

  /* ============ 165. VIDEO — Unilateral pleural effusion on a CXR (NG12 lung/mesothelioma 2WW) ============ */
  const c165 = {
    id:'pleural-effusion-cxr', title:'"It\u2019s just the tail end of that chest infection, isn\u2019t it, doc?"', type:'video', duration:12,
    meta:{ age:64, sex:'M', setting:'Video consultation \u2014 results of a chest X-ray.', system:'Respiratory / Suspected lung cancer & mesothelioma', checked:'October 2026' },
    brief:'Mr Brian Tulloch, 64, retired builder/plasterer. A CXR was requested by a colleague three weeks ago for 6 weeks of breathlessness and a dragging right-sided chest discomfort, assumed to be a slow-clearing chest infection. The report has come back: a moderate RIGHT-SIDED UNILATERAL PLEURAL EFFUSION, no consolidation. He has booked this slot expecting to be told the X-ray was clear. On directed history: breathless on exertion, mild weight loss, an ex-smoker (10 pack-years, stopped 15 years ago), and \u2014 critically \u2014 years of ASBESTOS exposure on building sites in the 1970s and 1980s. The task is to BREAK an unexpected serious finding honestly and humanely, recognise that an unexplained unilateral pleural effusion mandates URGENT investigation for malignancy (lung cancer and, given the asbestos history, mesothelioma) on the NICE NG12 pathway, take the asbestos/occupational history, and handle his wish to hear "it\u2019s just the infection" without colluding.',
    script:{
      opening:"(Cheerful, chatty, slightly breathless between sentences.) \"Afternoon doc. I've come for my X-ray result — it'll be fine, won't it? It's just the tail end of that chest infection I had, I reckon. I'm a bit puffed going up the stairs but that's just age and being out of shape. We've got a cruise booked for next month — so as long as you can give me something to clear it up, I'll be on my way.\"",
      facts:[
        { topic:"What he was told", text:"If asked what he understands: \"The other doctor thought it was a slow chest infection. Just to be sure, she said.\" Had a course of antibiotics before the X-ray, which didn't make much difference." },
        { topic:"Breathlessness", text:"About two months now. \"Only when I'm doing something. Stairs, the garden.\" Can manage one flight, then stops. Not breathless at rest or lying flat; no waking at night breathless. No ankle swelling." },
        { topic:"Chest discomfort", text:"A dull, dragging ache in the right side of the chest, there most days, a bit worse on a deep breath. Not crushing, not on exertion only." },
        { topic:"Weight and other symptoms", text:"If asked: \"Trousers are a bit looser\" — maybe half a stone in three months. \"No blood, no fevers.\" Mild dry cough. No night sweats, no hoarse voice, no bone pain." },
        { topic:"Work — asbestos", text:"If asked about his job: builder and plasterer for 40 years. If asked about asbestos: \"Years of it, back in the eighties. Everyone did. No masks, nothing.\" Cut and sanded asbestos boards and lagging. Took early retirement at 60." },
        { topic:"Smoking", text:"\"About ten years' worth. Stopped fifteen years ago.\" Drinks a few pints at the weekend." },
        { topic:"History and medicines", text:"No regular medicines. No heart, kidney or liver problems he knows of. No TB contacts or recent travel. No allergies." },
        { topic:"Home", text:"Married to Jean, two grown-up children nearby. The cruise is for their 40th wedding anniversary." },
        { topic:"How to play it", text:"Jolly and hopeful at first. When the doctor gives a warning shot, go quiet: \"(Pause.) Go on.\" On hearing about fluid: \"Fluid? So what's causing it?\" If asbestos comes up, say quietly: \"Every builder knows what asbestos does. I suppose I've been telling myself it's the infection because I didn't want to think about the other thing.\" If offered antibiotics, accept gladly (the trap). If told about urgent tests, ask \"And the cruise?\" then accept: \"I'd rather know before I go.\"" }
      ],
      ice:{
        ideas:"\"It's the tail end of the chest infection — and my age.\"",
        concerns:"HIDDEN AGENDA — as an ex-builder he knows what asbestos can do and has been pushing the thought away. He doesn't want the anniversary cruise spoilt or to frighten Jean.",
        expectations:"\"Something to clear it up so I can get on — and the all-clear for the cruise.\""
      },
      cues:[
        "\"It'll be fine, won't it?\" — hoping; check what he expects before giving the result.",
        "\"Trousers are a bit looser.\" — weight loss, if asked.",
        "\"Every builder knows what asbestos does.\" — the fear, only if his work is explored."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'BREAKS the unexpected finding clearly and humanely (warning shot, checks prior understanding, names the pleural effusion) rather than minimising it as "a bit of fluid from the infection" or burying it' },
      { dom:'dg', text:'Recognises an unexplained UNILATERAL pleural effusion as a red flag requiring urgent investigation for malignancy \u2014 not attributing it to the presumed chest infection \u2014 and screens weight loss, haemoptysis, appetite and systemic features' },
      { dom:'dg', text:'Takes and DOCUMENTS the occupational/ASBESTOS history (and smoking), recognising it as the key cue for mesothelioma and asbestos-related disease that raises urgency' },
      { dom:'cm', text:'Applies NICE NG12: a suspected cancer pathway referral for chest X-ray findings suggesting lung cancer or mesothelioma, judging the unexplained unilateral effusion with weight loss and asbestos exposure as such a finding — to respiratory for thoracic ultrasound, pleural aspiration and CT (BTS 2023)' },
      { dom:'dg', text:'Holds the differential (malignancy \u2014 lung/mesothelioma/metastatic; parapneumonic effusion/empyema; TB; and systemic causes for the record) and does NOT default to antibiotics or "see how it settles"' },
      { dom:'ro',   text:'Responds to his hope and likely fear with warmth \u2014 acknowledges the cruise and the wish for it to be nothing, surfaces any worry, and does NOT collude with "it\u2019s just the infection"' },
      { dom:'ro',   text:'Balances honesty (this needs urgent hospital tests now) with calm reassurance and pacing \u2014 chunking the news, checking understanding, and reframing the cruise around the scan rather than dismissing his plans coldly' },
      { dom:'cm',    text:'Safety-nets and follows up: makes the urgent referral promptly, explains what the respiratory team will do (CT, pleural tap/biopsy) and timing, gives breathless/unwell red flags and when to seek help, confirms understanding, and arranges to review \u2014 ownership of the result, not a wave-off' },
    ],
    worked:[
      { lbl:'Warning shot', txt:'"Before we talk about the cruise, I need to be straight with you about the X-ray, because it didn\u2019t show quite what we both hoped. Is it okay if we go through it together now?"' },
      { lbl:'Name it plainly', txt:'"The X-ray shows a collection of fluid around your right lung \u2014 we call it a pleural effusion. It\u2019s not just the tail end of an infection clearing; fluid only on one side like this is something we always need to look into properly to find the cause."' },
      { lbl:'Take the key history', txt:'"Can I ask about your working life \u2014 you were a builder and plasterer? How much did you come across asbestos over the years? \u2026 Thank you, that\u2019s genuinely important, and it\u2019s one of the reasons I want this looked at quickly rather than waiting."' },
      { lbl:'Be honest about why', txt:'"I want to be honest with you. Fluid on one side, with you having lost a bit of weight and that asbestos history, is something we have to investigate urgently \u2014 to rule out a problem in the lung or its lining. I\u2019m not telling you that\u2019s what it is, but it would be wrong of me to treat this as just an infection."' },
      { lbl:'Name the pathway + the cruise', txt:'"So I\u2019m referring you urgently to the chest specialists \u2014 you\u2019ll be seen within two weeks. They\u2019ll do a detailed scan and likely take a sample of the fluid to find the answer. I know the timing\u2019s rotten with the cruise; my honest advice is we get this scan done first \u2014 your health has to come before the holiday, and I\u2019ll help you think about the booking."' },
      { lbl:'Hold it + safety-net', txt:'"This is a lot to take in, and it\u2019s okay to feel thrown. If you become a lot more breathless, cough up blood, or feel really unwell before the appointment, contact us or go to A&E. I\u2019ll get the referral done today and we\u2019ll go through whatever they find, together."' },
    ],
    learning:'An incidental or unexpected abnormal result is OWNED and conveyed honestly: a chest X-ray requested for a presumed infection that returns a UNILATERAL pleural effusion is broken with a warning shot, not minimised as "a bit of fluid". A unilateral effusion is a red flag \u2014 bilateral effusions suggest systemic causes (heart failure, hypoalbuminaemia), but a unilateral one, especially with weight loss, demands urgent investigation for malignancy (lung cancer, mesothelioma, metastatic/pleural disease) alongside the differential of parapneumonic effusion/empyema and TB. The occupational/ASBESTOS history is the decisive cue here: years of building/plastering exposure points to mesothelioma and asbestos-related pleural disease and must be elicited and documented (it matters clinically and later for industrial-injury benefits). NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026): refer using a suspected cancer pathway referral for chest X-ray findings that suggest lung cancer or mesothelioma (an unexplained unilateral effusion with weight loss and asbestos exposure is reasonably judged such a finding; the effusion itself is not a named criterion); and offer an urgent chest X-ray at 40 and over for one or more unexplained chest or systemic symptoms in anyone exposed to asbestos — to respiratory for thoracic ultrasound, pleural aspiration and CT (BTS Guideline for pleural disease, 2023). The hidden agenda is hopeful minimisation ("just the infection / I\u2019ve a cruise booked / give me something to clear it"), often with quiet fear underneath; the skill is to break the news, hold the hope and fear with warmth, refuse to collude or default to antibiotics, reframe the cruise around the scan, and safety-net and follow up.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) Suspected cancer — lung and mesothelioma · BTS Guideline for pleural disease (2023) · GMC Good medical practice (2024) · NHS England Faster Diagnosis Standard · pleural effusion assessment · breaking bad news',
      points:[
        { h:'Unilateral effusion = investigate', t:'A unilateral pleural effusion is sinister until proven otherwise. Bilateral effusions suggest systemic causes (heart failure, hypoalbuminaemia); a unilateral effusion, particularly with weight loss or an asbestos history, mandates urgent investigation for malignancy. Do not attribute it to a presumed infection.' },
        { h:'NICE NG12 lung cancer', t:'NICE NG12: refer using a suspected cancer pathway referral for people with chest X-ray findings that suggest lung cancer, or aged 40 and over with unexplained haemoptysis. Whether an unexplained unilateral effusion counts as a suggestive finding is a clinical judgement (with weight loss and asbestos it reasonably does; discuss with respiratory the same day if unsure). Offer an urgent CXR (within 2 weeks) in people 40+ with relevant symptoms.' },
        { h:'NICE NG12 mesothelioma', t:'NICE NG12: offer an urgent direct-access CXR to assess for mesothelioma in people aged 40 and over with 2 or more unexplained symptoms (cough, fatigue, shortness of breath, chest pain, weight loss, appetite loss), or 1 or more of them if they have ever smoked or have been exposed to asbestos. Refer using a suspected cancer pathway referral for mesothelioma if chest X-ray findings suggest mesothelioma (NG12 does not name a pleural effusion as the criterion). The asbestos/occupational history is central.' },
        { h:'Differential of an effusion', t:'Malignant (lung, mesothelioma, metastatic/pleural), parapneumonic/empyema, TB, and \u2014 usually bilateral \u2014 heart failure, hypoalbuminaemia, renal/liver disease. Respiratory assessment (BTS Guideline for pleural disease, 2023) includes thoracic ultrasound, CT and diagnostic/therapeutic pleural aspiration ± biopsy.' },
        { h:'Occupational history matters', t:'Quantify and document asbestos exposure (and smoking). It raises urgency, guides diagnosis, and is relevant to later industrial-injuries disablement benefit and any legal claim. Letting it raise concern is the examined skill.' },
        { h:'Breaking unexpected findings', t:'Use a warning shot, check prior understanding and the patient\u2019s wish for information, name the finding plainly, chunk and check, and avoid both false reassurance and blunt alarm. Acknowledge the impact on plans (e.g. the cruise) and reframe around the necessary investigation.' },
        { h:'Never do', t:'Never minimise a unilateral effusion as "just the infection"; never default to antibiotics or "see how it settles"; never omit the asbestos/occupational history; never let a booked holiday delay urgent investigation; never collude with the wish for reassurance.' },
        { h:'Safety-net & follow-up', t:'Urgent respiratory referral (CT + pleural assessment) with clear timing; explain the steps; give breathless/haemoptysis/unwell red flags; confirm understanding; review the outcome with the patient \u2014 ownership of the result, never a wave-off.' }
      ]
    }
  };

  /* ============ 166. VIDEO — Isolated thrombocytopenia in a young adult (ITP vs leukaemia; NG12) ============ */
  const c166 = {
    id:'low-platelets-young', title:'"My blood test says low platelets \u2014 I\u2019ve been up all night convinced it\u2019s leukaemia"', type:'video', duration:12,
    meta:{ age:27, sex:'F', setting:'Video consultation \u2014 results of a blood count.', system:'Haematology / Isolated thrombocytopenia \u2014 watch, test or refer', checked:'October 2026' },
    brief:'Miss Chloe Fenner, 27, mother of an 8-month-old. An FBC checked for heavy periods/tiredness shows an ISOLATED low platelet count of 38 \u00d7 10\u2079/L (Hb normal, white cells normal, no blasts flagged). She is otherwise well, with some easy bruising on her shins and one episode of gum bleeding when brushing; no fevers, night sweats, weight loss or bone pain. She has googled "low platelets" and is terrified it is leukaemia. The task is to interpret an isolated thrombocytopenia safely: distinguish probable ITP from sinister marrow disease by checking for OTHER cytopenias, a blood film/repeat (excluding EDTA pseudothrombocytopenia), and red flags (other cell lines down, B symptoms, lymphadenopathy, hepatosplenomegaly, significant bleeding); assess bleeding risk and set urgency BY THE NUMBER and the bleeding; arrange the right next test / haematology referral; and contain a frightened new mother\u2019s leukaemia fear honestly without false blanket reassurance.',
    script:{
      opening:"(Anxious, tired, talking fast; baby can be heard in the background.) \"Thanks for seeing me. I got a text saying my blood test was abnormal and to book — then I made the mistake of googling 'low platelets' at 2am with the baby. Now I'm convinced it's leukaemia. I've got a little one. I've been bruising on my legs and my gums bled brushing my teeth. Please just tell me straight — is it cancer?\"",
      facts:[
        { topic:"Bruising and bleeding", text:"\"The bruises are on my shins — I don't remember knocking them.\" About three or four small bruises over two weeks. \"The gums bled once when I was brushing.\" If asked: no nosebleeds, no blood in urine or stools, no tiny red spots she's noticed, no black stools, no bleeding into the eyes." },
        { topic:"Red-flag questions", text:"If asked: \"No, none of that\" — no fevers, night sweats, weight loss, bone pain or lumps in neck, armpits or groin. No recent infections. No headache." },
        { topic:"Periods", text:"\"They're heavy — that's why I had the test. I didn't think much of it.\" Heavy since the baby, regular, 6–7 days, flooding on day 2. Last period ended a week ago." },
        { topic:"Tiredness", text:"\"I'm tired, but I've got an eight-month-old.\" Not breathless, no palpitations." },
        { topic:"Medicines and pregnancy", text:"No regular medicines; occasional paracetamol; no ibuprofen, aspirin, quinine or herbal remedies. \"I don't think I'm pregnant, but I suppose I can't be completely sure\" — condoms, not always. Stopped breastfeeding at 6 months. No allergies." },
        { topic:"Background", text:"Platelets were normal in pregnancy as far as she knows. No liver disease. Drinks rarely. No family bleeding problems or blood disorders." },
        { topic:"Home", text:"Lives with her partner, Sam, who works away Monday to Thursday. Her mum is 20 minutes away. Can get to the surgery or hospital today: \"I can bring her — she'll probably sleep in the pram.\"" },
        { topic:"How to play it", text:"Frightened and apologetic: \"Sorry, I'm just scared.\" If asked what she has read: \"That low platelets and bruising are the first sign of leukaemia. And then I just kept thinking, who'd look after her?\" Calms when the doctor explains that the rest of the blood count is normal. If told \"it's nothing\" with no plan, stay anxious. If asked to come in or have tests today: \"Today? Is that because it's serious?\" then accept once the reason is explained." }
      ],
      ice:{
        ideas:"\"Low platelets and bruising — Google says leukaemia.\"",
        concerns:"HIDDEN AGENDA — that she has leukaemia and won't be there for her baby: \"Who'd look after her?\" Has hardly slept since the text.",
        expectations:"\"Tell me it's not cancer. Or if it is, tell me now.\""
      },
      cues:[
        "\"I've got a little one.\" — said early; the fear is about her baby.",
        "\"I googled it at 2am.\" — ask what she read.",
        "\"Is that because it's serious?\" — needs the reason for urgency explained calmly."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Interprets the result as an ISOLATED thrombocytopenia \u2014 explicitly checks that haemoglobin, white cells and film are otherwise normal \u2014 and recognises this most often means ITP, not leukaemia (which usually disturbs >1 line and/or shows blasts)' },
      { dom:'dg', text:'Confirms the count is genuine: requests/values a BLOOD FILM (\u00b1 repeat) to exclude EDTA pseudothrombocytopenia and to look for blasts, abnormal cells and platelet morphology' },
      { dom:'dg', text:'Screens the SINISTER red flags (other cytopenias, blasts, B symptoms, bone pain, lymphadenopathy, hepatosplenomegaly, significant/mucosal bleeding) on history and examination \u2014 and knows their presence triggers urgent/same-day haematology for suspected leukaemia (NICE NG12: adults — consider a very urgent FBC within 48 hours; a film suggesting leukaemia needs same-day haematology discussion); on video, arranges the examination face to face' },
      { dom:'cm', text:'Sets URGENCY BY THE NUMBER and bleeding (usual haematology practice; local pathways set exact thresholds): >50 vs 20–50 vs <20 / any significant bleeding (same-day) \u2014 and routes hers (38 with minor mucosal bleeding) to prompt urgent haematology rather than watchful waiting alone' },
      { dom:'dg', text:'Works the differential (ITP, post-viral, DRUGS, alcohol, a possible new pregnancy — gestational thrombocytopenia does not persist 8 months after delivery — HIV/hepatitis C, autoimmune) and gives BLEEDING PRECAUTIONS (avoid NSAIDs/aspirin/contact sport; urgent help for heavy bleeding, severe headache or neurological symptoms)' },
      { dom:'ro',   text:'Meets the leukaemia fear with honesty \u2014 names the likely benign cause and why leukaemia is unlikely \u2014 WITHOUT false blanket reassurance and without feeding the 2am catastrophe' },
      { dom:'ro',   text:'Communicates the plan to a frightened new mother clearly and warmly, checks understanding, and acknowledges the weight of having a young baby' },
      { dom:'cm',    text:'Safety-nets robustly: bleeding red flags and when to seek same-day/emergency help, the referral and its timing, what tests come next, confirms she can repeat the plan, and arranges follow-up \u2014 owns and investigates the result, honest reassurance not blanket dismissal' },
    ],
    worked:[
      { lbl:'Answer the question honestly', txt:'"I\u2019m really glad you came, and I\u2019m going to be straight with you because that\u2019s what you asked for. Your platelets \u2014 the cells that help blood clot \u2014 are low, but importantly the rest of your blood count is normal. That pattern is much more likely to be a treatable immune problem than leukaemia."' },
      { lbl:'Explain why leukaemia is unlikely', txt:'"With leukaemia we\u2019d almost always see other parts of the blood affected too \u2014 your red cells and infection-fighting cells \u2014 and we don\u2019t. So while I\u2019m taking this seriously and checking it properly, the thing you were up all night fearing is unlikely on these numbers."' },
      { lbl:'Confirm + screen', txt:'"Two things I want to do. First, have the lab look at the blood under the microscope and repeat it \u2014 sometimes platelets clump and read falsely low. Second, let me ask about night sweats, weight loss, fevers and bone pain. … All clear — that’s genuinely reassuring. I can’t check for swollen glands or feel your tummy on video, so I’d like you to come in today or tomorrow for that, at the same time as the repeat blood test."' },
      { lbl:'Set the plan by the number', txt:'"Your count is low enough, with a bit of gum bleeding, that I don\u2019t want to just watch it. I\u2019m referring you to the blood specialists to be seen soon \u2014 they\u2019ll confirm what\u2019s going on and, if it\u2019s the immune type, there are good treatments."' },
      { lbl:'Bleeding precautions', txt:'"While we wait: avoid ibuprofen and aspirin, and anything rough-and-tumble. If you get heavy bleeding that won\u2019t stop, blood in your wee or stool, a severe headache, or any odd neurological symptoms, that\u2019s an emergency \u2014 call 999 or go to A&E."' },
      { lbl:'Hold the fear + follow up', txt:'"You\u2019ve got a little one and this fear makes total sense. Here\u2019s what I want you to leave with: low platelets, rest of the count normal, most likely an immune cause, being seen by specialists quickly, and a clear plan if anything changes. I\u2019ll chase the film and the referral and we\u2019ll follow it through together."' },
    ],
    learning:'Interpreting an abnormal blood count safely starts with the PATTERN: an ISOLATED thrombocytopenia (platelets low, haemoglobin and white cells normal, no blasts on film) in a well young adult is most often IMMUNE THROMBOCYTOPENIA (ITP) \u2014 often post-viral or autoimmune \u2014 whereas leukaemia almost always disturbs more than one cell line and/or shows blasts. Confirm the count is genuine with a BLOOD FILM (\u00b1 repeat) to exclude EDTA pseudothrombocytopenia and to inspect for blasts and abnormal cells. Screen the sinister pointers \u2014 other cytopenias, blasts, B symptoms (night sweats, weight loss, fevers), bone pain, lymphadenopathy, hepatosplenomegaly, significant/mucosal bleeding \u2014 whose presence triggers urgent or same-day haematology assessment for suspected leukaemia (NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026): in adults, consider a very urgent FBC within 48 hours for features that could suggest leukaemia; immediate specialist referral for petechiae or hepatosplenomegaly is the children and young people recommendation). Examination for nodes and organomegaly cannot be done on video — arrange it face to face. Set urgency by the count and bleeding (usual haematology practice; local pathways set exact thresholds): >50 with no bleeding can be investigated in primary care and referred routinely/urgently; 20\u201350 warrants urgent haematology; <20, any significant bleeding, or systemic illness needs same-day assessment/admission. Work the differential (ITP, post-viral, drugs, alcohol, a possible new pregnancy — not gestational thrombocytopenia 8 months after delivery — HIV/hepatitis C, autoimmune) and give bleeding precautions (avoid NSAIDs/aspirin/contact sport; emergency help for heavy bleeding, severe headache or neurological symptoms). The communication core is a frightened new mother\u2019s 2am leukaemia terror: meet it with honesty and the most likely explanation WITHOUT false blanket reassurance, set a clear plan and safety-net, and follow up.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) Suspected cancer — haematological cancers (leukaemia) · International consensus report on immune thrombocytopenia (Provan et al., Blood Advances 2019) (international) · BNF (NSAIDs and bleeding risk) · GMC Good medical practice (2024) · isolated thrombocytopenia work-up',
      points:[
        { h:'Pattern first', t:'Distinguish isolated thrombocytopenia (other lines normal, no blasts) from multilineage cytopenia/blasts. Isolated thrombocytopenia in a well young adult is most often ITP; leukaemia usually affects >1 cell line and/or shows blasts.' },
        { h:'Confirm the count', t:'Request/value a blood film \u00b1 repeat to exclude EDTA-induced platelet clumping (pseudothrombocytopenia) and to look for blasts, large platelets, fragments and abnormal white cells.' },
        { h:'Red flags for urgent referral', t:'Other cytopenias, blasts, B symptoms (night sweats, weight loss, fevers), bone pain, lymphadenopathy, hepatosplenomegaly, or significant/mucosal bleeding. Any of these → urgent/same-day haematology. NICE NG12: in adults, consider a very urgent FBC (within 48 hours) to assess for leukaemia with pallor, persistent fatigue, unexplained fever, persistent or recurrent infection, generalised lymphadenopathy, unexplained bruising, bleeding or petechiae, or hepatosplenomegaly; a film suggesting acute leukaemia needs same-day haematology discussion (clinical practice). The examination for nodes and organomegaly must be face to face, not on video.' },
        { h:'Urgency by number & bleeding', t:'Usual haematology practice (local pathways set the exact thresholds; no national guideline): platelets >50 no bleeding → investigate in primary care, refer routine/urgent; 20\u201350 \u2192 urgent haematology; <20 or significant bleeding or systemic illness \u2192 same-day assessment/admission.' },
        { h:'Differential', t:'ITP, recent viral infection, drugs (heparin/HIT, quinine, some antibiotics), alcohol, pregnancy (ask LMP — gestational thrombocytopenia occurs in pregnancy and resolves after delivery, so it does not explain a low count 8 months postpartum), infections such as HIV and hepatitis C (the international consensus advises testing adults), autoimmune (SLE), and rarely marrow disease. Tailor history accordingly.' },
        { h:'Bleeding precautions', t:'Advise avoiding NSAIDs/aspirin (they impair platelet function, BNF) and contact sports; seek urgent help for heavy/unstoppable bleeding, blood in urine/stool, severe headache or neurological symptoms, while awaiting assessment.' },
        { h:'Never do', t:'Never alarm before reading the pattern; never skip the film/repeat; never miss other cytopenias or B symptoms; never watchful-wait a count <20 or significant bleeding; never give false blanket "it\u2019s nothing" reassurance.' },
        { h:'Honest reassurance & follow-up', t:'Name the likely cause and why leukaemia is unlikely on an isolated count, while taking it seriously; refer with appropriate urgency; give bleeding red flags; confirm understanding; review film/referral outcome \u2014 honest, not blanket, reassurance.' }
      ]
    }
  };

  /* ============ 167. F2F — Blood-donor deferral: iron-deficiency anaemia in a man (NG12 GI 2WW) ============ */
  const c167 = {
    id:'blood-donor-anaemia', title:'"The blood service turned me away for low iron \u2014 but I feel completely fine"', type:'video', duration:12,
    meta:{ age:61, sex:'M', setting:'Video consultation \u2014 brings a letter from the blood donation service.', system:'Haematology / GI \u2014 iron-deficiency anaemia in a man', checked:'October 2026' },
    brief:'Mr Geoffrey Aldous, 61, long-time blood donor, brings a letter: he was DEFERRED from donating because his haemoglobin was low, advised to "see your GP". A repeat FBC you arranged confirms IRON-DEFICIENCY ANAEMIA (low Hb, low MCV, low ferritin). He feels completely well and is faintly irritated at the fuss \u2014 he just wants to be "topped up with iron" so he can donate again. On directed history: no overt rectal bleeding, but stools perhaps a little darker on occasion; mild change toward looser bowel habit over a few months; no dyspepsia; takes regular ibuprofen for his knees; reasonable diet. The task is the incidental-findings principle \u2014 a result generated elsewhere lands with the GP, who OWNS the duty to act \u2014 and the core teaching that IRON-DEFICIENCY ANAEMIA IN A MAN (or postmenopausal woman) is GI blood loss / cancer until proven otherwise: offer FIT (NICE HTG690, 2023, formerly DG56) with a suspected cancer pathway referral if FIT is at least 10 µg Hb/g (NICE NG12), arrange bidirectional endoscopy (BSG 2021), screen coeliac, review the NSAID \u2014 not simply prescribe iron and send him back to donate.',
    script:{
      opening:"(Friendly, matter-of-fact, a little impatient.) \"Morning. Bit of a non-event this, I think — the blood donor place turned me away because my iron was low and told me to see you. I feel completely fine, never better. Can you just give me some iron tablets to top me up so I can get back to donating? I've given 60-odd times, I don't want to stop now over nothing.\"",
      facts:[
        { topic:"How he feels", text:"Feels well. If pushed, a bit more tired on his walks, \"but I'm 61\". No breathlessness, chest pain or dizziness." },
        { topic:"Bowels", text:"If asked: \"Now you mention it, a bit looser than they used to be. A few months, maybe. I put it down to getting older.\" Going twice a day instead of once. \"No blood. Maybe a bit darker now and then. I wouldn't call it black.\"" },
        { topic:"Stomach and swallowing", text:"\"No, none of that. Stomach's fine.\" No indigestion, heartburn, trouble swallowing, vomiting or abdominal pain." },
        { topic:"Weight and appetite", text:"\"Not that I've noticed. I haven't weighed myself.\" Appetite normal." },
        { topic:"Medicines", text:"\"Ibuprofen for my knees. Most days, if I'm honest\" — bought over the counter, 400 mg once or twice a day for a couple of years. No aspirin or blood thinners. No allergies." },
        { topic:"Diet", text:"\"Yes, I eat pretty well. Nothing unusual\" — meat most days, not vegetarian." },
        { topic:"Family history", text:"\"Not that I know of\" — no bowel cancer or coeliac disease in the family he knows about." },
        { topic:"Social", text:"Retired postman, married, walks the dog twice a day. Ex-smoker (stopped at 40). Drinks about 10 units a week. Donates blood every 16 weeks; last successful donation was 4 months ago." },
        { topic:"How to play it", text:"Cheerful and a bit dismissive. Give the bowel change and darker stools only when asked about bowels. If asked what he thinks is going on: \"Honestly? That I've given too much blood and I need topping up. Though it did rattle me a bit, being sent away.\" If the doctor mentions bowel cancer: \"A growth? You mean cancer? I feel fine.\" Then sensible: \"Fair enough. I'd rather know.\" If simply given iron, take it and leave happy (the trap)." }
      ],
      ice:{
        ideas:"\"I've given too much blood over the years — I just need topping up.\"",
        concerns:"HIDDEN AGENDA — being a donor is part of who he is (\"I'd rather be the one giving\"); he doesn't like being a patient. Being turned away rattled him more than he lets on.",
        expectations:"\"Iron tablets, and back to donating.\""
      },
      cues:[
        "\"Bit of a non-event.\" — playing it down.",
        "\"It did rattle me a bit, being sent away.\" — the quiet worry, if asked.",
        "\"I'd rather be the one giving.\" — his identity as a donor."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'OWNS the incidental result \u2014 does not accept "I feel fine / it\u2019s a non-event" \u2014 and confirms/characterises it as iron-deficiency anaemia (low Hb, low MCV, low ferritin)' },
      { dom:'dg', text:'Knows the core rule: iron-deficiency anaemia in a MAN (or postmenopausal woman) is GI blood loss / malignancy until proven otherwise \u2014 because men do not menstruate, the iron loss must be sourced' },
      { dom:'dg', text:'Takes a targeted GI history (bowel-habit change, rectal bleeding/dark stools, weight loss, abdominal pain, dyspepsia/dysphagia, family history, NSAID/anticoagulant use, diet) and treats the darker stools/looser habit as positive cues' },
      { dom:'cm', text:'Applies NICE HTG690 and NICE NG12: OFFERS FIT (≥10 µg Hb/g → suspected cancer pathway colorectal referral; a low FIT with strong concern does not delay referral), and arranges BIDIRECTIONAL endoscopy (OGD + colonoscopy, BSG 2021) for unexplained IDA, plus coeliac serology (anti-tTG)' },
      { dom:'cm', text:'Reviews the regular IBUPROFEN as a contributor (PPI/stop) WITHOUT assuming it is the whole cause, and gives iron replacement ALONGSIDE investigation \u2014 never instead of it' },
      { dom:'ro',   text:'Honours his donor identity and the wish to resume, while being honest that the finding needs investigation first \u2014 and does NOT collude with "just top me up and clear me to donate"' },
      { dom:'ro',   text:'Explains clearly why a man who feels well still needs urgent tests \u2014 making the reasoning understandable and respectful rather than alarmist or dismissive' },
      { dom:'cm',    text:'Safety-nets and follows up: arranges FIT/referral/endoscopy with clear timing, advises red flags (rectal bleeding, weight loss, worsening symptoms), explains the donation question will follow the results, confirms understanding, and books review \u2014 owns the result, never iron-and-wave-off' },
    ],
    worked:[
      { lbl:'Reframe the "non-event"', txt:'"I can see why it feels like a fuss when you feel so well \u2014 but I\u2019m actually really glad the blood service flagged this, and I don\u2019t think it\u2019s a non-event. Low iron in a man is something we always look into properly, even when, especially when, you feel fine."' },
      { lbl:'Explain the logic', txt:'"Here\u2019s my honest reasoning. Women can lose iron through periods; men don\u2019t. So if your iron is low, it\u2019s being lost somewhere, and the commonest place is slowly from the bowel \u2014 often without you ever seeing blood. Most causes are harmless, but one we have to rule out is a growth in the bowel that bleeds quietly."' },
      { lbl:'Pick up the cues', txt:'"You mentioned your stools have been a bit darker now and then, and your bowels a touch looser for a few months. Those are exactly the things I need to act on. And the ibuprofen for your knees can irritate the stomach \u2014 it might be playing a part, but I can\u2019t assume it\u2019s the whole story."' },
      { lbl:'Name the plan', txt:'"So: I\u2019m doing a stool test called FIT that looks for hidden blood, a coeliac blood test, and \u2014 given your age and symptoms \u2014 I\u2019m referring you on the urgent pathway to have a camera test at both ends, the stomach and the bowel, to find where the iron\u2019s going. I\u2019ll start you on iron tablets at the same time, but to fix it, not to dodge finding the cause."' },
      { lbl:'Honour the donor, hold the line', txt:'"On donating \u2014 I genuinely respect that you\u2019ve given 60 times, that\u2019s remarkable. The honest answer is we sort out why your iron is low first; getting you healthy is how you get back to donating safely, not the other way round."' },
      { lbl:'Safety-net + follow-up', txt:'"If you see fresh blood, your stools turn black and tarry, you lose weight without trying, or you feel unwell, contact us sooner. I\u2019ll get the tests and referral moving today, and we\u2019ll go through every result together \u2014 including what it means for donating."' },
    ],
    learning:'The incidental-findings principle: a result generated by another service (here, a blood-donation deferral for a low haemoglobin) lands with the GP, who now OWNS the duty to act \u2014 "I feel fine / it\u2019s a non-event" must be resisted, and the finding worked up as if the patient had presented with symptoms. Confirmed iron-deficiency anaemia (low Hb, low MCV, low ferritin) in a MAN of any age, or in any postmenopausal woman, is gastrointestinal blood loss / malignancy until proven otherwise \u2014 because men do not menstruate, the lost iron must be sourced \u2014 commonly a right-sided colorectal cancer (which bleeds occultly and presents with anaemia, not visible bleeding), gastric cancer, or benign causes (NSAID gastropathy, angiodysplasia, coeliac). NICE HTG690: offer quantitative FIT in adults with IDA, and NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026): FIT ≥10 µg Hb/g → suspected cancer pathway colorectal referral (FIT now guides the referral; a low FIT does not close the case if concern persists); investigate BOTH ends with bidirectional endoscopy (OGD + colonoscopy; BSG 2021) for unexplained IDA; and check coeliac serology (anti-tTG). Review regular NSAID use as a contributor WITHOUT assuming it is the whole story (it can coexist with cancer), and give iron replacement alongside \u2014 never instead of \u2014 investigation, since replacing iron and sending him back to donate masks the cause and delays diagnosis. Honour the proud-donor identity while holding the line that investigation precedes any return to donation, take the targeted GI history (treating darker stools and bowel-habit change as positive cues), and safety-net and follow up.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) Suspected cancer — colorectal and upper GI · NICE HTG690 (2023, formerly DG56) — quantitative FIT in primary care · BSG guidelines for the management of iron deficiency anaemia in adults (2021) · NICE NG20 Coeliac disease (2015) · BNF (NSAIDs, oral iron)',
      points:[
        { h:'Own the incidental result', t:'A result from another service (blood bank, insurance, hospital) creates a GP duty to act. Resist "I feel well / it\u2019s nothing" \u2014 confirm and work it up as for a symptomatic presentation.' },
        { h:'IDA in a man/postmenopausal woman', t:'Iron-deficiency anaemia (low Hb, low MCV, low ferritin) in a man of any age or a postmenopausal woman is GI blood loss/malignancy until proven otherwise. Investigate the GI tract for a bleeding source.' },
        { h:'NICE NG12 colorectal pathway', t:'Offer quantitative FIT in adults with IDA (NICE HTG690, 2023); FIT ≥10 µg Hb/g → suspected cancer pathway colorectal referral (NICE NG12). FIT now guides the colorectal referral rather than referring for IDA regardless; a low FIT does not close the case, and strong clinical concern still justifies referral. Right-sided colon cancers commonly present with anaemia rather than visible bleeding.' },
        { h:'Bidirectional endoscopy', t:'Unexplained IDA warrants investigation of both ends — OGD (oesophageal/gastric cancer, ulcers) and colonoscopy (colorectal cancer, angiodysplasia); BSG 2021 makes these first-line in men. Check coeliac serology (anti-tTG) as a common cause (NICE NG20: IgA tTG with total IgA, while eating gluten).' },
        { h:'Iron alongside, not instead', t:'Give iron replacement to correct the deficiency (BSG 2021: one tablet of oral iron once daily, or alternate days if not tolerated; product per BNF; recheck FBC in about 4 weeks), but never as a substitute for finding the cause \u2014 replacing iron and clearing the patient to donate masks occult bleeding and delays cancer diagnosis.' },
        { h:'NSAIDs \u2014 contributor, not alibi', t:'Regular NSAID/aspirin use causes GI blood loss and should be reviewed (PPI/stop), but must not be assumed to be the whole explanation; NSAID gastropathy can coexist with malignancy.' },
        { h:'Never do', t:'Never accept "I feel fine" to avoid working up IDA in a man; never prescribe iron and send a man back to donate without investigation; never blame the NSAID alone; never omit FIT/bidirectional endoscopy/coeliac screen; never ignore darker stools or bowel-habit change.' },
        { h:'Safety-net & follow-up', t:'FIT (NICE HTG690) + NICE NG12 referral if FIT ≥10 or concern persists + bidirectional endoscopy + coeliac serology + NSAID review + iron; advise red flags (fresh/black stools, weight loss, unwell); make the donation decision follow the results; confirm understanding and review.' }
      ]
    }
  };

  /* ============ 168. VIDEO — Fatigue with abnormal LFTs & low vitamin D (NAFLD; interpreting the panel; no NG12 link) ============ */
  const c168 = {
    id:'fatigue-lfts-vitd', title:'"Just give me the vitamin D and I\u2019ll be right \u2014 that\u2019s why I\u2019m tired, isn\u2019t it?"', type:'video', duration:12,
    meta:{ age:48, sex:'M', setting:'Video consultation \u2014 results of a tiredness blood panel.', system:'GI / Metabolic \u2014 interpreting the LFT + vitamin D panel (NAFLD)', checked:'October 2026' },
    brief:'Mr Paul Cresswell, 48, sedentary office manager, BMI 33. A "tiredness screen" he requested shows: mildly raised ALT (88, ~2\u00d7 upper limit) with normal bilirubin and near-normal ALP (a HEPATOCELLULAR pattern), an HbA1c in the pre-diabetes range, raised triglycerides, and a low vitamin D. He has fixed on the vitamin D as the cause of his fatigue and wants a high-dose prescription so he can "get back to normal". He drinks ~20 units/week, takes no regular meds, has no jaundice, abdominal pain or weight loss. The task is to interpret the PANEL as a whole rather than the one number he has latched onto: recognise the hepatocellular LFT pattern and the metabolic cluster as most likely NON-ALCOHOLIC FATTY LIVER DISEASE (NAFLD/MASLD), exclude other causes of a raised ALT, risk-stratify for fibrosis (FIB-4), address the alcohol and metabolic drivers, replace vitamin D appropriately WITHOUT pretending it explains everything, and avoid over-medicalising while not missing liver disease.',
    script:{
      opening:"(Breezy, in a rush, on a lunch break at his desk.) \"Cheers doc. So my bloods are back — the website said my vitamin D is low, and that explains the tiredness, right? I've read it makes you knackered. Can you just prescribe me a strong vitamin D and I'll be sorted? I haven't really got time to go down a rabbit hole — I just want my energy back.\"",
      facts:[
        { topic:"Tiredness", text:"\"Months. I'm flat by mid-afternoon. I sit at a desk all day, then I'm on the sofa all evening.\" Sleeps 7 hours: \"Not really refreshed, no. I don't know about snoring — nobody's complained\" (lives alone)." },
        { topic:"Mood", text:"\"Work's busy but I'm fine. Just tired.\" Enjoys things, no low mood." },
        { topic:"Liver and red flags", text:"If asked: \"No, none of that\" — no yellow skin or eyes, itch, dark urine, pale stools, abdominal pain or swelling, vomiting blood or black stools. Weight \"about right, yeah\" — steady; no weight loss." },
        { topic:"Alcohol", text:"If asked: \"A few pints after work Thursday and Friday, and a bottle of wine over the weekend\" — about 20 units a week. No morning drinking; never felt he needed to cut down — \"no more than anyone else\"." },
        { topic:"Other risk questions", text:"No tattoos done abroad, never injected drugs, no blood transfusions. Born in the UK. No travel recently. If asked about thirst or passing urine more: no." },
        { topic:"Medicines", text:"\"Nothing\" — no prescribed medicines, supplements, herbal remedies or protein powders. No allergies." },
        { topic:"History and family", text:"No past illnesses. Dad had type 2 diabetes and a heart attack at 62. No family liver disease." },
        { topic:"Lifestyle", text:"Office manager. Takeaways three or four nights a week. No exercise since he stopped five-a-side years ago. Non-smoker. Lives alone since divorce two years ago." },
        { topic:"How to play it", text:"Wants the quick fix; gently resists the bigger picture: \"Honestly, I just want to feel normal again. I know I should lose weight. I don't need a lecture.\" If told about fatty liver: \"Fatty liver? I thought that was drinkers.\" then \"Is it serious?\" Responds well to a doctor who asks what he could change: \"Probably cutting the drinking back a bit. And walking at lunch, maybe.\" If lectured, becomes short and defensive." }
      ],
      ice:{
        ideas:"\"The low vitamin D is why I'm tired.\"",
        concerns:"HIDDEN AGENDA — he knows his weight and drinking have crept up since the divorce and his dad had diabetes and a heart attack; he doesn't want a lecture or to face that, so a vitamin D tablet feels easier.",
        expectations:"\"A prescription. And to hear I'm basically fine.\""
      },
      cues:[
        "\"No time to go down a rabbit hole.\" — avoidance of the bigger conversation.",
        "\"I don't need a lecture.\" — needs a non-judgemental approach.",
        "Dad's diabetes and heart attack — only if family history is asked; links to his own risk."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Interprets the PANEL as a whole rather than the single result the patient anchored on \u2014 recognises the raised ALT with normal bilirubin/ALP as a HEPATOCELLULAR pattern sitting within a metabolic cluster (high BMI, pre-diabetic HbA1c, raised triglycerides)' },
      { dom:'dg', text:'Identifies NON-ALCOHOLIC FATTY LIVER DISEASE (NAFLD/MASLD) as the most likely cause and frames it as a marker of cardiometabolic risk, not a trivial finding' },
      { dom:'dg', text:'Excludes other causes of a raised ALT with a focused LIVER SCREEN \u2014 alcohol (quantified honestly), viral hepatitis B/C serology, ferritin/transferrin saturation (haemochromatosis), \u00b1 autoimmune/drug causes \u2014 rather than assuming NAFLD' },
      { dom:'dg', text:'Risk-stratifies for FIBROSIS using a non-invasive score (FIB-4 \u00b1 ELF / FibroScan), referring the minority with significant fibrosis to hepatology and managing low-risk patients in primary care' },
      { dom:'cm', text:'Addresses the metabolic drivers (weight loss, activity, alcohol reduction, pre-diabetes and lipid/CV risk) and replaces vitamin D proportionately \u2014 WITHOUT pretending vitamin D explains the fatigue, and without over-medicalising' },
      { dom:'ro',   text:'Engages a quick-fix-seeking, avoidant patient in the real story without lecturing \u2014 acknowledges the wish for a simple answer while reframing toward the panel and the metabolic picture' },
      { dom:'ro',   text:'Explains the results in plain, non-frightening language (hepatocellular pattern, fatty liver, fibrosis risk) and checks understanding, neither catastrophising nor falsely reassuring' },
      { dom:'cm',    text:'Safety-nets and follows up: arranges the liver screen and FIB-4, books review of results, sets a realistic lifestyle plan with one owned goal, gives proportionate vitamin D \u2014 and does not over-medicalise' },
    ],
    worked:[
      { lbl:'Meet the anchor, widen the lens', txt:'"You\u2019re right that your vitamin D is low and we\u2019ll sort that \u2014 but if I just hand you that and stop, I\u2019d be doing you a disservice, because your results actually tell a bigger and more useful story. Can I walk you through the whole picture?"' },
      { lbl:'Explain the pattern simply', txt:'"One of your liver readings, the ALT, is up \u2014 with the rest of the liver numbers normal, that points to the liver cells rather than a blockage. Put together with your weight, a blood sugar that\u2019s creeping up, and high blood fats, the most likely cause is a fatty liver \u2014 very common, and a signal worth listening to."' },
      { lbl:'Exclude the rest honestly', txt:'"Before I settle on that, I want to be thorough \u2014 a few bloods to check it isn\u2019t the alcohol, a viral cause, or an iron problem. And can I ask honestly about your drinking? \u2026 Around 20 units; thanks for being straight \u2014 that\u2019s relevant and we can work with it."' },
      { lbl:'The number that matters', txt:'"With a fatty liver, the question isn\u2019t really the ALT \u2014 it\u2019s whether there\u2019s any scarring. I can work that out with a simple score from your bloods, and a scan if needed. For most people it\u2019s low and very reversible; my job is to spot the few where it isn\u2019t."' },
      { lbl:'The real fix, no lecture', txt:'"Here\u2019s the honest bit: the vitamin D will help a little, but the thing that would genuinely give you your energy back \u2014 and reverse the fatty liver \u2014 is shifting some weight and moving more. I\u2019m not going to lecture you; if we picked ONE realistic change to start with, what could you actually live with?"' },
      { lbl:'Plan + follow-up', txt:'"So: vitamin D to replace it, a short set of liver bloods and a fibrosis score, one lifestyle goal we agree today, and a review to go through it all. No rabbit hole \u2014 a clear path. Sound fair?"' },
    ],
    learning:'Interpreting a "tiredness panel" means reading the GESTALT, not handing over the single number the patient googled: a raised ALT with normal bilirubin and near-normal ALP is a HEPATOCELLULAR pattern, and when it sits with a high BMI, a pre-diabetic HbA1c and raised triglycerides, the most likely cause is NON-ALCOHOLIC FATTY LIVER DISEASE (NAFLD/MASLD) \u2014 a marker of insulin resistance and cardiometabolic risk, not a trivial finding, and the fatigue is far more likely multifactorial than caused by vitamin D alone. Do not diagnose NAFLD by assumption: exclude the alternatives with a focused liver screen \u2014 alcohol (quantified honestly, using AST:ALT), viral hepatitis B/C, haemochromatosis (ferritin + transferrin saturation), \u00b1 autoimmune and drug causes. In NAFLD the number that matters is FIBROSIS risk, not the ALT: use a non-invasive score (FIB-4 \u00b1 ELF or transient elastography) to identify the minority needing hepatology, managing the low-risk majority in primary care. Treat the drivers — weight loss (7–10% per international EASL guidance; no UK figure), activity, alcohol reduction, and pre-diabetes/lipid/cardiovascular risk \u2014 and replace the vitamin D proportionately without pretending it explains everything. The hidden agenda is the wish for a single quick fix that sidesteps the harder metabolic conversation; engage without lecturing and avoid over-medicalising. The duty is correct interpretation, fibrosis risk and lifestyle, not a cancer referral.',
    knowledge:{
      guideline:'NICE NG49 (2016; update to MASLD terminology in progress): assessment and management · BSG/BASL Guidelines on the management of abnormal liver blood tests (Newsome et al., 2018) — liver screen and FIB-4 · NICE PH38 Type 2 diabetes: prevention in people at high risk (2012) · NICE NG238 Cardiovascular disease: risk assessment and reduction (2023) · Royal Osteoporosis Society vitamin D guideline (2018) · UK Chief Medical Officers’ low-risk drinking guidelines (2016) ·',
      points:[
        { h:'Interpret the panel, not one number', t:'Read LFTs as a pattern: raised ALT with normal bilirubin/ALP = hepatocellular; raised ALP/GGT with bilirubin = cholestatic. Place it in context (BMI, HbA1c, lipids) rather than handing over the single googled result.' },
        { h:'NAFLD/MASLD most likely', t:'A mildly raised ALT with a metabolic cluster (obesity, pre-diabetes, dyslipidaemia) most often reflects NAFLD/MASLD \u2014 a marker of insulin resistance and cardiovascular risk, not a trivial finding.' },
        { h:'Liver screen to exclude others', t:'Before settling on NAFLD, exclude alcohol (quantify; AST:ALT — his ~20 units/week exceeds the UK CMO 2016 low-risk limit of 14 and may be contributing, so call it NAFLD only with that caveat), viral hepatitis B/C, haemochromatosis (ferritin, transferrin saturation), and where indicated autoimmune hepatitis (immunoglobulins/autoantibodies) and drug causes — the BSG/BASL 2018 standard liver aetiology screen, plus an ultrasound.' },
        { h:'Fibrosis risk is the key metric', t:'In NAFLD the prognostic driver is fibrosis, not the ALT. Use FIB-4 first (age, AST, ALT, platelets; BSG/BASL 2018 — FIB-4 comes from BSG/BASL, not NICE NG49; above 3.25 suggests advanced fibrosis) ± ELF (NICE NG49: offer ELF to people with NAFLD; 10.51 or above means advanced fibrosis — refer to hepatology; below that, retest adults every 3 years) or transient elastography (FibroScan); refer significant fibrosis to hepatology, manage low-risk patients in primary care.' },
        { h:'Treat the drivers', t:'Weight loss (7–10% markedly improves steatosis/fibrosis — an international EASL figure; there is no UK figure), physical activity, alcohol reduction, and management of pre-diabetes (NICE PH38: intensive lifestyle programme, recheck HbA1c at least yearly), lipids and cardiovascular risk (NICE NG238: QRISK3; transaminases raised but less than 3 times the upper limit do not exclude statins). Set one realistic, owned goal rather than a lecture.' },
        { h:'Vitamin D in proportion', t:'Replace genuinely low vitamin D (Royal Osteoporosis Society 2018 loading then maintenance; doses per BNF), but do not attribute multifactorial fatigue to it alone; honest framing prevents both false reassurance and a missed metabolic/liver problem.' },
        { h:'Proportion', t:'A mildly raised ALT within a metabolic picture is not a suspected-cancer presentation; the duty is interpretation, fibrosis risk and lifestyle. (Persistent unexplained derangement, jaundice, weight loss or a mass would change the assessment.)' },
        { h:'Safety-net & follow-up', t:'Arrange the liver screen and FIB-4, book results review, agree a lifestyle goal, replace vitamin D, and avoid over-medicalising \u2014 with review to ensure the ALT trend and metabolic risk are followed.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c165, c166, c167, c168);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'pleural-effusion-cxr': {
      ceg: ['Investigations & results', 'Long-term conditions & cancer'],
      stem: {
        name: 'Brian Tulloch', age: '64 years \u00b7 male',
        pmh: ['CXR (done for ~6 wks breathlessness + R chest discomfort): moderate RIGHT pleural effusion, no consolidation', '\u26a0 Ex-builder/plasterer \u2014 years of asbestos exposure 1970s\u201380s', 'Ex-smoker (10 pack-years, stopped 15 yrs ago); mild weight loss'],
        meds: ['Amlodipine'],
        allergy: 'NKDA',
        recent: '"It\u2019ll be fine \u2014 just the tail end of a chest infection"; cruise booked next month; wants "something to clear it up".',
        reason: 'Video consultation \u2014 results of a chest X-ray.'
      },
      timeMap: [
        { t:'0\u20131',  h:'Warning shot', d:'Don\u2019t let him leave on the cruise framing. "The X-ray didn\u2019t show what we hoped" \u2014 check what he wants to know.' },
        { t:'1\u20134',  h:'Name the effusion', d:'Fluid on one side \u2014 not just an infection clearing; unilateral effusion always investigated. Screen weight loss/haemoptysis.' },
        { t:'4\u20136',  h:'Asbestos history', d:'Quantify + document the occupational exposure \u2014 the mesothelioma cue; confirm smoking. Raises urgency.' },
        { t:'6\u20139',  h:'NICE NG12 urgent referral', d:'Suspected cancer pathway lung/mesothelioma respiratory referral for thoracic ultrasound, pleural aspiration and CT; not antibiotics.' },
        { t:'9\u201312', h:'Hold it + the cruise', d:'Chunk + check; reframe cruise around the scan, not coldly; breathless/haemoptysis red flags; follow up.' }
      ],
      wordPics: {
        fail: 'Minimises the effusion as "fluid from the infection" and prescribes antibiotics; never asks about asbestos or weight loss; lets the cruise drive the plan; no urgent referral.',
        pass: 'Breaks the finding, recognises a unilateral effusion needs urgent investigation, takes the asbestos history and refers on the NICE NG12 lung/mesothelioma suspected cancer pathway.',
        exc:  'Delivers the unexpected finding with a warning shot and warmth, names the unilateral effusion as needing urgent work-up, elicits and documents the asbestos/occupational history as the mesothelioma cue, refers urgently to respiratory for CT/pleural assessment, reframes the cruise around the scan honestly, and safety-nets \u2014 ownership, not antibiotics-and-wave-off.'
      },
      avoid: [
        { dont:'"It\u2019s just a bit of fluid left over from the infection \u2014 I\u2019ll give you antibiotics and you\u2019ll be fine for your cruise."', instead:'"Fluid on one side isn\u2019t an infection clearing \u2014 it\u2019s something we always investigate. I need to be honest that this needs urgent hospital tests before any holiday."', why:'Minimising a unilateral effusion as infection and prescribing antibiotics misses lung cancer/mesothelioma and the NICE NG12 duty.' },
        { dont:'(Not asking about work) moving straight to "let\u2019s repeat the X-ray in six weeks".', instead:'"Can I ask about your working life \u2014 the asbestos exposure as a builder? That\u2019s important and it\u2019s why I want this looked at urgently, not in six weeks."', why:'Omitting the asbestos/occupational history misses the central mesothelioma cue and under-grades urgency.' },
        { dont:'"Try not to worry, I\u2019m sure it\u2019s nothing serious."', instead:'"I can\u2019t promise that, and it wouldn\u2019t be fair to \u2014 but most of this is about getting you the right scan quickly so we have a real answer."', why:'False reassurance about an unexplained unilateral effusion with asbestos exposure is unsafe and erodes trust.' }
      ]
    },

    'low-platelets-young': {
      ceg: ['Investigations & results', 'New & undifferentiated presentations'],
      stem: {
        name: 'Chloe Fenner', age: '27 years \u00b7 female',
        pmh: ['FBC (for menorrhagia/tiredness): ISOLATED platelets 38 \u00d710\u2079/L \u2014 Hb normal, WCC normal, no blasts flagged', 'Easy bruising on shins; one episode of gum bleeding brushing teeth', 'No fevers, night sweats, weight loss, bone pain; 8-month-old baby'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Texted "abnormal \u2014 please book"; googled "low platelets" at 2am, convinced it\u2019s leukaemia; "I\u2019ve got a little one".',
        reason: 'Video consultation \u2014 results of a blood count.'
      },
      timeMap: [
        { t:'0\u20131',  h:'Answer + reframe', d:'She asks "is it cancer?" \u2014 be honest: low platelets, rest of count normal, a pattern unlike leukaemia.' },
        { t:'1\u20134',  h:'Confirm + screen', d:'Film/repeat (exclude clumping); screen B symptoms, bleeding, nodes, hepatosplenomegaly \u2014 absence reassures.' },
        { t:'4\u20137',  h:'Urgency by number', d:'38 with minor mucosal bleeding \u2192 prompt urgent haematology, not watch-only; differential ITP/viral/drugs/new pregnancy/HIV and hepatitis C (not gestational at 8 months postpartum); examine face to face.' },
        { t:'7\u20139',  h:'Bleeding precautions', d:'Avoid NSAIDs/aspirin/contact sport; 999 for heavy bleeding, severe headache, neuro symptoms.' },
        { t:'9\u201312', h:'Hold fear + follow up', d:'Honest reassurance not blanket "it\u2019s nothing"; teach-back the plan; chase film/referral together.' }
      ],
      wordPics: {
        fail: 'Either alarms her toward leukaemia or blandly says "it\u2019s nothing"; never checks the other cell lines or asks for a film; misses urgency-by-number; no bleeding precautions.',
        pass: 'Reads it as isolated thrombocytopenia, screens red flags, confirms with a film, refers haematology with appropriate urgency and gives bleeding advice.',
        exc:  'Names the isolated pattern and why leukaemia is unlikely without false blanket reassurance, confirms with film/repeat, screens B symptoms/nodes/organomegaly, sets urgency by count and bleeding, gives clear bleeding precautions, and holds a frightened new mother\u2019s fear with honesty and a teach-back plan.'
      },
      avoid: [
        { dont:'"Low platelets can be a sign of leukaemia, so we\u2019ll need to rule that out."', instead:'"Your platelets are low but the rest of your count is normal \u2014 that pattern points away from leukaemia and toward a treatable immune cause, which we\u2019ll confirm."', why:'Leading with leukaemia feeds the 2am catastrophe; the isolated pattern should be explained first.' },
        { dont:'"It\u2019s almost certainly nothing \u2014 don\u2019t worry about it."', instead:'"It\u2019s most likely an immune cause, but a count this low with gum bleeding I won\u2019t just watch \u2014 I\u2019m getting you seen by the blood team and giving you bleeding precautions."', why:'False blanket reassurance under-manages a count of 38 with mucosal bleeding and ignores urgency-by-number.' },
        { dont:'(Not mentioning bleeding) "Wait for the haematology appointment and we\u2019ll see."', instead:'"While we wait: no ibuprofen or aspirin, nothing rough; and 999 for heavy bleeding, a severe headache or any neurological symptoms."', why:'Omitting bleeding precautions and emergency red flags leaves a thrombocytopenic patient unsafe.' }
      ]
    },

    'blood-donor-anaemia': {
      ceg: ['Investigations & results', 'Long-term conditions & cancer'],
      stem: {
        name: 'Geoffrey Aldous', age: '61 years \u00b7 male',
        pmh: ['Blood-donor deferral letter: low Hb \u2192 repeat confirms IRON-DEFICIENCY ANAEMIA (low Hb, low MCV, low ferritin)', 'Stools occasionally darker; bowel habit a little looser over months', '\u26a0 Regular ibuprofen for knees; 60+ lifetime donations'],
        meds: ['Ibuprofen PRN (frequent)'],
        allergy: 'NKDA',
        recent: '"A non-event \u2014 I feel fine; just top me up with iron so I can donate again."',
        reason: 'Video consultation \u2014 brings a letter from the blood donation service.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Own the result', d:'Resist "I feel fine / non-event"; confirm IDA and explain it warrants the same work-up as if symptomatic.' },
        { t:'2\u20135',  h:'The man-IDA rule + history', d:'Men don\u2019t menstruate \u2192 GI loss until proven otherwise. Screen bowel habit, dark stools, weight loss, dyspepsia, FH, NSAIDs.' },
        { t:'5\u20138',  h:'NICE NG12 plan', d:'FIT (≥10 → suspected cancer pathway colorectal referral; low FIT does not close the case), bidirectional endoscopy (OGD + colonoscopy), coeliac serology.' },
        { t:'8\u201310', h:'Iron alongside + NSAID', d:'Iron to correct, not to mask; review/stop ibuprofen \u00b1 PPI \u2014 contributor, not the whole story.' },
        { t:'10\u201312',h:'Donor identity + safety-net', d:'Honour 60 donations; investigation before return; red flags (fresh/black stools, weight loss); follow up results.' }
      ],
      wordPics: {
        fail: 'Accepts "I feel fine", prescribes iron and clears him to donate; blames the ibuprofen and stops there; no FIT, no GI history, no referral \u2014 masks a possible colorectal cancer.',
        pass: 'Recognises IDA in a man as GI loss until proven otherwise, offers FIT and refers on the NICE NG12 colorectal pathway with endoscopy, gives iron alongside.',
        exc:  'Owns the incidental result, applies the man-IDA rule, takes the GI history treating darker stools/bowel change as cues, offers FIT + NICE NG12 colorectal referral + bidirectional endoscopy + coeliac screen, reviews the NSAID without using it as an alibi, gives iron alongside investigation, and honours the donor identity while holding the line.'
      },
      avoid: [
        { dont:'"You feel well and you\u2019ve probably just lost a bit through the ibuprofen \u2014 here\u2019s some iron, you\u2019ll be donating again soon."', instead:'"Low iron in a man is GI blood loss until proven otherwise \u2014 the ibuprofen may contribute but I can\u2019t assume it\u2019s the whole story. We investigate before any return to donating."', why:'Iron-and-clear masks the cause and can delay a colorectal cancer; the NSAID must not be an alibi.' },
        { dont:'(Skipping the bowel history) "I\u2019ll just recheck your iron in a few months."', instead:'"Tell me about your stools and bowels \u2014 you mentioned they\u2019ve been darker and looser. Those are exactly why I\u2019m arranging a FIT test and an urgent referral now."', why:'Rechecking iron without a GI history/FIT/referral ignores positive red-flag cues in a 61-year-old man.' },
        { dont:'"Once your iron\u2019s up you can get straight back to donating."', instead:'"I respect the 60 donations \u2014 but we sort out why the iron\u2019s low first; getting you healthy is how you donate safely again."', why:'Colluding with the donor wish prioritises donation over diagnosing the cause of the anaemia.' }
      ]
    },

    'fatigue-lfts-vitd': {
      ceg: ['Investigations & results', 'New & undifferentiated presentations'],
      stem: {
        name: 'Paul Cresswell', age: '48 years \u00b7 male',
        pmh: ['Tiredness panel: ALT 88 (\u22482\u00d7 ULN), bilirubin normal, ALP near-normal (HEPATOCELLULAR); HbA1c pre-diabetic; raised triglycerides; low vitamin D', 'BMI 33, sedentary; alcohol ~20 units/week', 'No jaundice, abdominal pain or weight loss'],
        meds: ['None regular'],
        allergy: 'NKDA',
        recent: '"The site said my vitamin D is low \u2014 that\u2019s the tiredness, right? Just give me strong vitamin D; no time for a rabbit hole."',
        reason: 'Video consultation \u2014 results of a tiredness blood panel.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Meet anchor, widen lens', d:'Replace the vitamin D \u2014 but read the whole panel; the results tell a bigger, more useful story.' },
        { t:'2\u20135',  h:'Explain the pattern', d:'Raised ALT, normal bilirubin/ALP = hepatocellular; with BMI/HbA1c/triglycerides = likely fatty liver (NAFLD/MASLD).' },
        { t:'5\u20138',  h:'Liver screen', d:'Exclude alcohol (quantify honestly), viral hepatitis B/C, ferritin/transferrin sats \u00b1 autoimmune/drugs.' },
        { t:'8\u201310', h:'Fibrosis risk', d:'FIB-4 \u00b1 ELF/FibroScan \u2014 the number that matters; refer the few with fibrosis, manage the rest.' },
        { t:'10\u201312',h:'Drivers + proportion', d:'One owned lifestyle goal; vitamin D in proportion; no over-medicalising; follow up.' }
      ],
      wordPics: {
        fail: 'Hands over high-dose vitamin D and attributes the fatigue to it; ignores the raised ALT and metabolic cluster; no liver screen or fibrosis assessment \u2014 or, conversely, makes an unwarranted urgent cancer referral.',
        pass: 'Reads the panel, recognises likely NAFLD, does a liver screen and FIB-4, addresses metabolic drivers and replaces vitamin D proportionately.',
        exc:  'Interprets the gestalt (hepatocellular ALT + metabolic cluster = NAFLD), excludes alcohol/viral/iron causes, risk-stratifies fibrosis with FIB-4, engages the avoidant patient in the metabolic conversation with one owned goal, keeps vitamin D in proportion, avoids over-medicalising, and avoids an unwarranted cancer referral.'
      },
      avoid: [
        { dont:'"Your vitamin D is low \u2014 that\u2019ll be the tiredness. Here\u2019s a strong dose, you\u2019ll be sorted."', instead:'"We\u2019ll replace the vitamin D, but your results tell a bigger story \u2014 a liver reading is up alongside your weight and sugar, pointing to a fatty liver worth acting on."', why:'Handing over the one googled number misses NAFLD and the metabolic/fibrosis picture.' },
        { dont:'(Assuming NAFLD) "It\u2019s just a fatty liver, nothing to do."', instead:'"Fatty liver is likely, but I want to be sure it isn\u2019t the alcohol, a viral cause or an iron problem \u2014 and then check there\u2019s no scarring with a simple score."', why:'Assuming NAFLD without a liver screen or fibrosis assessment misses treatable causes and the few with significant fibrosis.' },
        { dont:'(Over-reacting) "A raised liver test \u2014 I\u2019d better refer you urgently for cancer tests."', instead:'"A mildly raised liver reading in this metabolic picture isn\u2019t a cancer-pathway situation \u2014 it\u2019s about the fatty liver and your overall health; we sort it in primary care."', why:'Inventing a cancer referral over-medicalises and misuses the pathway.' }
      ]
    }

  });

})();
