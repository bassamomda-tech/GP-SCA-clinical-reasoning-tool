/* ============================================================
   Reasoning GP — Case Library batch 37: "Skin: the surface and what's under it"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 2WW stated where it maps (non-healing lesion -> skin-cancer
   2WW; widespread itch -> consider haematological malignancy).
   Shingles antiviral window + ophthalmic emergency. Acne + mental health.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases36.js.
   ============================================================ */

(function(){

  /* ============ 141. VIDEO — Generalised itch, no rash: the systemic screen ============ */
  const c141 = {
    id:'generalised-itch', title:'"I itch all over but there\u2019s no rash \u2014 just give me a cream"', type:'video', duration:12,
    meta:{ age:64, sex:'M', setting:'Video consultation \u2014 weeks of generalised itch, no rash.', system:'Dermatology / Pruritus without rash' },
    brief:'Mr Alan Pickering, 64. ~10 weeks of GENERALISED itching, worse at night, with NO primary rash (just scratch marks). Wants "a strong cream/antihistamine". On directed history: drenching NIGHT SWEATS, unintentional weight loss (~5 kg), fatigue, and \u2014 if asked \u2014 itch notably after a hot bath. No jaundice. Ex-smoker. This pattern (generalised pruritus without rash + B-symptoms) raises a SYSTEMIC cause \u2014 notably HAEMATOLOGICAL MALIGNANCY (lymphoma) \u2014 plus iron deficiency, thyroid, liver, renal and drug causes. He minimises the systemic symptoms.',
    script:{
      opening:'"Afternoon doctor. I\u2019ve been itching like mad for weeks, all over, worst at night \u2014 driving me up the wall. There\u2019s nothing to see, no rash, just where I\u2019ve scratched. Can you just prescribe me a strong cream or some antihistamines and I\u2019ll be on my way? It\u2019s just dry skin or my age, I expect \u2014 nothing to make a fuss about."',
      facts:[
        { topic:'Itch without rash = think systemic', text:'GENERALISED pruritus WITHOUT a primary rash (only excoriations) is a flag to look for a SYSTEMIC cause rather than just treating the skin. Causes: iron deficiency, thyroid disease, chronic kidney/liver disease (cholestasis), drugs, polycythaemia (classically itch after a hot bath \u2014 aquagenic pruritus), and \u2014 importantly \u2014 HAEMATOLOGICAL MALIGNANCY, especially LYMPHOMA (Hodgkin\u2019s). "Just dry skin" is the misconception when there are systemic features.' },
        { topic:'The B-symptoms / red flags', text:'CRITICAL \u2014 directed questioning reveals drenching NIGHT SWEATS, unintentional WEIGHT LOSS and fatigue \u2014 "B-symptoms" \u2014 plus itch after a hot bath. Generalised itch WITH these features strongly raises lymphoma/haematological malignancy and mandates examination (lymph nodes, hepatosplenomegaly) and an urgent work-up, not a cream.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 he minimises ("just dry skin/my age", "give me a cream") partly to avoid a conversation he half-dreads: he has noticed a LUMP in his neck/armpit (lymph node) and the night sweats, has quietly worried about cancer, but is frightened to name it and hopes a cream makes it go away. The skill is to take a proper directed history, examine, surface the fear, and act on the red flags \u2014 not collude with "just a cream".' },
        { topic:'The work-up',          text:'History/exam-directed: examine for lymphadenopathy/hepatosplenomegaly; bloods (FBC + film, ferritin, U&E, LFTs, TFTs, ESR/LDH, calcium); consider CXR/imaging. Urgent referral / suspected-cancer pathway if lymphoma is suspected (e.g. unexplained lymphadenopathy with B-symptoms). Treat the cause; symptomatic itch relief alongside, not instead.' },
        { topic:'What he needs',         text:'Officially: a strong cream/antihistamine. What he needs: recognition that generalised itch WITHOUT rash and WITH night sweats/weight loss is a systemic red flag, a directed history and EXAMINATION (nodes/organomegaly), an urgent work-up (bloods, imaging, urgent referral if lymphoma suspected), the cancer fear surfaced and addressed, and symptomatic relief alongside \u2014 not instead of \u2014 the work-up.' },
      ],
      ice:{
        ideas:'It\u2019s just dry skin or his age; a strong cream or antihistamines will fix it.',
        concerns:'HIDDEN AGENDA \u2014 he\u2019s noticed a lump (node) and the night sweats and has quietly feared cancer, but is frightened to name it and hopes a cream makes it go away; minimises the systemic symptoms.',
        expectations:'A cream/antihistamine and to leave. What he actually needs: recognition of the systemic red flags, a directed history + examination, an urgent work-up (bloods/imaging/referral), the cancer fear addressed, and symptomatic relief alongside.'
      },
      cues:['Generalised itch with NO primary rash \u2014 think systemic cause, not just dry skin.','Night sweats + weight loss + fatigue (B-symptoms) + itch after a hot bath \u2014 raises lymphoma/haematological malignancy; examine + urgent work-up.','"Just give me a cream, it\u2019s nothing" \u2014 minimisation possibly masking a noticed lump and cancer fear; surface it.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that GENERALISED pruritus WITHOUT a primary rash (only excoriations) is a flag for a SYSTEMIC cause \u2014 and does NOT just prescribe a cream/antihistamine without assessment' },
      { dom:'tasks', text:'Elicits the SYSTEMIC red flags by directed questioning \u2014 drenching night sweats, unintentional weight loss, fatigue (B-symptoms), itch after a hot bath \u2014 and recognises these raise HAEMATOLOGICAL MALIGNANCY (lymphoma) and warrant urgent work-up' },
      { dom:'tasks', text:'EXAMINES appropriately: lymph nodes (cervical/axillary/inguinal), liver/spleen (hepatosplenomegaly), and the skin \u2014 rather than managing remotely on the symptom alone' },
      { dom:'tasks', text:'Plans the structured work-up: bloods (FBC + film, ferritin, U&E, LFTs, TFTs, ESR/LDH, calcium), CXR/imaging as indicated, and an URGENT/suspected-cancer referral if lymphoma or another malignancy is suspected (e.g. unexplained lymphadenopathy with B-symptoms); tag NICE NG12 where the threshold is met' },
      { dom:'tasks', text:'Covers the broader differential (iron deficiency, thyroid, liver/renal, drugs, polycythaemia) and offers SYMPTOMATIC itch relief alongside \u2014 not instead of \u2014 the cause work-up' },
      { dom:'rto',   text:'Surfaces the patient\u2019s fear and the possibly-noticed lump, rather than colluding with "just a cream"; names the concern honestly and proportionately' },
      { dom:'rto',   text:'Balances honest reassurance (many causes are benign and treatable) with taking the red flags seriously, so he accepts the work-up' },
      { dom:'gs',    text:'Safety-nets and follows up: the urgent work-up/referral and examination, symptomatic relief, what would prompt sooner review (enlarging nodes, fevers, weight loss), and a follow-up \u2014 pursuing the cause, not patching the symptom' },
    ],
    worked:[
      { lbl:'Reframe \"just dry skin\"', txt:'"I can give you something for the itch \u2014 but I don\u2019t want to just hand you a cream and miss something, because there\u2019s an important rule here: when someone itches all over WITHOUT any actual rash, just scratch marks, that can be a sign of something going on inside the body rather than a skin problem. So let me ask a few questions and examine you properly first."' },
      { lbl:'Directed history',     txt:'"Have you had any drenching sweats at night \u2014 soaking the sheets? Lost any weight without trying? More tired than usual? \u2026 And does the itch flare after a hot bath? \u2026 You\u2019ve had several of those. Thank you \u2014 that\u2019s really important, because together with the itch it points me towards looking properly rather than just treating the skin."' },
      { lbl:'Examine + name it honestly', txt:'"I\u2019d like to feel for any swollen glands in your neck, armpits and groin, and check your tummy. \u2026 The combination of all-over itch, night sweats and weight loss is something we take seriously \u2014 occasionally it\u2019s a sign of something in the glands or blood that we\u2019d want to catch. I\u2019m not saying it IS that, but it\u2019s why we check properly and quickly."' },
      { lbl:'Surface the fear',     txt:'"Can I gently ask \u2014 had you noticed any lumps yourself, or had cancer cross your mind? \u2026 Thank you for telling me. That fear is understandable, and it\u2019s exactly why a cream alone wouldn\u2019t have been right. Getting this checked is the sensible thing \u2014 so you\u2019re not lying awake with it."' },
      { lbl:'The work-up',          txt:'"So: some blood tests \u2014 your blood count, iron, thyroid, kidney and liver, and a couple of markers \u2014 and depending on what I find on examination, possibly a scan and an urgent specialist referral. And I\u2019ll give you something to ease the itch in the meantime, so you\u2019re more comfortable while we sort the cause."' },
      { lbl:'Safety-net',           txt:'"If you notice any glands getting bigger, more fevers or sweats, or more weight dropping off, tell me sooner. I\u2019ll chase the tests and we\u2019ll go through them together. You came in wanting a cream for a bit of itch; what I\u2019m doing is making sure that if there\u2019s a reason behind it, we find it \u2014 and I\u2019ll treat the itch too."' },
    ],
    learning:'Generalised pruritus WITHOUT a primary rash (only excoriations) is a flag to look for a SYSTEMIC cause, not just to treat the skin. The differential includes iron deficiency, thyroid and chronic kidney/liver disease (cholestasis), drugs, polycythaemia (classically itch after a hot bath), and \u2014 importantly \u2014 HAEMATOLOGICAL MALIGNANCY, especially lymphoma. The examinable core is directed questioning that uncovers the B-symptoms (drenching night sweats, unintentional weight loss, fatigue) the patient minimised, which with generalised itch strongly raise lymphoma and mandate EXAMINATION (lymph nodes, hepatosplenomegaly) and an urgent structured work-up (FBC + film, ferritin, U&E, LFTs, TFTs, ESR/LDH, calcium, imaging) with urgent/suspected-cancer referral where the threshold is met \u2014 not a cream. The hidden agenda is a noticed lump and an unvoiced cancer fear driving the "just give me a cream" minimisation; surface and address it, examine and act on the red flags, balance honest reassurance with taking them seriously, and give symptomatic itch relief ALONGSIDE \u2014 not instead of \u2014 the cause work-up.',
    knowledge:{
      guideline:'NICE CKS pruritus (generalised) · NICE NG12 (haematological malignancy / lymphadenopathy) · systemic itch work-up',
      points:[
        { h:'Itch without rash \u2014 think systemic', t:'Generalised pruritus with no primary skin lesion (only secondary excoriations) should prompt a search for a systemic cause. Key causes: iron deficiency, thyroid disease, chronic kidney disease, cholestatic liver disease, drugs, polycythaemia vera (aquagenic pruritus \u2014 itch after warm water), and haematological malignancy (especially Hodgkin lymphoma).' },
        { h:'Hunt the B-symptoms', t:'Ask directly about drenching night sweats, unexplained weight loss and persistent fatigue/fever ("B-symptoms"). Generalised itch with B-symptoms strongly raises lymphoma and warrants urgent assessment. Examine for lymphadenopathy and hepatosplenomegaly.' },
        { h:'Structured work-up', t:'Bloods: FBC and blood film, ferritin/iron studies, U&E, LFTs, TFTs, ESR, LDH, calcium, glucose/HbA1c; consider CXR/imaging. Review medications. Tailor to the clinical picture rather than a random scatter.' },
        { h:'Refer per NG12 thresholds', t:'Unexplained lymphadenopathy or hepatosplenomegaly, or a strong suspicion of lymphoma/haematological malignancy (e.g. with B-symptoms), warrants urgent investigation/suspected-cancer referral. Persistent unexplained pruritus with systemic features should not be dismissed.' },
        { h:'Treat cause + symptom', t:'Identify and treat the underlying cause; provide symptomatic relief alongside (emollients, sedating antihistamine at night, manage dry skin) \u2014 but symptomatic treatment must not replace the cause work-up when red flags are present.' },
        { h:'Surface the fear', t:'Minimisation ("just dry skin/my age, give me a cream") may mask a noticed lump and an unvoiced cancer fear. Surface it, name the concern proportionately, and use it to motivate the work-up rather than colluding with a cream-only request.' },
        { h:'Never do', t:'Never treat generalised itch-without-rash with a cream alone when systemic features are present; never skip the B-symptom screen and examination for nodes/organomegaly; never miss the lymphoma/haematological-malignancy possibility; never collude with minimisation; never give false reassurance over red flags.' },
        { h:'Safety-net & follow-up', t:'Structured bloods/imaging and examination; urgent/suspected-cancer referral if lymphoma suspected; symptomatic itch relief; red flags (enlarging nodes, fevers/sweats, weight loss) \u2192 sooner review; follow up the results and the cause.' }
      ]
    }
  };

  /* ============ 142. VIDEO — Shingles: the antiviral window and the eye emergency ============ */
  const c142 = {
    id:'shingles-ophthalmic', title:'"A painful rash on my forehead \u2014 it\u2019s near my eye"', type:'video', duration:12,
    meta:{ age:67, sex:'F', setting:'Video consultation \u2014 a painful unilateral rash, day 2.', system:'Dermatology / Herpes zoster (shingles)' },
    brief:'Mrs Glenda Hart, 67. ~2 days of a painful, burning, BLISTERING rash in a band on the RIGHT FOREHEAD and scalp, NOT crossing the midline, preceded by a day of tingling/pain. Likely SHINGLES (herpes zoster). CRUCIAL: the rash extends to the SIDE/TIP OF THE NOSE and she has a red, watery, gritty right eye \u2014 this is OPHTHALMIC zoster with Hutchinson\u2019s sign, a sight-threatening emergency. She thinks it\u2019s "a bad cold sore / an allergy" and wants a cream. Within the 72-hour antiviral window. Mildly immunosuppressed (on methotrexate).',
    script:{
      opening:'"Hello doctor. I\u2019ve got this horrible painful rash come up on one side of my forehead, all blistery, and it really burns and stings. I thought maybe it was a bad reaction to a new face cream, or a cold sore gone mad. My eye on that side\u2019s a bit red and watery too. Could you give me a cream for it? It\u2019s only been a couple of days."',
      facts:[
        { topic:'Recognise shingles', text:'A painful, burning, blistering/vesicular rash in a DERMATOMAL band, UNILATERAL and NOT crossing the midline, preceded by a prodrome of pain/tingling, is HERPES ZOSTER (shingles) \u2014 reactivated varicella. "Cold sore/allergy/face-cream reaction" is the misconception. She is ~day 2, within the antiviral window.' },
        { topic:'The OPHTHALMIC emergency \u2014 KEY', text:'CRITICAL \u2014 the rash is in the OPHTHALMIC (V1) distribution and involves the SIDE/TIP OF THE NOSE (HUTCHINSON\u2019S SIGN \u2014 nasociliary nerve involvement), with a red, gritty, watery eye \u2014 i.e. HERPES ZOSTER OPHTHALMICUS, which threatens the eye (keratitis, uveitis, vision loss). This needs URGENT antivirals AND same-day OPHTHALMOLOGY assessment. The eye involvement transforms a "give me a cream" consultation into a sight-saving one.' },
        { topic:'The antiviral window', text:'Oral ANTIVIRALS (aciclovir/valaciclovir/famciclovir) should be started promptly \u2014 ideally within 72 hours of rash onset (and considered later if new vesicles, ophthalmic/complicated zoster, or immunosuppression). She is within the window AND immunosuppressed (methotrexate) AND has ophthalmic involvement \u2014 all strong indications to treat now and refer.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 she\u2019s minimising ("just a cream") partly because she\u2019s frightened by how painful it is and by the eye symptom but doesn\u2019t want to "make a fuss", and partly because she\u2019s worried about disrupting an upcoming family event/holiday. There may also be anxiety about the methotrexate ("did my arthritis tablet cause this?"). The skill is to recognise the emergency, convey the eye risk clearly without panicking her, and act \u2014 plus address pain and post-herpetic neuralgia risk.' },
        { topic:'What she needs',       text:'Officially: a cream for a "cold sore/allergy". What she needs: recognition of shingles in the ophthalmic distribution with Hutchinson\u2019s sign (eye-threatening), URGENT oral antivirals AND same-day ophthalmology referral, adequate analgesia and post-herpetic-neuralgia awareness, infection-control advice, and her fear/methotrexate concern addressed \u2014 not a cream.' },
      ],
      ice:{
        ideas:'It\u2019s a bad cold sore / an allergic reaction to a face cream; a cream will sort it.',
        concerns:'HIDDEN AGENDA \u2014 frightened by the pain and the eye symptom but doesn\u2019t want to "make a fuss"; worried about an upcoming family event; possible anxiety that her methotrexate caused it.',
        expectations:'A cream and to carry on. What she actually needs: recognition of ophthalmic shingles with Hutchinson\u2019s sign, urgent antivirals + same-day ophthalmology, analgesia + PHN awareness, infection-control advice, and her fear addressed.'
      },
      cues:['Painful blistering unilateral band not crossing the midline + prodromal pain \u2014 shingles, not a cold sore/allergy.','Rash to the tip/side of the nose + red gritty eye (Hutchinson\u2019s sign) \u2014 ophthalmic zoster, sight-threatening; same-day ophthalmology.','Day 2 + immunosuppressed (methotrexate) \u2014 within the antiviral window; start antivirals now.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises SHINGLES (herpes zoster): a painful, dermatomal, unilateral, blistering rash not crossing the midline with a prodrome \u2014 NOT a cold sore/allergy/cream reaction \u2014 and identifies the OPHTHALMIC (V1) distribution' },
      { dom:'tasks', text:'Identifies HERPES ZOSTER OPHTHALMICUS with HUTCHINSON\u2019S SIGN (rash on the side/tip of the nose) and eye involvement (red, gritty, watery eye) as a SIGHT-THREATENING emergency requiring SAME-DAY ophthalmology assessment' },
      { dom:'tasks', text:'Starts oral ANTIVIRALS promptly (within the ~72-hour window; and indicated regardless here given ophthalmic involvement and immunosuppression) at the correct dose, recognising the methotrexate/immunosuppression as a further indication' },
      { dom:'tasks', text:'Manages PAIN adequately and counsels POST-HERPETIC NEURALGIA risk (common, especially older patients), and gives infection-control advice (avoid contact with the immunosuppressed, pregnant women, and non-immune neonates until lesions crust)' },
      { dom:'tasks', text:'Addresses the methotrexate concern appropriately (it did not "cause" shingles but immunosuppression raises risk/severity; do not stop it without advice) and considers the broader picture' },
      { dom:'rto',   text:'Conveys the eye-risk and urgency CLEARLY but calmly so she accepts same-day ophthalmology, without inducing panic; surfaces the "don\u2019t want to make a fuss"/event worry' },
      { dom:'rto',   text:'Validates the pain and fear and explains why this is more than a cream, engaging her in the urgent plan' },
      { dom:'gs',    text:'Safety-nets emphatically: same-day ophthalmology for the eye; any visual change/severe eye pain \u2192 emergency eye care; antivirals started; analgesia and PHN safety-net; infection-control advice; and follow-up \u2014 sight protected, shingles treated' },
    ],
    worked:[
      { lbl:'Name it (not a cold sore)', txt:'"This isn\u2019t a cold sore or a cream reaction \u2014 it\u2019s shingles: the chickenpox virus reactivating in one nerve, which is why it\u2019s painful, blistery, and in a band on just one side. The good news is you\u2019ve come early, which matters for treatment. But there\u2019s one thing about WHERE yours is that makes me want to act urgently."' },
      { lbl:'The eye \u2014 the key bit', txt:'"Your rash goes onto the side of your nose, and your eye on that side is red and gritty. That\u2019s an important warning sign \u2014 it means the nerve to your EYE is involved, and shingles there can affect your sight if it\u2019s not treated quickly. So this is more than a cream; I need an eye specialist to see you TODAY."' },
      { lbl:'Treat now',           txt:'"I\u2019m starting you on antiviral tablets right away \u2014 they work best started early like this, and with your eye involved and your arthritis medication lowering your immunity a bit, they\u2019re definitely the right thing. Take them as prescribed; they help the rash and reduce complications."' },
      { lbl:'Pain + PHN',          txt:'"Shingles can be very painful, so let\u2019s get on top of that properly \u2014 and I\u2019ll be honest that sometimes the nerve pain lingers after the rash heals; if it does, there are specific treatments for it, so tell me. Don\u2019t suffer in silence with the pain."' },
      { lbl:'The methotrexate worry', txt:'"You might be wondering if your arthritis tablet caused this \u2014 it didn\u2019t cause it, but because it dampens the immune system it can make shingles more likely and a bit more serious, which is another reason we treat promptly. Don\u2019t stop the methotrexate on your own \u2014 we\u2019ll take advice on that."' },
      { lbl:'Safety-net + infection control', txt:'"So: antivirals now, and I\u2019m arranging for the eye team to see you today \u2014 if your vision changes or the eye becomes very painful before then, go straight to eye casualty. Keep the rash covered, and avoid anyone who\u2019s pregnant, a newborn, or has a weak immune system until it crusts over. I know you didn\u2019t want a fuss \u2014 but protecting your sight is worth it. I\u2019ll follow up how you\u2019re doing."' },
    ],
    learning:'A painful, dermatomal, unilateral, blistering rash that doesn\u2019t cross the midline, with a prodrome of pain/tingling, is shingles (herpes zoster) \u2014 not a cold sore or allergy \u2014 and oral antivirals should start promptly (ideally within ~72 hours; and regardless here given ophthalmic involvement and immunosuppression). The examinable emergency is HERPES ZOSTER OPHTHALMICUS: rash in the ophthalmic (V1) distribution involving the side/tip of the nose (HUTCHINSON\u2019S SIGN \u2014 nasociliary nerve) with a red, gritty eye threatens the eye (keratitis, uveitis, vision loss) and needs SAME-DAY ophthalmology assessment \u2014 the eye involvement transforms a "give me a cream" consultation into a sight-saving one. Manage pain and counsel post-herpetic neuralgia (common in older patients), give infection-control advice (avoid contact with the immunosuppressed, pregnant women, non-immune neonates until crusted), and address the methotrexate concern (it didn\u2019t cause it, but immunosuppression raises risk/severity; don\u2019t stop without advice). The hidden agenda is "don\u2019t want to make a fuss"/event worry; convey the eye risk clearly but calmly and act urgently.',
    knowledge:{
      guideline:'NICE CKS shingles (herpes zoster) · herpes zoster ophthalmicus · antiviral window · post-herpetic neuralgia',
      points:[
        { h:'Recognise herpes zoster', t:'Unilateral, dermatomal, painful vesicular/blistering rash that does not cross the midline, often with a prodrome of pain/paraesthesia. Reactivated varicella-zoster virus. Distinguish from herpes simplex/cold sore (recurrent, localised, often perioral) and contact dermatitis.' },
        { h:'Ophthalmic zoster = emergency', t:'Herpes zoster ophthalmicus (V1 distribution) threatens the eye (keratitis, uveitis, scleritis, glaucoma, vision loss). HUTCHINSON\u2019S SIGN \u2014 vesicles on the side/tip of the nose (nasociliary nerve) \u2014 predicts ocular involvement. Any eye redness/pain/visual symptom with V1 zoster warrants SAME-DAY ophthalmology referral. Treat with oral antivirals promptly.' },
        { h:'Antiviral window & indications', t:'Start oral antivirals (aciclovir/valaciclovir/famciclovir) ideally within 72 hours of rash onset. Treat even later, or beyond 72h, if: new vesicles still forming, ophthalmic/complicated zoster, immunosuppression, or severe pain/older age. Immunosuppressed patients (e.g. on methotrexate) have higher risk and may need urgent/secondary-care input.' },
        { h:'Pain & post-herpetic neuralgia', t:'Provide adequate analgesia. Post-herpetic neuralgia (pain persisting after the rash heals) is common, especially in older patients; manage with neuropathic agents (amitriptyline, gabapentin/pregabalin, etc.) if it develops. Counsel the patient about it.' },
        { h:'Infection control', t:'Zoster lesions can transmit varicella to non-immune contacts. Advise covering the rash and avoiding contact with pregnant women, immunosuppressed people, and non-immune neonates until lesions have crusted.' },
        { h:'Address the immunosuppression concern', t:'Reassure that the immunosuppressant did not "cause" shingles, but explain it raises risk/severity; do not advise stopping it without specialist/rheumatology advice. Consider whether the episode needs that input.' },
        { h:'Never do', t:'Never dismiss dermatomal vesicular rash as a cold sore/allergy and give a cream; never miss Hutchinson\u2019s sign/eye involvement and the same-day ophthalmology need; never delay antivirals when indicated; never overlook PHN/pain or infection-control; never tell the patient to stop immunosuppressants unadvised.' },
        { h:'Safety-net & follow-up', t:'Start antivirals; same-day ophthalmology for eye involvement; visual change/severe eye pain \u2192 emergency eye care; analgesia + PHN safety-net; infection-control advice; rheumatology input re methotrexate; follow-up.' }
      ]
    }
  };

  /* ============ 143. VIDEO — The non-healing lesion: skin-cancer 2WW behind "just a sore" ============ */
  const c143 = {
    id:'non-healing-lesion', title:'"It\u2019s just a sore that won\u2019t heal \u2014 a bit of cream\u2019ll do"', type:'video', duration:12,
    meta:{ age:74, sex:'M', setting:'Video consultation \u2014 a non-healing lesion on the ear/face.', system:'Dermatology / Non-melanoma skin cancer' },
    brief:'Mr Stanley Cooke, 74, retired farmer (decades of sun exposure). A scaly, crusting, sometimes-bleeding lesion on the top of his RIGHT EAR for ~4 months that "won\u2019t heal" \u2014 he\u2019s tried antiseptic cream. It\u2019s tender, has grown, with a raised, indurated edge. Likely a non-melanoma skin cancer (SCC > BCC given the ear/sun-exposed site, growth, tenderness). He dismisses it as "an old man\u2019s scab / where my glasses rub" and wants "a stronger cream". Lifelong outdoor worker; multiple actinic keratoses.',
    script:{
      opening:'"Afternoon. I\u2019ve got this little scab on the top of my ear that just won\u2019t heal up \u2014 had it a few months. I keep knocking the crust off and it bleeds a bit, then it comes back. I\u2019ve been putting antiseptic cream on but it\u2019s not shifting. I reckon it\u2019s just where my glasses rub, or an old man\u2019s scab. Could you give me something stronger to heal it? I don\u2019t want any fuss made."',
      facts:[
        { topic:'A non-healing lesion is a flag', text:'A lesion that FAILS TO HEAL over weeks\u2013months (here ~4 months), especially on SUN-EXPOSED skin in an older person with chronic sun exposure, that is scaly/crusting, bleeding, growing, tender, with a raised/indurated edge, is a NON-MELANOMA SKIN CANCER until proven otherwise \u2014 squamous cell carcinoma (SCC) or basal cell carcinoma (BCC). "An old man\u2019s scab / where my glasses rub / a stronger cream" is the dangerous misconception; non-healing is the red flag.' },
        { topic:'SCC vs BCC & urgency', text:'On the ear (a high-risk site) with growth, tenderness, crusting/keratin and bleeding, SCC is likely \u2014 SCC can metastasise and warrants URGENT (2-week-wait) suspected-skin-cancer referral. BCC (pearly, rolled edge, telangiectasia, slow-growing) is usually referred routinely. NICE NG12: refer SCC suspicion on a 2WW pathway; refer/treat BCC appropriately. The job is to recognise it needs assessment/biopsy and refer \u2014 not to cream it.' },
        { topic:'The hidden agenda',   text:'HIDDEN AGENDA \u2014 his "don\u2019t want a fuss / old man\u2019s scab" minimisation masks a stoical reluctance to bother anyone and a quiet fear (he\u2019s noticed it growing and bleeding and half-suspects it\u2019s serious, perhaps after a friend had skin cancer), plus possibly worry about disfiguring surgery on his face. The skill is to gently challenge the minimisation, examine, name the concern honestly, and refer \u2014 while reassuring that non-melanoma skin cancers are usually very treatable, especially caught early.' },
        { topic:'Reassurance available', text:'Genuinely reassuring: most non-melanoma skin cancers (BCC, and SCC caught early) are highly treatable/curable with minor surgery, especially when caught early \u2014 so urgent referral is precautionary and good news, not a catastrophe. Also screen/advise on his other sun damage (actinic keratoses) and sun protection.' },
        { topic:'What he needs',        text:'Officially: a stronger cream for a "scab". What he needs: recognition that a non-healing, growing, bleeding lesion on sun-exposed skin is a likely skin cancer, EXAMINATION, an urgent (2WW) suspected-skin-cancer referral (SCC suspicion), the minimisation/fear addressed, reassurance that these are usually very treatable, and sun-damage advice \u2014 not a cream.' },
      ],
      ice:{
        ideas:'It\u2019s an old man\u2019s scab / where his glasses rub; a stronger cream will heal it.',
        concerns:'HIDDEN AGENDA \u2014 stoical "don\u2019t want a fuss", plus a quiet fear (it\u2019s growing/bleeding; maybe after a friend\u2019s skin cancer) and worry about disfiguring facial surgery.',
        expectations:'A stronger cream for a scab. What he actually needs: recognition of a likely skin cancer, examination, an urgent 2WW referral, the fear addressed, reassurance these are usually very treatable, and sun-damage advice.'
      },
      cues:['A lesion that won\u2019t heal over months on sun-exposed skin, growing/bleeding/crusting \u2014 skin cancer (SCC/BCC), not a scab; don\u2019t cream it.','Ear/high-risk site + growth + tenderness + keratin/crust + bleeding \u2014 SCC suspicion \u2192 urgent 2WW referral.','"Old man\u2019s scab, don\u2019t want a fuss" \u2014 stoical minimisation masking fear; gently challenge and refer.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises that a lesion FAILING TO HEAL over weeks\u2013months on sun-exposed skin (scaly/crusting, bleeding, growing, tender, indurated edge) in an older sun-exposed person is a NON-MELANOMA SKIN CANCER until proven otherwise \u2014 and does NOT prescribe "a stronger cream" for it' },
      { dom:'tasks', text:'EXAMINES the lesion and surrounding skin (and regional nodes for SCC) and assesses its features, recognising the ear as a high-risk site and the SCC-suspicious features (growth, tenderness, keratin, bleeding)' },
      { dom:'tasks', text:'Refers on the appropriate pathway: URGENT (2-week-wait) suspected-skin-cancer referral for suspected SCC; recognises BCC is usually routine \u2014 and acts on the NG12 thresholds rather than treating empirically; tag NICE NG12' },
      { dom:'tasks', text:'Gives accurate, reassuring information: most non-melanoma skin cancers (BCC, and SCC caught early) are highly treatable/curable with minor surgery, especially early \u2014 so the urgent referral is precautionary, not a catastrophe' },
      { dom:'tasks', text:'Addresses the wider SUN-DAMAGE picture: examines for/advises on actinic keratoses and other lesions, and gives sun-protection advice, recognising field damage in a lifelong outdoor worker' },
      { dom:'rto',   text:'Gently challenges the "old man\u2019s scab/don\u2019t want a fuss" minimisation and surfaces the underlying fear, rather than colluding with the cream request; names the concern honestly and proportionately' },
      { dom:'rto',   text:'Balances honesty (this needs urgent checking) with genuine reassurance (these are very treatable), so the stoical patient accepts referral; addresses any disfigurement worry' },
      { dom:'gs',    text:'Safety-nets and follows up: the urgent referral and what to expect (biopsy/excision), reassurance and sun-protection advice, what to report (rapid growth, bleeding, new lesions), and a follow-up \u2014 referring the likely cancer, not creaming it' },
    ],
    worked:[
      { lbl:'Reframe \"old man\u2019s scab\"', txt:'"I\u2019m really glad you mentioned it, even if it feels like nothing. Here\u2019s the important rule: a sore or scab that DOESN\u2019T heal over a few months \u2014 keeps bleeding and crusting and coming back \u2014 isn\u2019t just an old scab, especially on a sun-exposed spot like the top of your ear. A cream won\u2019t fix that, because it\u2019s likely something we need to look at properly. So let me examine it."' },
      { lbl:'Name it honestly',    txt:'"Having looked at it \u2014 the way it\u2019s grown, the raised edge, the crusting and bleeding, on sun-damaged skin after all your years outdoors \u2014 I\u2019m concerned this could be a skin cancer. I want to be straight with you about that. But before that word frightens you, let me tell you the genuinely reassuring part."' },
      { lbl:'The reassurance',     txt:'"The common skin cancers from sun damage \u2014 which this is most likely to be \u2014 are usually very treatable, often cured completely with a small operation, especially when caught early like yours. So this isn\u2019t the kind of cancer news people most dread. Getting it seen now is exactly how we keep it simple."' },
      { lbl:'The urgent referral', txt:'"Because of where it is and how it looks, I\u2019m going to refer you urgently to the skin specialists \u2014 you\u2019ll be seen within two weeks. They\u2019ll examine it and usually take a small sample or remove it. That\u2019s the right, safe step, and it\u2019s why a cream wouldn\u2019t have done."' },
      { lbl:'The wider sun damage', txt:'"While we\u2019re here \u2014 a lifetime farming means a lot of sun on your skin, so I\u2019d like to check for any other rough or scaly patches, and talk about protecting your skin going forward, hat and sunscreen. There may be a few spots worth treating."' },
      { lbl:'Safety-net',          txt:'"I know you didn\u2019t want a fuss \u2014 but this is worth it, and you\u2019ve done the right thing. If it grows quickly, bleeds a lot, or you spot new ones, tell me sooner. I\u2019ll get the urgent referral done and follow it up with you. You came in for a stronger cream; what you actually needed was to get this looked at properly \u2014 and most likely sorted simply."' },
    ],
    learning:'A lesion that FAILS TO HEAL over weeks\u2013months on sun-exposed skin in an older person with chronic sun exposure \u2014 scaly/crusting, bleeding, growing, tender, with a raised/indurated edge \u2014 is a NON-MELANOMA SKIN CANCER until proven otherwise (SCC or BCC), so "an old man\u2019s scab / a stronger cream" is the dangerous misconception and non-healing is the red flag. On a high-risk site like the ear with growth, tenderness, keratin and bleeding, SCC (which can metastasise) is likely and warrants an URGENT (2-week-wait) suspected-skin-cancer referral per NICE NG12, while BCC (pearly, rolled edge, telangiectasia, slow) is usually routine \u2014 the job is to examine, recognise it needs assessment/biopsy, and refer, not to cream it. Reassure genuinely (most non-melanoma skin cancers, and early SCC, are highly treatable/curable with minor surgery), address the field sun-damage (actinic keratoses, sun protection), and \u2014 the hidden agenda \u2014 gently challenge the stoical "don\u2019t want a fuss" minimisation masking a quiet fear, naming the concern honestly while reassuring, so the patient accepts the urgent referral.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer (skin) · CKS SCC/BCC/actinic keratosis · non-melanoma skin cancer pathways',
      points:[
        { h:'Non-healing = red flag', t:'A skin lesion that does not heal within the expected time (weeks), or that grows, bleeds, crusts, ulcerates or is tender \u2014 especially on sun-exposed skin in older/sun-damaged patients \u2014 should be regarded as a possible skin cancer, not treated as a benign "scab" with creams.' },
        { h:'SCC features and urgency', t:'Squamous cell carcinoma: a keratinising/crusting, often tender, enlarging nodule or non-healing ulcer on sun-exposed sites (face, ears, scalp, hands, lower lip). SCC can metastasise \u2014 refer on a suspected-cancer (2-week-wait) pathway (NG12). High-risk sites (ear, lip) and immunosuppression raise concern.' },
        { h:'BCC features and pathway', t:'Basal cell carcinoma: pearly/translucent papule or nodule with a rolled edge and surface telangiectasia, slow-growing, may ulcerate ("rodent ulcer"). Usually low metastatic risk \u2014 refer routinely (or per local pathway/skin-cancer service); urgent referral if there is concern about SCC or a high-risk/large/recurrent lesion.' },
        { h:'Examine and assess', t:'Examine the lesion (size, edge, surface, ulceration, induration) and surrounding skin; examine regional lymph nodes for suspected SCC. Dermoscopy/structured assessment supports the decision. Biopsy/excision is done in secondary care \u2014 refer rather than treating empirically.' },
        { h:'Reassure proportionately', t:'Most non-melanoma skin cancers (BCC, and early SCC) are highly treatable and often cured with minor surgery, especially when caught early. Frame urgent referral as precautionary and good news, not a catastrophe \u2014 this helps a stoical patient accept it.' },
        { h:'Field damage & prevention', t:'Lifelong sun exposure causes field change \u2014 actinic keratoses (premalignant) and multiple lesions. Examine for and manage these, and give sun-protection advice (hat, sunscreen, avoidance), with surveillance for further lesions.' },
        { h:'Never do', t:'Never treat a non-healing, growing or bleeding lesion as a benign scab with creams; never miss the SCC 2WW threshold (especially high-risk sites); never skip examination/regional nodes; never collude with "don\u2019t want a fuss"; never frighten without the genuine reassurance these are usually very treatable.' },
        { h:'Safety-net & follow-up', t:'Urgent (2WW) suspected-skin-cancer referral for SCC suspicion (routine for BCC per pathway); examine and manage field damage; sun protection; report rapid growth/bleeding/new lesions; follow up the referral and outcome.' }
      ]
    }
  };

  /* ============ 144. VIDEO — Acne and its psychological weight: the ladder + isotretinoin/mental-health ============ */
  const c144 = {
    id:'acne-psychological', title:'"My acne\u2019s ruining my life \u2014 I want the strong tablets that cure it"', type:'video', duration:12,
    meta:{ age:19, sex:'M', setting:'Video consultation \u2014 acne with major psychological impact.', system:'Dermatology / Acne & mental health' },
    brief:'Mr Reece Holloway, 19, student. Moderate-to-severe inflammatory acne (face, chest, back), with early scarring, despite OTC products and a previous topical. He wants "the strong tablets \u2014 Roaccutane \u2014 to cure it". CRUCIAL: on exploration the psychological impact is profound \u2014 he\u2019s stopped going out, missing lectures, low mood, and \u2014 if asked sensitively \u2014 some fleeting thoughts that "life\u2019s not worth it" because of how he looks. The acne is genuinely severe AND the mental-health impact (and the isotretinoin mood/safety discussion) is central.',
    script:{
      opening:'"Doctor, please \u2014 my skin is ruining my life. I\u2019ve tried everything from the chemist and it\u2019s just got worse, and now it\u2019s scarring. I just want the strong tablets, Roaccutane, the ones that actually cure it. I can\u2019t keep living like this. Can you just refer me for it or prescribe it? I\u2019ll do anything to make it stop."',
      facts:[
        { topic:'Assess severity & the ladder', text:'Moderate-to-severe inflammatory acne with SCARRING that has failed adequate topical treatment warrants stepping UP the ladder: topical retinoid + benzoyl peroxide/antibiotic combinations, a course of oral antibiotics (e.g. lymecycline/doxycycline) WITH a topical (not antibiotic monotherapy), hormonal options where relevant \u2014 and, for severe/scarring/treatment-resistant or psychologically-significant acne, REFERRAL to dermatology for ISOTRETINOIN (which is specialist-prescribed, not GP-prescribed).' },
        { topic:'Isotretinoin realities', text:'Isotretinoin is dermatologist-prescribed and highly effective but requires specialist supervision: TERATOGENICITY (Pregnancy Prevention Programme \u2014 critical in females; relevant to counsel), monitoring (lipids/LFTs), mucocutaneous side effects, and the MOOD/MENTAL-HEALTH consideration \u2014 a careful mental-health assessment is part of isotretinoin care (MHRA guidance on mood/suicidality monitoring). The GP\u2019s role: optimise/step up treatment, refer appropriately, and \u2014 crucially \u2014 assess and address the mental-health impact.' },
        { topic:'The hidden agenda \u2014 mental health', text:'HIDDEN AGENDA \u2014 the consultation is NOT just about a prescription: the acne\u2019s PSYCHOLOGICAL impact is severe (social withdrawal, missing lectures, low mood) and, if explored sensitively, there are fleeting suicidal thoughts driven by his appearance. This MUST be assessed explicitly \u2014 both because his mental health needs support in its own right, and because it bears directly on (and is part of) safe isotretinoin care. Reaching the suicidal ideation behind the "ruining my life" is the crux.' },
        { topic:'Validate, don\u2019t minimise', text:'Acne is too often dismissed as trivial/cosmetic. The skill is to take BOTH the skin AND its psychological toll seriously, treat the acne effectively (and early, to limit scarring), and assess/support mental health \u2014 not to brush off "it\u2019s just spots" nor to simply refer for tablets without addressing the distress and risk.' },
        { topic:'What he needs',        text:'Officially: isotretinoin to cure his skin. What he needs: his acne severity and scarring taken seriously with an effective step-up and a dermatology referral for isotretinoin, the isotretinoin realities explained (specialist-prescribed, monitoring, teratogenicity, mood), and \u2014 above all \u2014 an explicit, sensitive MENTAL-HEALTH assessment (the suicidal thoughts) with support and safety-netting \u2014 not just a prescription request processed.' },
      ],
      ice:{
        ideas:'Isotretinoin ("Roaccutane") is the cure and he just needs it prescribed/referred.',
        concerns:'HIDDEN AGENDA \u2014 the acne\u2019s psychological impact is severe (withdrawal, missing lectures, low mood) with fleeting suicidal thoughts about his appearance; "ruining my life / I\u2019ll do anything" carries real distress and risk.',
        expectations:'A prescription/referral for isotretinoin. What he actually needs: effective acne treatment + dermatology referral for isotretinoin, the realities explained, and an explicit mental-health assessment with support \u2014 not just a script.'
      },
      cues:['Moderate-severe scarring acne failing topicals \u2014 step up + dermatology referral for isotretinoin; treat early to limit scarring.','"It\u2019s ruining my life / I\u2019ll do anything" \u2014 explore the psychological impact; assess mood and suicide risk explicitly.','Isotretinoin request \u2014 specialist-prescribed; teratogenicity + mood monitoring; the mental-health assessment is part of safe care.']
    },
    checkpoints:[
      { dom:'tasks', text:'Takes the acne seriously (moderate-to-severe inflammatory acne with SCARRING failing topicals) and steps UP treatment appropriately \u2014 combination topicals, oral antibiotics WITH a topical (not antibiotic monotherapy) \u2014 and refers to DERMATOLOGY for ISOTRETINOIN given severity/scarring/psychological impact, recognising isotretinoin is specialist-prescribed (not GP-prescribed)' },
      { dom:'tasks', text:'Explicitly ASSESSES MENTAL HEALTH and SUICIDE RISK: explores the profound psychological impact and asks directly about low mood and suicidal thoughts/plans/intent \u2014 recognising this is central, not incidental, and a safety issue' },
      { dom:'tasks', text:'Explains isotretinoin REALITIES accurately: highly effective but dermatologist-prescribed with monitoring (lipids/LFTs), teratogenicity/Pregnancy Prevention Programme, mucocutaneous effects, and the MOOD/mental-health monitoring (MHRA) \u2014 so the mental-health assessment is part of safe isotretinoin care' },
      { dom:'tasks', text:'Treats early to LIMIT SCARRING and validates that acne and its impact are NOT trivial \u2014 avoiding dismissive "it\u2019s just spots" \u2014 while not simply processing a prescription request without addressing the distress' },
      { dom:'tasks', text:'Makes a mental-health management plan: support for low mood (and risk management/crisis routes if suicidal ideation), and coordinates this with the acne/dermatology plan' },
      { dom:'rto',   text:'Reaches the suicidal ideation behind "ruining my life", validates the genuine distress (without minimising the acne), and responds with compassion and a safety plan' },
      { dom:'rto',   text:'Engages him as more than a prescription request \u2014 treating the whole young person \u2014 and explains why the mental-health side matters for him and for safe treatment' },
      { dom:'gs',    text:'Safety-nets and follows up: the acne step-up and dermatology/isotretinoin referral, the mental-health support and crisis routes (urgent/111/crisis/A&E if risk), early follow-up, and coordination \u2014 treating the skin AND the mind, not a script in isolation' },
    ],
    worked:[
      { lbl:'Validate, don\u2019t minimise', txt:'"First \u2014 I\u2019m not going to brush this off as \u2018just spots\u2019. Your acne is genuinely severe, it\u2019s scarring, and I can hear it\u2019s having a huge effect on your life. That\u2019s real, and we\u2019re going to treat it properly. You were right to come and push for help."' },
      { lbl:'Reach the real distress', txt:'"When you say it\u2019s ruining your life \u2014 can I ask how it\u2019s affecting your mood and your days? \u2026 Stopping going out, missing lectures. And sometimes when people feel this low about how they look, dark thoughts come \u2014 have you had any thoughts that life\u2019s not worth it, or of harming yourself? \u2026 Thank you for trusting me with that. That matters to me as much as your skin, and I\u2019m really glad you told me."' },
      { lbl:'Treat the acne seriously', txt:'"On the skin: we step it up. There are stronger combinations and a course of tablets we can start, and \u2014 because yours is severe and scarring \u2014 I\u2019m going to refer you to the skin specialists for the strong treatment you mentioned, isotretinoin. Treating it properly now also helps limit the scarring."' },
      { lbl:'Isotretinoin honestly', txt:'"About isotretinoin \u2014 it\u2019s very effective and it\u2019s what the specialists prescribe, with some monitoring along the way. One reason the specialist handles it is that they keep an eye on mood during treatment too, which is exactly why getting on top of how you\u2019re feeling now matters before and during it. So the mental-health side isn\u2019t separate \u2014 it\u2019s part of treating you safely and well."' },
      { lbl:'Support the mind',     txt:'"So we treat your skin AND look after you. I\u2019d like to get you some support for your mood \u2014 there\u2019s real help \u2014 and if those darker thoughts ever get stronger, here are the numbers to call, and that\u2019s an urgent/A&E thing if you ever feel unsafe. You don\u2019t have to carry this alone, and your skin clearing will help, but I don\u2019t want to wait on that for your wellbeing."' },
      { lbl:'Plan + safety-net',    txt:'"Plan: I\u2019ll start the step-up treatment, refer you to dermatology for isotretinoin, and sort some support for your mood, and I want to see you again soon \u2014 not leave it long. Come back sooner if you\u2019re struggling. You came in asking for tablets to fix your skin; what you\u2019re getting is your skin treated properly AND someone looking after how you\u2019re feeling \u2014 because both matter."' },
    ],
    learning:'Acne is too often dismissed as trivial/cosmetic \u2014 the skill is to take BOTH the skin AND its psychological toll seriously. Moderate-to-severe inflammatory acne with scarring failing topicals warrants stepping up (combination topicals; oral antibiotics WITH a topical, never antibiotic monotherapy) and DERMATOLOGY referral for ISOTRETINOIN (specialist-prescribed, not GP-prescribed), treating early to limit scarring. Isotretinoin\u2019s realities must be explained: high efficacy but monitoring (lipids/LFTs), teratogenicity/Pregnancy Prevention Programme, mucocutaneous effects, and MOOD/mental-health monitoring (MHRA) \u2014 so the mental-health assessment is part of safe isotretinoin care. The examinable hidden agenda is that the consultation is NOT just a prescription request: the psychological impact is severe (social withdrawal, missing lectures, low mood) with fleeting suicidal thoughts about appearance, which MUST be assessed explicitly \u2014 reaching the suicidal ideation behind "it\u2019s ruining my life" is the crux \u2014 with mood support and safety-netting. Treat the skin AND the mind, validate the distress without minimising the acne, and never process the script in isolation.',
    knowledge:{
      guideline:'NICE NG198 acne vulgaris · isotretinoin (specialist) & MHRA mood/PPP guidance · acne & mental health',
      points:[
        { h:'Acne is not trivial', t:'Acne, especially moderate-severe or scarring, carries significant psychological morbidity (low self-esteem, social withdrawal, depression, suicidality). Take both the skin and its mental-health impact seriously; avoid dismissive "it\u2019s just spots".' },
        { h:'Step up effectively', t:'For moderate-severe inflammatory acne: use combination topical regimens (topical retinoid + benzoyl peroxide \u00b1 topical antibiotic) and, if needed, a course of oral antibiotics (e.g. lymecycline/doxycycline) ALWAYS combined with a topical (never antibiotic monotherapy, to limit resistance), for a limited duration. Treat early to reduce scarring.' },
        { h:'When to refer for isotretinoin', t:'Refer to dermatology for isotretinoin in severe/nodulocystic, scarring, treatment-resistant acne, or acne causing significant psychological distress. Isotretinoin is SPECIALIST-prescribed \u2014 the GP optimises/steps up and refers, rather than prescribing it.' },
        { h:'Isotretinoin safety', t:'Isotretinoin is highly effective but requires: pregnancy prevention (teratogenic \u2014 Pregnancy Prevention Programme in those who can become pregnant), lipid/LFT monitoring, counselling on mucocutaneous and other effects, and MENTAL-HEALTH monitoring (MHRA: assess mood/psychiatric history, monitor for depression/suicidality during treatment). The mental-health assessment is integral to safe care.' },
        { h:'Assess mental health explicitly', t:'Explore the psychological impact and ask directly about low mood and suicidal ideation/plan/intent. This is central \u2014 both for the patient\u2019s wellbeing and because it informs safe isotretinoin care. Provide mood support, safety-planning and crisis routes as needed.' },
        { h:'Treat the whole young person', t:'Engage the patient as more than a prescription request: validate the distress, treat the acne properly, and coordinate mental-health support. Early follow-up and safety-netting are important.' },
        { h:'Never do', t:'Never dismiss acne as trivial/cosmetic; never give oral antibiotic monotherapy; never simply process an isotretinoin request without assessing severity, scarring and \u2014 crucially \u2014 mental health/suicide risk; never ignore the suicidal ideation behind "it\u2019s ruining my life"; never treat the script in isolation from the mind.' },
        { h:'Safety-net & follow-up', t:'Acne step-up + dermatology/isotretinoin referral; explicit mental-health assessment with mood support and crisis routes (urgent/111/crisis/A&E if risk); early follow-up; coordinated skin-and-mind care.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c141, c142, c143, c144);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'generalised-itch': {
      ceg: ['Long-term conditions & cancer', 'Investigations & results'],
      stem: {
        name: 'Alan Pickering', age: '64 years · male',
        pmh: ['~10 weeks generalised itch, worse at night, NO primary rash (only scratch marks)', '⚠ Drenching night sweats, ~5 kg unintentional weight loss, fatigue; itch after a hot bath', 'Ex-smoker'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Wants "a strong cream/antihistamine"; minimises systemic symptoms; ?noticed a lump.',
        reason: 'Video consultation — generalised itch, no rash.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe "dry skin"',  d:'Itch all over with NO rash → think systemic, not skin. Don\u2019t just hand over a cream.' },
        { t:'2–4',  h:'Directed history',    d:'Night sweats? weight loss? fatigue? itch after a hot bath? — B-symptoms raise lymphoma. Examine nodes/spleen.' },
        { t:'4–6',  h:'Surface the fear',    d:'Noticed a lump? cancer crossed your mind? Name it honestly; that\u2019s why a cream alone is wrong.' },
        { t:'6–9',  h:'Work-up',             d:'FBC + film, ferritin, U&E, LFTs, TFTs, ESR/LDH, calcium; imaging; urgent/2WW referral if lymphoma suspected. Symptomatic relief alongside.' },
        { t:'9–12', h:'Safety-net',          d:'Enlarging nodes/fevers/weight loss → sooner. Chase results; treat the itch too. Find the cause, don\u2019t patch it.' }
      ],
      wordPics: {
        fail: 'Prescribes a cream/antihistamine for "dry skin/age" without a history or examination; never screens the B-symptoms or examines for nodes/organomegaly; misses the lymphoma possibility and the noticed lump.',
        pass: 'Recognises itch-without-rash as systemic, screens B-symptoms, examines, arranges the work-up/referral, and gives symptomatic relief.',
        exc:  'Reframes itch-without-rash as a systemic flag; elicits the B-symptoms and aquagenic itch by directed history and examines for nodes/organomegaly; surfaces the noticed lump and cancer fear; arranges the structured work-up and urgent referral where indicated; and treats the itch alongside, not instead of, the cause.'
      },
      avoid: [
        { dont:'"It\u2019s probably just dry skin at your age — here\u2019s a strong cream and an antihistamine."', instead:'"Itching all over with no rash can be a sign of something internal, not a skin problem — let me ask some questions and examine you before reaching for a cream."', why:'Treating generalised itch-without-rash as dry skin misses systemic causes including lymphoma.' },
        { dont:'"As long as you\u2019re otherwise well, we\u2019ll just treat the itch."', instead:'"Have you had drenching night sweats, lost weight, or felt very tired? Those change things — they make me want to examine your glands and run some tests."', why:'Failing to screen the B-symptoms misses the red flags that raise haematological malignancy.' },
        { dont:'"I\u2019m sure it\u2019s nothing sinister, try not to worry."', instead:'"Most causes are benign and treatable — but because of the sweats and weight loss I do want to check properly and quickly, so you\u2019re not left wondering."', why:'Premature blanket reassurance over genuine red flags risks missing a serious, treatable cause.' }
      ]
    },

    'shingles-ophthalmic': {
      ceg: ['Urgent & unscheduled care', 'Older adults'],
      stem: {
        name: 'Glenda Hart', age: '67 years · female',
        pmh: ['~2 days painful, burning, blistering rash — right forehead/scalp, NOT crossing midline; prodromal pain', '⚠ Rash to the side/tip of the nose (Hutchinson\u2019s sign) + red, gritty, watery right eye', 'On methotrexate (immunosuppressed)'],
        meds: ['Methotrexate'],
        allergy: 'NKDA',
        recent: 'Thinks it\u2019s "a bad cold sore / face-cream allergy"; wants a cream; "doesn\u2019t want a fuss".',
        reason: 'Video consultation — painful unilateral rash, day 2.'
      },
      timeMap: [
        { t:'0–2',  h:'Name shingles',       d:'Painful blistering unilateral band, not crossing midline, with prodrome = shingles, not a cold sore/allergy. Came early — good.' },
        { t:'2–4',  h:'The eye \u2014 the key', d:'Rash to nose tip (Hutchinson\u2019s) + red gritty eye = ophthalmic zoster, sight-threatening. Same-day ophthalmology.' },
        { t:'4–6',  h:'Antivirals now',      d:'Within window + ophthalmic + immunosuppressed → start oral antivirals immediately at correct dose.' },
        { t:'6–8',  h:'Pain + PHN + MTX',    d:'Adequate analgesia; warn re post-herpetic neuralgia; methotrexate didn\u2019t cause it but raises risk — don\u2019t stop unadvised.' },
        { t:'8–12', h:'Safety-net + IC',     d:'Vision change/severe eye pain → emergency eye care. Cover rash; avoid pregnant/immunosuppressed/neonates until crusted. Follow up.' }
      ],
      wordPics: {
        fail: 'Calls it a cold sore/allergy and prescribes a cream; misses Hutchinson\u2019s sign and the eye involvement; doesn\u2019t start antivirals or arrange same-day ophthalmology — risking the patient\u2019s sight.',
        pass: 'Recognises shingles and ophthalmic involvement, starts antivirals, refers same-day to ophthalmology, manages pain/PHN and infection control.',
        exc:  'Names shingles and identifies ophthalmic zoster with Hutchinson\u2019s sign as a sight-threatening emergency; starts antivirals promptly (window + immunosuppression) and arranges same-day ophthalmology; manages pain and PHN risk, infection control and the methotrexate concern; and conveys the eye risk clearly but calmly with a robust safety-net.'
      },
      avoid: [
        { dont:'"Looks like a bad cold sore or a reaction — here\u2019s a cream."', instead:'"This is shingles, and crucially it\u2019s near your eye — that needs antiviral tablets now and an eye specialist today, not a cream."', why:'Mislabelling ophthalmic shingles and creaming it risks sight loss.' },
        { dont:'"Your eye being a bit red is probably just irritation from the rash."', instead:'"The rash on the tip of your nose with a red, gritty eye is a warning that the eye nerve is involved — that\u2019s why I\u2019m sending you to the eye team today."', why:'Dismissing Hutchinson\u2019s sign / eye involvement misses a sight-threatening complication.' },
        { dont:'"You\u2019d better stop your methotrexate as it\u2019s caused this."', instead:'"Your methotrexate didn\u2019t cause it, but it raises the risk — don\u2019t stop it on your own; we\u2019ll take advice while we treat the shingles urgently."', why:'Advising unsupervised cessation of immunosuppressants is wrong and risks an arthritis flare.' }
      ]
    },

    'non-healing-lesion': {
      ceg: ['Long-term conditions & cancer', 'Older adults'],
      stem: {
        name: 'Stanley Cooke', age: '74 years · male',
        pmh: ['Scaly, crusting, bleeding lesion on the right ear ~4 months, "won\u2019t heal"; growing, tender, indurated edge', 'Retired farmer — decades of sun exposure; multiple actinic keratoses', 'Tried antiseptic cream'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Dismisses it as "an old man\u2019s scab / where my glasses rub"; wants a stronger cream; "no fuss".',
        reason: 'Video consultation — non-healing lesion on the ear.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe "scab"',      d:'A sore that won\u2019t heal over months on sun-exposed skin, growing/bleeding, isn\u2019t a scab — a cream won\u2019t fix it. Examine.' },
        { t:'2–4',  h:'Name it honestly',    d:'Growth, raised edge, crusting/bleeding on the ear after years outdoors → likely skin cancer (SCC). Be straight, then reassure.' },
        { t:'4–6',  h:'The reassurance',     d:'Sun-damage skin cancers are usually very treatable, often cured by minor surgery, especially early. Urgent referral is precautionary.' },
        { t:'6–8',  h:'Urgent 2WW referral', d:'Ear/SCC suspicion → urgent (2-week-wait) suspected-skin-cancer referral; biopsy/excision in secondary care. Tag NICE NG12.' },
        { t:'8–12', h:'Field damage + net',  d:'Check for other actinic lesions; sun protection. Rapid growth/bleeding/new lesions → sooner. Follow up the referral.' }
      ],
      wordPics: {
        fail: 'Prescribes a stronger cream for "an old man\u2019s scab"; never examines or recognises the non-healing lesion as a likely skin cancer; misses the SCC 2WW referral; colludes with "no fuss".',
        pass: 'Recognises the non-healing lesion as a likely skin cancer, examines, refers urgently (2WW), and reassures + advises on sun damage.',
        exc:  'Reframes the non-healing "scab" as a likely skin cancer and examines (and nodes for SCC); refers urgently on the NG12 2WW pathway for SCC suspicion; reassures genuinely that these are usually very treatable; addresses the field sun-damage and protection; and gently challenges the stoical minimisation and underlying fear.'
      },
      avoid: [
        { dont:'"It\u2019s probably just an old scab where your glasses rub — try a stronger cream."', instead:'"A sore that won\u2019t heal over months on a sun-exposed ear, growing and bleeding, isn\u2019t a scab — it needs looking at properly, because it could be a skin cancer. A cream won\u2019t fix that."', why:'Creaming a non-healing, growing, bleeding lesion misses a likely skin cancer (often SCC).' },
        { dont:'"Let\u2019s give it another few months and see if it heals."', instead:'"We don\u2019t watch and wait with this — because of where it is and how it looks, I\u2019m referring you urgently to the skin specialists, seen within two weeks."', why:'"Watch and wait" delays the urgent 2WW assessment an SCC-suspicious ear lesion needs.' },
        { dont:'"It\u2019s likely cancer, so you\u2019ll need to brace yourself for that." (no reassurance)', instead:'"It could be a skin cancer, but the genuinely reassuring part is these are usually very treatable, often cured with a small operation, especially caught early like yours."', why:'Frightening a stoical patient without the true reassurance risks disengagement from the urgent referral.' }
      ]
    },

    'acne-psychological': {
      ceg: ['Mental health & addiction', 'Children & young people'],
      stem: {
        name: 'Reece Holloway', age: '19 years · male',
        pmh: ['Moderate-severe inflammatory acne (face/chest/back) with early scarring; failed OTC + a topical', '⚠ Profound psychological impact — withdrawn, missing lectures, low mood; fleeting suicidal thoughts about appearance', 'Student'],
        meds: ['OTC acne products; previous topical'],
        allergy: 'NKDA',
        recent: 'Wants "Roaccutane to cure it"; "it\u2019s ruining my life / I\u2019ll do anything".',
        reason: 'Video consultation — acne with major psychological impact.'
      },
      timeMap: [
        { t:'0–2',  h:'Validate, don\u2019t minimise', d:'Not "just spots" — it\u2019s severe, scarring, and clearly affecting his life. Take it seriously; he was right to push for help.' },
        { t:'2–5',  h:'Reach the real distress', d:'How\u2019s your mood/your days? Ask DIRECTLY about suicidal thoughts. The mental-health impact is the crux, not incidental.' },
        { t:'5–7',  h:'Treat the acne',      d:'Step up: combination topicals + oral antibiotic WITH a topical; refer dermatology for isotretinoin (severe/scarring/psychological). Treat early to limit scarring.' },
        { t:'7–9',  h:'Isotretinoin honestly', d:'Specialist-prescribed; monitoring; teratogenicity (PPP); and MOOD monitoring — which is why his mental health matters before/during it.' },
        { t:'9–12', h:'Support mind + net',  d:'Mood support + crisis routes (urgent/111/A&E if unsafe); early follow-up; treat skin AND mind together.' }
      ],
      wordPics: {
        fail: 'Dismisses it as "just spots" or simply processes the isotretinoin request/referral without exploring mood; never asks about suicidal thoughts; gives antibiotic monotherapy; treats the script in isolation from the severe mental-health impact.',
        pass: 'Takes the acne seriously, steps up + refers for isotretinoin, explains its realities, and asks about mood/risk with support.',
        exc:  'Validates the acne and its toll without minimising; explicitly assesses mood and suicide risk and reaches the ideation behind "ruining my life"; steps up acne treatment and refers for isotretinoin explaining its realities (incl. mood monitoring as part of safe care); and builds a coordinated skin-and-mind plan with mood support, crisis routes and early follow-up.'
      },
      avoid: [
        { dont:'"It\u2019s just teenage spots — they\u2019ll settle, try not to let it get to you."', instead:'"This isn\u2019t \u2018just spots\u2019 — it\u2019s severe and scarring and clearly hitting you hard. We\u2019ll treat it properly, and I want to know how it\u2019s affecting you."', why:'Minimising acne dismisses both the genuine severity and its serious psychological impact.' },
        { dont:'"I\u2019ll refer you for Roaccutane — that should sort it." (and end there)', instead:'"I\u2019ll refer you for isotretinoin — but first, when you say it\u2019s ruining your life, have you had thoughts of harming yourself? That matters as much as your skin, and it\u2019s part of treating you safely."', why:'Processing the isotretinoin request without assessing mood/suicide risk misses the crux and a safety issue.' },
        { dont:'"Let\u2019s just give you a course of antibiotics for now."', instead:'"We\u2019ll use a proper combination — antibiotics always with a topical, not alone — and refer you for the stronger treatment given the scarring."', why:'Oral antibiotic monotherapy is poor acne care (resistance) and under-treats severe, scarring disease.' }
      ]
    }
  });

})();
