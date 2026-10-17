/* ============================================================
   Reasoning GP — Case Library batch 46:
   "The symptom that hides a system"
   Four ORIGINAL cases where a common presentation must be read
   for the systemic clue behind it: a widespread itch that may be
   lymphoma; seasonal rhinitis where the red flag is the UNILATERAL
   exception; fatigue that needs a structured screen AND the life
   behind it; and a B12 deficiency that diet will not fix. NG12 is
   stated only where it genuinely applies (itch + B symptoms →
   haematological); the others have no cancer link and none is
   invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases45.js.
   ============================================================ */

(function(){

  /* ============ 177. F2F — Itchy widespread rash: eczema vs the systemic clue (NG12 haematological if B symptoms) ============ */
  const c177 = {
    "id": "itchy-rash-systemic",
    "title": "“Mum’s scratching herself raw at the care home — and now my hands are itching too. What is going on?”",
    "type": "telephone",
    "duration": 12,
    "meta": {
      "age": 86,
      "sex": "F",
      "setting": "Telephone — a daughter calling about her mother, who lives in a residential care home.",
      "system": "Dermatology / Older adults — itch in a care-home resident with spread to staff and family: probable scabies outbreak, health protection, consent under an LPA and confidentiality",
      "checked": "October 2026"
    },
    "brief": "Helen Paterson, 58, rings about her mother, Iris, 86, who has moderate Alzheimer’s dementia and lives in a residential care home registered with the practice. Iris has been itching for about six weeks, worse at night, scratching until she bleeds. Four weeks ago the home asked for an emollient and hydrocortisone for “eczema”, issued without an examination. Helen visited yesterday: red spots and scratch marks on Iris’s wrists, between her fingers, around her waist and under her breasts; the skin on her hands looks thick and crusty. Helen’s own hands and wrists have itched at night for a week. A carer told her that two staff members and “the lady next door” are also itching. Helen holds a registered health and welfare Lasting Power of Attorney. She is angry and asks whether this is neglect and wants to know the names of the other residents involved. The task: take a focused history from a third party; recognise a probable scabies outbreak, with possible crusted (hyperkeratotic) scabies in Iris; arrange same-day face-to-face assessment at the home; explain the need for the care home to inform the UKHSA health protection team and for coordinated, simultaneous treatment of residents, staff and close contacts (topical permethrin twice, 7 days apart, check the SPC/local formulary; oral ivermectin may be advised for crusted scabies or outbreaks under specialist or UKHSA advice); advise Helen to treat herself and her household at the same time; involve Helen in best-interests decisions under her LPA; maintain other residents’ confidentiality; respond to the neglect question honestly without defensiveness, acknowledging the earlier missed examination; and explain routes for raising concerns.",
    "script": {
      "opening": "“I’m ringing about my mum, Iris Paterson, at Beech House. She’s been scratching herself raw for weeks and nobody’s done anything. Now my own hands are itching. What is going on? Is she being neglected?”",
      "facts": [
        {
          "topic": "Who is calling",
          "text": "Helen, daughter, holds a registered health and welfare LPA for Iris. Visits twice a week. Calling from work at lunchtime."
        },
        {
          "topic": "Iris’s itch",
          "text": "About six weeks. Worse at night; staff say she is restless and scratching. Yesterday Helen saw red spots and scratch marks on her wrists, between her fingers, round her waist and under her breasts. The skin on her hands is thick, grey and crusty, “like dried porridge”. Not on her face. Eating and drinking as usual; no fever; no new confusion beyond her usual."
        },
        {
          "topic": "Treatment so far",
          "text": "Emollient and hydrocortisone cream from four weeks ago, applied by staff. No better. Nobody from the practice has seen her skin."
        },
        {
          "topic": "Others itching (if asked)",
          "text": "Helen’s hands and wrists itch at night for a week; her husband not yet. A carer mentioned two staff members and the resident next door are itching too. Helen does not know names."
        },
        {
          "topic": "Iris’s background",
          "text": "Alzheimer’s for five years, cannot make decisions about treatment now. Donepezil, amlodipine. No steroid tablets or immunosuppressants. Mobile with a frame."
        },
        {
          "topic": "The anger (if explored)",
          "text": "Feels the home ignored it and the practice “just sent a cream”. Wants to know who else is affected and whether she should report the home."
        },
        {
          "topic": "How to play it",
          "text": "Angry and upset at first. Calms if the doctor takes her seriously, explains what it probably is and gives a clear plan for today. Pushes for names of other residents; accepts the confidentiality explanation if it is given respectfully. Relieved to hear she can be involved in decisions."
        }
      ],
      "ice": {
        "ideas": "“Something catching that the home has let spread, and nobody looked properly.”",
        "concerns": "HIDDEN AGENDA: guilt that she did not push sooner, and fear that she has carried it home to her grandchildren. Also worried her mother is being neglected.",
        "expectations": "“Someone to see Mum today, tell me what it is, and tell me who else has it.”"
      },
      "cues": [
        "Itch worse at night in the hands, wrists and waist, plus others itching — classic pattern of scabies in a closed setting.",
        "Thick, crusty skin on the hands — possible crusted scabies, highly infectious.",
        "“Is she being neglected?” — respond honestly, without defensiveness.",
        "“Who else has it?” — confidentiality of other residents."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Takes a focused third-party history: distribution, nocturnal itch, duration, treatment so far, others affected (staff, residents, family), crusting, systemic features and medicines"
      },
      {
        "dom": "dg",
        "text": "Recognises a probable scabies outbreak in a care home, with possible crusted scabies in Iris, and considers other causes of itch in older people"
      },
      {
        "dom": "cm",
        "text": "Arranges same-day face-to-face assessment at the home, and does not rely on further remote prescribing"
      },
      {
        "dom": "cm",
        "text": "Explains that the care home should inform the UKHSA health protection team, who coordinate outbreak management: simultaneous treatment of all residents, staff and close contacts, environmental measures, and specialist advice on oral ivermectin for crusted scabies (check the SPC/local formulary)"
      },
      {
        "dom": "cm",
        "text": "Advises Helen to treat herself and her household at the same time as the home (permethrin cream, two applications 7 days apart, via pharmacy or her own GP), with washing of clothes and bedding"
      },
      {
        "dom": "ro",
        "text": "Involves Helen as Iris’s health and welfare attorney in best-interests decisions about treatment, and explains that Iris lacks capacity for this decision"
      },
      {
        "dom": "ro",
        "text": "Keeps other residents’ information confidential and explains why respectfully"
      },
      {
        "dom": "ro",
        "text": "Responds to the neglect question honestly: acknowledges the earlier prescription without examination, explains how it will be reviewed, and signposts routes for concerns (home manager, practice complaints, CQC; safeguarding if indicators)"
      }
    ],
    "worked": [
      {
        "lbl": "Take it seriously",
        "txt": "“Thank you for ringing, and I’m sorry your mum’s been so uncomfortable. Let me ask a few questions so I can work out what’s going on today.”"
      },
      {
        "lbl": "Name the likely cause",
        "txt": "“An itch that’s worse at night, in the hands, wrists and waist, with staff and you itching too, sounds very much like scabies, tiny mites that spread through close skin contact. The thick crusty skin on her hands makes me think she may have a heavier form, which spreads more easily.”"
      },
      {
        "lbl": "Today",
        "txt": "“I’d like a doctor to see her at the home today, rather than another cream over the phone. If it’s scabies, the home needs to contact the public health team, who organise treating everyone at the same time.”"
      },
      {
        "lbl": "Your role",
        "txt": "“As her attorney for health decisions, you’ll be involved in agreeing her treatment. Your mum isn’t able to decide this herself now, so we’ll decide together what’s in her best interests.”"
      },
      {
        "lbl": "Confidentiality",
        "txt": "“I can’t tell you about other residents, in the same way I wouldn’t share your mum’s details with their families. The public health team will make sure everyone affected is treated.”"
      },
      {
        "lbl": "The neglect question",
        "txt": "“You’re right that a cream was prescribed without anyone looking at her skin, and that should have been different. I’ll make sure that’s reviewed. If you want to raise concerns formally, I can explain how.”"
      }
    ],
    "learning": "Generalised itch in an older care-home resident needs examination and a broad differential (dry skin, drugs, eczema, systemic disease), but itch worse at night affecting the hands, wrists, waist and breasts, with staff, other residents and visitors itching, is scabies until proven otherwise. In older people with dementia or immunosuppression, scabies may be atypical or crusted (hyperkeratotic, Norwegian) scabies: thick, crusted scaling, often on the hands, with very large numbers of mites and high infectivity. Topical steroids alone can mask it and make it worse. UKHSA guidance on scabies in care homes and other closed settings advises that when scabies is suspected in a care home, the home should contact the local health protection team; outbreaks are managed by coordinated, simultaneous treatment of all residents, staff and close contacts (including families), environmental cleaning and laundering, and, in crusted scabies or outbreaks, consideration of oral ivermectin under specialist or UKHSA advice (check the SPC/local formulary). Topical permethrin 5% is applied to the whole body (including scalp, face and neck in older people, avoiding the eyes) and repeated after 7 days. Itch can persist for several weeks after successful treatment. For a resident who lacks capacity, treatment decisions are made in her best interests, involving a registered health and welfare attorney (Mental Capacity Act 2005). Other residents’ information is confidential. When a relative asks about neglect, respond honestly, acknowledge any shortcomings (such as prescribing without examination), and explain routes for concerns; a delayed diagnosis is not in itself neglect, but safeguarding should be considered if there are wider indicators.",
    "knowledge": {
      "guideline": "[1] UKHSA Guidance on the management of scabies cases and outbreaks in long-term care facilities and other closed settings (2023; check current version) · [2] NICE CKS Scabies (check current version) · [3] Mental Capacity Act 2005 and Code of Practice · [4] GMC Confidentiality: good practice in handling patient information (2017) · [5] GMC Good medical practice (2024) – openness and raising concerns · [6] Product SPCs for permethrin cream and oral ivermectin",
      "summary": "A care-home resident with dementia has six weeks of nocturnal itch in a scabies distribution and crusted skin on her hands; staff, another resident and her daughter are itching. Treat as a probable scabies outbreak with possible crusted scabies: same-day examination, the home to contact the UKHSA health protection team, simultaneous treatment of residents, staff and contacts, Helen and her household treated at the same time, best-interests decisions with Helen as attorney, confidentiality for others, and an honest response about the earlier remote prescription.",
      "points": [
        {
          "h": "Recognise scabies",
          "t": "Nocturnal itch; burrows and papules in finger webs, wrists, waist, breasts and genitals; itch in contacts. In older people the pattern can be atypical and the face and scalp involved [2]."
        },
        {
          "h": "Crusted scabies",
          "t": "Thick, crusted, scaly plaques, often on the hands, in older, immunosuppressed or cognitively impaired people. Very high mite load and infectivity; may itch little [1,2]."
        },
        {
          "h": "Care home outbreaks",
          "t": "The care home should contact the UKHSA health protection team when scabies is suspected. Outbreak management includes case finding, simultaneous treatment of residents, staff and contacts, and environmental measures [1]."
        },
        {
          "h": "Treatment",
          "t": "Permethrin 5% cream to the whole body, repeated after 7 days (check the SPC/local formulary). In crusted scabies or outbreaks, oral ivermectin may be advised by specialists or UKHSA [1,6]."
        },
        {
          "h": "Contacts and laundry",
          "t": "Household and close contacts treated at the same time, even without symptoms. Wash clothing, towels and bedding at 50°C or above, or seal in bags for 72 hours [2]."
        },
        {
          "h": "After treatment",
          "t": "Itch may last 2–4 weeks; persistent itch beyond that, new burrows or crusting suggests treatment failure or reinfestation."
        },
        {
          "h": "Capacity and LPA",
          "t": "If the resident lacks capacity for the decision, treat in her best interests and consult the registered health and welfare attorney [3]."
        },
        {
          "h": "Confidentiality and candour",
          "t": "Do not disclose other residents’ details [4]. Be open about shortcomings in care and explain how to raise concerns [5]."
        }
      ]
    }
  };

  /* ============ 178. F2F — Blocked nose and sneezing all spring: the rhinitis ladder (and the unilateral red flag) ============ */
  const c178 = {
    id:'rhinitis-ladder', title:'"Every spring my nose runs and I sneeze non-stop \u2014 antihistamines barely help any more"', type:'video', duration:12,
    meta:{ age:34, sex:'F', setting:'Video consultation \u2014 recurrent seasonal nasal symptoms.', system:'ENT / Allergy \u2014 allergic rhinitis: the treatment ladder & the unilateral red flag', checked:'October 2026' },
    brief:'Mrs Priya Soneji, 34, teacher, with years of springtime sneezing, bilateral nasal itch, watery rhinorrhoea, nasal congestion and itchy watery eyes \u2014 classic seasonal allergic rhinitis (hay fever). She takes an over-the-counter oral antihistamine PRN but feels it "barely helps any more"; symptoms disrupt her sleep, concentration and teaching. She wants something stronger. The examinable task is twofold: (1) deliver the ALLERGIC RHINITIS treatment LADDER properly \u2014 allergen avoidance, REGULAR (not PRN) intranasal corticosteroid as the mainstay with correct spray TECHNIQUE, non-sedating antihistamine, add-ons (intranasal antihistamine/combination sprays, antihistamine eye drops, saline, short courses, leukotriene antagonist in selected cases only, noting that montelukast carries neuropsychiatric warnings (MHRA Drug Safety Update September 2019; April 2024: sleep disturbance, depression, agitation and suicidal thoughts — counsel and ask about mood)), and when to consider referral/immunotherapy (BSACI rhinitis guideline, Scadding et al., 2017); address why her current approach under-treats; and (2) demonstrate SAFETY-NETTING awareness of the rhinitis RED FLAGS that are NOT simple hay fever \u2014 in particular persistent UNILATERAL nasal obstruction, unilateral bloody/blood-stained discharge, or facial pain/numbness, which can signify a sinonasal tumour or other pathology and warrant ENT referral on clinical grounds (BSACI 2017), with urgency set by the features. Her symptoms are bilateral and seasonal (reassuring), so the case is mostly the ladder — but the red-flag teaching must be explicit.',
    script:{
      opening:"(Nasal voice, tissues nearby, friendly.) \"Every spring it's the same — I'm sneezing constantly, my nose runs like a tap, it's blocked at night, and my eyes itch. I take a hay-fever tablet but honestly it's barely touching it this year, and I'm shattered at work. Can I have something stronger? Maybe some steroids or a stronger antihistamine?\"",
      facts:[
        { topic:"Symptoms", text:"Sneezing, runny clear nose, blocked at night, itchy nose and itchy watery eyes. \"Both sides, always. Spring into early summer, every year\" — since her teens. Worse on high-pollen days and after being outside." },
        { topic:"Red-flag questions", text:"If asked: \"No, nothing like that\" — no one-sided blockage, no blood from the nose, no crusting, no facial pain, numbness or swelling, no loss of smell, no hearing change, no double vision." },
        { topic:"Impact", text:"\"I wake up blocked, so I sleep badly, and I'm foggy in lessons. Sneezing in front of thirty children isn't great either.\"" },
        { topic:"Current treatment", text:"\"Whatever the pharmacy gives me — I'd have to check the box\" (it's chlorphenamine). \"Only when it's bad, really.\" Has tried a nasal spray: \"Not regularly, no. Just the tablets when it's bad.\" Used a steroid spray once for a few days and stopped because it \"didn't do anything\"." },
        { topic:"Asthma and history", text:"If asked: \"Not that I know of\" — no wheeze or night cough. Eczema as a child. No allergies to medicines." },
        { topic:"Medicines, pregnancy", text:"No regular medicines. On the combined pill. Not pregnant or breastfeeding." },
        { topic:"Home and work", text:"Primary school teacher, married, no pets, non-smoker. Walks to school past a park. Sleeps with the window open." },
        { topic:"How to play it", text:"Pleasant, a bit tired. If asked what she was hoping for: \"I've heard there's an injection that sorts you out for the whole summer. Or just a stronger tablet.\" If asked about worries: \"Being useless at work. I can't take time off for hay fever, and I feel like I'm letting the kids down.\" Curious and engaged when the spray technique is explained: \"What's the right way, then?\" If given the steroid injection without discussion, accept (the trap)." }
      ],
      ice:{
        ideas:"\"The tablet's stopped working — I need something stronger, or that steroid injection.\"",
        concerns:"Sleep and concentration at work; letting her class down; frustration that the usual remedy isn't working.",
        expectations:"\"A stronger tablet — or the injection that lasts all summer.\""
      },
      cues:[
        "\"Only when it's bad, really.\" — as-needed use; invites the under-treatment discussion.",
        "\"I'm foggy in lessons.\" — impact on work and sleep.",
        "\"An injection that sorts you out for the whole summer.\" — expectation to address."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Confirms seasonal ALLERGIC RHINITIS from the bilateral, seasonal, itch/sneeze/rhinorrhoea + itchy-eyes picture, and assesses triggers, impact (sleep/work) and atopy \u2014 noting the bilateral/seasonal nature is reassuring' },
      { dom:'dg', text:'Identifies UNDER-TREATMENT (PRN oral antihistamine alone) as the likely reason for "failure" \u2014 not a need for something exotic' },
      { dom:'cm', text:'Makes a REGULAR intranasal CORTICOSTEROID the mainstay (daily through the season, BSACI 2017; starting a little before the season is common practice) and counsels correct SPRAY TECHNIQUE (head forward, opposite hand, aim away from septum, gentle sniff, days-to-weeks for effect)' },
      { dom:'cm', text:'Lays out the full LADDER and add-ons \u2014 avoidance, non-sedating antihistamine, intranasal antihistamine/combination spray, antihistamine eye drops, saline; leukotriene antagonist in selected cases only, with the MHRA montelukast neuropsychiatric warnings (September 2019; April 2024); short oral steroid only for severe acute flares (not depot); ENT/allergy referral for immunotherapy in refractory cases \u2014 and avoids long-term decongestant sprays' },
      { dom:'cm', text:'EXPLICITLY voices the rhinitis RED FLAGS that are not simple hay fever (persistent unilateral obstruction, unilateral bloody discharge, unilateral mass, facial pain/numbness, orbital symptoms) and that they warrant ENT referral on clinical grounds — while correctly reassuring that her bilateral seasonal picture does not fit them' },
      { dom:'ro',   text:'Acknowledges the real impact on sleep/concentration/work and the frustration, and frames the plan as getting control rather than dismissing her request' },
      { dom:'ro',   text:'Explains why regular treatment and technique matter (rather than just "a stronger pill"), checking understanding and supporting adherence' },
      { dom:'cm',    text:'Safety-nets and follows up: realistic timeframe for the intranasal steroid to work, a flare plan, when to return or be referred (including the unilateral/bloody red flags), and review of control \u2014 the proper ladder with safety-netting, not just a stronger antihistamine' },
    ],
    worked:[
      { lbl:'Confirm + reassure on type', txt:'"This is classic hay fever \u2014 seasonal, both sides, itchy sneezy nose and eyes. The fact it\u2019s both sides and comes each spring is actually reassuring; it\u2019s allergy, not something sinister."' },
      { lbl:'The under-treatment insight', txt:'"Here\u2019s why I think it\u2019s \u2018stopped working\u2019: a tablet now and then isn\u2019t really enough for symptoms this bad. The treatment that does the heavy lifting is a steroid nose spray used EVERY day through the season \u2014 not just when you’re bad — and it’s worth starting it a little before the pollen usually kicks off for you, so it’s already working."' },
      { lbl:'Teach the technique', txt:'"Technique is half the battle. Shake it, tip your head slightly forward, use your opposite hand and aim the spray towards the outer wall of your nostril, away from the middle \u2014 then a gentle sniff, not a hard snort. Done at the septum or snorted hard, it gives nosebleeds and doesn\u2019t work. Give it up to a couple of weeks."' },
      { lbl:'Build the ladder', txt:'"So: regular steroid spray plus a daily non-drowsy antihistamine, antihistamine drops for your eyes, and saline rinses. Avoidance helps too \u2014 windows shut on high-pollen days, wraparound sunglasses, shower and change after you\u2019ve been out. If a spell is really severe \u2014 say around exams \u2014 we can use a short oral steroid course, and if it\u2019s ever unmanageable year after year, there\u2019s referral for allergy treatment."' },
      { lbl:'Voice the red flags', txt:'"One important thing to know for the future: hay fever is both sides. If you ever get a blocked nose on just ONE side that won\u2019t clear, one-sided bleeding or blood-stained discharge, or facial pain or numbness, that\u2019s different \u2014 come back, because that needs an ENT check. That\u2019s not what you\u2019ve got now, but worth knowing."' },
      { lbl:'Safety-net + review', txt:'"Give the spray a fortnight of regular use and let\u2019s review how you\u2019re sleeping and coping at work. If it\u2019s still not controlled despite good technique, we\u2019ll step up. And those one-sided warning signs \u2014 don\u2019t sit on them."' },
    ],
    learning:'Seasonal sneezing with bilateral nasal itch, watery rhinorrhoea, congestion and itchy watery eyes is classic ALLERGIC RHINITIS (hay fever), and the bilateral, symmetrical, seasonal pattern is itself reassuring. The commonest reason it "stops working" is UNDER-TREATMENT: a PRN oral antihistamine alone is insufficient for moderate-to-severe disease, where the mainstay is a REGULAR intranasal corticosteroid used DAILY through the season (BSACI 2017; starting a little before the season is common practice rather than a guideline figure), and most apparent failure reflects irregular use and poor SPRAY TECHNIQUE rather than a need for something exotic \u2014 so counsel technique explicitly (head slightly forward, opposite hand, aim away from the septum toward the outer wall, gentle sniff, days-to-2-weeks for effect). The full ladder: allergen avoidance; regular intranasal steroid + a non-sedating antihistamine; add intranasal antihistamine/combination spray, antihistamine eye drops and saline; consider a leukotriene antagonist selectively (especially with asthma), counselling on the montelukast neuropsychiatric warnings (MHRA Drug Safety Update September 2019; April 2024), and a SHORT oral steroid course only for severe acute flares (never depot injections); and ENT/allergy referral for immunotherapy in severe, refractory, single-allergen cases \u2014 while avoiding prolonged decongestant sprays (rhinitis medicamentosa). Crucially, voice the rhinitis RED FLAGS that are NOT simple hay fever and warrant ENT referral: persistent UNILATERAL nasal obstruction, unilateral blood-stained/bloody discharge, a unilateral mass/polyp, facial pain/swelling/numbness, or orbital symptoms \u2014 which can indicate a sinonasal tumour (BSACI 2017). ENT referral for unilateral or bloody features is made on clinical grounds, with urgency set by the features, and this red-flag teaching must be made explicit as safety-netting.',
    knowledge:{
      guideline:'BSACI guideline for the diagnosis and management of allergic and non-allergic rhinitis (Scadding et al., 2017) · ARIA-EAACI (international, 2024–2025) · MHRA Drug Safety Update (September 2019; April 2024) · BNF · sinonasal red flags / ENT referral',
      points:[
        { h:'Confirm allergic rhinitis', t:'Seasonal, bilateral sneezing, nasal itch, watery rhinorrhoea, congestion and itchy watery eyes, with atopy, indicate allergic rhinitis. Assess triggers, impact and atopic history. Bilateral/seasonal pattern is reassuring.' },
        { h:'Under-treatment is the usual issue', t:'PRN oral antihistamine alone under-treats moderate-severe disease. The mainstay is a regular daily intranasal corticosteroid through the season (BSACI 2017: treatment of choice for moderate to severe disease); starting shortly before the season is common practice.' },
        { h:'Spray technique', t:'Shake; head slightly forward; opposite hand; aim away from the septum (toward the outer wall); gentle sniff; allow days-to-2 weeks; use regularly. Poor technique causes epistaxis and treatment failure.' },
        { h:'Stepwise ladder & add-ons', t:'Avoidance \u2192 intranasal steroid + non-sedating antihistamine \u2192 intranasal antihistamine/combination spray, antihistamine eye drops, saline → leukotriene antagonist selectively (esp. asthma; MHRA montelukast neuropsychiatric warnings September 2019 and April 2024), short oral steroid for severe acute flares (not depot, BSACI 2017), ENT/allergy referral for immunotherapy in refractory cases. Avoid long-term decongestant sprays.' },
        { h:'Sinonasal red flags', t:'Persistent unilateral nasal obstruction, unilateral bloody/blood-stained discharge, unilateral mass/polyp, facial pain/swelling/numbness, orbital symptoms (diplopia/proptosis) → ENT referral on clinical grounds (BSACI 2017); can indicate sinonasal tumour. Hay fever is bilateral.' },
        { h:'Unilateral features change the picture', t:'Bilateral seasonal allergic rhinitis is not a suspected-cancer presentation. Unilateral/bloody/orbital features change the clinical assessment and prompt ENT referral on clinical grounds, urgently where features are worrying.' },
        { h:'Never do', t:'Never just escalate the oral antihistamine without the regular intranasal steroid and technique; never ignore poor adherence/technique; never prescribe depot steroid for hay fever; never overlook or fail to voice the unilateral red flags.' },
        { h:'Safety-net & follow-up', t:'Allow ~2 weeks of regular spray use; review control (sleep/work); step up if needed; flare plan; explicit unilateral/bloody red-flag advice; ENT referral where indicated.' }
      ]
    }
  };

  /* ============ 179. F2F — Persistent fatigue in a young adult: the structured screen + the life behind it ============ */
  const c179 = {
    id:'persistent-fatigue-young', title:'"I\u2019m exhausted all the time \u2014 can you just test me for everything?"', type:'video', duration:12,
    meta:{ age:26, sex:'F', setting:'Video consultation \u2014 months of tiredness in a young adult.', system:'General \u2014 TATT: the structured screen and the psychosocial story', checked:'October 2026' },
    brief:'Miss Hannah Briar, 26, software developer, with ~4 months of feeling "tired all the time" (TATT). She is functioning but drained, sleeping poorly, low on energy, and worried "something is wrong" \u2014 she wants "every test under the sun". The examinable task is the balanced approach to fatigue: a STRUCTURED history and a FOCUSED, evidence-based first-line screen (not a scattergun "test for everything"), a brief examination (face to face — nodes, thyroid, pallor and abdomen cannot be examined on video — arranged when she attends for bloods), AND \u2014 equally \u2014 exploring THE LIFE BEHIND IT: mood/anxiety, sleep, work stress and screen habits, relationships, alcohol/caffeine, diet, exercise, life events. Fatigue is most often multifactorial/psychosocial, but red flags must be screened and not missed. The skill is to take her seriously, do the appropriate (not excessive) tests, open up the psychosocial picture without dismissing her as "just stressed", safety-net for evolving red flags, and arrange review \u2014 avoiding both over-investigation and premature reassurance. (There is no suspected cancer pathway referral for undifferentiated fatigue, but NICE NG12 does apply: consider a very urgent full blood count (within 48 hours) to assess for leukaemia in adults with features including persistent fatigue — so the FBC is done promptly, not left for weeks. The other anchors are NICE NG206: suspect ME/CFS in adults when the key symptoms, including post-exertional malaise, have lasted at least 6 weeks; diagnose only if they persist for 3 months and are not explained by another condition; NICE NG222 and NICE CG113 for mood; and NG20 for coeliac testing.)',
    script:{
      opening:"(Earnest, a bit anxious, speaking from her desk.) \"I'm just exhausted all the time, doctor — it's been months. I drag myself through work and crash at the weekend. I keep thinking something must be really wrong with me. Can you just test me for everything — my thyroid, my iron, anything — and find out what it is?\"",
      facts:[
        { topic:"The tiredness", text:"About four months. \"No energy, mostly. Heavy. And I don't sleep well.\" Not falling asleep in the day. No muscle weakness. Feels worse after a bad night, not specifically after exercise." },
        { topic:"Sleep", text:"\"I'm on my laptop until late, then I lie there with my mind racing. I wake up feeling like I haven't slept.\" Bed about 1 am, up at 7. No snoring she knows of." },
        { topic:"Red-flag questions", text:"If asked: \"No, none of those\" — no weight loss, night sweats, fevers, lumps, bleeding or bruising, breathlessness, palpitations, change in bowels, thirst or passing more urine." },
        { topic:"Periods and pregnancy", text:"Regular, not heavy. Not pregnant — \"I don't think so. I'm happy to do a test if it helps rule it out.\" Has a progestogen implant." },
        { topic:"Mood", text:"\"I don't think so. I just feel flat most of the time.\" If asked about enjoyment: \"I suppose I've been a bit flat. I haven't really thought of it like that.\" Worries a lot. No thoughts of self-harm." },
        { topic:"Lifestyle", text:"\"Lots of coffee to get through the day\" — 5–6 cups plus an energy drink. \"Not much alcohol\" — a few glasses at weekends. Non-smoker. Stopped going to the gym. Diet: lots of snacks at her desk." },
        { topic:"Work and life", text:"Software developer. \"Work's been full-on. Deadlines, long hours, always on my phone. I haven't had a proper break in ages.\" Moved to a new city a year ago; few friends nearby. Single." },
        { topic:"Medicines and history", text:"No regular medicines apart from the implant. No allergies. No family history of thyroid or coeliac disease she knows of." },
        { topic:"How to play it", text:"Keen on tests: \"As long as we do the tests.\" If asked what she fears: \"Honestly? Something serious. You read things online and it's always something awful. I just want someone to find it.\" If told \"it's just stress\", feel dismissed and push back: \"So you think I'm making it up?\" If the doctor explains a focused set of tests and also explores life, accept: \"Okay, that makes sense.\" Ask once: \"Why not everything, though? Just to be sure?\"" }
      ],
      ice:{
        ideas:"\"Something must be really wrong — the tests will find it.\"",
        concerns:"HIDDEN AGENDA — she fears a serious illness she has read about online; underneath, months of work stress, poor sleep and loneliness since moving that she hasn't connected to the tiredness.",
        expectations:"\"Test me for everything.\""
      },
      cues:[
        "\"I keep thinking something must be really wrong.\" — invites \"what are you worried it might be?\"",
        "\"My mind racing.\" — sleep and anxiety.",
        "\"I haven't had a proper break in ages.\" — the work and life story."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Takes fatigue seriously with a STRUCTURED history \u2014 nature (sleepiness vs energy vs muscle), duration, pattern, functional impact \u2014 and screens RED FLAGS (weight loss, fevers/night sweats, lymphadenopathy, breathlessness, neurological/focal symptoms, bleeding, progressive course)' },
      { dom:'dg', text:'Orders a FOCUSED, evidence-based first-line screen (FBC — very urgently, within 48 hours, per NICE NG12 for persistent fatigue — ferritin, TFTs, HbA1c/glucose, U&E, LFTs, calcium, CRP/ESR, coeliac serology with the NG20 gluten caveat ± vit D/B12/folate, pregnancy/HIV per history) rather than a scattergun "test for everything", and explains the rationale' },
      { dom:'dg', text:'Explores THE LIFE BEHIND IT \u2014 mood/anxiety (with a validated tool if indicated), sleep hygiene/pattern, work/relationship/financial stress, alcohol/caffeine, diet, exercise, life events \u2014 openly and without judgement' },
      { dom:'cm', text:'Avoids BOTH errors: neither over-investigates (feeding health anxiety) nor prematurely dismisses as "just stress", holding organic and psychosocial possibilities together as complementary' },
      { dom:'cm', text:'Offers proportionate management \u2014 sleep/lifestyle advice, mood support/treatment if depression/anxiety identified, addressing modifiable factors \u2014 alongside the investigation plan' },
      { dom:'ro',   text:'Elicits the hidden agenda (the specific fear or unnamed stressor) with open questions ("what are you most worried it might be?", "what\u2019s life like at the moment?") and validates both the symptom and the fear' },
      { dom:'ro',   text:'Negotiates a proportionate plan with a patient wanting "everything" \u2014 explaining why focused testing is better \u2014 without leaving her feeling dismissed or fobbed off' },
      { dom:'cm',    text:'Safety-nets and follows up: definite review of results, what red flags warrant sooner contact, a timeframe and plan if first-line tests are normal (review lifestyle/mood, reassess, consider next steps, including ME/CFS if post-exertional malaise persists — NG206: suspect at 6 weeks, diagnose at 3 months), and signposting \u2014 balanced thoroughness, neither over-investigation nor premature reassurance' },
    ],
    worked:[
      { lbl:'Take it seriously', txt:'"Four months of being wiped out is genuinely tough, and I want to take it seriously \u2014 not just hand you a tonic. Let me understand it properly and then do the right tests, and I also want to understand what life\u2019s like for you at the moment, because both matter."' },
      { lbl:'Structured + red flags', txt:'"Is it more sleepiness, or no energy, or muscles tiring? Worse at any time of day? \u2026 And a few specific checks: any weight loss, fevers or night sweats, lumps, breathlessness, or anything new and neurological? \u2026 None \u2014 that\u2019s reassuring and helps me aim the tests."' },
      { lbl:'Focused, not scattergun', txt:'"I know it\u2019s tempting to \u2018test for everything\u2019, but that actually causes more confusion \u2014 false alarms and red herrings. Instead I’ll do a focused set that covers the things that genuinely cause tiredness: blood count and iron, thyroid, blood sugar, kidneys, liver, calcium, inflammation, and coeliac — for that one you need to be eating gluten every day beforehand. I’d like the blood count done in the next couple of days, and I’ll check you over in person when you come in. That’s thorough and sensible."' },
      { lbl:'Open the life behind it', txt:'"Can I ask about the rest of it? How\u2019s your mood \u2014 are you still enjoying things? How\u2019s sleep \u2014 phone in bed, racing mind? And work and home, any stress or worries? \u2026 Tell me more about that." (Listens.)' },
      { lbl:'Hold both, no dismissal', txt:'"What you\u2019re describing sounds like a lot on your plate and some low mood and broken sleep \u2014 which can absolutely cause this kind of exhaustion. That\u2019s NOT me saying it\u2019s \u2018all in your head\u2019; it\u2019s real, and it\u2019s treatable. The blood tests run alongside that, not instead of it."' },
      { lbl:'Plan + safety-net', txt:'"Let\u2019s get the bloods, work on sleep and the stress, and I\u2019d like to see you back to go through results and how you\u2019re doing. If you develop weight loss, fevers, lumps or anything that alarms you in the meantime, come sooner. We\u2019ll get to the bottom of this together."' },
    ],
    learning:'"Tired all the time" (TATT) is common, real and usually multifactorial, and the strong consultation does TWO things at once: a STRUCTURED history with a red-flag screen and a FOCUSED first-line investigation, AND genuine exploration of the life behind the fatigue. Characterise the tiredness (sleepiness vs lack of energy vs muscle fatigue), its duration, pattern and functional impact, and screen red flags (weight loss, fevers/night sweats, lymphadenopathy, breathlessness, focal/neurological symptoms, bleeding, a progressive course) whose presence redirects to urgent investigation. Resist the scattergun "test for everything": a reasonable evidence-based panel is FBC (very urgently, within 48 hours — NICE NG12 (Suspected cancer: recognition and referral, last updated April 2026) advises considering this for persistent fatigue), ferritin, TFTs, HbA1c/glucose, U&E, LFTs, calcium, CRP/ESR and coeliac serology (NG20: only while eating gluten in more than one meal a day for at least 6 weeks), with vitamin D, B12/folate, pregnancy test or HIV added per history \u2014 explained, because indiscriminate testing breeds false positives, incidental findings and anxiety. Equally, explore the commonest causes \u2014 depression and anxiety, poor sleep, work/relationship/financial stress, alcohol/caffeine, diet and activity, and life events \u2014 openly and without judgement, often using "what are you most worried it might be?" and "what\u2019s life like at the moment?" to surface the real driver (a fear, or an unnamed stressor or unrecognised depression). Avoid both errors: over-investigation feeds health anxiety, while prematurely labelling "just stress" risks missing organic disease or invalidating distress \u2014 so hold organic and psychosocial possibilities together as complementary, offer proportionate lifestyle/mood support alongside the screen, safety-net for evolving red flags, and arrange a definite review. There is no suspected cancer pathway referral for undifferentiated fatigue without red flags, but NICE NG12 does advise considering a very urgent FBC (within 48 hours) for persistent fatigue, and red-flag safety-netting completes it. If post-exertional malaise persists, NICE NG206: suspect ME/CFS in adults when the key symptoms, including post-exertional malaise, have lasted at least 6 weeks; diagnose only if they persist for 3 months and are not explained by another condition.',
    knowledge:{
      guideline:'NICE NG12 Suspected cancer: recognition and referral (2015, last updated April 2026) · NICE NG20 (coeliac disease, 2015) · NICE NG206 (ME/CFS, 2021) · NICE NG222 (depression in adults, 2022, last reviewed January 2026) · NICE CG113 (generalised anxiety disorder and panic disorder, 2011) · UK CMO low-risk drinking guidelines (2016)',
      points:[
        { h:'Structured history + red flags', t:'Characterise the fatigue (type, duration, pattern, functional impact) and screen red flags: weight loss, fevers/night sweats, lymphadenopathy, breathlessness, focal/neurological symptoms, bleeding, progressive course — any of which redirect to urgent investigation. NICE NG12: consider a very urgent full blood count (within 48 hours) to assess for leukaemia in adults with features including persistent fatigue. Post-exertional malaise: NG206 — suspect ME/CFS at 6 weeks, diagnose at 3 months.' },
        { h:'Focused first-line screen', t:'FBC (very urgent, within 48 hours, for persistent fatigue — NICE NG12), ferritin, TFTs, HbA1c/glucose, U&E, LFTs, calcium, CRP/ESR, coeliac serology (NG20; gluten in more than one meal a day for at least 6 weeks first); add vitamin D, B12/folate, pregnancy test/HIV per history. Examination face to face, not by video. Explain the rationale; avoid scattergun testing (false positives, incidentalomas, anxiety).' },
        { h:'The life behind it', t:'Commonest causes are psychosocial/multifactorial: depression, anxiety, poor sleep, stress, alcohol/caffeine, diet, inactivity/over-training, life events. Explore mood (PHQ-9/GAD-7 if indicated; NICE NG222 and CG113 for treatment matched to severity, including NHS Talking Therapies self-referral), sleep and stress openly.' },
        { h:'Hold both, avoid extremes', t:'Do not over-investigate (feeds health anxiety) nor prematurely dismiss as "just stress" (misses organic disease, invalidates distress). Frame organic and psychosocial work-up as complementary.' },
        { h:'Proportionate management', t:'Sleep hygiene and lifestyle advice, treat identified depression/anxiety, address modifiable factors, alongside the investigation plan. Reassess after first-line results.' },
        { h:'Elicit the hidden agenda', t:'Use "what are you most worried it might be?" and "what\u2019s life like at the moment?" to surface a specific fear or unnamed stressor. Validate both the symptom and the fear.' },
        { h:'Never do', t:'Never bleed a scattergun panel without a structured history; never dismiss as "just stress" without screening; never over-investigate repeatedly; never miss red flags; never forget the very urgent FBC (within 48 hours) that NICE NG12 advises considering for persistent fatigue.' },
        { h:'Safety-net & follow-up', t:'Definite review of results; red flags warranting sooner contact; a clear plan and timeframe if first-line tests are normal (review mood/sleep/lifestyle, reassess, consider next steps including ME/CFS per NG206 if post-exertional malaise persists to 3 months); signpost support.' }
      ]
    }
  };

  /* ============ 180. F2F — B12 deficiency: injections, neurology, and why diet won't fix it ============ */
  const c180 = {
    id:'b12-deficiency', title:'"My B12 is low \u2014 can\u2019t I just take a tablet or eat better instead of injections?"', type:'video', duration:12,
    meta:{ age:46, sex:'F', setting:'Video consultation \u2014 explaining a low B12 result and its treatment.', system:'Haematology / Neurology \u2014 B12 deficiency: cause, neurology & correct treatment', checked:'October 2026' },
    brief:'Mrs Carol Denham, 46, with fatigue and \u2014 on directed history \u2014 tingling/numbness in the feet and a few months of unsteadiness, found to have a LOW serum B12 with macrocytosis on FBC. She is a non-vegetarian with a reasonable diet, and asks why she cannot "just eat better or take a tablet" rather than have injections. The examinable task is to interpret and act on B12 deficiency correctly: establish the CAUSE (most often PERNICIOUS ANAEMIA — autoimmune gastritis; NICE NG239 recommends the anti-intrinsic factor antibody test — or malabsorption including coeliac disease (NICE NG20: offer coeliac serology for unexplained B12 deficiency), metformin, long-term acid suppression, dietary in vegans, etc.), recognise the NEUROLOGICAL involvement (peripheral neuropathy, subacute combined degeneration of the cord) that makes prompt correct treatment urgent — and arrange a face-to-face neurological examination (sensation, vibration and position sense, reflexes, gait, Romberg’s), because this cannot be done on video, and explain WHY — if the cause is autoimmune gastritis (pernicious anaemia) — diet or standard tablets will NOT fix it and INTRAMUSCULAR hydroxocobalamin is required, lifelong (NG239), with the BNF neurological regimen (1 mg IM on alternate days until no further improvement, then 1 mg every 2 months) because of her neurological involvement. Also address the classic pitfall: do NOT give folate alone before correcting B12 (risk of precipitating/worsening SACD), and check/replace iron and folate appropriately. Communicate clearly with a patient who would prefer to avoid injections, without coercion but with honest reasoning.',
    script:{
      opening:"(Puzzled, slightly defensive, doesn't like needles.) \"You said my B12 came back low — but I eat meat, I'm not vegetarian, so I don't really get it. Can't I just take a tablet or eat a bit better instead of having injections? I really don't like needles, and injections every few months sounds like a lot of hassle.\"",
      facts:[
        { topic:"Tiredness", text:"Tired for about six months — why the bloods were done. A bit breathless on stairs." },
        { topic:"Feet — only if asked", text:"\"Now you mention it, my feet tingle, and they've felt a bit numb\" — both feet, pins and needles, about three months." },
        { topic:"Balance — only if asked", text:"\"Actually, yes. For a few months I've felt a bit unsteady on my feet\" — worse in the dark or with eyes closed in the shower. No falls yet." },
        { topic:"Other symptoms", text:"\"Not that I've noticed. Just tired.\" No sore tongue noticed, no memory problems, no visual change, no bladder or bowel problems, no weakness." },
        { topic:"Stomach and absorption", text:"If asked: no diarrhoea, weight loss or tummy pain. No stomach surgery. \"I'd have to double-check, but I don't think so\" to acid tablets — she doesn't take any. Not on metformin." },
        { topic:"Diet", text:"Eats meat, fish, eggs and dairy most days. Not vegan." },
        { topic:"Medical and family history", text:"Hypothyroidism? — \"No, nothing like that.\" But if asked about family: her mum has an underactive thyroid and \"had B12 jabs for years\". No allergies, no regular medicines, not pregnant (periods regular)." },
        { topic:"Social", text:"School administrator, married, two teenagers. Drinks a glass of wine most evenings. Non-smoker. Drives." },
        { topic:"How to play it", text:"Reluctant about injections. If asked what bothers her: \"Mostly the needles. And being stuck with injections for ever. I thought eating more red meat might fix it.\" \"I just really don't like them. I dread it.\" Becomes worried when the nerve damage is explained: \"That's scary. So it has to be injections?\" Agrees when told how infrequent maintenance is. Asks: \"Should I take folic acid too? I've seen it in the chemist.\"" }
      ],
      ice:{
        ideas:"\"I eat meat, so it can't be my diet — eat a bit better or take a tablet and it'll sort itself.\"",
        concerns:"Dread of needles and being \"stuck with injections for ever\". She has not connected the tingling feet and unsteadiness to the B12.",
        expectations:"\"A tablet or diet change, not injections.\""
      },
      cues:[
        "\"I eat meat.\" — invites explaining absorption.",
        "\"I dread it.\" — needle fear to acknowledge and help with.",
        "\"My mum had B12 jabs for years.\" — family history pointing to pernicious anaemia, if asked."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Establishes the CAUSE rather than assuming diet \u2014 recognises that in a non-vegetarian, B12 deficiency is usually malabsorption, classically PERNICIOUS ANAEMIA (checks the anti-intrinsic factor antibody, NICE NG239), and reviews metformin/PPI, coeliac serology (NICE NG20)/GI causes and gastric surgery' },
      { dom:'dg', text:'Recognises NEUROLOGICAL involvement (peripheral neuropathy; subacute combined degeneration \u2014 paraesthesiae, sensory ataxia, unsteadiness) and that this makes prompt, adequate treatment urgent to avoid irreversible damage — arranging a face-to-face neurological examination (not possible on video) without delaying treatment' },
      { dom:'cm', text:'Knows the correct TREATMENT: IM hydroxocobalamin \u2014 and the INTENSIVE loading regimen WITH neurological features (alternate-day 1 mg IM until no further improvement, then 1 mg every 2 months) vs standard loading without (1 mg three times a week for 2 weeks, then every 2–3 months; BNF) — and that diet/oral tablets will not correct deficiency caused by autoimmune gastritis, which needs lifelong IM B12 (NG239)' },
      { dom:'cm', text:'Avoids the FOLATE PITFALL \u2014 does not give folic acid alone before/without correcting B12 (risk of precipitating/worsening SACD) \u2014 and checks/replaces iron and folate appropriately, monitoring response (FBC/reticulocytes) and early hypokalaemia in severe cases' },
      { dom:'dg', text:'Orders appropriate work-up (FBC/film, folate, ferritin, anti-intrinsic factor antibody (NG239), TFTs, coeliac serology (NG20); MMA/active-B12 if borderline) and notes pernicious anaemia\u2019s autoimmune associations and long-term gastric-cancer follow-up (not an acute NICE NG12 referral)' },
      { dom:'ro',   text:'Explains to a NEEDLE-AVERSE patient, honestly and without coercion, WHY tablets/diet will not work if absorption is the problem, and why prompt treatment matters given the nerve symptoms \u2014 respecting autonomy' },
      { dom:'ro',   text:'Addresses the needle aversion and hassle practically (quick, nurse-given, then infrequent maintenance), checks understanding, and seeks informed acceptance through understanding rather than pressure' },
      { dom:'cm',    text:'Safety-nets and follows up: starts/arranges treatment promptly given neurology, plans antibody/associated-condition results and monitoring, explains expected recovery and that some neurological change may be slow/incomplete if delayed, advises what to report, and books review \u2014 correct treatment, folate pitfall avoided' },
    ],
    worked:[
      { lbl:'Explain the puzzle', txt:'"I can see why it\u2019s confusing \u2014 you eat meat, so where\u2019s the B12 going? The likely answer is that your body isn’t ABSORBING it properly, rather than you not eating it. The commonest reason is an autoimmune condition called pernicious anaemia, and I’ll do a blood test to check for it, plus one for coeliac disease, which can also stop B12 being absorbed."' },
      { lbl:'Take the nerve symptoms seriously', txt:'"The tingling in your feet and feeling unsteady aren\u2019t a coincidence \u2014 low B12 can affect the nerves and spinal cord. That’s actually the reason I don’t want to mess about with this: treating it properly and promptly protects those nerves. I can’t check your nerves, reflexes and balance properly on video, so I’d like to examine you in person when you come in for the first injection."' },
      { lbl:'Why not tablets/diet', txt:'"And that\u2019s the honest answer to your question: if the problem is absorption, eating more or taking a standard tablet won\u2019t get it in \u2014 it just passes through. The reliable way is an injection that bypasses the gut. I\u2019m not being awkward; it\u2019s genuinely the treatment that works here."' },
      { lbl:'The regimen', txt:'"Because you\u2019ve got nerve symptoms, we start with a more intensive course \u2014 injections every other day for a while until things stop improving \u2014 then it settles to a top-up injection every couple of months. The nurse does them, they\u2019re quick, and the frequent phase doesn\u2019t last forever."' },
      { lbl:'The folate caution', txt:'"One important technical point: I won\u2019t just give you folic acid on its own, because in B12 deficiency that can actually make the nerve problem worse. We sort the B12 properly first. I\u2019ll also check your iron and folate and a couple of related tests."' },
      { lbl:'Respect + safety-net', txt:'"I know needles aren\u2019t your favourite \u2014 if it helps, we can talk through making them easier. If your unsteadiness or numbness gets worse, tell us. We\u2019ll recheck your blood, see how you respond, and review the antibody results together. How does that sound?"' },
    ],
    learning:'B12 deficiency must be interpreted and treated correctly, not waved through. In a non-vegetarian with a reasonable diet, the deficiency is usually one of ABSORPTION rather than intake \u2014 classically PERNICIOUS ANAEMIA (autoimmune gastritis, loss of intrinsic factor; check the anti-intrinsic factor antibody, NICE NG239), but also coeliac disease (NICE NG20: offer coeliac serology for unexplained B12 deficiency), Crohn’s/ileal disease or resection, gastric surgery, metformin and long-term PPI, with true dietary deficiency mainly in vegans. The NEUROLOGY is what makes prompt, adequate treatment urgent: B12 deficiency causes peripheral neuropathy and SUBACUTE COMBINED DEGENERATION of the cord (dorsal columns and corticospinal tracts \u2014 paraesthesiae, sensory ataxia, unsteadiness, weakness), plus cognitive/mood and optic effects, and neurological damage may become irreversible if undertreated or delayed — so examine her face to face (not by video) and do not delay replacement while waiting for results (NG239). The core teaching for the patient who wants to "just eat better or take a tablet" is that deficiency caused by autoimmune gastritis cannot be corrected orally/dietarily and requires lifelong INTRAMUSCULAR HYDROXOCOBALAMIN (NG239) — with INTENSIVE loading when neurological features are present (BNF: 1 mg IM on alternate days until no further improvement, then 1 mg every 2 months), versus standard loading without (1 mg three times a week for 2 weeks, then every 2–3 months); oral replacement is an option for dietary deficiency. Avoid the classic pitfall of giving FOLIC ACID alone before correcting B12 (it can precipitate/worsen SACD), and check/replace iron and folate, monitor the haematological response and watch for early hypokalaemia in severe megaloblastic anaemia. Note pernicious anaemia\u2019s autoimmune associations (thyroid, T1DM, vitiligo) and small long-term gastric-cancer risk warranting follow-up. Communicate honestly with a needle-averse patient about why injections are necessary, respecting autonomy and seeking informed acceptance rather than coercion.',
    knowledge:{
      guideline:'NICE NG239 (vitamin B12 deficiency in over 16s, 2024) · BNF (hydroxocobalamin; folic acid) · BSH guideline for cobalamin and folate disorders (Devalia et al., 2014) · NICE NG20 (coeliac disease, 2015) · folate pitfall',
      points:[
        { h:'Find the cause', t:'In non-vegetarians, B12 deficiency is usually malabsorptive: pernicious anaemia (anti-intrinsic factor antibody, NG239), coeliac (serology per NG20)/Crohn’s/ileal disease/resection, gastric surgery, metformin, long-term PPI. Dietary deficiency mainly in vegans.' },
        { h:'Recognise the neurology', t:'Peripheral neuropathy and subacute combined degeneration (dorsal columns + corticospinal: paraesthesiae, sensory ataxia, unsteadiness, weakness), plus cognitive/mood and optic effects. Neurology mandates prompt adequate treatment (NG239: do not delay while awaiting results); delay risks irreversibility. Examine face to face: sensation, vibration/position sense, reflexes, gait, Romberg’s.' },
        { h:'Treatment \u2014 IM hydroxocobalamin', t:'Autoimmune gastritis needs lifelong IM hydroxocobalamin (NG239). BNF — without neuro features: 1 mg IM three times a week for 2 weeks, then 1 mg every 2–3 months. With neuro features: 1 mg IM alternate days until no further improvement, then 1 mg every 2 months. Oral B12 is an option for dietary deficiency; for other causes the route depends on cause and severity.' },
        { h:'Folate pitfall', t:'Do not give folic acid alone before/without correcting B12 \u2014 it can precipitate or worsen subacute combined degeneration. Correct B12 first (or concurrently once B12 started).' },
        { h:'Investigations & monitoring', t:'FBC/film (macrocytosis, hypersegmented neutrophils, \u00b1 pancytopenia), folate, ferritin, anti-intrinsic factor antibody (NG239), TFTs, coeliac serology (NG20); MMA/active-B12 if borderline. Recheck FBC/reticulocytes; watch for early hypokalaemia in severe megaloblastic anaemia.' },
        { h:'Associations & follow-up', t:'Pernicious anaemia associates with autoimmune thyroid disease, T1DM, vitiligo, and a small increased long-term gastric-cancer risk \u2014 a reason for follow-up, not an acute NICE NG12 referral.' },
        { h:'Never do', t:'Never assume dietary cause in a non-vegetarian; never rely on diet/oral tablets for malabsorptive deficiency; never give folate alone first; never undertreat when neurology is present.' },
        { h:'Communicate & safety-net', t:'Explain the absorption problem and why injections are needed; respect needle aversion without coercion; start treatment promptly given neurology; plan antibody/associated-condition results and monitoring; advise what to report; review response.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c177, c178, c179, c180);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'itchy-rash-systemic': {
      "ceg": [
        "Older adults",
        "Professional & ethical dilemmas",
        "New & undifferentiated presentations"
      ],
      "stem": {
        "name": "Iris Paterson",
        "age": "86 years · female",
        "pmh": [
          "Alzheimer’s dementia (moderate)",
          "Hypertension",
          "Osteoarthritis"
        ],
        "meds": [
          "Donepezil",
          "Amlodipine",
          "Emollient (care home request, 4 weeks ago)",
          "Hydrocortisone 1% cream (care home request, 4 weeks ago)"
        ],
        "allergy": "None recorded",
        "recent": "Residential care home. Four weeks ago: telephone request from the home for “eczema creams”, issued; no examination recorded. Registered health and welfare LPA: daughter, Helen Paterson.",
        "reason": "Daughter calling: “Mum’s itching is getting worse.”"
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Identity and LPA. Acknowledge anger; promise to return to neglect."
        },
        {
          "t": "1–5",
          "h": "History",
          "d": "Sites, night itch, crusted hands, contacts, systemic features, medicines."
        },
        {
          "t": "5–8",
          "h": "Explain",
          "d": "Probable scabies, possibly crusted; steroid may worsen; not about cleanliness. ICE: guilt, grandchildren, names."
        },
        {
          "t": "8–11",
          "h": "Plan",
          "d": "Same-day visit; UKHSA via the home; simultaneous treatment; Helen’s household; best interests; confidentiality; honest answer on neglect."
        },
        {
          "t": "11–12",
          "h": "Close",
          "d": "Teach-back; call back after visit; safety-net."
        }
      ],
      "wordPics": {
        "fail": "Prescribes a stronger steroid or antihistamine over the phone; misses that others are itching; shares other residents’ details or refuses to engage with the neglect question.",
        "pass": "Recognises probable scabies, arranges a same-day visit, explains outbreak management with the health protection team, and advises Helen to treat her household.",
        "exc": "All of the above, plus: recognises possible crusted scabies and the steroid effect; simultaneous treatment explained clearly; involves Helen properly as attorney; explains confidentiality respectfully; acknowledges the earlier remote prescription honestly and offers routes for concerns; calls back after the visit."
      },
      "avoid": [
        {
          "dont": "“Let’s try a stronger steroid cream.”",
          "instead": "“This sounds like scabies; a doctor needs to see her today.”",
          "why": "Steroids can worsen scabies and delay diagnosis."
        },
        {
          "dont": "“The lady next door is Mrs…”",
          "instead": "“I can’t share other residents’ details, but everyone affected will be treated.”",
          "why": "Other residents’ information is confidential."
        },
        {
          "dont": "“The home did everything right.”",
          "instead": "“A cream was prescribed without anyone examining her, and that should have been different.”",
          "why": "Defensiveness damages trust; openness is a professional duty."
        }
      ]
    },

    'rhinitis-ladder': {
      ceg: ['New & undifferentiated presentations', 'Prescribing & pharmacology'],
      stem: {
        name: 'Priya Soneji', age: '34 years \u00b7 female',
        pmh: ['Years of seasonal (spring) BILATERAL sneezing, nasal itch, watery rhinorrhoea, congestion + itchy watery eyes', 'OTC oral antihistamine PRN \u2014 "barely helps"; sleep/concentration/teaching affected', 'Atopic (mild eczema)'],
        meds: ['Cetirizine PRN'],
        allergy: 'NKDA',
        recent: '"Can I have something stronger \u2014 steroids or a stronger antihistamine?"',
        reason: 'Video consultation \u2014 worsening seasonal nasal symptoms.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Confirm + reassure type', d:'Bilateral, seasonal, itchy/sneezy = hay fever; both-sides/seasonal is reassuring.' },
        { t:'2\u20134',  h:'Under-treatment insight', d:'PRN antihistamine alone under-treats; mainstay is REGULAR intranasal steroid (BSACI 2017), started a little before the season.' },
        { t:'4\u20136',  h:'Spray technique', d:'Head forward, opposite hand, aim away from septum, gentle sniff, up to 2 weeks; regular use.' },
        { t:'6\u20139',  h:'Build the ladder', d:'Avoidance + antihistamine + intranasal combo + eye drops + saline; LTRA only selectively (MHRA montelukast warnings)/short oral steroid for severe; immunotherapy if refractory.' },
        { t:'9\u201312', h:'Red flags + review', d:'Unilateral obstruction/bleeding, facial pain/numbness → ENT on clinical grounds; review control in 2 weeks.' }
      ],
      wordPics: {
        fail: 'Just prescribes a "stronger" antihistamine or a depot steroid injection; ignores technique/adherence; never voices the unilateral red flags.',
        pass: 'Recognises under-treatment, starts a regular intranasal steroid with technique and the ladder, and mentions red flags.',
        exc:  'Confirms allergic rhinitis, identifies under-treatment, makes a regular intranasal steroid the mainstay with correct technique, builds the full ladder and add-ons appropriately (no depot steroid), explicitly safety-nets the unilateral/bloody ENT red flags, and reviews control.'
      },
      avoid: [
        { dont:'"I\u2019ll give you a stronger antihistamine and a steroid injection to get you through."', instead:'"The key is a regular steroid nose spray used daily with good technique \u2014 depot steroid injections aren\u2019t recommended for hay fever."', why:'A "stronger pill" plus depot steroid ignores the mainstay (regular intranasal steroid) and uses an inappropriate, outdated treatment.' },
        { dont:'(No technique counselling) "Use this spray when you\u2019re bad."', instead:'"Use it every day through the season, aim away from the septum, gentle sniff \u2014 occasional use and poor technique are why sprays seem to fail."', why:'PRN use and poor technique are the main causes of treatment failure.' },
        { dont:'(Never mentioning red flags) ending on the prescription.', instead:'"For the future: a one-sided blocked nose, one-sided bleeding, or facial pain/numbness isn\u2019t hay fever \u2014 come back, it needs an ENT check."', why:'Omitting the unilateral/bloody red-flag safety-net risks a missed sinonasal tumour later.' }
      ]
    },

    'persistent-fatigue-young': {
      ceg: ['Mental health & addiction', 'New & undifferentiated presentations'],
      stem: {
        name: 'Hannah Briar', age: '26 years \u00b7 female',
        pmh: ['~4 months "tired all the time"; functioning but drained; poor sleep, low energy', 'No red flags volunteered; worried "something is wrong"', 'Software developer; late screens; high caffeine'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Can you just test me for everything and find out what it is?"',
        reason: 'Video consultation \u2014 months of fatigue in a young adult.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Take seriously', d:'Validate the exhaustion; signal you\u2019ll do the right tests AND explore life \u2014 both matter.' },
        { t:'2\u20134',  h:'Structured + red flags', d:'Type/duration/pattern/impact; screen weight loss, sweats, lumps, breathlessness, neuro, bleeding.' },
        { t:'4\u20136',  h:'Focused screen', d:'FBC within 48 h (NICE NG12, persistent fatigue), ferritin, TFTs, HbA1c, U&E, LFTs, calcium, CRP, coeliac (NG20, on gluten) ± vit D/B12; face-to-face exam; explain why not "everything".' },
        { t:'6\u20139',  h:'The life behind it', d:'Mood/anhedonia, sleep hygiene, work/relationship/financial stress, caffeine/alcohol \u2014 openly.' },
        { t:'9\u201312', h:'Hold both + safety-net', d:'Not "just stress"; lifestyle/mood support + bloods; definite review; red flags \u2192 sooner.' }
      ],
      wordPics: {
        fail: 'Either bleeds a scattergun panel with no history, or dismisses as "just stress" without screening; over-investigates or prematurely reassures.',
        pass: 'Takes a structured history with red-flag screen, orders a focused panel, and explores mood/sleep/stress with safety-netting.',
        exc:  'Takes fatigue seriously, does a structured history + red-flag screen and a focused explained panel (not "everything"), genuinely explores mood/sleep/stress/lifestyle without dismissing as "just stress", elicits the hidden fear, offers proportionate support, and safety-nets with definite review.'
      },
      avoid: [
        { dont:'"Okay, let\u2019s test you for everything and see what comes up."', instead:'"I\u2019ll do a focused, sensible set that covers the real causes of tiredness \u2014 testing for everything just throws up false alarms."', why:'Scattergun testing generates false positives, incidentalomas and anxiety, and skips the history.' },
        { dont:'"Your tests will be normal \u2014 it\u2019s just stress, try to relax."', instead:'"A lot on your plate and poor sleep can genuinely cause this \u2014 that\u2019s real and treatable \u2014 and I\u2019ll still run the bloods alongside."', why:'Prematurely dismissing as "just stress" risks missing organic disease and invalidates the patient.' },
        { dont:'(No exploration) ordering bloods and ending.', instead:'"Can I ask how your mood and sleep are, and what\u2019s going on at work and home?"', why:'Omitting the psychosocial exploration misses the commonest cause and the hidden agenda.' }
      ]
    },

    'b12-deficiency': {
      ceg: ['Investigations & results', 'Prescribing & pharmacology'],
      stem: {
        name: 'Carol Denham', age: '46 years \u00b7 female',
        pmh: ['Low serum B12 + macrocytosis on FBC; fatigue', '\u26a0 Tingling/numbness in feet + few months of unsteadiness (neuro involvement)', 'Non-vegetarian, reasonable diet'],
        meds: ['Omeprazole (long-term)'],
        allergy: 'NKDA',
        recent: '"I eat meat \u2014 can\u2019t I just take a tablet or eat better instead of injections? I hate needles."',
        reason: 'Video consultation \u2014 explaining a low B12 result.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Explain the puzzle', d:'Eats meat → likely an ABSORPTION problem, not intake; commonest = pernicious anaemia (anti-intrinsic factor antibody, NG239); coeliac serology (NG20); review PPI.' },
        { t:'2\u20134',  h:'Take neurology seriously', d:'Tingling + unsteadiness = neuropathy/SACD; this is why prompt, adequate treatment matters; arrange face-to-face neuro exam.' },
        { t:'4\u20137',  h:'Why injections', d:'Autoimmune gastritis → oral/diet won’t correct it; lifelong IM hydroxocobalamin (NG239); BNF neuro regimen (alternate days until no further improvement, then 2-monthly).' },
        { t:'7\u20139',  h:'Folate pitfall + tests', d:'Don\u2019t give folate alone first (SACD risk); check folate/iron/IF antibodies/TFTs/coeliac; monitor response.' },
        { t:'9\u201312', h:'Respect + safety-net', d:'Address needle aversion without coercion; report worsening neuro; recheck bloods; review antibody results.' }
      ],
      wordPics: {
        fail: 'Tells her to eat more B12-rich food or gives oral tablets for malabsorptive deficiency; or gives folic acid alone; ignores the neuro symptoms.',
        pass: 'Identifies likely pernicious anaemia, recognises neuro involvement, and treats with IM hydroxocobalamin avoiding the folate pitfall.',
        exc:  'Establishes the cause (likely pernicious anaemia/malabsorption, reviews PPI), recognises neurological involvement mandating intensive IM loading, explains honestly why diet/tablets won\u2019t work, avoids the folate-alone pitfall, orders the right work-up and monitoring, and respects the needle-averse patient with informed acceptance.'
      },
      avoid: [
        { dont:'"Just eat more eggs, meat and dairy, or take a B12 tablet \u2014 that\u2019ll bring it up."', instead:'"If your body can\u2019t absorb it \u2014 which is likely here \u2014 eating or swallowing more won\u2019t get it in; an injection bypasses the gut."', why:'Diet/oral B12 cannot correct malabsorptive deficiency (e.g. pernicious anaemia).' },
        { dont:'"I\u2019ll start you on folic acid to fix the big red cells."', instead:'"I won\u2019t give folate alone first \u2014 in B12 deficiency that can worsen the nerve problem; we correct B12 properly first."', why:'Folate alone in B12 deficiency can precipitate/worsen subacute combined degeneration.' },
        { dont:'(Ignoring neuro) "We\u2019ll do the standard loading and a top-up every 2 to 3 months."', instead:'"Because you\u2019ve got nerve symptoms, you need intensive loading \u2014 injections on alternate days until no further improvement \u2014 then maintenance."', why:'Neurological involvement requires intensive loading; standard dosing undertreats and risks irreversible damage.' }
      ]
    }

  });

})();
