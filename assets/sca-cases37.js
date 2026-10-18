/* ============================================================
   Reasoning GP — Case Library batch 37: "Skin: the surface and what's under it"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   NG12 suspected cancer pathway stated where it maps (non-healing lesion -> skin-cancer
   2WW; widespread itch -> consider haematological malignancy).
   Shingles antiviral window + ophthalmic emergency. Acne + mental health.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases36.js.
   ============================================================ */

(function(){

  /* ============ 141. VIDEO — Generalised itch, no rash: the systemic screen ============ */
  const c141 = {
    id:'generalised-itch', title:'"I itch all over but there\u2019s no rash \u2014 just give me a cream"', type:'video', duration:12,
    meta:{ age:64, sex:'M', setting:'Video consultation \u2014 weeks of generalised itch, no rash.', system:'Dermatology / Pruritus without rash', checked:'October 2026' },
    brief:'Mr Alan Pickering, 64. ~10 weeks of GENERALISED itching, worse at night, with NO primary rash (just scratch marks). Wants "a strong cream/antihistamine". On directed history: drenching NIGHT SWEATS, unintentional weight loss (~5 kg), fatigue, and \u2014 if asked \u2014 itch notably after a hot bath. No jaundice. Ex-smoker. This pattern (generalised pruritus without rash + B-symptoms) raises a SYSTEMIC cause \u2014 notably HAEMATOLOGICAL MALIGNANCY (lymphoma) \u2014 plus iron deficiency, thyroid, liver, renal and drug causes. He minimises the systemic symptoms.',
    script:{
      "opening": "\"Afternoon doctor. I've been itching like mad for weeks, all over, worst at night — driving me up the wall. There's nothing to see, no rash, just where I've scratched. Can you just prescribe me a strong cream or some antihistamines and I'll be on my way? It's just dry skin or my age, I expect — nothing to make a fuss about.\"",
      "facts": [
        {
          "topic": "The itch (if asked)",
          "text": "About ten weeks, all over — back, legs, arms. Worst at night. \"After a hot bath it's unbearable for half an hour.\" No new soaps, washing powder or pets. Wife does not itch."
        },
        {
          "topic": "Skin (if asked to show)",
          "text": "Only scratch marks on your arms and shins; no rash, no blisters, no burrows between the fingers."
        },
        {
          "topic": "Night sweats — only if asked directly",
          "text": "\"Now you mention it — I've been waking up soaked. Wife's had to change the sheets.\" For about six weeks."
        },
        {
          "topic": "Weight and energy (if asked)",
          "text": "Lost about 5 kg (most of a stone) without trying in two months. Tired, \"no puff\"."
        },
        {
          "topic": "Lumps (if asked)",
          "text": "\"I haven't noticed any lumps — but I've never really checked.\" If asked to feel your neck on camera you are unsure: \"I can't tell, to be honest.\""
        },
        {
          "topic": "Other questions (if asked)",
          "text": "No yellow skin or eyes, urine normal colour, no change in bowels, no blood anywhere. Not thirsty. No cough. No fevers you have measured."
        },
        {
          "topic": "Medical history and medicines",
          "text": "Ex-smoker (stopped 10 years ago). No regular medicines; no new tablets. No allergies."
        },
        {
          "topic": "Social",
          "text": "64, retired postman, married to Sue. A couple of pints a week."
        },
        {
          "topic": "Hidden — hold back",
          "text": "You have noticed the weight loss and the sweats and quietly wondered, but \"I don't like doctors and I didn't want to make a fuss\". Say this only if asked what you think is going on."
        },
        {
          "topic": "How to play it",
          "text": "Jokey, minimising, wanting a cream. Answer the night sweats and weight questions honestly when asked. If the doctor explains that itching without a rash with sweats and weight loss needs blood tests and an in-person check, you go quiet and ask: \"You think it's something serious?\" Respond well to honesty."
        }
      ],
      "ice": {
        "ideas": "\"It's dry skin, or my age.\"",
        "concerns": "Underneath (only if asked): the weight loss and sweats have been niggling at you.",
        "expectations": "\"A strong cream or antihistamines.\" You will accept tests and an examination if the reasons are explained honestly."
      },
      "cues": [
        "\"Nothing to make a fuss about.\" — say in the opening.",
        "\"It's worse after a hot bath.\" — say if asked what makes it worse.",
        "\"I've been waking up soaked.\" — say only if asked about sweats."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises that GENERALISED pruritus WITHOUT a primary rash (only excoriations) is a flag for a SYSTEMIC cause \u2014 and does NOT just prescribe a cream/antihistamine without assessment' },
      { dom:'dg', text:'Elicits the SYSTEMIC red flags by directed questioning \u2014 drenching night sweats, unintentional weight loss, fatigue (B-symptoms), itch after a hot bath — and recognises that the B-symptoms raise HAEMATOLOGICAL MALIGNANCY (lymphoma) and aquagenic itch classically polycythaemia vera (also a haematological disorder), warranting urgent work-up' },
      { dom:'cm', text:'Arranges a prompt FACE-TO-FACE EXAMINATION (a video call cannot exclude lymphadenopathy or organomegaly): lymph nodes (cervical/axillary/inguinal), liver/spleen (hepatosplenomegaly), and the skin — rather than managing remotely on the symptom alone' },
      { dom:'cm', text:"Plans the structured work-up: bloods (FBC + film, ferritin, U&E, LFTs, TFTs, ESR/LDH, calcium), CXR/imaging as indicated, and a suspected cancer pathway referral if lymphoma or another malignancy is suspected — NICE NG12: consider a suspected cancer pathway referral for Hodgkin or non-Hodgkin lymphoma in adults with unexplained lymphadenopathy, taking into account fever, night sweats, shortness of breath, pruritus and weight loss; also an urgent chest X-ray (NICE NG12) as he is 40 or over, an ex-smoker, with unexplained weight loss and fatigue" },
      { dom:'dg', text:'Covers the broader differential (iron deficiency, thyroid, liver/renal, drugs, polycythaemia) and offers SYMPTOMATIC itch relief alongside \u2014 not instead of \u2014 the cause work-up' },
      { dom:'ro',   text:'Surfaces the patient\u2019s fear and the possibly-noticed lump, rather than colluding with "just a cream"; names the concern honestly and proportionately' },
      { dom:'ro',   text:'Balances honest reassurance (many causes are benign and treatable) with taking the red flags seriously, so he accepts the work-up' },
      { dom:'cm',    text:'Safety-nets and follows up: the urgent work-up/referral and examination, symptomatic relief, what would prompt sooner review (enlarging nodes, fevers, weight loss), and a follow-up \u2014 pursuing the cause, not patching the symptom' },
    ],
    worked:[
      { lbl:'Reframe \"just dry skin\"', txt:'"I can give you something for the itch \u2014 but I don\u2019t want to just hand you a cream and miss something, because there\u2019s an important rule here: when someone itches all over WITHOUT any actual rash, just scratch marks, that can be a sign of something going on inside the body rather than a skin problem. So let me ask a few questions first, and then I want you examined properly in person."' },
      { lbl:'Directed history',     txt:'"Have you had any drenching sweats at night \u2014 soaking the sheets? Lost any weight without trying? More tired than usual? \u2026 And does the itch flare after a hot bath? \u2026 You\u2019ve had several of those. Thank you \u2014 that\u2019s really important, because together with the itch it points me towards looking properly rather than just treating the skin."' },
      { lbl:'Examine + name it honestly', txt:'"I can’t feel for glands over video, so I’d like you to come in today or tomorrow so I can feel for any swollen glands in your neck, armpits and groin, and check your tummy. … The combination of all-over itch, night sweats and weight loss is something we take seriously \u2014 occasionally it\u2019s a sign of something in the glands or blood that we\u2019d want to catch. I\u2019m not saying it IS that, but it\u2019s why we check properly and quickly."' },
      { lbl:'Surface the fear',     txt:'"Can I gently ask \u2014 had you noticed any lumps yourself, or had cancer cross your mind? \u2026 Thank you for telling me. That fear is understandable, and it\u2019s exactly why a cream alone wouldn\u2019t have been right. Getting this checked is the sensible thing \u2014 so you\u2019re not lying awake with it."' },
      { lbl:'The work-up',          txt:'"So: some blood tests \u2014 your blood count, iron, thyroid, kidney and liver, and a couple of markers \u2014 and depending on what I find on examination, possibly a scan and an urgent specialist referral. And I\u2019ll give you something to ease the itch in the meantime, so you\u2019re more comfortable while we sort the cause."' },
      { lbl:'Safety-net',           txt:'"If you notice any glands getting bigger, more fevers or sweats, or more weight dropping off, tell me sooner. I\u2019ll chase the tests and we\u2019ll go through them together. You came in wanting a cream for a bit of itch; what I\u2019m doing is making sure that if there\u2019s a reason behind it, we find it \u2014 and I\u2019ll treat the itch too."' },
    ],
    learning:'Generalised pruritus WITHOUT a primary rash (only excoriations) is a flag to look for a SYSTEMIC cause, not just to treat the skin. The differential includes iron deficiency, thyroid and chronic kidney/liver disease (cholestasis), drugs, polycythaemia (classically itch after a hot bath — aquagenic pruritus), and — importantly — HAEMATOLOGICAL MALIGNANCY, especially lymphoma. The examinable core is directed questioning that uncovers the B-symptoms (drenching night sweats, unintentional weight loss, fatigue) the patient minimised, which with generalised itch strongly raise lymphoma and mandate EXAMINATION (lymph nodes, hepatosplenomegaly) and an urgent structured work-up (FBC + film, ferritin, U&E, LFTs, TFTs, ESR/LDH, calcium, imaging) with urgent/suspected-cancer referral where the threshold is met \u2014 not a cream. The hidden agenda is a noticed lump and an unvoiced cancer fear driving the "just give me a cream" minimisation; surface and address it, examine and act on the red flags, balance honest reassurance with taking them seriously, and give symptomatic itch relief ALONGSIDE \u2014 not instead of \u2014 the cause work-up.',
    knowledge:{
      guideline:"BAD guidelines for the management of generalised pruritus in adults without an underlying dermatosis (2018) · NICE NG12 Suspected cancer: recognition and referral (2015, last updated 15 April 2026) · systemic itch work-up",
      points:[
        { h:'Itch without rash \u2014 think systemic', t:'Generalised pruritus with no primary skin lesion (only secondary excoriations) should prompt a search for a systemic cause. Key causes: iron deficiency, thyroid disease, chronic kidney disease, cholestatic liver disease, drugs, polycythaemia vera (aquagenic pruritus \u2014 itch after warm water), and haematological malignancy (especially Hodgkin lymphoma).' },
        { h:'Hunt the B-symptoms', t:'Ask directly about drenching night sweats, unexplained weight loss and persistent fatigue/fever ("B-symptoms"), and about lymph node pain after alcohol. Generalised itch with B-symptoms strongly raises lymphoma and warrants urgent assessment. Examine for lymphadenopathy and hepatosplenomegaly — in person, since a video consultation cannot exclude them.' },
        { h:'Structured work-up', t:'Bloods: FBC and blood film, ferritin/iron studies, U&E, LFTs, TFTs, ESR, LDH, calcium, glucose/HbA1c (BAD 2018: FBC and ferritin in everyone with chronic generalised itch without a rash, plus renal, liver and thyroid function); consider CXR/imaging. Review medications. Tailor to the clinical picture rather than a random scatter.' },
        { h:"Refer per NICE NG12 thresholds", t:"NICE NG12: consider a suspected cancer pathway referral for Hodgkin or non-Hodgkin lymphoma in adults with unexplained lymphadenopathy, taking into account associated symptoms — particularly fever, night sweats, shortness of breath, pruritus and weight loss (and, for Hodgkin lymphoma, alcohol-induced lymph node pain). Hepatosplenomegaly or a strong suspicion of haematological malignancy also warrants urgent investigation; offer an urgent chest X-ray to people aged 40 and over who have ever smoked with an unexplained symptom such as weight loss or fatigue. Persistent unexplained pruritus with systemic features should not be dismissed." },
        { h:'Treat cause + symptom', t:'Identify and treat the underlying cause; provide symptomatic relief alongside (emollients, cool showers rather than hot baths, short nails, a sedating antihistamine at night short term — choice and dose per BNF, with caution in older adults — manage dry skin) \u2014 but symptomatic treatment must not replace the cause work-up when red flags are present.' },
        { h:'Surface the fear', t:'Minimisation ("just dry skin/my age, give me a cream") may mask a noticed lump and an unvoiced cancer fear. Surface it, name the concern proportionately, and use it to motivate the work-up rather than colluding with a cream-only request.' },
        { h:'Never do', t:'Never treat generalised itch-without-rash with a cream alone when systemic features are present; never skip the B-symptom screen and examination for nodes/organomegaly; never miss the lymphoma/haematological-malignancy possibility; never collude with minimisation; never give false reassurance over red flags.' },
        { h:'Safety-net & follow-up', t:'Structured bloods/imaging and examination; urgent/suspected-cancer referral if lymphoma suspected; symptomatic itch relief; red flags (enlarging nodes, fevers/sweats, weight loss) \u2192 sooner review; follow up the results and the cause.' }
      ]
    }
  };

  /* ============ 142. VIDEO — Shingles: the antiviral window and the eye emergency ============ */
  const c142 = {
    id:'shingles-ophthalmic', title:'"A painful rash on my forehead \u2014 it\u2019s near my eye"', type:'video', duration:12,
    meta:{ age:67, sex:'F', setting:'Video consultation \u2014 a painful unilateral rash, day 2.', system:'Dermatology / Herpes zoster (shingles)', checked:'October 2026' },
    brief:'Mrs Glenda Hart, 67. ~2 days of a painful, burning, BLISTERING rash in a band on the RIGHT FOREHEAD and scalp, NOT crossing the midline, preceded by a day of tingling/pain. Likely SHINGLES (herpes zoster). CRUCIAL: the rash extends to the SIDE/TIP OF THE NOSE and she has a red, watery, gritty right eye \u2014 this is OPHTHALMIC zoster with Hutchinson\u2019s sign, a sight-threatening emergency. She thinks it\u2019s "a bad cold sore / an allergy" and wants a cream. Within the 72-hour antiviral window. Mildly immunosuppressed (on methotrexate).',
    script:{
      "opening": "\"Hello doctor. I've got this horrible painful rash come up on one side of my forehead, all blistery, and it really burns and stings. I thought maybe it was a bad reaction to a new face cream, or a cold sore gone mad. My eye on that side's a bit red and watery too. Could you give me a cream for it? It's only been a couple of days.\"",
      "facts": [
        {
          "topic": "The rash (if asked)",
          "text": "Started two days ago on the right side of your forehead going up into the scalp, after a day of burning, tingling pain there. Clusters of small blisters on red skin. It stops at the middle of your forehead. On video: right forehead and scalp, and if asked to look in a mirror — \"Oh, there are a couple of blisters on the side and tip of my nose too.\""
        },
        {
          "topic": "The eye (if asked)",
          "text": "Right eye red, watery, gritty since yesterday. Mild ache. If asked to check: vision slightly blurry in the right eye compared with the left. Light is a bit uncomfortable."
        },
        {
          "topic": "Pain",
          "text": "\"Burning, stabbing\" — 7/10. Paracetamol barely helps. Not sleeping."
        },
        {
          "topic": "General (if asked)",
          "text": "Feel a bit run down, no high fever, no headache apart from the rash area, no confusion, no neck stiffness, no vomiting."
        },
        {
          "topic": "Medical history and medicines",
          "text": "Rheumatoid arthritis on methotrexate weekly (and folic acid). No allergies. Had chickenpox as a child. Not had the shingles vaccine — \"I kept meaning to.\""
        },
        {
          "topic": "Contacts (if asked)",
          "text": "Your daughter is 30 weeks pregnant and was planning to visit at the weekend. You look after your granddaughter, aged 4, on Tuesdays."
        },
        {
          "topic": "Social",
          "text": "67, retired. Lives with husband, who can drive you."
        },
        {
          "topic": "Hidden fear — hold back",
          "text": "You are worried the methotrexate \"caused\" it and that you will have to stop it — \"my hands were awful before\". Say this only if asked what worries you, or if the doctor mentions the methotrexate."
        },
        {
          "topic": "How to play it",
          "text": "In pain, keen on a cream. When asked to check your nose and eye, report honestly. If told it is shingles near the eye and needs an eye specialist today and antiviral tablets, you are shocked but cooperative. Ask: \"Can I still see my daughter at the weekend?\" and \"Do I stop the methotrexate?\""
        }
      ],
      "ice": {
        "ideas": "\"A reaction to my new face cream, or a cold sore gone mad.\"",
        "concerns": "The pain, and (only if asked) the methotrexate and seeing your pregnant daughter.",
        "expectations": "\"A cream for it.\" You will go to the eye clinic today if the reason is explained."
      },
      "cues": [
        "\"My eye on that side's a bit red and watery too.\" — say in the opening.",
        "\"It's only been a couple of days.\" — say in the opening.",
        "\"I'm on methotrexate — is that a problem?\" — say when tablets are discussed."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises SHINGLES (herpes zoster): a painful, dermatomal, unilateral, blistering rash not crossing the midline with a prodrome \u2014 NOT a cold sore/allergy/cream reaction \u2014 and identifies the OPHTHALMIC (V1) distribution' },
      { dom:'dg', text:'Identifies HERPES ZOSTER OPHTHALMICUS with HUTCHINSON\u2019S SIGN (rash on the side/tip of the nose) and eye involvement (red, gritty, watery eye) as a SIGHT-THREATENING emergency requiring SAME-DAY ophthalmology assessment' },
      { dom:'cm', text:'Starts oral ANTIVIRALS promptly (within the ~72-hour window; and indicated regardless here given ophthalmic involvement and immunosuppression) at the correct dose, recognising the methotrexate/immunosuppression as a further indication' },
      { dom:'cm', text:'Manages PAIN adequately and counsels POST-HERPETIC NEURALGIA risk (common, especially older patients), and gives infection-control advice (avoid contact with the immunosuppressed, pregnant women, and non-immune neonates until lesions crust)' },
      { dom:'dg', text:'Addresses the methotrexate concern appropriately (it did not "cause" shingles but immunosuppression raises risk/severity; do not stop it without advice) and considers the broader picture' },
      { dom:'ro',   text:'Conveys the eye-risk and urgency CLEARLY but calmly so she accepts same-day ophthalmology, without inducing panic; surfaces the "don\u2019t want to make a fuss"/event worry' },
      { dom:'ro',   text:'Validates the pain and fear and explains why this is more than a cream, engaging her in the urgent plan' },
      { dom:'cm',    text:'Safety-nets emphatically: same-day ophthalmology for the eye; any visual change/severe eye pain \u2192 emergency eye care; antivirals started; analgesia and PHN safety-net; infection-control advice; and follow-up \u2014 sight protected, shingles treated' },
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
      guideline:'UKHSA Green Book chapter 28a (shingles) · SPCs (aciclovir, valaciclovir, famciclovir) · NICE CG173 Neuropathic pain in adults (2013) · College of Optometrists Clinical Management Guidelines (herpes zoster ophthalmicus) · herpes zoster ophthalmicus · antiviral window · post-herpetic neuralgia',
      points:[
        { h:'Recognise herpes zoster', t:'Unilateral, dermatomal, painful vesicular/blistering rash that does not cross the midline, often with a prodrome of pain/paraesthesia. Reactivated varicella-zoster virus. Distinguish from herpes simplex/cold sore (recurrent, localised, often perioral) and contact dermatitis.' },
        { h:'Ophthalmic zoster = emergency', t:'Herpes zoster ophthalmicus (V1 distribution) threatens the eye (keratitis, uveitis, scleritis, glaucoma, vision loss). HUTCHINSON’S SIGN — vesicles on the side/tip of the nose (nasociliary nerve) — predicts ocular involvement (College of Optometrists CMG). Any eye redness/pain/visual symptom with V1 zoster warrants SAME-DAY ophthalmology referral. Treat with oral antivirals promptly.' },
        { h:'Antiviral window & indications', t:'Start oral antivirals (aciclovir/valaciclovir/famciclovir) ideally within 72 hours of rash onset — per SPC/BNF: aciclovir 800 mg five times daily, valaciclovir 1 g three times daily, or famciclovir 500 mg three times daily, each for 7 days, adjusted for renal function; check BNF interactions with methotrexate. Treat even later, or beyond 72h, if: new vesicles still forming, ophthalmic/complicated zoster, immunosuppression, or severe pain/older age. Immunosuppressed patients (e.g. on methotrexate) have higher risk and may need urgent/secondary-care input.' },
        { h:'Pain & post-herpetic neuralgia', t:'Provide adequate analgesia. Post-herpetic neuralgia (pain persisting after the rash heals) is common, especially in older patients; manage with neuropathic agents if it develops — NICE CG173 offers a choice of amitriptyline, duloxetine, gabapentin or pregabalin (doses per BNF). Counsel the patient about it.' },
        { h:'Infection control', t:'Zoster lesions can transmit varicella to non-immune contacts. Advise covering the rash and avoiding contact with pregnant women, immunosuppressed people, and non-immune neonates until lesions have crusted. After recovery, check shingles vaccine (Shingrix) eligibility against the UKHSA Green Book chapter 28a.' },
        { h:'Address the immunosuppression concern', t:'Reassure that the immunosuppressant did not "cause" shingles, but explain it raises risk/severity; do not advise stopping it without specialist/rheumatology advice. Consider whether the episode needs that input.' },
        { h:'Never do', t:'Never dismiss dermatomal vesicular rash as a cold sore/allergy and give a cream; never miss Hutchinson\u2019s sign/eye involvement and the same-day ophthalmology need; never delay antivirals when indicated; never overlook PHN/pain or infection-control; never tell the patient to stop immunosuppressants unadvised.' },
        { h:'Safety-net & follow-up', t:'Start antivirals; same-day ophthalmology for eye involvement; visual change/severe eye pain \u2192 emergency eye care; analgesia + PHN safety-net; infection-control advice; rheumatology input re methotrexate; follow-up.' }
      ]
    }
  };

  /* ============ 143. VIDEO — The non-healing lesion: skin-cancer 2WW behind "just a sore" ============ */
  const c143 = {
    "id": "non-healing-lesion",
    "title": "“It’s only a little spot on my nose that bleeds when I wash — I can’t be going to the hospital, I look after my husband”",
    "type": "video",
    "duration": 12,
    "meta": {
      "age": 82,
      "sex": "F",
      "setting": "Video consultation — a spot on the face that has been slow to heal; photographs uploaded.",
      "system": "Dermatology / Older adults — suspected basal cell carcinoma on the nose: NICE NG12 referral route, fear of disfigurement and a carer’s barriers to attending",
      "checked": "October 2026"
    },
    "brief": "Margaret (Peggy) Lowe, 82, a retired school cook, uploads photos and joins a video call because her granddaughter insisted. For about 18 months she has had a slowly enlarging spot on the left side of her nose, now about 9 mm: a shiny, pearly nodule with a rolled edge, small visible blood vessels and a central crust that bleeds when she washes, scabs, and never fully heals. No other lesions of concern; fair skin; she worked outdoors in her youth on a farm. She wants “a cream” and says she cannot go to the hospital because she cares for her husband, Ted, 85, who has vascular dementia and cannot be left. Hidden concern, only if explored: her sister had “half her nose cut off” for skin cancer 20 years ago and was left disfigured and housebound with embarrassment; Peggy is terrified of the same. The task: recognise a probable basal cell carcinoma; explain it honestly in plain language (a slow-growing skin cancer that very rarely spreads, but grows locally and is best treated while small, especially on the nose); know the NICE NG12 route (routine referral for suspected BCC, with a suspected cancer pathway only if delay could have a significant impact because of site or size; follow local pathways for high-risk facial sites); explore and address the fear of disfigurement (modern options include surgery with careful reconstruction, Mohs micrographic surgery for high-risk facial sites, and sometimes radiotherapy or other treatments, chosen by the specialist); solve the practical barriers (carer cover, transport, the Carer’s Assessment); and agree a plan she can accept, with safety-netting.",
    "script": {
      "opening": "“My granddaughter made me do this. It’s only a little spot on my nose that bleeds when I wash my face. I just want a cream for it. I can’t be going up the hospital, I look after my husband.”",
      "facts": [
        {
          "topic": "The spot",
          "text": "About 18 months. Started like a pimple, very slowly bigger, now “the size of a pea”. Shiny, pearly edge, tiny red veins, a crust in the middle that bleeds when she washes, scabs, then breaks again. Not painful. No other spots like it."
        },
        {
          "topic": "Skin history (if asked)",
          "text": "Fair skin, freckles. Worked on her parents’ farm as a girl, “always out in the sun, no such thing as sun cream”. No previous skin cancers. No weight loss, no lumps in the neck."
        },
        {
          "topic": "Home",
          "text": "Cares for Ted, 85, with vascular dementia, who wanders and cannot be left alone for long. Daughter lives 200 miles away; granddaughter visits on Sundays. No paid carers. Has never had a carer’s assessment."
        },
        {
          "topic": "Only if asked what worries her",
          "text": "Her sister Joan had skin cancer on her nose 20 years ago and “they cut half of it off”. Joan stopped going out and never got over it. Peggy has avoided getting this looked at for that reason."
        },
        {
          "topic": "Her health",
          "text": "Hypertension on amlodipine. Mobile, independent, drives locally. Tired from caring."
        },
        {
          "topic": "How to play it",
          "text": "Matter-of-fact and dismissive at first: “At my age, what does it matter?” Becomes emotional describing Joan. Engages if the doctor explains that this type rarely spreads, that treatment now is smaller and better than it was, and offers help with Ted for the appointment."
        }
      ],
      "ice": {
        "ideas": "“It’s a sore that won’t heal because I keep knocking it.”",
        "concerns": "HIDDEN AGENDA: fear of disfigurement after her sister’s experience; also worry about who would look after Ted.",
        "expectations": "“A cream, and no hospital.”"
      },
      "cues": [
        "“My granddaughter made me do this” — someone is worried; why hasn’t she come sooner?",
        "Bleeding, crusting and never fully healing for 18 months — a lesion that needs referral.",
        "“I look after my husband” — a carer with practical barriers and no support.",
        "Emotion when talking about her sister — the hidden fear."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Takes a lesion history (duration, growth, bleeding, healing, symptoms) and risk factors (sun exposure, skin type, previous skin cancer), and examines the photos and on camera (pearly rolled edge, telangiectasia, central crust or ulceration)"
      },
      {
        "dom": "dg",
        "text": "Reaches a working diagnosis of probable basal cell carcinoma and considers the differential (squamous cell carcinoma, keratoacanthoma, amelanotic melanoma), checking for features that would change urgency"
      },
      {
        "dom": "cm",
        "text": "Applies NICE NG12 correctly: routine referral for suspected BCC, considering a suspected cancer pathway only if delay could have a significant impact because of site or size, and following local pathways for facial lesions; does not prescribe a cream"
      },
      {
        "dom": "ro",
        "text": "Explains the diagnosis honestly: a skin cancer that grows slowly and very rarely spreads, but is best treated while small, especially on the nose"
      },
      {
        "dom": "dg",
        "text": "Explores her reluctance and uncovers the fear of disfigurement based on her sister’s experience"
      },
      {
        "dom": "cm",
        "text": "Addresses the fear with accurate information about current treatment options (surgery with reconstruction, Mohs micrographic surgery for high-risk facial sites, radiotherapy or other options), decided with the specialist"
      },
      {
        "dom": "cm",
        "text": "Solves practical barriers: cover for Ted on the day (family, respite or sitting services), hospital transport if eligible, and a referral for a Carer’s Assessment (Care Act 2014)"
      },
      {
        "dom": "cm",
        "text": "Respects her right to decide, agrees a plan she accepts, and safety-nets (rapid growth, pain, a new lump, a new lesion, or the appointment not arriving)"
      }
    ],
    "worked": [
      {
        "lbl": "Honest naming",
        "txt": "“From the photos, this looks like a basal cell carcinoma. It’s a type of skin cancer, but it’s the gentlest kind: it grows slowly and very rarely spreads to other parts of the body.”"
      },
      {
        "lbl": "Why not leave it",
        "txt": "“If it’s left, it keeps slowly growing into the skin around it. On the nose, smaller is much easier to treat, with a smaller scar.”"
      },
      {
        "lbl": "Explore reluctance",
        "txt": "“You’ve had this a while. Has something made you wary of getting it looked at?”"
      },
      {
        "lbl": "Respond to Joan’s story",
        "txt": "“That sounds awful for Joan and for you. Things have changed a lot in 20 years. For spots on the nose there’s a special technique that removes only the affected skin, checking under the microscope as they go, to keep as much healthy skin as possible.”"
      },
      {
        "lbl": "Practical help",
        "txt": "“Let’s work out how you’d get there. Could your granddaughter sit with Ted on the day? If not, there are sitting services, and I’d like to refer you for a carer’s assessment so you get some support anyway.”"
      },
      {
        "lbl": "Respect choice",
        "txt": "“It’s your decision. What I’d suggest is a referral to the skin specialists so you can hear the options. You can decide once you know what they’d do.”"
      }
    ],
    "learning": "Basal cell carcinoma (BCC) is the commonest skin cancer, typically on sun-exposed skin of the head and neck in older people. It presents as a slowly enlarging, pearly or translucent nodule with a rolled edge and telangiectasia, often with central ulceration or crusting that bleeds and fails to heal. It grows locally and can destroy surrounding tissue, but metastasis is very rare. NICE NG12 recommends considering routine referral for a skin lesion that raises suspicion of BCC, and considering a suspected cancer pathway referral only if there is particular concern that a delay may have a significant impact because of factors such as lesion site or size; facial lesions near the eyes, nose and lips are high-risk sites for recurrence and are often handled through local pathways. GPs should not treat suspected facial BCCs with creams or minor surgery outside accredited arrangements. Specialist treatment options include surgical excision, Mohs micrographic surgery (tissue-sparing, used for high-risk facial sites and recurrent tumours), radiotherapy for some older patients, and topical treatments or curettage for selected low-risk superficial lesions. The contrast with the related case of a suspected squamous cell carcinoma is important: SCC is faster-growing, often tender and can metastasise, so NG12 recommends a suspected cancer pathway referral. The consultation challenge here is an older carer who minimises the lesion because of fear of disfigurement from a family experience and because she cannot leave her husband. Honest, proportionate information, addressing the specific fear, practical help with caring responsibilities (respite, transport, a Carer’s Assessment under the Care Act 2014), and respect for her autonomy lead to a plan she can accept.",
    "knowledge": {
      "guideline": "[1] NICE NG12 Suspected cancer: recognition and referral (2015, last updated 2026) — skin cancers · [2] NICE CKS Skin cancers: basal cell carcinoma (check current version) · [3] British Association of Dermatologists guidelines for the management of adults with basal cell carcinoma (2021) · [4] Care Act 2014 — carer’s assessment · [5] GMC Decision making and consent (2020)",
      "summary": "A probable nodular BCC on the nose of an 82-year-old carer who wants a cream and cannot leave her husband with dementia, with a hidden fear of disfigurement after her sister’s nasal surgery. Explain honestly, refer through the correct NG12 route (routine for suspected BCC, local pathway for high-risk facial sites), address the fear with accurate information about modern treatment, solve the practical barriers, and respect her decision.",
      "points": [
        {
          "h": "Recognition",
          "t": "Pearly or translucent nodule, rolled edge, telangiectasia, central ulceration or crust, slow growth, bleeding and failure to heal. Often head and neck in sun-exposed older people [2]."
        },
        {
          "h": "Behaviour",
          "t": "Locally invasive, very rarely metastasises. Early treatment means smaller surgery and better cosmetic results, especially on the face [3]."
        },
        {
          "h": "NG12 referral route",
          "t": "Consider routine referral for suspected BCC. Consider a suspected cancer pathway only if delay could have a significant impact because of site or size [1]. Follow local pathways for high-risk facial sites."
        },
        {
          "h": "Differential",
          "t": "Squamous cell carcinoma (faster growing, tender, keratotic; suspected cancer pathway), keratoacanthoma, amelanotic melanoma, sebaceous hyperplasia."
        },
        {
          "h": "Treatment options",
          "t": "Surgical excision; Mohs micrographic surgery for high-risk facial sites; radiotherapy for some older patients; topical treatments or curettage for selected superficial low-risk lesions. Chosen by the specialist with the patient [3]."
        },
        {
          "h": "No GP creams for facial nodules",
          "t": "Do not treat a suspected nodular facial BCC with creams or minor surgery in primary care outside accredited arrangements."
        },
        {
          "h": "Carers",
          "t": "Carers often delay their own care. Offer practical help with cover and transport and refer for a Carer’s Assessment under the Care Act 2014 [4]."
        },
        {
          "h": "Autonomy",
          "t": "She may decline referral after understanding the options. Document the discussion and keep the door open [5]."
        }
      ]
    }
  };

  /* ============ 144. VIDEO — Acne and its psychological weight: the ladder + isotretinoin/mental-health ============ */
  const c144 = {
    id:'acne-psychological', title:'"My acne\u2019s ruining my life \u2014 I want the strong tablets that cure it"', type:'video', duration:12,
    meta:{ age:19, sex:'M', setting:'Video consultation \u2014 acne with major psychological impact.', system:'Dermatology / Acne & mental health', checked:'October 2026' },
    brief:'Mr Reece Holloway, 19, student. Moderate-to-severe inflammatory acne (face, chest, back), with early scarring, despite OTC products and a previous topical. He wants "the strong tablets \u2014 Roaccutane \u2014 to cure it". CRUCIAL: on exploration the psychological impact is profound \u2014 he\u2019s stopped going out, missing lectures, low mood, and \u2014 if asked sensitively \u2014 some fleeting thoughts that "life\u2019s not worth it" because of how he looks. The acne is genuinely severe AND the mental-health impact (and the isotretinoin mood/safety discussion) is central.',
    script:{
      "opening": "\"Doctor, please — my skin is ruining my life. I've tried everything from the chemist and it's just got worse, and now it's scarring. I just want the strong tablets, Roaccutane, the ones that actually cure it. I can't keep living like this. Can you just refer me for it or prescribe it? I'll do anything to make it stop.\"",
      "facts": [
        {
          "topic": "The acne (if asked)",
          "text": "Since 15, much worse in the last year. Face, chest and back. Lots of red, painful spots and some deep lumps on your jaw and back. Leaving pitted scars on your cheeks. On video you can show your face: many inflamed spots, several nodules on the jaw, and small pitted scars."
        },
        {
          "topic": "Treatments tried (if asked)",
          "text": "Benzoyl peroxide washes, salicylic acid, tea tree. The GP gave you a gel (adapalene) a year ago — used it for two months, it stung and did not help much. Never had antibiotic tablets."
        },
        {
          "topic": "Impact (if asked)",
          "text": "You have stopped going to lectures in person, you keep your camera off on online seminars, you avoid mirrors and photos, you have stopped going out with friends and the gym. You turned down a part-time job because it was customer-facing."
        },
        {
          "topic": "Mood — only if asked directly and kindly",
          "text": "Low most days for about three months. Sleeping a lot. If asked about suicidal thoughts: \"Sometimes I think there's no point to anything. I've thought it'd be easier not to be here.\" No plan, no actions, no self-harm. You would not act on it \"because of my mum\". Nobody knows."
        },
        {
          "topic": "Medical history",
          "text": "No other illnesses. No regular medicines. No allergies. No previous mental health problems. Not on any medicines that affect mood."
        },
        {
          "topic": "Social",
          "text": "19, second-year engineering student, lives in a shared house. Drinks occasionally, no drugs, non-smoker. Close to your mum, who lives an hour away."
        },
        {
          "topic": "What you have read",
          "text": "Roaccutane \"cures it\" — you have also read it can affect mood, \"but I don't care, I'm already miserable\"."
        },
        {
          "topic": "How to play it",
          "text": "Desperate and pleading, focused on getting the tablets. If the doctor dismisses it (\"it's just spots\", \"you'll grow out of it\"), go quiet and withdraw. If they take your skin seriously and ask how it is affecting you, open up slowly. Disclose the suicidal thoughts only if asked directly. Respond well to a plan that treats the skin now, refers to a dermatologist, and gets support for your mood."
        }
      ],
      "ice": {
        "ideas": "\"Roaccutane is the only thing that will cure it.\"",
        "concerns": "\"It's scarring and it's ruining my life.\" Underneath (only if asked): how low you have got.",
        "expectations": "\"Refer me or prescribe it.\" You will accept a step-up plan and referral if you feel taken seriously."
      },
      "cues": [
        "\"I can't keep living like this.\" — say in the opening.",
        "\"I don't really go out any more.\" — say if asked about the impact.",
        "\"Sometimes I think there's no point.\" — say only if asked about your mood directly."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Takes the acne seriously (moderate-to-severe inflammatory acne with SCARRING failing topicals) and steps UP treatment appropriately \u2014 combination topicals, oral antibiotics WITH a topical (not antibiotic monotherapy) \u2014 and refers to DERMATOLOGY for ISOTRETINOIN given severity/scarring/psychological impact, recognising isotretinoin is specialist-prescribed (not GP-prescribed)' },
      { dom:'ro', text:'Explicitly ASSESSES MENTAL HEALTH and SUICIDE RISK: explores the profound psychological impact and asks directly about low mood and suicidal thoughts/plans/intent \u2014 recognising this is central, not incidental, and a safety issue' },
      { dom:'ro', text:'Explains isotretinoin REALITIES accurately: highly effective but dermatologist-prescribed with monitoring (lipids/LFTs), teratogenicity/Pregnancy Prevention Programme, mucocutaneous effects, and the MOOD/mental-health monitoring (MHRA) \u2014 so the mental-health assessment is part of safe isotretinoin care' },
      { dom:'cm', text:'Treats early to LIMIT SCARRING and validates that acne and its impact are NOT trivial \u2014 avoiding dismissive "it\u2019s just spots" \u2014 while not simply processing a prescription request without addressing the distress' },
      { dom:'cm', text:'Makes a mental-health management plan: support for low mood (and risk management/crisis routes if suicidal ideation), and coordinates this with the acne/dermatology plan' },
      { dom:'ro',   text:'Reaches the suicidal ideation behind "ruining my life", validates the genuine distress (without minimising the acne), and responds with compassion and a safety plan' },
      { dom:'ro',   text:'Engages him as more than a prescription request \u2014 treating the whole young person \u2014 and explains why the mental-health side matters for him and for safe treatment' },
      { dom:'cm',    text:'Safety-nets and follows up: the acne step-up and dermatology/isotretinoin referral, the mental-health support and crisis routes (urgent/111/crisis/A&E if risk), early follow-up, and coordination \u2014 treating the skin AND the mind, not a script in isolation' },
    ],
    worked:[
      { lbl:'Validate, don\u2019t minimise', txt:'"First \u2014 I\u2019m not going to brush this off as \u2018just spots\u2019. Your acne is genuinely severe, it\u2019s scarring, and I can hear it\u2019s having a huge effect on your life. That\u2019s real, and we\u2019re going to treat it properly. You were right to come and push for help."' },
      { lbl:'Reach the real distress', txt:'"When you say it\u2019s ruining your life \u2014 can I ask how it\u2019s affecting your mood and your days? \u2026 Stopping going out, missing lectures. And sometimes when people feel this low about how they look, dark thoughts come \u2014 have you had any thoughts that life\u2019s not worth it, or of harming yourself? \u2026 Thank you for trusting me with that. That matters to me as much as your skin, and I\u2019m really glad you told me."' },
      { lbl:'Treat the acne seriously', txt:'"On the skin: we step it up. There are stronger combinations and a course of tablets we can start, and \u2014 because yours is severe and scarring \u2014 I\u2019m going to refer you to the skin specialists for the strong treatment you mentioned, isotretinoin. Treating it properly now also helps limit the scarring."' },
      { lbl:'Isotretinoin honestly', txt:'"About isotretinoin \u2014 it\u2019s very effective and it\u2019s what the specialists prescribe, with some monitoring along the way. One reason the specialist handles it is that they keep an eye on mood during treatment too, which is exactly why getting on top of how you\u2019re feeling now matters before and during it. So the mental-health side isn\u2019t separate \u2014 it\u2019s part of treating you safely and well."' },
      { lbl:'Support the mind',     txt:'"So we treat your skin AND look after you. I\u2019d like to get you some support for your mood \u2014 there\u2019s real help \u2014 and if those darker thoughts ever get stronger, here are the numbers to call, and that\u2019s an urgent/A&E thing if you ever feel unsafe. You don\u2019t have to carry this alone, and your skin clearing will help, but I don\u2019t want to wait on that for your wellbeing."' },
      { lbl:'Plan + safety-net',    txt:'"Plan: I\u2019ll start the step-up treatment, refer you to dermatology for isotretinoin, and sort some support for your mood, and I want to see you again soon \u2014 not leave it long. Come back sooner if you\u2019re struggling. You came in asking for tablets to fix your skin; what you\u2019re getting is your skin treated properly AND someone looking after how you\u2019re feeling \u2014 because both matter."' },
    ],
    learning:"Acne is too often dismissed as trivial/cosmetic — the skill is to take BOTH the skin AND its psychological toll seriously. Moderate-to-severe inflammatory acne with scarring failing topicals warrants stepping up (combination topicals; oral antibiotics WITH a topical, never antibiotic monotherapy) and DERMATOLOGY referral for ISOTRETINOIN (specialist-prescribed, not GP-prescribed), treating early to limit scarring. Isotretinoin’s realities must be explained: high efficacy but monitoring (lipids/LFTs), teratogenicity/Pregnancy Prevention Programme, mucocutaneous effects, and MOOD/mental-health monitoring (MHRA) — so the mental-health assessment is part of safe isotretinoin care. The examinable hidden agenda is that the consultation is NOT just a prescription request: the psychological impact is severe (social withdrawal, missing lectures, low mood) with fleeting suicidal thoughts about appearance, which MUST be assessed explicitly — reaching the suicidal ideation behind \"it’s ruining my life\" is the crux — with mood support and safety-netting. Treat the skin AND the mind, validate the distress without minimising the acne, and never process the script in isolation. Isotretinoin is dermatologist-prescribed and highly effective but requires specialist supervision: TERATOGENICITY (Pregnancy Prevention Programme — critical in females; relevant to counsel), monitoring (lipids/LFTs), mucocutaneous side effects, and the MOOD/MENTAL-HEALTH consideration — a careful mental-health assessment is part of isotretinoin care (MHRA guidance on mood/suicidality monitoring). The GP’s role: optimise/step up treatment, refer appropriately, and — crucially — assess and address the mental-health impact.",
    knowledge:{
      guideline:'NICE NG198 Acne vulgaris: management (2021) · MHRA Drug Safety Update, October 2023 (isotretinoin: mental health and sexual function monitoring) · MHRA Drug Safety Update, January 2026 (isotretinoin: under-18 second-prescriber requirement replaced by revised risk minimisation measures) · isotretinoin Pregnancy Prevention Programme · NICE NG225 Self-harm (2022) · NICE NG222 Depression in adults (2022, updated December 2025) · acne & mental health',
      points:[
        { h:'Acne is not trivial', t:'Acne, especially moderate-severe or scarring, carries significant psychological morbidity (low self-esteem, social withdrawal, depression, suicidality). Take both the skin and its mental-health impact seriously; avoid dismissive "it\u2019s just spots".' },
        { h:'Step up effectively', t:'For moderate-severe inflammatory acne: use combination topical regimens (topical retinoid + benzoyl peroxide ± topical antibiotic) and, if needed, a course of oral antibiotics (e.g. lymecycline/doxycycline) ALWAYS combined with a topical (never antibiotic monotherapy, to limit resistance), for a limited duration. NICE NG198: moderate to severe acne is 35 or more inflammatory lesions or 3 or more nodules; offer a 12-week course, for example topical adapalene with benzoyl peroxide plus oral lymecycline or doxycycline (dose per BNF); do not combine a topical antibiotic with an oral antibiotic. Treat early to reduce scarring.' },
        { h:'When to refer for isotretinoin', t:'Refer to a consultant dermatologist-led team for isotretinoin in severe/nodulocystic, scarring, treatment-resistant acne (moderate to severe acne not responding to a previous course including an oral antibiotic), or acne causing or contributing to persistent psychological distress or a mental health disorder (NICE NG198). Isotretinoin is SPECIALIST-prescribed \u2014 the GP optimises/steps up and refers, rather than prescribing it.' },
        { h:'Isotretinoin safety', t:'Isotretinoin is highly effective but requires: pregnancy prevention (teratogenic \u2014 Pregnancy Prevention Programme in those who can become pregnant), lipid/LFT monitoring, counselling on mucocutaneous and other effects, and MENTAL-HEALTH monitoring (MHRA Drug Safety Update, October 2023: assess and monitor mental health and sexual function before and during treatment). MHRA January 2026: for under-18s the second-prescriber requirement has been replaced by other risk minimisation measures, including a streamlined Acknowledgement of Risk form — not directly relevant at 19, but relevant to younger patients. The mental-health assessment is integral to safe care.' },
        { h:'Assess mental health explicitly', t:'Explore the psychological impact and ask directly about low mood and suicidal ideation/plan/intent. This is central \u2014 both for the patient\u2019s wellbeing and because it informs safe isotretinoin care. Provide mood support, safety-planning and crisis routes as needed. NICE NG225: do not use risk assessment tools or scales to predict suicide or decide treatment; NICE NG198: consider referral to mental health services for suicidal ideation or self-harm, severe depression or anxiety, or body dysmorphic disorder.' },
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
        { t:'2–4',  h:'Directed history',    d:'Night sweats? weight loss? fatigue? — B-symptoms raise lymphoma; itch after a hot bath — think polycythaemia. Examine nodes/spleen face to face.' },
        { t:'4–6',  h:'Surface the fear',    d:'Noticed a lump? cancer crossed your mind? Name it honestly; that\u2019s why a cream alone is wrong.' },
        { t:'6–9',  h:'Work-up',             d:"FBC + film, ferritin, U&E, LFTs, TFTs, ESR/LDH, calcium; imaging; suspected cancer pathway referral (NICE NG12) if lymphoma suspected. Symptomatic relief alongside." },
        { t:'9–12', h:'Safety-net',          d:'Enlarging nodes/fevers/weight loss → sooner. Chase results; treat the itch too. Find the cause, don\u2019t patch it.' }
      ],
      wordPics: {
        fail: 'Prescribes a cream/antihistamine for "dry skin/age" without a history or examination; never screens the B-symptoms or examines for nodes/organomegaly; misses the lymphoma possibility and the noticed lump.',
        pass: 'Recognises itch-without-rash as systemic, screens B-symptoms, examines, arranges the work-up/referral, and gives symptomatic relief.',
        exc:  'Reframes itch-without-rash as a systemic flag; elicits the B-symptoms and aquagenic itch (a polycythaemia clue) by directed history and arranges a face-to-face examination for nodes/organomegaly; surfaces the noticed lump and cancer fear; arranges the structured work-up and urgent referral where indicated; and treats the itch alongside, not instead of, the cause.'
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
      "ceg": [
        "Long-term conditions & cancer",
        "Older adults"
      ],
      "stem": {
        "name": "Margaret (Peggy) Lowe",
        "age": "82 years · female",
        "pmh": [
          "Hypertension",
          "Registered as carer for her husband (vascular dementia)"
        ],
        "meds": [
          "Amlodipine"
        ],
        "allergy": "None recorded",
        "recent": "Photos uploaded this morning of a lesion on the left side of the nose. No previous consultations about skin.",
        "reason": "“A spot on my nose that won’t heal — I’d like a cream.”"
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Hear the cream request and the caring barrier."
        },
        {
          "t": "1–5",
          "h": "History and look",
          "d": "Duration, growth, bleeding, healing, sun exposure; close camera view: pearly, rolled edge, telangiectasia, crust."
        },
        {
          "t": "5–8",
          "h": "Explain and explore",
          "d": "Honest naming with proportion; why not a cream; why she waited: her sister."
        },
        {
          "t": "8–11",
          "h": "Plan",
          "d": "NG12 route and local facial pathway; modern options; cover for Ted, transport, Carer’s Assessment."
        },
        {
          "t": "11–12",
          "h": "Close",
          "d": "Teach-back; wound care; safety-net."
        }
      ],
      "wordPics": {
        "fail": "Prescribes a cream; or sends an urgent cancer referral without explanation; never finds out why she delayed or how she could attend.",
        "pass": "Recognises a probable BCC, explains it honestly, refers through the correct route and addresses the caring barrier.",
        "exc": "All of the above, plus: explains BCC with proportion (slow, rarely spreads, best treated small); uncovers and addresses the fear of disfigurement with accurate information; practical help with cover, transport and a Carer’s Assessment; respects her autonomy; clear safety-net."
      },
      "avoid": [
        {
          "dont": "“It’s just a sore spot, try an antiseptic cream.”",
          "instead": "“This looks like a type of skin cancer, the gentle kind, and a cream won’t treat it.”",
          "why": "Delays diagnosis of a locally invasive tumour on a high-risk site."
        },
        {
          "dont": "“I’m referring you urgently for cancer.” (and nothing more)",
          "instead": "“It grows slowly and rarely spreads, so it doesn’t need a rush, but it does need the specialists.”",
          "why": "Unexplained urgency increases fear and does not match NG12 for BCC."
        },
        {
          "dont": "“You’ll just have to find someone to look after your husband.”",
          "instead": "“Let’s work out cover for Ted together, and get you a carer’s assessment.”",
          "why": "Unaddressed barriers lead to missed appointments."
        }
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
