/* ============================================================
   Reasoning GP — Case Library batch 35: "The abnormal blood result, interpreted"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   Result-interpretation skill: NAFLD, non-specific inflammatory
   markers, isolated macrocytosis, very high cholesterol / FH.
   No NG12 link forced (raised markers prompt a structured search).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases34.js.
   ============================================================ */

(function(){

  /* ============ 133. VIDEO — Incidental raised ALT: NAFLD, not just "a liver wobble" ============ */
  const c133 = {
    id:'nafld-result', title:'"My liver test was up \u2014 but I barely drink, so it can\u2019t be my liver"', type:'video', duration:12,
    meta:{ age:49, sex:'M', setting:'Video consultation \u2014 incidental mildly raised ALT.', system:'GI / Non-alcoholic fatty liver disease', checked:'October 2026' },
    brief:'Mr Gary Hollis, 49, accountant. Bloods for tiredness show a MILDLY raised ALT (~80), confirmed on repeat; bilirubin/ALP normal, INR normal. Non-drinker (a few units/week). BMI 33, central obesity, BP 142/90, HbA1c 44 (pre-diabetes range), raised triglycerides. Viral hepatitis screen negative, ferritin/autoimmune screen unremarkable. This is almost certainly NAFLD/MAFLD (metabolic fatty liver). He is fixated that "barely drinking" means it can\u2019t be his liver, and wants reassurance it\u2019s "nothing".',
    script:{
      "opening": "\"Thanks doctor. So my liver blood test came back a bit high, which baffled me — I barely touch alcohol, maybe a couple of beers at the weekend. So surely it can't be a liver thing? I figured it's just one of those blips, or maybe a paracetamol I took. Can you just reassure me it's nothing and we move on? I haven't got a drink problem, if that's what you're thinking.\"",
      "facts": [
        {
          "topic": "Why you had the bloods",
          "text": "If asked: tired for a few months; the nurse did bloods twice and the liver test was up both times."
        },
        {
          "topic": "Alcohol (if asked)",
          "text": "\"Two bottles of beer on a Saturday, that's it\" — about 4 units a week. Never more. No morning drinking."
        },
        {
          "topic": "Symptoms (if asked)",
          "text": "Tired. No yellowing, no itching, no tummy swelling, no vomiting blood, no black stools. Snores; wife says you sometimes stop breathing."
        },
        {
          "topic": "Lifestyle (if asked)",
          "text": "Desk job, long hours, takeaways three or four times a week, sugary drinks, no exercise since your knee went. Weight has crept up \"about three stone in ten years\"."
        },
        {
          "topic": "Medicines",
          "text": "None regularly. Paracetamol occasionally — \"two tablets, once or twice a month\". No supplements or herbal remedies. No allergies."
        },
        {
          "topic": "Family (if asked)",
          "text": "Dad had type 2 diabetes and a heart attack at 58."
        },
        {
          "topic": "Social",
          "text": "49, accountant, married with two teenagers. Never smoked. No drug use, no tattoos."
        },
        {
          "topic": "Hidden worry — hold back",
          "text": "Your dad's heart attack: \"I'm nine years off his age.\" You have also felt judged about your weight before by a doctor and are braced for a lecture. Say these only if asked what worries you or about your family."
        },
        {
          "topic": "How to play it",
          "text": "Defensive at first, keen to close it down. If the doctor implies you drink, bristle: \"I told you, I barely drink.\" If they explain it is a fatty liver linked to weight, sugar and blood pressure — not drink — you are surprised and become engaged: \"So what do I actually need to do?\" Respond badly to a lecture, well to a practical, respectful plan."
        }
      ],
      "ice": {
        "ideas": "\"It's a blip — or the odd paracetamol. It can't be my liver if I barely drink.\"",
        "concerns": "Being judged. Underneath (only if asked): your dad's heart attack.",
        "expectations": "\"Reassure me it's nothing and we move on.\" You will engage with a plan if it is explained without blame."
      },
      "cues": [
        "\"I haven't got a drink problem, if that's what you're thinking.\" — say in the opening.",
        "\"My dad had diabetes too.\" — say if family history or sugar is mentioned.",
        "\"I know, I know — the weight.\" — say defensively when lifestyle comes up."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Corrects the misconception and explains NAFLD: a mildly raised ALT with central obesity, pre-diabetes and raised triglycerides (and a negative viral/autoimmune/iron screen, minimal alcohol) is non-alcoholic fatty liver disease \u2014 metabolic, NOT alcohol \u2014 so "I barely drink" does not exclude a liver cause' },
      { dom:'dg', text:'Assesses FIBROSIS RISK rather than just re-checking the ALT or reassuring: calculates a non-invasive fibrosis score (e.g. FIB-4, BSG/BASL 2018) and/or arranges an ELF test per NICE NG49 (advanced fibrosis if 10.51 or above) and a liver ultrasound \u2014 recognising that the ALT level does NOT reflect fibrosis severity' },
      { dom:'cm', text:'Manages the WHOLE metabolic/CVD picture: weight/lifestyle (the key treatment \u2014 even modest weight loss reduces liver fat), blood pressure (142/90), the pre-diabetes (HbA1c 44), lipids/triglycerides and overall cardiovascular risk \u2014 recognising NAFLD as a metabolic-syndrome/CVD-risk marker' },
      { dom:'dg', text:'Excludes the other causes appropriately (already largely done: viral hepatitis, autoimmune, haemochromatosis/iron, drugs) and confirms alcohol intake honestly, without making it the focus' },
      { dom:'ro', text:'Frames management POSITIVELY and hopefully: NAFLD is common and largely reversible with the same changes that improve weight, BP, sugar and heart risk \u2014 a fixable warning, not a verdict \u2014 and refers to hepatology if significant fibrosis is found' },
      { dom:'ro',   text:'Hears the defensiveness and the avoidance, reframes without blame or a "drink problem" implication, and engages him in the metabolic conversation rather than colluding with "it\u2019s nothing"' },
      { dom:'ro',   text:'Addresses the fear that "liver" means something sinister with honest, proportionate reassurance balanced against the need to assess fibrosis' },
      { dom:'cm',    text:'Safety-nets and follows up: the fibrosis assessment (FIB-4/ELF/ultrasound) and re-check plan, weight/BP/glucose/lipid management and review, hepatology referral if fibrosis, and a follow-up that treats the metabolic picture \u2014 not a one-off reassurance' },
    ],
    worked:[
      { lbl:'Correct the misconception', txt:'"I can see why a raised liver test is baffling when you barely drink \u2014 but here\u2019s the key thing: alcohol is only ONE cause. By far the commonest reason for exactly your pattern is fat in the liver driven by your metabolism \u2014 we call it non-alcoholic fatty liver. So \u2018I barely drink\u2019 doesn\u2019t rule out a liver cause; it actually points us to this one. And I\u2019m genuinely not sitting here thinking you\u2019ve got a drink problem."' },
      { lbl:'Join the dots',        txt:'"Look at the bigger picture from your bloods: your weight\u2019s carrying some around the middle, your blood pressure\u2019s up a bit, your sugar\u2019s in the pre-diabetes range, your triglycerides are high. Those all travel together \u2014 it\u2019s called metabolic syndrome \u2014 and the liver is just showing it on a blood test. The liver is the messenger."' },
      { lbl:'Assess properly, not just recheck', txt:'"Now, rather than just re-checking the number and hoping, I want to do this properly: a simple calculation and a specific blood test to estimate whether there\u2019s any scarring in the liver, and an ultrasound scan. Importantly, the liver NUMBER doesn\u2019t tell us how much scarring there is \u2014 so we check that directly rather than guess."' },
      { lbl:'The hopeful reframe',  txt:'"Here\u2019s the good news, and it\u2019s real: this is common, it\u2019s a warning rather than a disaster, and it\u2019s largely reversible \u2014 with the SAME changes. Losing even a bit of weight melts fat out of the liver, brings your sugar and blood pressure down, and cuts your heart risk, all at once. You\u2019d be treating five things with one plan."' },
      { lbl:'No blame, real plan',  txt:'"This isn\u2019t about blame \u2014 it\u2019s a really useful early heads-up. Let\u2019s make a realistic plan: some weight loss, sort the blood pressure and keep an eye on the sugar, look at the cholesterol. I\u2019ll help, not lecture. Done together, your liver test usually improves and so does everything else."' },
      { lbl:'Safety-net + follow-up', txt:'"So: I\u2019ll do the scarring assessment and the scan, sort the metabolic side, and we\u2019ll recheck. If the scarring test flagged anything, I\u2019d involve the liver specialists \u2014 but most people at your stage do really well. Let\u2019s book a proper follow-up. You came in wanting me to say it\u2019s nothing; what it actually is, is a fixable warning that\u2019s worth acting on."' },
    ],
    learning:"A mildly raised ALT (hepatocellular pattern) with central obesity, pre-diabetes and raised triglycerides, minimal alcohol and a negative viral/autoimmune/iron screen is non-alcoholic fatty liver disease (NAFLD/MAFLD) — metabolic, not alcohol — so \"I barely drink so it can’t be my liver\" is the misconception to correct. The examinable clinical point is to assess FIBROSIS RISK (FIB-4 score per BSG/BASL 2018, ELF test per NICE NG49 with 10.51 or above indicating advanced fibrosis, ultrasound) rather than merely re-checking the ALT or reassuring — because the ALT level does NOT reflect fibrosis severity (advanced fibrosis can occur with near-normal ALT). NAFLD is a metabolic-syndrome and cardiovascular-risk marker, so manage the WHOLE picture (weight/lifestyle as the key, largely-reversible treatment, plus BP, glucose, lipids, CVD risk), refer to hepatology if significant fibrosis. The hidden agenda is defensiveness masking avoidance of the weight/lifestyle conversation and a fear of being judged or that \"liver\" means something sinister; reframe without blame (\"a fixable warning, treating five things with one plan\"), give honest proportionate reassurance balanced with proper fibrosis assessment, and follow up. NAFLD is common and often benign, but a subset progress to non-alcoholic steatohepatitis (NASH), fibrosis and cirrhosis. The key is to assess FIBROSIS RISK (e.g. a FIB-4 score (BSG/BASL 2018), or an enhanced liver fibrosis/ELF test per NICE NG49, where ELF 10.51 or above indicates advanced fibrosis) rather than just reassure or re-check the ALT — and crucially, the ALT level does NOT reflect fibrosis severity (you can have advanced fibrosis with near-normal ALT).",
    knowledge:{
      guideline:'NICE NG49 (MASLD, formerly NAFLD; updated July 2026; metabolic dysfunction-associated steatotic liver disease) — ELF test · BSG/BASL guideline on the management of abnormal liver blood tests (Newsome et al., 2018) — FIB-4 · NICE PH38 Type 2 diabetes: prevention in people at high risk (2012) · NICE NG136 Hypertension in adults (2019) · NICE NG238 Cardiovascular disease: risk assessment and reduction (2023) · NICE NG246 Overweight and obesity management (2025) · metabolic syndrome',
      points:[
        { h:'Recognise NAFLD', t:'NAFLD/MAFLD is the commonest cause of abnormal LFTs \u2014 a mildly raised ALT (hepatocellular pattern), often incidental, in someone with features of metabolic syndrome (central obesity, type 2 diabetes/pre-diabetes, hypertension, dyslipidaemia) and minimal alcohol. Confirm by excluding other causes (viral hepatitis B/C, autoimmune, haemochromatosis, drugs, alcohol) \u2014 a "non-invasive liver screen".' },
        { h:'ALT does not equal fibrosis', t:'The degree of ALT elevation does NOT reflect the degree of liver fibrosis \u2014 significant fibrosis/cirrhosis can occur with normal or near-normal ALT. Do not reassure (or simply re-check the ALT) without assessing fibrosis risk.' },
        { h:'Assess fibrosis risk', t:'Use non-invasive fibrosis assessment: FIB-4 score (age, ALT, AST, platelets) as a first step (BSG/BASL 2018; above 3.25 indicates likely advanced fibrosis), and the ELF (Enhanced Liver Fibrosis) test per NICE NG49 to identify advanced fibrosis; liver ultrasound confirms steatosis but cannot stage fibrosis. NICE NG49: an ELF score of 10.51 or above indicates advanced fibrosis — refer to hepatology for further assessment (e.g. transient elastography); below 10.51, retest adults every 3 years.' },
        { h:'Manage the metabolic syndrome', t:'Lifestyle/weight loss is the cornerstone — weight loss through diet and activity reduces hepatic fat and improves the other risk factors together (international EASL guidance cites ~7–10% weight loss for improvement in steatohepatitis; there is no UK figure); use NICE NG246 (2025) for a structured, non-judgemental weight conversation. Optimise pre-diabetes (HbA1c 42–47: intensive lifestyle programme and at least yearly recheck, NICE PH38), blood pressure (confirm clinic BP ≥140/90 with ambulatory or home monitoring, NICE NG136), and lipids (QRISK3; NICE NG238 advises not routinely excluding people from statins because transaminases are raised but less than 3 times the upper limit of normal); address overall cardiovascular risk (the leading cause of death in NAFLD). Managing the metabolic syndrome treats the liver and the heart together.' },
        { h:'Largely reversible \u2014 frame positively', t:'NAFLD is common and, at the fatty-liver stage, largely reversible with metabolic improvement. Frame it as a fixable early warning that one plan addresses multiple risks \u2014 motivating rather than blaming.' },
        { h:'Correct the alcohol misconception', t:'"I barely drink so it can\u2019t be my liver" is a common, mistaken belief. Explain that metabolic fatty liver is distinct from alcohol-related liver disease; confirm alcohol intake honestly without making it the focus or implying a drink problem.' },
        { h:'Never do', t:'Never reassure a raised ALT away as "a blip" or just re-check it without a fibrosis assessment; never assume normal/near-normal ALT excludes fibrosis; never treat it as a liver-only issue and miss the metabolic/CVD risk; never frame it with blame; never miss the advanced-fibrosis referral threshold.' },
        { h:'Safety-net & follow-up', t:'Fibrosis assessment (FIB-4/ELF/ultrasound) and re-check plan; weight/BP/glucose/lipid management and review; hepatology referral if advanced fibrosis; positive, blame-free follow-up that treats the metabolic picture.' }
      ]
    }
  };

  /* ============ 134. VIDEO — Raised inflammatory markers: the non-specific result + the can't-miss ============ */
  const c134 = {
    "id": "raised-inflammatory-markers",
    "title": "“Every time we cut the steroids the stiffness comes straight back — I want to go back to the dose that worked”",
    "type": "video",
    "duration": 12,
    "meta": {
      "age": 72,
      "sex": "F",
      "setting": "Video consultation — review of a long-term condition, with recent blood tests.",
      "system": "Rheumatology / Prescribing — polymyalgia rheumatica relapsing during steroid taper: safe dose adjustment, GCA screen, steroid harms, bone protection, adrenal safety and referral",
      "checked": "October 2026"
    },
    "brief": "Margaret Doyle, 72, retired librarian, was diagnosed with polymyalgia rheumatica 10 months ago and responded well to prednisolone. The plan reduced the dose stepwise; each time it has gone below 7.5 mg her shoulder and hip girdle pain and morning stiffness have returned within two weeks. Bloods this week: CRP 28 mg/L (was 4 three months ago), ESR 40, HbA1c 47 mmol/mol (41 a year ago); nurse BP 152/88. She wants to “go back to 15 mg, which worked”. Only if asked exactly how she is taking her tablets: ten days ago she increased herself back to 15 mg using an old box, and she stopped the weekly alendronate three months ago because of heartburn, without telling anyone. She has no steroid emergency card. On direct questioning there are no new headaches, scalp tenderness, jaw claudication or visual symptoms, no fever or weight loss, no peripheral joint swelling. She has gained 6 kg, bruises easily, sleeps badly and feels “puffy”. She minds for her two grandchildren after school three days a week and is frightened of becoming disabled. The task: confirm a PMR relapse and screen for GCA and alternative diagnoses; explain why returning to 15 mg is not the answer (BSR 2024 advises returning to the previous dose at which she was well, then tapering more slowly); agree a safe dose plan from her current self-adjusted dose; review steroid harms (glucose, BP, weight, skin, mood, sleep) and bone health (restart bone protection or an alternative, FRAX/DXA as appropriate); issue a steroid emergency card and sick-day advice; offer vaccinations; and refer to rheumatology for relapsing PMR and steroid-sparing treatment.",
    "script": {
      "opening": "“Every time we cut the steroids, the stiffness comes straight back. I can barely get out of bed. I want to go back to 15 milligrams, that worked, and just stay on it.”",
      "facts": [
        {
          "topic": "The relapses",
          "text": "Twice now: each time the dose went below 7.5 mg, the aching and stiffness in her shoulders, upper arms, hips and thighs returned within two weeks, with morning stiffness over an hour. Like the original illness."
        },
        {
          "topic": "Only if asked exactly how she is taking her tablets",
          "text": "Ten days ago she went back up to 15 mg herself using an old box from the start of treatment. Feels much better already. Stopped the weekly alendronate three months ago because of heartburn; did not tell anyone. Still taking lansoprazole."
        },
        {
          "topic": "GCA screen (if asked)",
          "text": "No new headache, no scalp tenderness when brushing her hair, no jaw pain on chewing, no visual blurring, double vision or loss. No fever, sweats or weight loss."
        },
        {
          "topic": "Other features (if asked)",
          "text": "No swollen small joints in her hands or feet. No back pain at night. No cough. Weight up 6 kg since starting steroids. Bruises easily, thin skin, sleeps badly, feels “puffy” and a bit irritable. No fractures or falls."
        },
        {
          "topic": "Steroid safety (if asked)",
          "text": "No steroid emergency card. Did not know she shouldn’t stop suddenly. Had flu and pneumonia vaccines last year; no shingles vaccine."
        },
        {
          "topic": "Life",
          "text": "Widowed. Collects her grandchildren from school three days a week. “If I can’t do that, my daughter can’t work.”"
        },
        {
          "topic": "How to play it",
          "text": "Determined about 15 mg. A bit sheepish when asked how she is actually taking the tablets. Accepts a plan if her symptoms are taken seriously, she understands the harms of high doses, and she is referred to a specialist."
        }
      ],
      "ice": {
        "ideas": "“The higher dose is the only thing that works, so I should stay on it.”",
        "concerns": "HIDDEN AGENDA: she has already self-increased to 15 mg and stopped her bone tablets, and feels guilty; frightened of becoming disabled and unable to help her daughter with the grandchildren.",
        "expectations": "“Prescribe 15 mg and leave it there.”"
      },
      "cues": [
        "Relapse each time below 7.5 mg — the dose at which she was last well matters.",
        "“That worked” — she may already be taking it; ask exactly how she takes her tablets.",
        "Weight gain, bruising, HbA1c and BP rising — cumulative steroid harm.",
        "Grandchildren — function and what matters to her."
      ]
    },
    "checkpoints": [
      {
        "dom": "dg",
        "text": "Confirms the pattern of PMR relapse (girdle pain and stiffness returning as the dose falls) and interprets the raised CRP and ESR in that context"
      },
      {
        "dom": "dg",
        "text": "Screens for giant cell arteritis (headache, scalp tenderness, jaw claudication, visual symptoms) and for alternative diagnoses (peripheral synovitis suggesting rheumatoid arthritis, infection, malignancy, weight loss)"
      },
      {
        "dom": "dg",
        "text": "Asks exactly how she is taking the medicines and identifies the self-increase to 15 mg and the stopped alendronate"
      },
      {
        "dom": "cm",
        "text": "Agrees a safe dose plan in line with BSR 2024: return to the dose at which she was last symptom-free rather than 15 mg, step down from her current dose without stopping abruptly, then taper more slowly (check the SPC/local formulary)"
      },
      {
        "dom": "cm",
        "text": "Reviews steroid harms: confirms the raised HbA1c and BP and plans follow-up, discusses weight, skin, sleep and mood"
      },
      {
        "dom": "cm",
        "text": "Addresses bone health: explains why bone protection matters on long-term glucocorticoids, manages the heartburn and restarts or changes treatment (for example taking alendronate correctly, or an alternative), with DXA as appropriate"
      },
      {
        "dom": "cm",
        "text": "Issues an NHS steroid emergency card and explains sick-day rules and never stopping suddenly; offers shingles vaccination as appropriate"
      },
      {
        "dom": "cm",
        "text": "Refers to rheumatology for relapsing PMR and consideration of steroid-sparing treatment, and safety-nets for GCA symptoms (same-day) and adrenal crisis"
      }
    ],
    "worked": [
      {
        "lbl": "Ask without blame",
        "txt": "“Lots of people adjust their tablets when they feel bad. Can you tell me exactly how you’ve been taking them this last week or two?”"
      },
      {
        "lbl": "GCA screen",
        "txt": "“Any new headache, tenderness on your scalp when you brush your hair, pain in your jaw when you chew, or any change in your eyesight?”"
      },
      {
        "lbl": "Why not 15 mg",
        "txt": "“15 mg worked, but it was the dose to switch the illness off. The guidance is to go back to the dose where you were last well, around 10, then come down more slowly. That controls it with fewer side effects.”"
      },
      {
        "lbl": "Name the harms",
        "txt": "“The steroids are pushing your sugar and blood pressure up and thinning your skin and bones. That’s why we want the lowest dose that controls it, and why the bone tablets matter.”"
      },
      {
        "lbl": "Card and safety",
        "txt": "“Because you’ve been on steroids a long time, your body relies on them. Never stop them suddenly, and carry this steroid card so anyone treating you in an emergency knows.”"
      },
      {
        "lbl": "Specialist help",
        "txt": "“When PMR keeps coming back as we reduce the steroid, the guidance is to involve the rheumatologists. There are other medicines that can help you need less steroid.”"
      }
    ],
    "learning": "Relapse during glucocorticoid tapering is common in polymyalgia rheumatica. A relapse is the return of PMR symptoms, usually with rising inflammatory markers; raised markers alone without symptoms are not a relapse. The BSR 2024 guideline advises, for a relapse, returning to the previous dose at which the person was well (rather than restarting the initial dose), then tapering more slowly, and referring to specialist care for relapsing disease, inability to taper, or prolonged steroid need, where steroid-sparing treatment (such as methotrexate, or a biologic in some cases) can be considered. Every relapse should prompt a GCA screen (new headache, scalp tenderness, jaw claudication, visual symptoms need same-day assessment) and reconsideration of alternative diagnoses (late-onset rheumatoid arthritis, infection, malignancy). Ask exactly how the person is taking their tablets: self-adjustment is common. Long-term glucocorticoids cause weight gain, hyperglycaemia, hypertension, skin thinning, sleep and mood disturbance, cataract and osteoporosis. Bone protection is recommended for most older people expected to take glucocorticoids for 3 months or more (NOGG guidance); if alendronate causes heartburn, check it is taken correctly and consider alternatives, and assess fracture risk. The National Patient Safety Alert on steroid emergency cards (2020) requires people at risk of adrenal insufficiency, including those on prednisolone 5 mg or more for 4 weeks or longer, to be given an NHS steroid emergency card and sick-day advice; steroids must never be stopped abruptly. Offer recommended vaccinations, including shingles vaccination (non-live) for eligible people. The communication task is respecting her lived experience of relapse and her caring role while negotiating a safer dose plan.",
    "knowledge": {
      "guideline": "[1] British Society for Rheumatology guideline on the diagnosis and management of polymyalgia rheumatica (2024) · [2] NICE CKS Polymyalgia rheumatica (check current version) · [3] National Patient Safety Alert: Steroid emergency card to support early recognition and treatment of adrenal crisis in adults (NatPSA/2020/005/NHSPS) and Society for Endocrinology guidance · [4] NOGG Clinical guideline for the prevention and treatment of osteoporosis (2021, updated 2022) · [5] UKHSA Green Book chapter 28a: Shingles · [6] Product SPCs for prednisolone and alendronic acid",
      "summary": "A woman with PMR relapsing whenever prednisolone falls below 7.5 mg, now with raised CRP and ESR, who has self-increased to 15 mg and stopped her alendronate, with rising HbA1c and BP. Screen for GCA and alternative diagnoses, agree a safer dose plan (previous effective dose, slower taper), address steroid harms and bone protection, give a steroid emergency card and sick-day rules, offer shingles vaccination, and refer to rheumatology for relapsing disease.",
      "points": [
        {
          "h": "What a relapse is",
          "t": "Return of PMR symptoms, usually with rising inflammatory markers. Raised markers alone are not a relapse [1]."
        },
        {
          "h": "Treating relapse",
          "t": "Return to the previous dose at which the person was well, then taper more slowly. Do not restart the initial high dose routinely [1]. Check the SPC/local formulary."
        },
        {
          "h": "When to refer",
          "t": "Relapsing disease, inability to taper, prolonged steroid requirement, atypical features or doubt about the diagnosis: rheumatology for steroid-sparing treatment [1,2]."
        },
        {
          "h": "GCA at every relapse",
          "t": "New headache, scalp tenderness, jaw claudication or visual symptoms need same-day assessment."
        },
        {
          "h": "Steroid harms",
          "t": "Hyperglycaemia, hypertension, weight gain, skin thinning, insomnia, mood change, cataract, osteoporosis. Monitor HbA1c and BP."
        },
        {
          "h": "Bone protection",
          "t": "Most older people expected to take glucocorticoids for 3 months or more should have bone protection; review intolerance, technique and alternatives; consider DXA [4]."
        },
        {
          "h": "Adrenal safety",
          "t": "Steroid emergency card for prednisolone 5 mg or more for 4 weeks or longer; sick-day rules; never stop abruptly [3]."
        },
        {
          "h": "Vaccination",
          "t": "Annual influenza, pneumococcal and shingles vaccination (non-live vaccine for eligible immunosuppressed people) [5]."
        }
      ]
    }
  };

  /* ============ 135. TELEPHONE — Isolated macrocytosis: the result that opens a hidden door ============ */
  const c135 = {
    id:'macrocytosis-result', title:'"My blood test said my cells are big \u2014 is that bad?"', type:'telephone', duration:12,
    meta:{ age:46, sex:'F', setting:'Telephone \u2014 incidental raised MCV.', system:'Haematology / Isolated macrocytosis', checked:'October 2026' },
    brief:'Mrs Lisa Brennan, 46. Bloods done for tiredness show a raised MCV (105) with normal Hb (i.e. macrocytosis without anaemia), normal white cells/platelets. She rings for the result, anxious it means "something with my blood/leukaemia". Common causes to work through: alcohol, B12/folate deficiency, hypothyroidism, drugs, liver disease, (and marrow causes). On gentle, non-judgemental exploration, her alcohol intake has crept up substantially since a recent bereavement/relationship stress \u2014 the likely cause, and the real consultation.',
    script:{
      "opening": "\"Hi, I'm ringing about my blood result — the receptionist said my red cells are 'large' or something? I immediately panicked and googled it and now I'm terrified it's leukaemia or something with my blood. I feel mostly okay, just tired. What does it mean that my cells are big? Should I be worried?\"",
      "facts": [
        {
          "topic": "Why you had the test",
          "text": "If asked: tired for about four months, sleeping badly."
        },
        {
          "topic": "Symptoms (if asked)",
          "text": "No bruising, no nosebleeds, no infections, no night sweats, no weight loss, no lumps. No pins and needles or numbness. No sore tongue. Bowels normal. Periods regular, not heavy."
        },
        {
          "topic": "Diet and medicines (if asked)",
          "text": "You eat meat and vegetables, \"not as well as I should lately\". No regular medicines, no supplements, no allergies."
        },
        {
          "topic": "Thyroid (if asked)",
          "text": "No feeling cold, no weight gain, no dry skin that you have noticed."
        },
        {
          "topic": "Alcohol — only if asked in an open, non-judgemental way",
          "text": "At first: \"Just a glass of wine in the evening.\" If the doctor asks gently about how much exactly, or says many people drink more when going through a hard time: \"Honestly... it's a bottle most nights now. Sometimes a bit more at weekends.\" It has crept up over about six months. No morning drinking, no shakes. You know it is too much."
        },
        {
          "topic": "What happened six months ago — only if asked what changed",
          "text": "Your mum died suddenly in the spring, and two months later your husband moved out. \"I just sit on my own in the evenings and the wine helps me not think.\""
        },
        {
          "topic": "Mood (if asked)",
          "text": "Low, tearful, not enjoying much. Still working (receptionist at a dental practice). No thoughts of harming yourself. Your sister lives nearby and calls often."
        },
        {
          "topic": "Social",
          "text": "46, two teenage sons who live with you half the week. Non-smoker. Drives."
        },
        {
          "topic": "How to play it",
          "text": "Very anxious about leukaemia at first. Once the doctor explains that large red cells on their own are usually not a blood cancer and have common causes, you calm down. If alcohol is asked about in a judgemental way, under-report and become defensive. If asked kindly, tell the truth with some shame and become tearful talking about your mum. Respond well to support and a plan."
        }
      ],
      "ice": {
        "ideas": "\"Big cells means something wrong with my blood — maybe leukaemia.\"",
        "concerns": "Leukaemia. Underneath (only if trust is built): your drinking and how alone you feel since Mum died and your husband left.",
        "expectations": "\"Should I be worried?\" You want to know what happens next. You would welcome help once you feel safe to talk."
      },
      "cues": [
        "\"I'm terrified it's leukaemia.\" — say in the opening.",
        "\"I've not been sleeping well since... well, it's been a hard year.\" — say if asked about tiredness.",
        "\"The wine helps me not think.\" — say only if alcohol has been raised kindly."
      ]
    },
    checkpoints:[
      { dom:'ro', text:'Reassures accurately that isolated MACROCYTOSIS (raised MCV without anaemia, normal WCC/platelets) is usually NOT sinister and leukaemia is not the typical cause \u2014 it is a finding to work up, not a diagnosis \u2014 without dismissing it' },
      { dom:'cm', text:'Plans a STRUCTURED cause work-up: B12 and folate, TFTs, LFTs (including GGT), reticulocytes/blood film, and a medication review \u2014 covering the common causes (alcohol, B12/folate, hypothyroidism, drugs, liver disease)' },
      { dom:'dg', text:'Takes a NON-JUDGEMENTAL ALCOHOL history that creates space for honest disclosure (recognising alcohol as a very common cause of macrocytosis), and so uncovers the rising intake' },
      { dom:'dg', text:'Recognises and addresses the underlying DISTRESS: the recent bereavement/relationship stress driving the drinking \u2014 screening mood and offering support \u2014 treating the result as a door to a sensitive, important issue rather than just a number' },
      { dom:'cm', text:'Knows when to escalate/refer: unexplained macrocytosis, associated cytopenias, abnormal film, or progression warrant haematology/marrow consideration \u2014 distinguishing this from her likely benign, identifiable cause' },
      { dom:'ro',   text:'Reassures about the leukaemia fear genuinely, then gently opens the alcohol/lifestyle door without judgement, so she feels safe to disclose rather than shamed into hiding' },
      { dom:'ro',   text:'Responds with compassion to the bereavement/distress, framing the result as an opportunity for help, and engages her in addressing both the drinking and the grief' },
      { dom:'cm',    text:'Safety-nets and follows up: the cause work-up (B12/folate/TFTs/LFTs/film), alcohol-reduction support and mood support/bereavement help, recheck of the FBC/MCV, escalation criteria if unexplained, and a follow-up that treats the person, not just the result' },
    ],
    worked:[
      { lbl:'Reassure the big fear', txt:'"Let me take the scariest thought off the table first: large red cells, especially with the rest of your blood count completely normal and no anaemia, is almost never leukaemia. So please breathe. It\u2019s a finding we look into, not a diagnosis \u2014 and the common causes are all pretty ordinary and fixable."' },
      { lbl:'Name the common causes', txt:'"The usual reasons red cells run a bit large are things like low vitamin B12 or folate, an underactive thyroid, certain medications, the liver, or alcohol. So rather than worry, we just check through those with a few blood tests and sort whatever we find."' },
      { lbl:'Open the door gently', txt:'"Can I ask a few honest questions, no judgement at all \u2014 it just helps me find the cause? How are things with alcohol at the moment \u2014 has it crept up recently? \u2026 Thank you for being straight with me. That\u2019s really useful, and it\u2019s likely the explanation for the result \u2014 which is good, because it\u2019s very fixable."' },
      { lbl:'Reach the real issue', txt:'"It sounds like the drinking has gone up since you lost\u2026 \u2026 I\u2019m so sorry. That makes complete sense \u2014 a lot of people lean on a drink to get through grief, and it\u2019s nothing to be ashamed of. But your body\u2019s quietly showing the effect, which is actually a helpful early nudge. How have you been in yourself, with the grief and everything?"' },
      { lbl:'Make it an opportunity', txt:'"So this blood test, weirdly, might be a useful thing \u2014 it\u2019s flagged the drinking before it\u2019s caused harm, and it lets me help you with both the alcohol and how you\u2019re coping. We can cut the drinking back with support, and get you some help with the grief if you\u2019d like. The blood usually settles once the alcohol eases."' },
      { lbl:'Plan + safety-net',    txt:'"I\u2019ll do the full set of tests \u2014 B12, folate, thyroid, liver \u2014 to be thorough, and we\u2019ll recheck the count. If anything were unexplained or other parts of the blood changed, I\u2019d involve a specialist \u2014 but I don\u2019t expect that. Let\u2019s book a proper follow-up for the drinking and the grief. You rang terrified of leukaemia; what this really is, is a chance to look after you."' },
    ],
    learning:"Isolated macrocytosis (raised MCV without anaemia, normal white cells/platelets) is usually NOT sinister — leukaemia is not the typical cause — and is a finding to work up through its common causes: ALCOHOL (very common), B12/folate deficiency, hypothyroidism, drugs, and liver disease, with a structured panel (B12, folate, TFTs, LFTs/GGT, reticulocytes/film, medication review) and haematology/marrow referral reserved for unexplained, progressive or multi-lineage abnormalities. The examinable hidden agenda is that the likely cause — rising alcohol since a recent bereavement/relationship stress — is something the patient is ashamed of and has framed the call around a leukaemia fear partly to avoid; the result is a DOOR into a sensitive, important issue. Reassure genuinely about leukaemia, take a non-judgemental alcohol/lifestyle history that enables disclosure, and address the underlying distress (screen mood, offer bereavement and alcohol-reduction support) — treating the abnormal result as an opportunity to help, not just a number to recheck. Catching rising alcohol early (the macrocytosis is a useful biological flag) and addressing the bereavement/low mood is genuinely valuable — the abnormal result is an opportunity, not just a number to recheck. Done well, it opens help she might not otherwise have sought.",
    knowledge:{
      guideline:'Macrocytosis work-up is clinical practice (no dedicated guideline) · NICE NG239 Vitamin B12 deficiency in over 16s (2024) · NICE NG145 Thyroid disease (2019) · NICE PH24 Alcohol-use disorders: prevention (2010) · NICE CG115 Alcohol-use disorders: dependence (2011) · NICE CG100 Alcohol-use disorders: physical complications (2010) · UK CMO low-risk drinking guidelines (2016) · NICE NG222 Depression in adults (2022, updated December 2025) · bereavement & low mood',
      points:[
        { h:'Macrocytosis is a finding, not a diagnosis', t:'A raised MCV (macrocytosis), particularly without anaemia and with normal WCC/platelets, is usually benign and not due to leukaemia. Work up the cause with a structured approach rather than leaping to malignancy or simply rechecking.' },
        { h:'Common causes', t:'Alcohol (very common), B12 and folate deficiency, hypothyroidism, drugs (e.g. methotrexate, hydroxycarbamide, anticonvulsants, some antiretrovirals), liver disease, reticulocytosis (haemolysis/bleeding), pregnancy, and \u2014 less commonly \u2014 myelodysplasia/primary marrow disorders. A megaloblastic picture (B12/folate) vs non-megaloblastic (alcohol, liver, thyroid) is helpful.' },
        { h:'Structured work-up', t:'Check B12 and folate (NICE NG239 covers B12 testing and treatment), TFTs (NICE NG145), LFTs (including GGT), reticulocytes and a blood film; review the FBC trend and medications; take an honest alcohol history. Red cells live about 120 days, so the MCV takes a few months to settle after the cause is addressed. Most isolated macrocytosis has an identifiable, benign cause.' },
        { h:'When to refer haematology', t:'Refer/investigate further (including marrow) for: unexplained macrocytosis after the above work-up, associated cytopenias (low Hb/WCC/platelets), an abnormal blood film (e.g. dysplastic features), or progressive change \u2014 where myelodysplasia or another primary marrow disorder is a concern.' },
        { h:'Alcohol \u2014 the door to open', t:'Alcohol is a leading cause of macrocytosis and is frequently underdisclosed. Take a non-judgemental alcohol history; the result is a valuable, early biological flag. Explore the drivers (bereavement, stress, low mood) and offer support — brief intervention, alcohol services, and mood/bereavement help as appropriate. NICE PH24: screen with AUDIT-C (full AUDIT if positive) and give structured brief advice; UK CMO: no more than 14 units a week, spread over 3 or more days. Assess dependence and withdrawal risk (NICE CG115); if dependent, advise against stopping suddenly and arrange assisted withdrawal (NICE CG100). Treat low mood per NICE NG222.' },
        { h:'Treat the result as an opportunity', t:'An abnormal incidental result can open a conversation about a hidden, treatable problem the patient might not otherwise raise. Reassure about the feared diagnosis, then use the opening to address the real issue compassionately.' },
        { h:'Never do', t:'Never alarm the patient toward leukaemia for isolated macrocytosis; never just label "macrocytosis, recheck" without working up the cause; never skip a non-judgemental alcohol history; never miss the underlying distress/mood; never overlook escalation criteria (cytopenias, abnormal film, unexplained/progressive).' },
        { h:'Safety-net & follow-up', t:'Cause work-up (B12/folate/TFTs/LFTs/film) and FBC recheck; alcohol-reduction and mood/bereavement support; haematology referral if unexplained/cytopenias/abnormal film; a follow-up that treats the person behind the result.' }
      ]
    }
  };

  /* ============ 136. VIDEO — Cholesterol 9.2: spotting familial hypercholesterolaemia ============ */
  const c136 = {
    id:'familial-hypercholesterolaemia', title:'"My cholesterol\u2019s really high \u2014 but I\u2019m fit and slim, it must be a mistake"', type:'video', duration:12,
    meta:{ age:38, sex:'M', setting:'Video consultation \u2014 a very high cholesterol result.', system:'Cardiovascular / Familial hypercholesterolaemia', checked:'October 2026' },
    brief:'Mr Daniel Okonkwo, 38, runs marathons, slim (BMI 23), eats well, non-smoker. A routine cholesterol is strikingly high: total 9.2, LDL 6.8 (confirmed on repeat, fasting). He is baffled and wants to "fix it with diet" / thinks it\u2019s an error. KEY clues if asked: his FATHER had a heart attack at 44 and a paternal uncle died suddenly young; he may have tendon xanthomata (thickened Achilles)/corneal arcus. This is likely FAMILIAL HYPERCHOLESTEROLAEMIA \u2014 genetic, needs statin + family cascade testing, NOT just diet.',
    script:{
      "opening": "\"Doctor, I think there must be a mistake with my cholesterol result. It's really high apparently, but I run marathons, I'm slim, I eat really healthily, I don't smoke — it makes no sense. Can we just re-do it? Or I'll tighten up my diet even more and we recheck in a few months. There's no way someone as fit as me needs cholesterol tablets, surely?\"",
      "facts": [
        {
          "topic": "Why it was checked",
          "text": "If asked: a work health check six weeks ago; repeated fasting two weeks ago — \"the nurse said it was about the same\"."
        },
        {
          "topic": "Lifestyle",
          "text": "Run 40–50 miles a week, BMI 23, mostly home-cooked food, low in saturated fat. Never smoked. Two or three beers a week."
        },
        {
          "topic": "Symptoms (if asked)",
          "text": "No chest pain, no breathlessness beyond normal running effort, no palpitations, no fainting."
        },
        {
          "topic": "Family history — only if asked specifically about heart disease in the family",
          "text": "\"My dad had a heart attack at 44 — he survived, he's 70 now and on loads of tablets.\" His brother (your uncle) \"died suddenly in his forties — they said his heart\". Your paternal grandfather \"died young too, I think\". Your sister has never had her cholesterol checked."
        },
        {
          "topic": "Signs — only if asked to look",
          "text": "Your Achilles tendons feel \"a bit lumpy and thick\" — you assumed it was from running. If asked to look in the mirror: a pale grey ring around the edge of the coloured part of both eyes."
        },
        {
          "topic": "Medical history",
          "text": "No illnesses, no regular medicines, no allergies. Thyroid test normal at the health check. No kidney or liver problems."
        },
        {
          "topic": "Social",
          "text": "38, civil engineer. Married to Amara; two children, aged 6 and 9."
        },
        {
          "topic": "Hidden fear — hold back",
          "text": "You started running at 30 partly because of your dad's heart attack — \"I swore I wouldn't end up like him\". This result feels like a betrayal. Say this only if asked what the result means to you or about your dad."
        },
        {
          "topic": "How to play it",
          "text": "Confident and a little dismissive at first — you think it is a lab error. If the doctor implies lifestyle is to blame, get irritated: \"I'm healthier than most people you see!\" If they explain it may be inherited and that it explains your dad and uncle, go quiet, then ask: \"So my kids could have it too?\" Become motivated once treatment is framed as protecting you and your family."
        }
      ],
      "ice": {
        "ideas": "\"There's been a mistake — or I can fix it with diet.\"",
        "concerns": "Underneath (only if asked): \"I've done everything right so I don't end up like Dad.\"",
        "expectations": "\"Can we just re-do it?\" You will accept tablets if the genetic explanation makes sense to you."
      },
      "cues": [
        "\"I run marathons.\" — say in the opening.",
        "\"My dad had a heart attack — but he was older.\" — say if family history is asked, then correct yourself and give his age (44) when asked exactly.",
        "\"So my kids could have it too?\" — ask if inheritance is explained."
      ]
    },
    checkpoints:[
      { dom:'dg', text:'Recognises that a markedly elevated, confirmed LDL/total cholesterol in a young, fit, slim, healthy-eating non-smoker suggests FAMILIAL HYPERCHOLESTEROLAEMIA (genetic) \u2014 NOT a lifestyle problem or a lab error \u2014 and that "fixing it with diet" alone is insufficient' },
      { dom:'dg', text:'Elicits the PREMATURE CARDIOVASCULAR family history (father\u2019s MI at 44, young sudden death) and examines for FH clinical signs (tendon xanthomata, corneal arcus <45), applying FH criteria (Simon Broome/Dutch) in spirit' },
      { dom:'cm', text:'Starts appropriate TREATMENT: a STATIN (typically high-intensity) \u2014 explaining lifestyle alone won\u2019t control FH \u2014 and refers to a lipid clinic/specialist for confirmation, genetic testing and further management (e.g. ezetimibe/PCSK9 if needed)' },
      { dom:'cm', text:'Arranges FAMILY CASCADE testing: FH is autosomal dominant, so first-degree relatives (children, siblings, parents) should be offered testing \u2014 framing this as protecting the whole family' },
      { dom:'dg', text:'Assesses overall cardiovascular risk appropriately while recognising standard risk calculators (QRISK) UNDERESTIMATE risk in FH and should not be used to decide treatment in suspected FH \u2014 FH itself mandates treatment' },
      { dom:'ro',   text:'Validates his genuinely healthy lifestyle and reframes the result as GENETIC (not a personal failure or an error), addressing the identity-threat so he doesn\u2019t reject the diagnosis' },
      { dom:'ro',   text:'Surfaces and addresses the buried fear linked to his father\u2019s early heart attack, motivating treatment by framing it as protecting him from that fate rather than a slight on his fitness' },
      { dom:'cm',    text:'Safety-nets and follows up: statin started with monitoring, lipid-clinic/genetic referral, family cascade testing arranged, lifestyle optimised (as adjunct), and a follow-up that holds the diagnosis and the family implications \u2014 not "diet and recheck"' },
    ],
    worked:[
      { lbl:'Validate, then reframe', txt:'"First \u2014 everything you\u2019re doing is genuinely brilliant: the running, the diet, not smoking. So let me explain why your cholesterol is high DESPITE all that, because it\u2019s important: this almost certainly isn\u2019t a mistake, and it isn\u2019t something you\u2019ve done wrong. It looks like a GENETIC condition called familial hypercholesterolaemia, where the body can\u2019t clear cholesterol properly no matter how healthy you are."' },
      { lbl:'Why diet won\u2019t fix it', txt:'"That\u2019s the key thing: because it\u2019s in your genes, diet and exercise only nudge it a little \u2014 they can\u2019t fix it. You could eat perfectly and run every day and it would still be high. So this is one situation where, however fit you are, a tablet really is needed. It\u2019s not a failure of your lifestyle; it\u2019s your biology."' },
      { lbl:'The family clue',      txt:'"Can I ask about your family \u2014 any heart attacks or sudden deaths young? \u2026 Your dad at 44, and an uncle. That\u2019s really important and fits exactly: this condition runs in families and causes early heart problems. Knowing that actually makes the diagnosis clearer \u2014 and it\u2019s the key to protecting you."' },
      { lbl:'Reframe as protection',txt:'"Here\u2019s how I\u2019d like you to see this: untreated, this is what caused your dad\u2019s heart attack at 44. Treated \u2014 with a statin \u2014 we can bring your risk right down and very likely give you a completely different story from his. So the tablet isn\u2019t an insult to your fitness; it\u2019s the thing that lets your fitness actually pay off and protects you from his fate."' },
      { lbl:'Treat + refer + cascade', txt:'"So my plan: start you on a statin now, and refer you to a lipid specialist to confirm it, do a genetic test, and fine-tune treatment. And because it\u2019s inherited, your children, your brothers and sisters, and your parents should all be offered testing \u2014 by sorting yours, you protect them too."' },
      { lbl:'Safety-net + hold the fear', txt:'"We\u2019ll check the statin suits you and monitor things. I know a heart-risk label at 38, with your dad\u2019s history, is frightening \u2014 but you\u2019ve found this EARLY, which your dad never got the chance to. That\u2019s the opposite of his story. Let\u2019s book a proper follow-up. You came in thinking it was a mistake; what it actually is, is the most useful result you could have had."' },
    ],
    learning:'A markedly elevated, confirmed LDL/total cholesterol in a young, fit, slim, healthy-eating non-smoker is familial hypercholesterolaemia (FH) \u2014 a GENETIC condition, not a lifestyle problem or a lab error \u2014 so "I\u2019m fit so it must be wrong / I\u2019ll fix it with diet" is the misconception: diet and exercise help only modestly and FH needs a STATIN (usually high-intensity) plus lipid-clinic/genetic referral. The clinching clues are a premature-cardiovascular family history (father\u2019s MI at 44, young sudden death) and FH signs (tendon xanthomata, corneal arcus <45), per Simon Broome/Dutch criteria \u2014 and standard QRISK UNDERESTIMATES risk in FH and shouldn\u2019t be used to decide treatment. FH is autosomal dominant, so family CASCADE testing of first-degree relatives is a core part of the consultation. The examinable hidden agenda is identity-threat (fitness is core to him; a heart-risk label at 38 feels impossible) plus a buried fear from his father\u2019s early heart attack; validate his healthy lifestyle, reframe as genetic (not failure), surface and use the family history, and motivate treatment as protecting him from his father\u2019s fate \u2014 not "diet and recheck".',
    knowledge:{
      guideline:'NICE CG71 Familial hypercholesterolaemia: identification and management (2008, updated 2019) · NICE NG238 Cardiovascular disease: risk assessment and reduction, including lipid modification (2023; replaced CG181) · NICE QS41 Familial hypercholesterolaemia (2013) · Simon Broome / Dutch Lipid Clinic Network criteria · cascade testing',
      points:[
        { h:'Suspect FH', t:'Suspect familial hypercholesterolaemia with markedly raised cholesterol \u2014 e.g. total cholesterol >7.5 mmol/L or LDL >4.9 in an adult (higher thresholds raise suspicion further) \u2014 especially in a young person without lifestyle explanation. Confirm on a repeat (fasting) sample and exclude secondary causes (hypothyroidism, nephrotic, cholestasis, diabetes: check TSH, LFTs, renal function, urine protein and HbA1c) (NICE CG71). NICE NG238 also advises specialist assessment if total cholesterol is above 9.0 mmol/L or non-HDL above 7.5 mmol/L, even without a family history.' },
        { h:'Use diagnostic criteria', t:'Apply the Simon Broome or Dutch Lipid Clinic Network criteria (NICE CG71): LDL/total cholesterol level PLUS family history of premature coronary heart disease and/or clinical signs — tendon xanthomata (Achilles/knuckles), corneal arcus under 45 — and/or a causative mutation. The family-history ages differ: Simon Broome counts an MI in a first-degree relative under 60 or a second-degree relative under 50; the DLCN score counts premature CHD in a first-degree relative (men under 55, women under 60). His father’s MI at 44 meets both. Take a three-generation family history and examine for signs; a DLCN score above 5 should prompt referral to an FH specialist service for DNA testing (NICE CG71).' },
        { h:'Diet alone is insufficient', t:'FH is genetic \u2014 lifestyle measures help only modestly. High-intensity statins are first-line (NICE CG71: aim for at least a 50% reduction in LDL-C from baseline; drug and dose per BNF; NICE NG238: check transaminases before starting and lipids and transaminases at 2–3 months); ezetimibe and PCSK9 inhibitors (NICE TA394 / TA393) are added/used per specialist input. A fit, slim, healthy patient with FH still needs pharmacological treatment; do not defer for "diet and recheck".' },
        { h:'QRISK underestimates in FH', t:'Standard cardiovascular risk calculators (QRISK) are NOT valid in FH and underestimate risk (NICE CG71) \u2014 do not use them to decide whether to treat suspected FH. The diagnosis itself mandates lipid-lowering treatment and specialist referral.' },
        { h:'Cascade testing', t:'FH is autosomal dominant. Offer cascade testing (lipid ± genetic) to at least first- and second-degree relatives, and third-degree relatives if possible (NICE CG71; NICE QS41) to identify and treat affected family members early. Identifying the index case protects the whole family \u2014 a core part of management.' },
        { h:'Address identity-threat & family fear', t:'A heart-risk diagnosis in a fit young person threatens identity and is often rejected ("it must be wrong"). Validate the healthy lifestyle, reframe as genetic (not failure), and use a parent\u2019s premature event to motivate treatment as protection \u2014 the patient found it early, unlike the affected relative.' },
        { h:'Never do', t:'Never dismiss a markedly high cholesterol in a fit young person as an error or "fixable by diet"; never omit the premature-CVD family history or examination for FH signs; never use QRISK to withhold treatment in suspected FH; never forget cascade testing; never leave the identity-threat/family-fear unaddressed.' },
        { h:'Safety-net & follow-up', t:'Start a high-intensity statin with monitoring; refer to a lipid clinic for confirmation/genetic testing and intensification; arrange family cascade testing; optimise lifestyle as adjunct; follow up holding the diagnosis and family implications.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c133, c134, c135, c136);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'nafld-result': {
      ceg: ['Investigations & results', 'Long-term conditions & cancer'],
      stem: {
        name: 'Gary Hollis', age: '49 years · male',
        pmh: ['Mildly raised ALT (~80), confirmed; bilirubin/ALP/INR normal', 'BMI 33, central obesity, BP 142/90, HbA1c 44, raised triglycerides', 'Minimal alcohol; viral/autoimmune/iron screen negative'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Baffled ("I barely drink"); wants reassurance it\u2019s nothing; defensive about alcohol.',
        reason: 'Video consultation — incidental raised ALT.'
      },
      timeMap: [
        { t:'0–2',  h:'Correct the misconception', d:'Alcohol is only one cause — your pattern fits non-alcoholic fatty liver, driven by metabolism. "Barely drink" doesn\u2019t rule out the liver.' },
        { t:'2–4',  h:'Join the dots',        d:'Weight, BP, pre-diabetes, triglycerides travel together (metabolic syndrome); the liver is the messenger.' },
        { t:'4–6',  h:'Assess fibrosis',      d:'FIB-4 / ELF + ultrasound — not just re-checking ALT. The ALT level doesn\u2019t show scarring.' },
        { t:'6–9',  h:'Hopeful reframe',      d:'Common, largely reversible; weight loss melts liver fat and cuts BP/sugar/heart risk — five things, one plan. No blame.' },
        { t:'9–12', h:'Plan + safety-net',    d:'Metabolic management + recheck; hepatology if advanced fibrosis; positive follow-up that treats the whole picture.' }
      ],
      wordPics: {
        fail: 'Reassures the ALT away as "a blip", or just re-checks it, or chases only alcohol; never assesses fibrosis (assumes mild ALT = mild liver); misses the metabolic/CVD risk; frames it with blame or lets the patient close it down.',
        pass: 'Explains NAFLD, assesses fibrosis (FIB-4/ELF/ultrasound), manages the metabolic picture, and follows up without blame.',
        exc:  'Corrects the alcohol misconception and names NAFLD as metabolic; assesses fibrosis rather than re-checking ALT (knowing ALT \u2260 fibrosis); manages the whole metabolic/CVD picture; reframes it positively as a fixable warning treating five things with one plan; and follows up, referring if advanced fibrosis.'
      },
      avoid: [
        { dont:'"You barely drink, so it\u2019s probably just a blip — we\u2019ll recheck it in a few months."', instead:'"Alcohol is only one cause — your weight, sugar and triglycerides point to fatty liver from your metabolism. Let\u2019s assess it properly, including for any scarring, not just recheck the number."', why:'Dismissing a raised ALT as a blip and re-checking misses NAFLD and the need to assess fibrosis.' },
        { dont:'"Your liver number is only mildly up, so there\u2019s no real concern."', instead:'"The liver NUMBER doesn\u2019t tell us about scarring — you can have significant scarring with a near-normal level — so I want to check fibrosis directly with a score and a specific test."', why:'Assuming a mildly raised ALT means mild liver disease misses advanced fibrosis, which the ALT doesn\u2019t reflect.' },
        { dont:'"You\u2019ll need to cut down your drinking and lose weight." (blame tone)', instead:'"This isn\u2019t about blame — it\u2019s a useful early warning. Losing a bit of weight treats the liver, the blood pressure, the sugar and your heart risk all at once. I\u2019ll help, not lecture."', why:'A blaming framing (and assuming alcohol) makes the patient disengage from the real metabolic conversation.' }
      ]
    },

    'raised-inflammatory-markers': {
      "ceg": [
        "Long-term conditions & cancer",
        "Older adults",
        "Investigations & results"
      ],
      "stem": {
        "name": "Margaret Doyle",
        "age": "72 years · female",
        "pmh": [
          "Polymyalgia rheumatica (diagnosed 10 months ago)",
          "Hypertension"
        ],
        "meds": [
          "Prednisolone (reducing regimen)",
          "Alendronic acid weekly",
          "Lansoprazole",
          "Amlodipine"
        ],
        "allergy": "None recorded",
        "recent": "CRP 28 mg/L (4 three months ago); ESR 40. HbA1c 47 mmol/mol (41 a year ago). Nurse BP 152/88. Weight up 6 kg since diagnosis.",
        "reason": "PMR review: “The stiffness is back again.”"
      },
      "timeMap": [
        {
          "t": "0–1",
          "h": "Open",
          "d": "Hear the request; acknowledge frustration."
        },
        {
          "t": "1–5",
          "h": "History",
          "d": "Relapse pattern; GCA screen; alternative diagnoses; exactly how she takes her tablets."
        },
        {
          "t": "5–6",
          "h": "ICE",
          "d": "Fear of disability; grandchildren."
        },
        {
          "t": "6–11",
          "h": "Plan",
          "d": "Relapse explained; previous effective dose, slower taper; harms; rheumatology; bones; card; HbA1c, BP, shingles vaccine."
        },
        {
          "t": "11–12",
          "h": "Close",
          "d": "Teach-back; GCA safety-net; review in 4 weeks."
        }
      ],
      "wordPics": {
        "fail": "Prescribes 15 mg indefinitely, or insists on continuing the taper; never asks how she takes her tablets; misses the GCA screen, bone protection and the steroid card.",
        "pass": "Recognises relapse, screens for GCA, agrees a return to the previous effective dose with slower taper, and refers to rheumatology.",
        "exc": "All of the above, plus: uncovers the self-increase and stopped alendronate without blame; steps down safely from 15 mg; addresses HbA1c, BP, bone health and heartburn; steroid emergency card and sick-day rules; shingles vaccination; links the plan to her role with her grandchildren."
      },
      "avoid": [
        {
          "dont": "“Fine, back to 15 mg.”",
          "instead": "“Let’s go back to where you were last well, around 10, then reduce more slowly.”",
          "why": "BSR 2024 advises the previous effective dose; high doses add harm."
        },
        {
          "dont": "“You shouldn’t have changed the dose yourself.”",
          "instead": "“Thank you for telling me. Let’s make a safe plan from where you are now.”",
          "why": "Blame stops disclosure; the safety issue is the abrupt changes."
        },
        {
          "dont": "(No card or sick-day advice)",
          "instead": "“Carry this steroid card and never stop suddenly.”",
          "why": "Adrenal crisis is a preventable risk (2020 National Patient Safety Alert)."
        }
      ]
    },

    'macrocytosis-result': {
      ceg: ['Investigations & results', 'Mental health & addiction'],
      stem: {
        name: 'Lisa Brennan', age: '46 years · female',
        pmh: ['Raised MCV (105) with NORMAL Hb; normal WCC/platelets', 'Tiredness; otherwise well', 'Recent bereavement/relationship stress; alcohol crept up'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Panicked it\u2019s "leukaemia"; reluctant to discuss alcohol.',
        reason: 'Telephone — incidental raised MCV.'
      },
      timeMap: [
        { t:'0–2',  h:'Reassure the big fear', d:'Large cells with a normal count is almost never leukaemia. A finding to look into, not a diagnosis.' },
        { t:'2–4',  h:'Name common causes',   d:'B12/folate, thyroid, drugs, liver, alcohol — ordinary, fixable. Check with a few tests.' },
        { t:'4–6',  h:'Open the door gently', d:'Non-judgemental alcohol history — has it crept up? Lets her disclose; likely the cause (and fixable).' },
        { t:'6–9',  h:'Reach the real issue', d:'The bereavement/stress behind the drinking; screen mood; nothing to be ashamed of.' },
        { t:'9–12', h:'Opportunity + safety-net', d:'Full panel + FBC recheck; alcohol + grief support; escalate if unexplained/cytopenias/abnormal film. Treat the person.' }
      ],
      wordPics: {
        fail: 'Alarms her toward leukaemia, or just labels "macrocytosis, recheck" without working up the cause; never takes a non-judgemental alcohol history, so the rising drinking and the grief behind it stay hidden.',
        pass: 'Reassures about leukaemia, plans the cause work-up, takes an alcohol history, and addresses the distress with support.',
        exc:  'Genuinely reassures about the leukaemia fear, then opens a non-judgemental alcohol door that lets her disclose; reaches the bereavement/distress driving the drinking and screens mood; frames the result as an opportunity for help; and plans the work-up with escalation criteria — treating the person, not just the number.'
      },
      avoid: [
        { dont:'"Large cells can sometimes be a sign of a blood cancer, so we should be thorough."', instead:'"With your blood count otherwise normal, large cells is almost never leukaemia — it\u2019s usually something ordinary like B12, thyroid or alcohol. Let\u2019s find which."', why:'Amplifying a leukaemia fear for isolated macrocytosis is inaccurate and frightening.' },
        { dont:'"It\u2019s macrocytosis — I\u2019ll recheck it in a few months."', instead:'"Let\u2019s actually find the cause now — B12, folate, thyroid, liver — and have an honest, no-judgement chat about alcohol, which is a common reason."', why:'Labelling and re-checking without a cause work-up misses a treatable, often-hidden issue.' },
        { dont:'"Are you drinking too much?" (judgemental tone)', instead:'"No judgement at all — has alcohol crept up lately, maybe with everything you\u2019ve been through? It really helps me find the cause."', why:'A judgemental approach makes the patient conceal the drinking that is likely the cause and the real consultation.' }
      ]
    },

    'familial-hypercholesterolaemia': {
      ceg: ['Investigations & results', 'Long-term conditions & cancer'],
      stem: {
        name: 'Daniel Okonkwo', age: '38 years · male',
        pmh: ['Total cholesterol 9.2, LDL 6.8 (confirmed, fasting)', 'Marathon runner, BMI 23, healthy diet, non-smoker', 'Father MI at 44; paternal uncle sudden death young; ?tendon xanthomata/arcus'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Thinks it\u2019s a lab error / wants to fix it with diet; "someone as fit as me" can\u2019t need tablets.',
        reason: 'Video consultation — very high cholesterol.'
      },
      timeMap: [
        { t:'0–2',  h:'Validate, then reframe', d:'Your lifestyle\u2019s brilliant — and this is high DESPITE it because it\u2019s genetic (familial hypercholesterolaemia), not a mistake or a failure.' },
        { t:'2–4',  h:'Why diet won\u2019t fix it', d:'Genetic — diet/exercise only nudge it; FH needs a statin however fit you are. Not a lifestyle failure; your biology.' },
        { t:'4–6',  h:'The family clue',      d:'Father\u2019s MI at 44 + young sudden death + ?xanthomata/arcus — fits FH (Simon Broome/Dutch). Examine.' },
        { t:'6–8',  h:'Reframe as protection', d:'Untreated, this caused your dad\u2019s heart attack; treated, we change that story. The tablet lets your fitness pay off.' },
        { t:'8–12', h:'Treat + cascade + net', d:'Start a statin; lipid-clinic/genetic referral; family cascade testing (children/siblings/parents); QRISK invalid in FH; follow up.' }
      ],
      wordPics: {
        fail: 'Treats the result as a likely error or agrees to "fix it with diet and recheck"; never takes the premature-CVD family history or examines for FH signs; uses QRISK to withhold treatment; misses the FH diagnosis and the family cascade.',
        pass: 'Recognises likely FH, takes the family history and examines, starts a statin with lipid-clinic referral, and arranges cascade testing.',
        exc:  'Validates the healthy lifestyle and reframes the result as genetic FH (not error/failure); elicits the premature-CVD family history and examines for signs; starts a statin and refers for genetic confirmation; arranges family cascade testing; knows QRISK is invalid in FH; and motivates treatment by reframing it as protection from the father\u2019s fate, addressing the identity-threat.'
      },
      avoid: [
        { dont:'"That seems too high for someone so fit — let\u2019s repeat it and you tighten your diet."', instead:'"It\u2019s high DESPITE your great lifestyle because it\u2019s likely genetic — familial hypercholesterolaemia. Diet can\u2019t fix that; it needs a statin, however fit you are."', why:'Dismissing it as an error or diet-fixable misses FH, where lifestyle alone is insufficient.' },
        { dont:'"Your heart-risk score is low because you\u2019re young and fit, so we can hold off treating."', instead:'"Those risk scores don\u2019t work in this condition — they underestimate it. FH itself means you need treatment now, regardless of the score."', why:'Using QRISK to withhold treatment in suspected FH is a recognised, dangerous error.' },
        { dont:'"Don\u2019t worry about your dad\u2019s heart attack — that\u2019s a separate thing."', instead:'"Your dad\u2019s heart attack at 44 is actually the key clue and the reason this matters — untreated this is what caused it; treated, we give you a different story, and we should test your family too."', why:'Dismissing the family history discards the diagnostic clue, the motivation, and the cascade-testing duty.' }
      ]
    }
  });

})();
