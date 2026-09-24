/* ============================================================
   Reasoning GP — Case Library batch 65:
   "Distinct diagnoses that are often missed or mislabelled"
   (NEW themes from the Bassam SCA summary, verified absent)
   Trigeminal neuralgia (electric-shock facial pain \u2014 carbamazepine,
   red flags); premenstrual dysphoric disorder (cyclical, severe \u2014
   not "just PMS"); first-episode genital herpes (diagnosis,
   antivirals, the disclosure/psychological hit); and hyperemesis
   gravidarum (severe NVP \u2014 dehydration/ketones, admission, safe
   antiemetics). No NG12 cancer pathway genuinely applies; none
   invented.
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases64.js.
   ============================================================ */

(function(){

  /* ============ 232. F2F — Trigeminal neuralgia: electric-shock facial pain ============ */
  const c232 = {
    id:'trigeminal-neuralgia', title:'"I get sudden electric-shock pains in my face when I brush my teeth or feel a breeze \u2014 it\u2019s unbearable"', type:'video', duration:12,
    meta:{ age:58, sex:'F', setting:'Face-to-face \u2014 paroxysmal severe facial pain.', system:'Neurology \u2014 trigeminal neuralgia: recognition, carbamazepine & red flags' },
    brief:'Mrs Annette Boll, 58, describes recurrent PAROXYSMS of sudden, severe, STABBING/ELECTRIC-SHOCK pain in one side of the face (cheek/jaw \u2014 maxillary/mandibular trigeminal distribution), lasting seconds, TRIGGERED by light touch, chewing, brushing teeth, washing the face or a cold breeze, with pain-free intervals between attacks; she is exhausted and frightened to eat/talk. The examinable task is to recognise TRIGEMINAL NEURALGIA (paroxysmal, severe, unilateral, electric/stabbing pain in a trigeminal-nerve division, triggered by innocuous stimuli to "trigger zones", with refractory periods), distinguish it from dental pain (consider/exclude dental causes), cluster/migraine and other facial pain, and \u2014 critically \u2014 screen the RED FLAGS suggesting a SECONDARY cause (younger age, BILATERAL symptoms, sensory loss/numbness, other cranial-nerve or neurological signs, deafness, optic/MS features) that warrant neurology referral and MRI (e.g. MS, a compressive lesion). Treat first-line with CARBAMAZEPINE (titrated; counsel side-effects/monitoring \u2014 hyponatraemia, blood dyscrasia, rash incl. rare SJS, interactions, pregnancy caution), acknowledge the major impact on eating/quality of life/mood, and refer to neurology (for diagnosis confirmation, refractory cases, surgical options like microvascular decompression, and any red flags). The skill is pattern recognition, first-line carbamazepine, and the red-flag/secondary-cause screen. No NG12 cancer link.',
    script:{
      opening:'"Doctor, I keep getting these horrendous jolts of pain in the right side of my face \u2014 like an electric shock or a stabbing \u2014 they last only seconds but they\u2019re unbearable. They go off when I brush my teeth, chew, wash my face, or even a breeze hits me. I\u2019m scared to eat or talk now. In between I\u2019m fine. What is this?"',
      facts:[
        { topic:'Recognise trigeminal neuralgia', text:'CORE \u2014 PAROXYSMS of sudden, severe, UNILATERAL, STABBING/ELECTRIC-SHOCK facial pain lasting seconds, in a trigeminal-nerve division (commonly maxillary/mandibular \u2014 cheek/jaw), TRIGGERED by innocuous stimuli to "trigger zones" (light touch, chewing, tooth-brushing, washing the face, cold breeze, talking), with pain-free intervals/refractory periods, is the classic picture of TRIGEMINAL NEURALGIA. Her description is textbook.' },
        { topic:'Distinguish from other facial pain', text:'Distinguish from DENTAL pain (consider/exclude a dental cause \u2014 patients often see a dentist first; dental pain is usually continuous/throbbing, not triggered electric paroxysms), cluster headache (severe orbital pain with autonomic features, lasting longer), migraine, sinusitis, temporomandibular joint pain, and giant cell arteritis (older, jaw claudication, scalp tenderness). The brief, shock-like, touch-triggered paroxysms with refractory periods point to trigeminal neuralgia.' },
        { topic:'Screen RED FLAGS for a secondary cause', text:'CRITICAL \u2014 screen for features suggesting SECONDARY trigeminal neuralgia (an underlying lesion such as MS or a compressive tumour/vascular lesion), which warrant neurology referral and MRI: YOUNGER age (<40\u201350), BILATERAL symptoms, SENSORY LOSS/numbness in the face, other CRANIAL-NERVE or neurological signs, deafness, optic neuritis/other MS features, or atypical/continuous pain. Classic unilateral TN in an older patient with a normal neuro exam is usually primary \u2014 but the red-flag screen must be explicit.' },
        { topic:'First-line treatment: carbamazepine', text:'Treat first-line with CARBAMAZEPINE, titrated to effect \u2014 it is the established first-line drug for trigeminal neuralgia. Counsel side-effects and monitoring: dizziness/ataxia/sedation, HYPONATRAEMIA, blood dyscrasias (bone marrow suppression), LFT derangement, rash (including rare but serious SJS/TEN \u2014 stop and seek help for rash), many drug INTERACTIONS (enzyme inducer), and caution in pregnancy/contraception. Alternatives/add-ons (e.g. oxcarbazepine, lamotrigine, gabapentin, baclofen) are options if intolerant/refractory \u2014 often specialist-guided.' },
        { topic:'Acknowledge impact & refer', text:'Acknowledge the major QUALITY-OF-LIFE impact \u2014 fear of eating, talking, washing; weight loss; low mood/anxiety; exhaustion \u2014 and address it. Refer to NEUROLOGY for diagnostic confirmation, any RED FLAGS (with MRI), refractory pain, or consideration of procedures (e.g. microvascular decompression, ablative procedures). The condition is treatable, which is reassuring to convey.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 she is frightened, exhausted and may fear something sinister (or have been bounced from the dentist); she wants the pain explained and stopped. The skill is confident pattern recognition, first-line carbamazepine with proper counselling, the explicit red-flag/secondary-cause screen, acknowledgement of the life impact, and neurology referral \u2014 not mislabelling it dental pain or migraine. No NG12 cancer pathway applies.' },
      ],
      ice:{
        ideas:'Something is badly wrong with her face/teeth; she wants the cause and relief (possibly already seen a dentist).',
        concerns:'The unbearable pain; fear of eating/talking; fear of a sinister cause; exhaustion and low mood.',
        expectations:'An explanation and effective pain relief. What she needs: recognition of trigeminal neuralgia, first-line carbamazepine, a red-flag/secondary-cause screen, acknowledgement of impact, and neurology referral.'
      },
      cues:['Paroxysmal, unilateral, electric-shock/stabbing facial pain lasting seconds, triggered by touch/chewing/brushing/breeze, with pain-free intervals \u2014 trigeminal neuralgia.','First-line treatment is carbamazepine (titrate; counsel hyponatraemia/blood dyscrasia/rash/interactions/pregnancy).','Screen red flags for a secondary cause (young, bilateral, sensory loss, other neuro signs, MS features) \u2192 neurology + MRI.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises TRIGEMINAL NEURALGIA \u2014 paroxysmal, severe, unilateral, electric-shock/stabbing facial pain in a trigeminal division lasting seconds, triggered by innocuous stimuli to trigger zones, with pain-free/refractory intervals' },
      { dom:'tasks', text:'Distinguishes it from dental pain (considers/excludes a dental cause), cluster headache, migraine, TMJ pain and giant cell arteritis' },
      { dom:'tasks', text:'EXPLICITLY screens RED FLAGS for a SECONDARY cause (younger age, bilateral symptoms, facial sensory loss, other cranial-nerve/neurological signs, MS features) warranting neurology referral and MRI' },
      { dom:'tasks', text:'Treats first-line with CARBAMAZEPINE (titrated) and counsels side-effects/monitoring \u2014 hyponatraemia, blood dyscrasia, LFTs, rash (incl. rare SJS), interactions (enzyme inducer), pregnancy/contraception caution \u2014 with alternatives if intolerant/refractory' },
      { dom:'tasks', text:'Acknowledges and addresses the QUALITY-OF-LIFE impact (eating/talking/washing fear, weight loss, low mood) and refers to NEUROLOGY (confirmation, red flags, refractory pain, surgical options)' },
      { dom:'rto',   text:'Responds to her fear and exhaustion with empathy, conveys that the condition is recognised and treatable, and checks understanding of the medication plan' },
      { dom:'rto',   text:'Explains the diagnosis and reasoning clearly (why it is not dental pain/migraine) and the carbamazepine counselling without overwhelming her' },
      { dom:'gs',    text:'Safety-nets and follows up: rash/unwell on carbamazepine \u2192 stop and seek help, monitoring bloods (sodium/FBC/LFTs), review of response and titration, urgent review for red-flag/secondary features, and neurology referral \u2014 pattern recognition + first-line treatment + secondary-cause screen' },
    ],
    worked:[
      { lbl:'Name it confidently', txt:'"What you\u2019re describing \u2014 sudden electric-shock jolts in the face, set off by touch, chewing or a breeze, lasting seconds with normal periods in between \u2014 is a recognised condition called trigeminal neuralgia, a nerve pain in the face. It\u2019s not your teeth, even though it can feel like it, and it\u2019s treatable."' },
      { lbl:'Screen the red flags', txt:'"Let me check a few things to be thorough \u2014 is it ever both sides? Any numbness in your face, double vision, weakness, or other neurological symptoms? \u2026 No. And your facial sensation and nerves test normal. That\u2019s reassuring it\u2019s the common, primary type."' },
      { lbl:'Start carbamazepine', txt:'"The first-line treatment is a tablet called carbamazepine, which calms the nerve. We start low and build up. It works well for most people, so there\u2019s real hope of getting on top of this."' },
      { lbl:'Counsel the drug', txt:'"A few important things with it: it can cause dizziness, lower your blood sodium, and rarely affect the blood count or liver, so I\u2019ll do some monitoring bloods. If you get any rash or feel unwell, stop it and contact us urgently. It also interacts with other medicines, and we\u2019d need care around pregnancy/contraception."' },
      { lbl:'Acknowledge the impact', txt:'"This is exhausting and frightening \u2014 being scared to eat or talk is a big deal, and it can really get you down. We\u2019ll treat the pain, and tell me how you\u2019re coping in yourself too."' },
      { lbl:'Refer + safety-net', txt:'"I\u2019ll refer you to neurology to confirm things and discuss options if the tablets don\u2019t fully control it \u2014 including procedures that can help. Come back if it\u2019s not improving, if you get a rash or feel unwell on the tablet, or if any numbness or new symptoms appear."' },
    ],
    learning:'PAROXYSMS of sudden, severe, UNILATERAL, STABBING/ELECTRIC-SHOCK facial pain lasting seconds in a trigeminal-nerve division (commonly maxillary/mandibular), TRIGGERED by innocuous stimuli to "trigger zones" (light touch, chewing, tooth-brushing, washing the face, cold breeze, talking) with pain-free/refractory intervals, is the classic picture of TRIGEMINAL NEURALGIA. Distinguish it from dental pain (usually continuous/throbbing, not touch-triggered paroxysms \u2014 patients often see a dentist first), cluster headache (longer, orbital, autonomic), migraine, TMJ pain, sinusitis and giant cell arteritis. Critically, screen the RED FLAGS suggesting a SECONDARY cause (an underlying lesion such as multiple sclerosis or a compressive vascular/tumour lesion): younger age, BILATERAL symptoms, facial SENSORY LOSS/numbness, other cranial-nerve or neurological signs, deafness, MS/optic features, or atypical continuous pain \u2014 which warrant neurology referral and MRI; classic unilateral TN in an older patient with a normal neuro exam is usually primary, but the screen must be explicit. Treat first-line with CARBAMAZEPINE, titrated to effect, counselling side-effects and monitoring \u2014 dizziness/ataxia, HYPONATRAEMIA, blood dyscrasias, LFT derangement, rash (including rare serious SJS/TEN \u2014 stop and seek help), many drug interactions (enzyme inducer), and pregnancy/contraception caution \u2014 with alternatives (oxcarbazepine, lamotrigine, gabapentin, baclofen) if intolerant/refractory, often specialist-guided. Acknowledge the major quality-of-life impact (fear of eating/talking/washing, weight loss, low mood) and refer to neurology for confirmation, red flags (with MRI), refractory pain, or surgical options (e.g. microvascular decompression). The hidden agenda is fear and exhaustion (and possible dental bouncing); the skill is confident pattern recognition, first-line carbamazepine with proper counselling, the explicit red-flag screen, and referral. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'NICE CG173 (trigeminal neuralgia) \u00b7 carbamazepine first-line + monitoring \u00b7 secondary-cause red flags (MS/compressive) \u00b7 neurology referral',
      points:[
        { h:'Recognise TN', t:'Paroxysmal, severe, unilateral, electric-shock/stabbing facial pain lasting seconds in a trigeminal division, triggered by innocuous stimuli to trigger zones, with pain-free/refractory intervals.' },
        { h:'Differential', t:'Dental pain (continuous/throbbing, not touch-triggered paroxysms \u2014 consider/exclude), cluster headache, migraine, TMJ, sinusitis, giant cell arteritis. The brief shock-like touch-triggered pattern points to TN.' },
        { h:'Secondary-cause red flags', t:'Younger age, bilateral symptoms, facial sensory loss, other cranial-nerve/neuro signs, deafness, MS/optic features, atypical continuous pain \u2192 neurology + MRI (MS, compressive lesion).' },
        { h:'First-line carbamazepine', t:'Carbamazepine, titrated, is first-line. Counsel/monitor: dizziness/ataxia, hyponatraemia, blood dyscrasia, LFTs, rash (incl. rare SJS \u2014 stop & seek help), enzyme-inducer interactions, pregnancy/contraception caution.' },
        { h:'Alternatives', t:'Oxcarbazepine, lamotrigine, gabapentin, baclofen if intolerant/refractory \u2014 often specialist-guided.' },
        { h:'Impact & referral', t:'Acknowledge fear of eating/talking/washing, weight loss, low mood. Refer neurology for confirmation, red flags, refractory pain, surgical options (microvascular decompression/ablation).' },
        { h:'Never do', t:'Never dismiss as dental pain without considering TN; never skip the secondary-cause red-flag screen; never start carbamazepine without side-effect/monitoring counselling; never ignore the quality-of-life/mood impact.' },
        { h:'Safety-net & follow-up', t:'Stop carbamazepine and seek help for rash/feeling unwell; monitoring bloods (sodium/FBC/LFTs); review response/titration; urgent review for red flags; neurology referral.' }
      ]
    }
  };

  /* ============ 233. F2F — Premenstrual dysphoric disorder: not "just PMS" ============ */
  const c233 = {
    id:'pmdd', title:'"For a week or two before my period I become a different person \u2014 rage, despair, I scare myself \u2014 then it lifts"', type:'video', duration:12,
    meta:{ age:33, sex:'F', setting:'Face-to-face \u2014 severe cyclical mood symptoms.', system:'Women\u2019s health / Mental health \u2014 premenstrual dysphoric disorder: recognition & treatment' },
    brief:'Miss Carys Devlin, 33, describes severe MOOD symptoms \u2014 irritability/RAGE, low mood/DESPAIR, anxiety, tearfulness, feeling out of control \u2014 plus physical symptoms, that appear in the LUTEAL phase (the 1\u20132 weeks BEFORE her period), are severe enough to damage her relationships/work, and RESOLVE soon after menstruation starts, with a symptom-free interval; she has been dismissed as having "bad PMS". The examinable task is to recognise PREMENSTRUAL DYSPHORIC DISORDER (PMDD) \u2014 a severe, functionally impairing form of premenstrual disorder with prominent affective symptoms, defined by the CYCLICAL/luteal timing and symptom-free follicular phase \u2014 distinguishing it from "ordinary" PMS (milder) and from an underlying mood disorder with premenstrual exacerbation (symptoms persisting through the cycle). Confirm the pattern with a prospective SYMPTOM DIARY over \u22652 cycles, assess SEVERITY and RISK (it carries genuine distress and suicide risk), validate (not "just hormones"/"just PMS"), and offer evidence-based treatment per RCOG/NICE: lifestyle, an SSRI (effective in PMDD \u2014 continuous OR luteal-phase dosing), combined hormonal/ovulation-suppression options (e.g. a combined pill, often continuous), CBT, and referral for refractory/severe cases. The skill is recognising and VALIDATING a frequently dismissed, disabling condition, confirming with a diary, assessing risk, and treating. No NG12 cancer link.',
    script:{
      opening:'"I feel like I\u2019m going mad. For a week or two before my period I turn into a different person \u2014 furious over nothing, then this black despair, crying, snapping at my partner and kids. I\u2019ve frightened myself with how low I get. Then my period comes and within a day or two it just\u2026 lifts, and I\u2019m fine. My last doctor said it\u2019s just bad PMS. It\u2019s wrecking my life."',
      facts:[
        { topic:'Recognise PMDD \u2014 the cyclical pattern', text:'CORE \u2014 severe affective symptoms (irritability/RAGE, low mood/DESPAIR, anxiety, mood swings, feeling out of control) \u00b1 physical symptoms that occur in the LUTEAL phase (the 1\u20132 weeks before menstruation), are functionally IMPAIRING, and RESOLVE shortly after the period starts with a SYMPTOM-FREE interval in the follicular phase, define PREMENSTRUAL DYSPHORIC DISORDER (PMDD) \u2014 the severe end of premenstrual disorders. The cyclical timing with a symptom-free window is the diagnostic key.' },
        { topic:'Distinguish from PMS and mood disorder', text:'Distinguish: ordinary PMS is milder and not functionally disabling; an underlying MOOD DISORDER (depression/anxiety) with PREMENSTRUAL EXACERBATION has symptoms PERSISTING through the cycle (worse premenstrually) rather than fully resolving \u2014 so the symptom-free follicular phase is what differentiates PMDD. Don\u2019t mislabel disabling PMDD as "just PMS", nor miss an underlying mood disorder.' },
        { topic:'Confirm with a prospective symptom diary', text:'KEY \u2014 confirm the diagnosis with a PROSPECTIVE symptom DIARY over at least TWO menstrual cycles (e.g. a daily record/DRSP-type chart), demonstrating the luteal-phase timing and symptom-free follicular phase. Retrospective recall is unreliable; the diary both confirms PMDD and excludes a persistent mood disorder.' },
        { topic:'Assess severity and RISK', text:'CRITICAL \u2014 PMDD causes genuine distress and impairment and carries a real SUICIDE/self-harm risk in the luteal phase. Assess severity, functional/relationship impact, and explicitly screen RISK (suicidal thoughts, self-harm). Validate that this is a recognised medical condition, NOT "just hormones" or a character failing \u2014 the validation itself is therapeutic after being dismissed.' },
        { topic:'Evidence-based treatment', text:'Offer treatment per RCOG/NICE: lifestyle measures (exercise, sleep, reducing alcohol/caffeine, stress management); an SSRI is effective for PMDD and can be given CONTINUOUSLY or only in the LUTEAL phase; COMBINED hormonal contraception/ovulation suppression (e.g. a combined pill, often taken continuously) is an option; CBT helps; and refer to gynaecology/specialist for severe/refractory cases (where options such as GnRH analogues \u00b1 add-back, or rarely surgery, are considered). Tailor to her preferences (e.g. contraceptive needs).' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 she feels she is "going mad", has been dismissed as "just PMS", and is frightened by how low she gets; she needs validation, a name, and effective help. The skill is to recognise PMDD, confirm with a diary, assess risk, validate strongly, and offer evidence-based treatment with shared decision-making \u2014 not to dismiss it or treat it as ordinary PMS. No NG12 cancer pathway applies.' },
      ],
      ice:{
        ideas:'She fears she is "going mad"; previously told it\u2019s "just bad PMS"; unsure it can be treated.',
        concerns:'The severity (rage/despair frightening her), the impact on her family/work, being dismissed again; safety of her mood.',
        expectations:'To be believed and helped. What she needs: recognition of PMDD, diary confirmation, risk assessment, strong validation, and evidence-based treatment (SSRI/hormonal/CBT) \u2014 not "just PMS".'
      },
      cues:['Severe cyclical mood symptoms (rage/despair) in the luteal phase that RESOLVE after the period with a symptom-free interval \u2014 PMDD, not "just PMS".','Confirm with a prospective symptom diary over \u22652 cycles; distinguish from a mood disorder with premenstrual exacerbation (symptoms persist).','Assess suicide/self-harm risk; validate strongly; treat (SSRI continuous or luteal, combined hormonal/ovulation suppression, CBT; refer if refractory).']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises PREMENSTRUAL DYSPHORIC DISORDER \u2014 severe affective (\u00b1 physical) symptoms in the LUTEAL phase that are functionally impairing and RESOLVE after menstruation with a symptom-free follicular interval' },
      { dom:'tasks', text:'Distinguishes PMDD from ordinary (milder) PMS and from an underlying MOOD DISORDER with premenstrual exacerbation (symptoms persisting through the cycle) \u2014 the symptom-free window being the key' },
      { dom:'tasks', text:'Confirms the pattern with a PROSPECTIVE symptom DIARY over at least 2 cycles rather than relying on retrospective recall' },
      { dom:'tasks', text:'Assesses SEVERITY/impact and explicitly screens RISK (suicidal thoughts/self-harm, especially luteal), recognising PMDD\u2019s genuine risk' },
      { dom:'tasks', text:'Offers EVIDENCE-BASED treatment (lifestyle; SSRI \u2014 continuous or luteal-phase; combined hormonal/ovulation suppression; CBT) and refers to gynaecology/specialist for severe/refractory cases, with shared decision-making' },
      { dom:'rto',   text:'VALIDATES strongly \u2014 that this is a recognised, treatable condition and NOT "just PMS"/"just hormones"/a character flaw \u2014 responding to her feeling dismissed and frightened' },
      { dom:'rto',   text:'Explores impact on relationships/work and her preferences, explains the diagnosis and plan, and checks understanding' },
      { dom:'gs',    text:'Safety-nets and follows up: crisis/risk safety-netting (worsening mood/suicidality, especially premenstrually), the diary and review to confirm and tailor treatment, and ongoing support \u2014 recognition + validation + evidence-based treatment, not dismissal' },
    ],
    worked:[
      { lbl:'Validate first', txt:'"You are not going mad, and this is not \u2018just PMS\u2019. What you\u2019re describing \u2014 severe mood changes that build before your period and then lift once it starts \u2014 is a recognised, treatable condition called premenstrual dysphoric disorder, PMDD. I\u2019m really sorry you were brushed off; this is real."' },
      { lbl:'Pin the pattern', txt:'"The key thing that makes me confident is that you feel genuinely WELL for part of the month, then it returns predictably before your period. To be sure, I\u2019d like you to keep a daily symptom diary over a couple of cycles \u2014 it confirms the pattern and rules out a depression that\u2019s there all the time."' },
      { lbl:'Check safety', txt:'"Because you said the lows frighten you \u2014 can I ask directly: in that premenstrual week, have you had thoughts of harming yourself or that life isn\u2019t worth living? \u2026 Thank you for telling me. That matters and we\u2019ll keep you safe."' },
      { lbl:'Offer treatment', txt:'"The good news is there are effective treatments. An antidepressant called an SSRI works well for PMDD \u2014 and uniquely here, it can be taken either every day or just in the two weeks before your period. A combined pill taken continuously can also help by smoothing the hormone swings, and talking therapy (CBT) helps too. We can choose what fits you."' },
      { lbl:'Shared decision', txt:'"What appeals more \u2014 trying the SSRI, the hormonal route, or both alongside lifestyle changes like exercise and easing off caffeine/alcohol? Do you also need contraception, as that might steer us?"' },
      { lbl:'Safety-net + review', txt:'"Keep the diary, and let\u2019s review in a couple of cycles to confirm and see how treatment\u2019s working. If your mood drops badly or you ever feel unsafe \u2014 especially before your period \u2014 contact us straight away. You\u2019ve been carrying this alone for too long."' },
    ],
    learning:'PREMENSTRUAL DYSPHORIC DISORDER (PMDD) is the severe, functionally impairing end of premenstrual disorders: prominent affective symptoms (irritability/RAGE, low mood/DESPAIR, anxiety, mood swings, feeling out of control) \u00b1 physical symptoms occurring in the LUTEAL phase (the 1\u20132 weeks before menstruation), damaging relationships/work, and RESOLVING shortly after the period starts with a SYMPTOM-FREE follicular interval \u2014 the cyclical timing with a symptom-free window being the diagnostic key. Distinguish it from ordinary (milder, non-disabling) PMS and from an underlying MOOD DISORDER with premenstrual exacerbation, where symptoms PERSIST through the cycle (worse premenstrually) rather than fully resolving. Confirm with a PROSPECTIVE symptom DIARY over at least two cycles, since retrospective recall is unreliable and the diary both confirms PMDD and excludes a persistent mood disorder. Assess severity and functional impact, and explicitly screen RISK \u2014 PMDD causes genuine distress and carries a real suicide/self-harm risk in the luteal phase \u2014 while validating strongly that this is a recognised medical condition, NOT "just PMS"/"just hormones" or a character failing (the validation is itself therapeutic after dismissal). Offer evidence-based treatment per RCOG/NICE: lifestyle measures; an SSRI (effective in PMDD, given continuously OR only in the luteal phase); combined hormonal contraception/ovulation suppression (e.g. a combined pill, often continuous); CBT; and referral to gynaecology/specialist for severe/refractory cases (GnRH analogues \u00b1 add-back, rarely surgery), tailored to her preferences and contraceptive needs. The hidden agenda is feeling she is "going mad" and previously dismissed; recognise, confirm, assess risk, validate, and treat with shared decision-making. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'RCOG/NICE premenstrual syndrome & PMDD \u00b7 prospective symptom diary \u00b7 SSRI (continuous/luteal) & ovulation suppression \u00b7 risk assessment',
      points:[
        { h:'Recognise PMDD', t:'Severe affective (\u00b1 physical) symptoms in the luteal phase, functionally impairing, resolving after menstruation with a symptom-free follicular interval. The severe end of premenstrual disorders.' },
        { h:'Distinguish', t:'Ordinary PMS is milder/non-disabling; a mood disorder with premenstrual exacerbation persists through the cycle. The symptom-free window differentiates PMDD.' },
        { h:'Confirm with a diary', t:'Use a prospective symptom diary over \u22652 cycles to confirm luteal timing and the symptom-free phase \u2014 retrospective recall is unreliable.' },
        { h:'Assess risk', t:'PMDD causes genuine distress and carries real suicide/self-harm risk (luteal). Assess severity, impact and risk explicitly. Validate \u2014 not "just PMS".' },
        { h:'Treatment', t:'Lifestyle; SSRI (continuous or luteal-phase dosing); combined hormonal/ovulation suppression (often continuous pill); CBT. Tailor to preferences/contraceptive needs.' },
        { h:'Refer if severe/refractory', t:'Gynaecology/specialist for refractory cases (GnRH analogues \u00b1 add-back HRT, rarely surgery).' },
        { h:'Never do', t:'Never dismiss disabling PMDD as "just PMS"/"just hormones"; never diagnose on retrospective recall alone; never miss an underlying persistent mood disorder; never omit the suicide-risk screen.' },
        { h:'Safety-net & follow-up', t:'Crisis/risk safety-netting (worsening mood/suicidality, esp. premenstrually); diary + review to confirm and tailor; ongoing support.' }
      ]
    }
  };

  /* ============ 234. F2F — First-episode genital herpes: diagnosis, antivirals & disclosure ============ */
  const c234 = {
    id:'genital-herpes-first', title:'"I\u2019ve got painful blisters and ulcers down below and I\u2019m terrified \u2014 does this mean I\u2019ll have it forever?"', type:'video', duration:12,
    meta:{ age:26, sex:'F', setting:'Face-to-face \u2014 painful genital ulceration, first episode.', system:'Sexual health \u2014 first-episode genital herpes: diagnosis, antivirals & the psychological/disclosure impact' },
    brief:'Miss Lauren Hicks, 26, presents with a first episode of PAINFUL grouped vesicles and shallow ULCERS on the vulva, with dysuria, tender inguinal lymphadenopathy and flu-like malaise. She is distressed, ashamed, and frightened about what it means for her future and relationships. The examinable task is to recognise FIRST-EPISODE GENITAL HERPES (HSV) \u2014 painful multiple vesicles/ulcers, dysuria, systemic symptoms, lymphadenopathy \u2014 to diagnose and CONFIRM appropriately (clinical diagnosis supported by an HSV swab/PCR from a lesion; ideally refer to/involve GUM/sexual-health services for confirmation, full STI screen and partner work), to TREAT promptly with an oral ANTIVIRAL (aciclovir/valaciclovir \u2014 most effective started early in a first episode) plus symptomatic care (analgesia, saline bathing, topical anaesthetic, adequate fluids; warn re urinary retention from dysuria), and \u2014 critically \u2014 to handle the PSYCHOLOGICAL impact and counselling sensitively: explain the natural history (it is a common, manageable lifelong infection with recurrences that are usually milder and may reduce over time; not a reflection of "dirtiness"), transmission and reducing it (asymptomatic shedding, condoms, disclosure to partners, antivirals/suppression for frequent recurrences), and pregnancy implications (important to disclose herpes in future pregnancy \u2014 neonatal risk). The skill is accurate diagnosis + early antivirals + compassionate, destigmatising counselling and GUM involvement. No NG12 cancer link.',
    script:{
      opening:'"This is so embarrassing \u2014 I\u2019ve got these really painful blisters and sores down below, it stings terribly when I wee, and I feel fluey and achy. I looked it up and I\u2019m terrified it\u2019s herpes. Does that mean I\u2019m dirty? Will I have this forever? What do I tell my partner?"',
      facts:[
        { topic:'Recognise first-episode genital herpes', text:'CORE \u2014 PAINFUL grouped VESICLES progressing to shallow ULCERS on the genitals, with DYSURIA, tender INGUINAL lymphadenopathy and flu-like SYSTEMIC symptoms (malaise, fever, myalgia), is the classic picture of a FIRST EPISODE of genital herpes (HSV). First episodes are typically more painful and systemic than recurrences. Examine and consider other causes of genital ulceration (other STIs, aphthous/Behçet\u2019s, fixed drug eruption) but the painful vesicular/ulcerative cluster with systemic features fits HSV.' },
        { topic:'Confirm & involve sexual-health services', text:'Diagnosis is clinical, SUPPORTED by an HSV SWAB/PCR taken from a lesion (type HSV-1/2). Ideally involve/refer to GUM/SEXUAL-HEALTH services for confirmation, a FULL STI screen (HSV can coexist with other infections), partner notification/contact tracing, and expert counselling. Manage promptly in primary care meanwhile if access is delayed.' },
        { topic:'Treat early with antivirals + symptomatic care', text:'Start an oral ANTIVIRAL promptly \u2014 aciclovir (or valaciclovir/famciclovir) \u2014 which is most effective when begun EARLY in a first episode (reduces severity/duration); a standard first-episode course. Add SYMPTOMATIC care: analgesia, SALINE bathing, topical anaesthetic (e.g. lidocaine gel) for dysuria, loose clothing, and good fluid intake \u2014 and warn about URINARY RETENTION (severe dysuria can cause retention, occasionally needing admission/catheter). Advise on hygiene and avoiding sexual contact while lesions are present.' },
        { topic:'Counsel natural history \u2014 destigmatise', text:'COMMUNICATION CORE \u2014 counsel sensitively: genital herpes is COMMON and MANAGEABLE; it is a lifelong infection (the virus persists) but RECURRENCES are usually MILDER and SHORTER than the first episode and often become less frequent over time; it does NOT mean she is "dirty" or promiscuous. This destigmatising explanation directly addresses her shame and fear and is central to the consultation.' },
        { topic:'Transmission, partners & pregnancy', text:'Counsel transmission and risk reduction: HSV can transmit even without visible lesions (asymptomatic SHEDDING), so consistent CONDOM use reduces but does not eliminate risk; discuss DISCLOSURE to partners (and that partner notification via GUM helps); SUPPRESSIVE antiviral therapy is an option for FREQUENT recurrences (and reduces transmission). Importantly, advise that she should DISCLOSE a herpes history in any future PREGNANCY, as there are neonatal-herpes implications requiring specialist management.' },
        { topic:'The hidden agenda', text:'HIDDEN AGENDA \u2014 her dominant feelings are SHAME, fear of being "dirty", and anxiety about relationships and the future ("forever"). The skill is to diagnose and treat accurately AND lead with compassionate, destigmatising counselling \u2014 addressing the "forever/dirty/partner" fears explicitly, involving GUM, and supporting her \u2014 not a brisk prescription. No NG12 cancer pathway applies.' },
      ],
      ice:{
        ideas:'It\u2019s herpes (from looking it up); fear it means she is "dirty" and will have it "forever".',
        concerns:'Shame/embarrassment; the pain; what it means for relationships and the future; what to tell her partner.',
        expectations:'Treatment and answers. What she needs: accurate diagnosis (swab) + early antivirals + symptomatic care, GUM involvement/STI screen, and compassionate destigmatising counselling (natural history, transmission, partners, pregnancy).'
      },
      cues:['Painful grouped vesicles/ulcers + dysuria + tender inguinal nodes + flu-like symptoms \u2014 first-episode genital herpes (HSV).','Treat early with oral antiviral (aciclovir) + symptomatic care; warn re urinary retention; swab/PCR + GUM referral + full STI screen.','Lead with destigmatising counselling: common, manageable, recurrences milder; transmission/asymptomatic shedding, partner disclosure, pregnancy implications.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises FIRST-EPISODE GENITAL HERPES (painful grouped vesicles/ulcers, dysuria, tender inguinal lymphadenopathy, flu-like systemic symptoms) and considers other causes of genital ulceration' },
      { dom:'tasks', text:'Confirms appropriately \u2014 clinical diagnosis supported by an HSV swab/PCR from a lesion \u2014 and involves/refers GUM/sexual-health services for confirmation, full STI screen and partner notification' },
      { dom:'tasks', text:'Treats promptly with an oral ANTIVIRAL (aciclovir/valaciclovir) started early, plus symptomatic care (analgesia, saline bathing, topical anaesthetic, fluids) and warns about URINARY RETENTION' },
      { dom:'tasks', text:'Counsels the NATURAL HISTORY in a destigmatising way \u2014 common, manageable, lifelong but recurrences usually milder/shorter and often less frequent; not "dirty"/promiscuous' },
      { dom:'tasks', text:'Counsels TRANSMISSION and risk reduction (asymptomatic shedding, condoms, partner disclosure, suppressive therapy for frequent recurrences) and the importance of disclosing herpes in any future PREGNANCY (neonatal risk)' },
      { dom:'rto',   text:'Leads with COMPASSION \u2014 explicitly addressing the shame and the "dirty/forever/partner" fears \u2014 rather than a brisk prescription, and validates her distress' },
      { dom:'rto',   text:'Explains the diagnosis and plan clearly, checks understanding, and supports her through a distressing diagnosis' },
      { dom:'gs',    text:'Safety-nets and follows up: urinary retention/severe symptoms \u2192 urgent review, GUM referral and STI-screen follow-up, recurrence and suppression discussion, pregnancy advice, and review \u2014 accurate treatment + destigmatising counselling' },
    ],
    worked:[
      { lbl:'Compassion first', txt:'"First, please don\u2019t be embarrassed, and let me say this clearly: this does NOT mean you\u2019re \u2018dirty\u2019 \u2014 genital herpes is extremely common and very manageable. I can see you\u2019re in pain and frightened, so let\u2019s sort both the symptoms and your worries."' },
      { lbl:'Confirm + screen', txt:'"It does look like a first episode of herpes. I\u2019ll take a swab from a sore to confirm it, and I\u2019d like you to be seen at the sexual-health clinic for a full check and to help with telling partners \u2014 they\u2019re experts and completely confidential."' },
      { lbl:'Treat early', txt:'"I\u2019ll start you on an antiviral tablet now \u2014 it works best started early and will settle this episode faster. For the pain: salt-water baths, painkillers, and a numbing gel for weeing, plus plenty of fluids. If it becomes so sore you can\u2019t pass urine at all, contact us urgently \u2014 that occasionally needs hospital."' },
      { lbl:'The "forever" question', txt:'"Honestly: the virus does stay in the body, so it can come back \u2014 but here\u2019s the reassuring part: recurrences are usually much milder and shorter than this first one, and often become less frequent over time. If they\u2019re frequent, a daily tablet can suppress them."' },
      { lbl:'Partners + transmission', txt:'"On your partner \u2014 it can pass on even without visible sores, so condoms help reduce, though not remove, the risk. It\u2019s worth an honest conversation; the clinic can help with that. None of this makes you a bad person."' },
      { lbl:'Pregnancy + safety-net', txt:'"One important thing for the future: if you\u2019re ever pregnant, tell your midwife/doctor you\u2019ve had herpes, as it needs specific care to protect the baby. Come back if it worsens, you can\u2019t pass urine, or you\u2019re struggling with how you feel about it \u2014 that matters too."' },
    ],
    learning:'A FIRST EPISODE of genital herpes (HSV) presents with PAINFUL grouped VESICLES progressing to shallow ULCERS on the genitals, DYSURIA, tender INGUINAL lymphadenopathy and flu-like SYSTEMIC symptoms \u2014 first episodes being more painful and systemic than recurrences \u2014 and should be distinguished from other causes of genital ulceration (other STIs, aphthous/Behçet\u2019s, fixed drug eruption). Diagnosis is clinical, supported by an HSV SWAB/PCR from a lesion, and GUM/sexual-health services should ideally be involved for confirmation, a FULL STI screen, partner notification and expert counselling. Treat promptly with an oral ANTIVIRAL (aciclovir/valaciclovir/famciclovir), most effective started EARLY in a first episode, plus symptomatic care (analgesia, saline bathing, topical anaesthetic for dysuria, fluids), warning about URINARY RETENTION from severe dysuria (occasionally needing admission/catheter) and advising against sexual contact while lesions are present. Critically, lead with compassionate, DESTIGMATISING counselling: genital herpes is COMMON and MANAGEABLE, a lifelong infection (the virus persists) but with RECURRENCES that are usually MILDER and SHORTER and often less frequent over time, and it does NOT mean the patient is "dirty" or promiscuous \u2014 directly addressing shame and the "forever" fear. Counsel transmission and risk reduction (asymptomatic SHEDDING means transmission can occur without lesions; condoms reduce but do not eliminate risk; partner disclosure; SUPPRESSIVE antiviral therapy for frequent recurrences and to reduce transmission) and the importance of disclosing a herpes history in any future PREGNANCY because of neonatal-herpes implications. The hidden agenda is shame and fear about relationships and the future; the skill is accurate diagnosis and early antivirals AND compassionate destigmatising counselling with GUM involvement \u2014 not a brisk prescription. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'BASHH genital herpes \u00b7 first-episode antivirals (aciclovir) \u00b7 GUM referral/STI screen \u00b7 transmission, suppression & pregnancy counselling',
      points:[
        { h:'Recognise first episode', t:'Painful grouped vesicles/ulcers, dysuria, tender inguinal lymphadenopathy, flu-like systemic symptoms = first-episode genital herpes (more painful/systemic than recurrences). Consider other ulcer causes.' },
        { h:'Confirm & refer GUM', t:'Clinical diagnosis supported by HSV swab/PCR (type HSV-1/2); involve/refer GUM for confirmation, full STI screen and partner notification.' },
        { h:'Antivirals + symptom care', t:'Oral aciclovir/valaciclovir started early (most effective in first episode); analgesia, saline bathing, topical anaesthetic, fluids. Warn re urinary retention (may need admission/catheter).' },
        { h:'Natural history (destigmatise)', t:'Common, manageable, lifelong but recurrences usually milder/shorter and often less frequent. Not "dirty"/promiscuous \u2014 directly counter the shame and "forever" fear.' },
        { h:'Transmission & partners', t:'Asymptomatic shedding means transmission without lesions; condoms reduce not eliminate; partner disclosure (GUM helps); suppressive antivirals for frequent recurrences and to reduce transmission.' },
        { h:'Pregnancy', t:'Disclose herpes history in any future pregnancy \u2014 neonatal-herpes implications require specialist management.' },
        { h:'Never do', t:'Never deliver the diagnosis briskly without addressing shame/fear; never delay early antivirals; never miss urinary retention; never omit GUM/STI screen or pregnancy counselling.' },
        { h:'Safety-net & follow-up', t:'Urgent review for urinary retention/severe symptoms; GUM referral and STI-screen follow-up; recurrence/suppression discussion; pregnancy advice; psychological support.' }
      ]
    }
  };

  /* ============ 235. F2F/PHONE — Hyperemesis gravidarum: severe nausea & vomiting of pregnancy ============ */
  const c235 = {
    id:'hyperemesis-gravidarum', title:'"I\u2019m 9 weeks pregnant and can\u2019t keep anything down \u2014 not even water \u2014 I feel awful and I\u2019m scared"', type:'video', duration:12,
    meta:{ age:28, sex:'F', setting:'Video/urgent consultation \u2014 severe vomiting in early pregnancy.', system:'Obstetrics \u2014 hyperemesis gravidarum: severity, dehydration & safe antiemetics' },
    brief:'Mrs Sofia Marenco, 28, is 9 weeks into a confirmed pregnancy with SEVERE persistent nausea and VOMITING \u2014 unable to keep down food OR fluids, with reduced urine output, light-headedness, weight loss and ketones likely. The examinable task is to differentiate ordinary nausea/vomiting of pregnancy (NVP) from HYPEREMESIS GRAVIDARUM (severe, protracted vomiting with the triad of >5% weight loss, DEHYDRATION and electrolyte/ketotic disturbance), to ASSESS SEVERITY (a PUQE-type score, dehydration signs, ketonuria, weight loss, ability to tolerate oral fluids, U&E) and decide DISPOSITION \u2014 inability to keep fluids down / significant dehydration/ketosis warrants referral for IV REHYDRATION (ambulatory/day-unit or admission), while milder cases can be managed in the community; to prescribe SAFE first-line ANTIEMETICS in pregnancy (e.g. cyclizine, promethazine, or prochlorperazine first-line; ondansetron/metoclopramide as later options with appropriate counselling), with thiamine to prevent Wernicke\u2019s and consideration of VTE prophylaxis if admitted/dehydrated; to EXCLUDE other causes/complications (UTI, molar/multiple pregnancy, thyroid, other abdominal pathology); and to provide reassurance, safety-netting and follow-up. The skill is severity assessment + correct disposition (IV fluids if not tolerating oral) + safe antiemetics + support \u2014 not dismissing it as "morning sickness". No NG12 cancer link.',
    script:{
      opening:'"I\u2019m about nine weeks pregnant and I just can\u2019t stop being sick \u2014 I can\u2019t keep food down, and now not even water; it comes straight back up. I\u2019m exhausted, dizzy when I stand, I\u2019ve barely passed urine today, and I\u2019ve lost weight. Everyone says it\u2019s just morning sickness but this feels really wrong and I\u2019m frightened for the baby."',
      facts:[
        { topic:'NVP vs hyperemesis gravidarum', text:'CORE \u2014 distinguish ordinary nausea/vomiting of pregnancy (common, usually first trimester, tolerable) from HYPEREMESIS GRAVIDARUM \u2014 severe, protracted vomiting causing the triad of >5% pre-pregnancy WEIGHT LOSS, DEHYDRATION, and ELECTROLYTE/ketotic disturbance. The inability to keep down even FLUIDS, reduced urine output, light-headedness and weight loss mark this as severe \u2014 not "just morning sickness".' },
        { topic:'Assess severity objectively', text:'Assess severity: a PUQE-type score, signs of DEHYDRATION (tachycardia, postural drop, dry mucous membranes, reduced urine output), KETONURIA (urine dip), weight loss vs booking weight, ability to tolerate oral fluids, and bloods (U&E for electrolytes/AKI, and as indicated). The KEY practical discriminator is whether she can keep ORAL FLUIDS down.' },
        { topic:'Disposition \u2014 IV fluids if not tolerating oral', text:'CRITICAL \u2014 decide DISPOSITION on severity: INABILITY to keep fluids down, significant dehydration/ketosis, abnormal electrolytes, or failure of community antiemetics warrants referral for IV REHYDRATION \u2014 via an ambulatory/day-assessment unit or admission (early pregnancy assessment unit / obstetric/gynae). Milder cases tolerating some fluids can be managed in the community with oral antiemetics and review. Do not leave a woman who cannot tolerate fluids to "try ginger and crackers".' },
        { topic:'Safe antiemetics in pregnancy', text:'Prescribe SAFE first-line ANTIEMETICS: cyclizine, promethazine or prochlorperazine are first-line in pregnancy; ondansetron and metoclopramide are later-line options (with appropriate counselling \u2014 metoclopramide extrapyramidal/limited duration; ondansetron risk-benefit discussion). Give THIAMINE (to prevent Wernicke\u2019s encephalopathy in prolonged vomiting), consider VTE prophylaxis if admitted/dehydrated, and replace electrolytes. Reassure that treating it protects mother and pregnancy.' },
        { topic:'Exclude other causes/complications', text:'Consider and exclude other causes/complications: URINARY tract infection, MOLAR or MULTIPLE pregnancy (often more severe \u2014 ultrasound), THYROID dysfunction (hyperemesis can be associated with biochemical hyperthyroidism), and other abdominal/GI pathology. Significant complications of hyperemesis include electrolyte disturbance, AKI, Wernicke\u2019s, and (rarely) Mallory-Weiss.' },
        { topic:'Reassurance, support & the agenda', text:'HIDDEN AGENDA \u2014 she is frightened for the baby and feels dismissed ("just morning sickness"). Validate that this is a recognised, serious-but-treatable condition, reassure appropriately, and support her (it is debilitating and can affect mood/relationships/work). The skill is objective severity assessment, correct disposition (IV fluids if not tolerating oral), safe antiemetics and thiamine, exclusion of mimics, and compassionate follow-up. No NG12 cancer pathway applies.' },
      ],
      ice:{
        ideas:'Worried this is more than "morning sickness"; frightened for the baby; unsure what can be done in pregnancy.',
        concerns:'Inability to keep anything down, dehydration, weight loss; the baby\u2019s wellbeing; being dismissed.',
        expectations:'Help and reassurance. What she needs: severity assessment, correct disposition (IV rehydration if not tolerating fluids), safe antiemetics + thiamine, exclusion of mimics, and supportive follow-up \u2014 not "it\u2019s just morning sickness".'
      },
      cues:['9 weeks pregnant, can\u2019t keep fluids down, reduced urine, light-headed, weight loss \u2014 hyperemesis gravidarum, not "just morning sickness".','Assess severity (PUQE, dehydration, ketonuria, U&E); the key discriminator is whether she tolerates oral fluids \u2192 if not, IV rehydration (day unit/admission).','Safe antiemetics: cyclizine/promethazine/prochlorperazine first-line (ondansetron/metoclopramide later); add thiamine; exclude UTI/molar/multiple/thyroid.']
    },
    checkpoints:[
      { dom:'tasks', text:'Distinguishes ordinary NVP from HYPEREMESIS GRAVIDARUM (severe protracted vomiting with >5% weight loss, dehydration and electrolyte/ketotic disturbance) \u2014 not dismissing it as "morning sickness"' },
      { dom:'tasks', text:'Assesses SEVERITY objectively \u2014 PUQE-type score, dehydration signs, KETONURIA, weight loss, ability to tolerate oral fluids, U&E \u2014 with the key discriminator being whether she can keep fluids down' },
      { dom:'tasks', text:'Decides DISPOSITION correctly \u2014 inability to keep fluids down / significant dehydration/ketosis/electrolyte derangement \u2192 referral for IV REHYDRATION (day unit/admission); milder cases managed in the community with review' },
      { dom:'tasks', text:'Prescribes SAFE antiemetics in pregnancy (cyclizine/promethazine/prochlorperazine first-line; ondansetron/metoclopramide later-line with counselling), gives THIAMINE, and considers VTE prophylaxis/electrolyte replacement if admitted/dehydrated' },
      { dom:'tasks', text:'Considers and excludes other causes/complications (UTI, molar/multiple pregnancy \u2014 ultrasound, thyroid dysfunction, other abdominal pathology; AKI, Wernicke\u2019s)' },
      { dom:'rto',   text:'Validates that this is a recognised, treatable condition (not "just morning sickness"), addresses her fear for the baby, and supports her through a debilitating illness' },
      { dom:'rto',   text:'Explains the plan and reasoning clearly, checks understanding, and reassures appropriately' },
      { dom:'gs',    text:'Safety-nets and follows up: return/urgent if unable to keep fluids down, worsening dehydration, reduced urine, abdominal pain or feeling very unwell; arranges IV rehydration/referral as needed, antiemetic review, and follow-up \u2014 severity-based disposition + safe treatment, not dismissal' },
    ],
    worked:[
      { lbl:'Validate + reframe', txt:'"You\u2019re right that this isn\u2019t \u2018just morning sickness\u2019 \u2014 when you can\u2019t keep down even water, you\u2019re passing little urine and losing weight, that\u2019s a recognised condition called hyperemesis gravidarum, and it needs proper treatment. I\u2019m glad you came."' },
      { lbl:'Assess severity', txt:'"Let me check how dehydrated you are \u2014 your pulse and blood pressure sitting and standing, your mouth, and a urine dip for \u2018ketones\u2019 \u2014 and I\u2019ll check your weight and some bloods for your salts and kidneys. The key question is whether you can hold any fluids down at all."' },
      { lbl:'Disposition', txt:'"Because you can\u2019t keep fluids down and you\u2019re dehydrated, the safest thing is to get you fluids into a vein \u2014 I\u2019ll arrange that today, either at the day-assessment unit or hospital. That settles things much faster than trying to sip at home."' },
      { lbl:'Safe treatment', txt:'"There are anti-sickness medicines that are safe in pregnancy \u2014 I\u2019ll start one like cyclizine \u2014 and we add a vitamin (thiamine) to keep you well during the sickness. Treating this protects both you and the baby."' },
      { lbl:'Exclude mimics', txt:'"I\u2019ll also check there\u2019s nothing else adding to it \u2014 a water infection, your thyroid \u2014 and a scan will confirm the pregnancy and check it\u2019s not twins or anything unusual, which can make sickness worse."' },
      { lbl:'Reassure + safety-net', txt:'"This is treatable and it does usually ease as pregnancy goes on. Come back urgently \u2014 or to the unit \u2014 if you still can\u2019t keep fluids down, you\u2019re passing very little urine, get tummy pain, or feel really unwell. We\u2019ll review you closely."' },
    ],
    learning:'Distinguish ordinary nausea/vomiting of pregnancy (NVP) from HYPEREMESIS GRAVIDARUM \u2014 severe, protracted vomiting causing the triad of >5% pre-pregnancy WEIGHT LOSS, DEHYDRATION and ELECTROLYTE/ketotic disturbance \u2014 because inability to keep down even fluids, reduced urine output, light-headedness and weight loss mark a serious condition, not "just morning sickness". Assess severity objectively with a PUQE-type score, dehydration signs (tachycardia, postural drop, dry mucous membranes, reduced urine output), KETONURIA, weight loss versus booking weight, the ability to tolerate oral fluids, and U&E (electrolytes/AKI), the key practical discriminator being whether she can keep ORAL FLUIDS down. Decide DISPOSITION on severity: inability to tolerate fluids, significant dehydration/ketosis, abnormal electrolytes, or failure of community antiemetics warrants referral for IV REHYDRATION via an ambulatory/day-assessment unit or admission, whereas milder cases tolerating some fluids can be managed in the community with oral antiemetics and review \u2014 do not leave a woman who cannot tolerate fluids to "try ginger and crackers". Prescribe SAFE antiemetics in pregnancy (cyclizine, promethazine or prochlorperazine first-line; ondansetron and metoclopramide later-line with appropriate counselling), give THIAMINE to prevent Wernicke\u2019s encephalopathy in prolonged vomiting, consider VTE prophylaxis if admitted/dehydrated, and replace electrolytes. Consider and exclude other causes/complications: UTI, MOLAR or MULTIPLE pregnancy (ultrasound), THYROID dysfunction, and other abdominal pathology, alongside complications such as electrolyte disturbance, AKI and Wernicke\u2019s. The hidden agenda is fear for the baby and feeling dismissed; validate that this is recognised and treatable, assess severity, arrange correct disposition (IV fluids if not tolerating oral), prescribe safe antiemetics and thiamine, exclude mimics, and follow up compassionately. No NICE NG12 cancer pathway applies.',
    knowledge:{
      guideline:'RCOG/NICE nausea & vomiting of pregnancy / hyperemesis gravidarum \u00b7 PUQE & dehydration \u00b7 safe antiemetics + thiamine \u00b7 IV rehydration disposition',
      points:[
        { h:'NVP vs hyperemesis', t:'Hyperemesis = severe protracted vomiting with >5% weight loss, dehydration and electrolyte/ketotic disturbance \u2014 not ordinary morning sickness. Inability to keep fluids down marks severity.' },
        { h:'Assess severity', t:'PUQE-type score, dehydration signs, ketonuria, weight loss, oral-fluid tolerance, U&E. Key discriminator: can she keep oral fluids down?' },
        { h:'Disposition', t:'Cannot tolerate fluids / significant dehydration/ketosis/electrolyte derangement / failed community antiemetics \u2192 IV rehydration (day unit/admission). Milder cases: community management + review.' },
        { h:'Safe antiemetics', t:'First-line: cyclizine, promethazine, prochlorperazine. Later-line: ondansetron, metoclopramide (with counselling). Add thiamine (prevent Wernicke\u2019s); consider VTE prophylaxis if admitted/dehydrated; replace electrolytes.' },
        { h:'Exclude mimics', t:'UTI, molar/multiple pregnancy (ultrasound), thyroid dysfunction, other abdominal pathology. Watch complications: electrolyte disturbance, AKI, Wernicke\u2019s, Mallory-Weiss.' },
        { h:'Reassure & support', t:'Recognised, treatable condition; treating it protects mother and pregnancy; debilitating with mood/relationship/work impact \u2014 support and validate.' },
        { h:'Never do', t:'Never dismiss as "just morning sickness"; never leave a woman who can\u2019t tolerate fluids without IV rehydration/referral; never omit thiamine in prolonged vomiting; never miss molar/multiple pregnancy or thyroid involvement.' },
        { h:'Safety-net & follow-up', t:'Urgent return/unit if unable to keep fluids down, reduced urine, worsening dehydration, abdominal pain or very unwell; antiemetic review; close follow-up.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c232, c233, c234, c235);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'trigeminal-neuralgia': {
      ceg: ['Long-term conditions & cancer', 'Prescribing & pharmacology'],
      stem: {
        name: 'Annette Boll', age: '58 years \u00b7 female',
        pmh: ['Paroxysms of sudden, severe, unilateral electric-shock/stabbing R facial pain (cheek/jaw), seconds long', 'Triggered by touch/chewing/tooth-brushing/breeze; pain-free intervals', 'Scared to eat/talk; exhausted'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Electric-shock pains in my face when I brush my teeth or feel a breeze \u2014 unbearable."',
        reason: 'Face-to-face \u2014 paroxysmal severe facial pain.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Recognise TN', d:'Paroxysmal unilateral electric-shock facial pain, touch-triggered, pain-free intervals \u2014 not dental.' },
        { t:'2\u20134',  h:'Red-flag screen', d:'Young/bilateral/sensory loss/other neuro signs/MS features \u2192 secondary cause \u2192 neurology + MRI.' },
        { t:'4\u20137',  h:'Start carbamazepine', d:'First-line, titrate; counsel hyponatraemia/blood dyscrasia/rash(SJS)/interactions/pregnancy + monitoring.' },
        { t:'7\u20139',  h:'Impact', d:'Fear of eating/talking, weight loss, low mood \u2014 acknowledge and address.' },
        { t:'9\u201312', h:'Refer + safety-net', d:'Neurology (confirm/refractory/surgery); stop drug for rash/unwell; review titration.' }
      ],
      wordPics: {
        fail: 'Labels it dental pain or migraine; no carbamazepine or no counselling/monitoring; skips the secondary-cause red-flag screen.',
        pass: 'Recognises TN, starts carbamazepine with counselling, screens red flags and refers neurology.',
        exc:  'Confidently recognises trigeminal neuralgia, distinguishes it from dental/other facial pain, explicitly screens secondary-cause red flags, starts first-line carbamazepine with full side-effect/monitoring counselling, acknowledges the quality-of-life impact, and refers neurology with safety-netting.'
      },
      avoid: [
        { dont:'"It\u2019s probably your teeth \u2014 see your dentist."', instead:'"This electric-shock, touch-triggered pattern is trigeminal neuralgia, a nerve pain \u2014 not dental \u2014 and it responds to a specific tablet."', why:'Mislabelling TN as dental pain delays effective treatment (carbamazepine).' },
        { dont:'(No red-flag screen) treating without checking for secondary causes.', instead:'"Any numbness, double vision, weakness, or is it both sides? Those would mean we need a scan."', why:'Missing secondary TN (MS/compressive lesion) misses serious underlying pathology.' },
        { dont:'(No counselling) starting carbamazepine with no monitoring/safety advice.', instead:'"It can lower your sodium or rarely affect blood/liver \u2014 I\u2019ll monitor bloods, and stop it for any rash or feeling unwell."', why:'Carbamazepine needs side-effect/monitoring counselling (hyponatraemia, dyscrasia, SJS, interactions).' }
      ]
    },

    'pmdd': {
      ceg: ['Mental health & addiction', 'Gender, reproductive & sexual health'],
      stem: {
        name: 'Carys Devlin', age: '33 years \u00b7 female',
        pmh: ['Severe cyclical mood symptoms (rage, despair, anxiety) in the 1\u20132 weeks before periods; resolve after menses', 'Functionally impairing (relationships/work); frightened by lows', 'Previously dismissed as "bad PMS"'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '"Before my period I become a different person \u2014 rage, despair, I scare myself \u2014 then it lifts."',
        reason: 'Face-to-face \u2014 severe cyclical mood symptoms.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Validate + name', d:'Not "going mad"/"just PMS" \u2014 cyclical luteal severe mood symptoms resolving after menses = PMDD.' },
        { t:'2\u20134',  h:'Confirm pattern', d:'Prospective symptom diary \u22652 cycles; distinguish from a mood disorder that persists through the cycle.' },
        { t:'4\u20136',  h:'Assess risk', d:'Severity/impact + suicide/self-harm risk (esp. luteal). Screen explicitly.' },
        { t:'6\u20139',  h:'Treatment', d:'Lifestyle; SSRI (continuous or luteal); combined hormonal/ovulation suppression; CBT; shared decision.' },
        { t:'9\u201312', h:'Refer + safety-net', d:'Gynae if refractory; crisis safety-net (worse mood/suicidality, esp. premenstrual); diary + review.' }
      ],
      wordPics: {
        fail: 'Dismisses as "just PMS"/hormones; no diary, no risk assessment, no evidence-based treatment offered.',
        pass: 'Recognises PMDD, confirms with a diary, assesses risk, and offers SSRI/hormonal/CBT with validation.',
        exc:  'Strongly validates and names PMDD, distinguishes it from PMS and a persistent mood disorder, confirms with a prospective diary, screens suicide risk, offers evidence-based treatment (SSRI continuous/luteal, ovulation suppression, CBT) with shared decision-making, and safety-nets.'
      },
      avoid: [
        { dont:'"It\u2019s just bad PMS \u2014 lots of women get it, try to ride it out."', instead:'"This is PMDD \u2014 a recognised, severe and treatable condition, not just PMS. Let\u2019s confirm it and get you effective help."', why:'Dismissing disabling PMDD as "just PMS" invalidates the patient and misses effective treatment.' },
        { dont:'(No risk screen) treating without asking about safety.', instead:'"In that premenstrual week, have you had thoughts of harming yourself? "', why:'PMDD carries a real luteal-phase suicide/self-harm risk that must be screened.' },
        { dont:'(Diagnosing on recall) starting treatment without a diary.', instead:'"Let\u2019s confirm the pattern with a daily diary over two cycles \u2014 it also rules out a depression that\u2019s there all the time."', why:'A prospective diary is needed to confirm PMDD and exclude a persistent mood disorder.' }
      ]
    },

    'genital-herpes-first': {
      ceg: ['Gender, reproductive & sexual health', 'New & undifferentiated presentations'],
      stem: {
        name: 'Lauren Hicks', age: '26 years \u00b7 female',
        pmh: ['First episode: painful grouped vulval vesicles/ulcers + dysuria + tender inguinal nodes + flu-like symptoms', 'Distressed, ashamed; fears being "dirty" / "forever"', 'Worried about partner disclosure'],
        meds: ['Combined oral contraceptive'],
        allergy: 'NKDA',
        recent: '"Painful blisters and ulcers down below \u2014 terrified it\u2019s herpes. Does this mean I\u2019ll have it forever?"',
        reason: 'Face-to-face \u2014 painful genital ulceration, first episode.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Compassion first', d:'Not "dirty"; common and manageable; address shame/fear up front.' },
        { t:'2\u20134',  h:'Confirm + screen', d:'Clinical + HSV swab/PCR; GUM referral, full STI screen, partner notification.' },
        { t:'4\u20136',  h:'Treat early', d:'Oral aciclovir (early = most effective) + analgesia/saline/topical anaesthetic/fluids; warn urinary retention.' },
        { t:'6\u20139',  h:'Natural history', d:'Lifelong but recurrences milder/shorter/less frequent; suppression if frequent; transmission/asymptomatic shedding, condoms, disclosure.' },
        { t:'9\u201312', h:'Pregnancy + safety-net', d:'Disclose herpes in future pregnancy (neonatal risk); urgent if can\u2019t pass urine; psychological support.' }
      ],
      wordPics: {
        fail: 'Brisk prescription with no destigmatising counselling; misses urinary retention; no GUM/STI screen or pregnancy advice; leaves shame/"forever" fear unaddressed.',
        pass: 'Diagnoses and treats with early antivirals, refers GUM, and counsels natural history/transmission compassionately.',
        exc:  'Leads with compassion and destigmatisation, confirms with swab and involves GUM/STI screen, treats early with antivirals + symptom care (warns retention), counsels natural history/transmission/partners/suppression and future-pregnancy implications, and supports her psychologically.'
      },
      avoid: [
        { dont:'(Brisk) "It\u2019s herpes, here\u2019s aciclovir, see the nurse." ', instead:'"This is common and manageable and doesn\u2019t make you \u2018dirty\u2019 \u2014 let\u2019s treat it and talk through what it means for you and your partner."', why:'A brisk prescription ignores the shame/fear that is the heart of this consultation.' },
        { dont:'(No retention warning) discharging without urinary advice.', instead:'"If it gets so sore you can\u2019t pass urine at all, contact us urgently \u2014 that occasionally needs hospital."', why:'Severe dysuria can cause urinary retention, an important complication.' },
        { dont:'(No pregnancy advice) omitting future-pregnancy counselling.', instead:'"If you\u2019re ever pregnant, tell your midwife you\u2019ve had herpes \u2014 it needs specific care to protect the baby."', why:'Neonatal-herpes implications make pregnancy disclosure important.' }
      ]
    },

    'hyperemesis-gravidarum': {
      ceg: ['Gender, reproductive & sexual health', 'Urgent & unscheduled care'],
      stem: {
        name: 'Sofia Marenco', age: '28 years \u00b7 female',
        pmh: ['9 weeks pregnant; severe persistent vomiting \u2014 \u26a0 cannot keep fluids down', 'Reduced urine output, light-headed, weight loss (likely ketotic/dehydrated)', 'Told it\u2019s "just morning sickness"; frightened for the baby'],
        meds: ['Pregnancy multivitamin (not tolerating)'],
        allergy: 'NKDA',
        recent: '"9 weeks pregnant and can\u2019t keep anything down \u2014 not even water \u2014 I feel awful and I\u2019m scared."',
        reason: 'Video/urgent \u2014 severe vomiting in early pregnancy.'
      },
      timeMap: [
        { t:'0\u20132',  h:'Reframe', d:'Can\u2019t keep fluids down + weight loss + low urine = hyperemesis, not "just morning sickness".' },
        { t:'2\u20134',  h:'Assess severity', d:'PUQE, dehydration signs, ketonuria, weight, U&E; key = can she tolerate oral fluids?' },
        { t:'4\u20136',  h:'Disposition', d:'Not tolerating fluids/dehydrated/ketotic \u2192 IV rehydration (day unit/admission); milder \u2192 community.' },
        { t:'6\u20139',  h:'Safe treatment', d:'Cyclizine/promethazine/prochlorperazine first-line (ondansetron/metoclopramide later); thiamine; VTE prophylaxis if admitted.' },
        { t:'9\u201312', h:'Exclude + safety-net', d:'UTI/molar/multiple(USS)/thyroid; reassure + urgent return if can\u2019t keep fluids/low urine/very unwell.' }
      ],
      wordPics: {
        fail: 'Dismisses as morning sickness and advises ginger/crackers despite inability to keep fluids down; no severity assessment, IV fluids, thiamine or mimic exclusion.',
        pass: 'Recognises hyperemesis, assesses severity, arranges IV rehydration and safe antiemetics with thiamine.',
        exc:  'Distinguishes hyperemesis from NVP, assesses severity objectively (PUQE/ketones/U&E/fluid tolerance), arranges IV rehydration when fluids not tolerated, prescribes safe antiemetics + thiamine, excludes UTI/molar/multiple/thyroid, and validates/safety-nets compassionately.'
      },
      avoid: [
        { dont:'"It\u2019s just morning sickness \u2014 try ginger and small snacks, it\u2019ll pass."', instead:'"You can\u2019t keep fluids down and you\u2019re dehydrated \u2014 that\u2019s hyperemesis and needs IV fluids and anti-sickness treatment today."', why:'Dismissing a woman who can\u2019t tolerate fluids risks dangerous dehydration/electrolyte disturbance.' },
        { dont:'(Unsafe antiemetic choice) prescribing without considering pregnancy safety.', instead:'"I\u2019ll use a pregnancy-safe anti-sickness like cyclizine, and add thiamine to keep you well."', why:'Antiemetic choice in pregnancy matters; thiamine prevents Wernicke\u2019s in prolonged vomiting.' },
        { dont:'(No mimic check) assuming hyperemesis without excluding causes.', instead:'"I\u2019ll check for a water infection and thyroid, and a scan to make sure it\u2019s not twins or a molar pregnancy."', why:'UTI, molar/multiple pregnancy and thyroid dysfunction can drive or mimic severe vomiting.' }
      ]
    }

  });

})();
