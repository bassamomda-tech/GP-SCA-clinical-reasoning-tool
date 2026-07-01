/* Reasoning GP — Complaint consultation scaffolds.
   Keyed by presenting complaint (same keys as complaint-redflags.js). Provides
   the editable, complaint-specific skeleton the Consultation Spine drops in when
   a COMPLAINT is entered (with or without a diagnosis):
     hpc       — history-of-presenting-complaint template + ICE prompts
     exam      — focused examination for that complaint
     ix        — first-line, symptom-specific investigation plan
     safetynet — complaint-specific safety-netting
   Red flags themselves come from complaint-redflags.js. Impression / management /
   referral / follow-up come from the DIAGNOSIS template (consult-templates.js)
   when a provisional diagnosis is also given (its investigations then take over
   from the symptom-level ix here).
   [square brackets] = personalise. UK primary care / NICE CKS aligned —
   educational scaffold, verify before use.
*/
(function(){
  var S = {};
  function add(keys, o){ keys.forEach(k=>S[k]=o); }

  add(['headache'],{
    hpc:'[X]-[day/week] history of headache. Site [unilateral/bilateral/frontal/occipital], character [throbbing/pressing/stabbing], severity [/10], onset [gradual/sudden], duration of episodes [X], frequency [X/month]. Associated: [nausea, photophobia, phonophobia, aura, visual change]. Triggers/relievers [X]. Analgesia use [X days/month]. PMH/meds [X]. ICE: worried about [serious cause]; expecting [X].',
    exam:'Alert, well. BP [/], temp [], HR []. Fundoscopy — no papilloedema. Cranial nerves intact, no focal neurological deficit, gait normal. Neck supple. Temporal arteries non-tender [if >50].',
    ix:'Usually none — clinical diagnosis when examination is normal and no red flags. BP. [Bloods only if systemic/GCA features: FBC, ESR/CRP, glucose.] Neuroimaging only if red flags present. Headache diary.',
    safetynet:'Seek emergency help (999/A&E) if: sudden severe "thunderclap" headache, fever with neck stiffness or a rash that does not fade under pressure, new weakness/numbness/slurred speech, drowsiness or confusion, or visual loss. Return if headache becomes progressive, wakes you from sleep, or is not controlled. Headache diary to review.'
  });

  add(['chest pain'],{
    hpc:'[X] history of chest pain. Site [central/left/right], character [tight/sharp/pleuritic/burning], radiation [arm/jaw/back], onset [exertional/rest/sudden], duration [X], relieving/aggravating [exertion, rest, posture, GTN, food]. Associated [breathlessness, sweating, nausea, palpitations]. Risk factors [smoking, HTN, DM, lipids, FH]. ICE: worried about [heart].',
    exam:'Comfortable [or distressed]. BP [/] (both arms if dissection considered), HR [regular], RR [], SpO2 [], temp []. Heart sounds normal, no murmur/rub. Chest clear, no focal tenderness. Calves [no DVT signs]. [ECG done.]',
    ix:'12-lead ECG. [Bloods: FBC, U&E, lipids, HbA1c, TFT; troponin only via the acute pathway if ACS suspected.] CXR if indicated. Stable exertional pain → refer for CT coronary angiography (NICE CG95). Document QRISK.',
    safetynet:'Call 999 immediately if: chest pain comes on at rest, lasts longer than 15 minutes, or is associated with sweating, breathlessness, collapse or pain spreading to the arm/jaw — take aspirin 300mg. Return urgently if pain becomes more frequent, occurs at rest, or on less exertion.'
  });

  add(['abdominal pain'],{
    hpc:'[X] history of abdominal pain. Site [RUQ/epigastric/LIF/central/generalised], character [colicky/constant/sharp], radiation [back/groin], severity [/10], onset [X]. Associated [nausea, vomiting, fever, bowel/urinary change, PV bleeding/discharge]. Relation to food/movement. LMP / pregnancy status [X]. ICE: [X].',
    exam:'[Comfortable/distressed]. Temp [], HR [], BP []. Abdomen [soft/tender], site of tenderness [X], [no] guarding/rebound/rigidity, [no] mass/organomegaly, bowel sounds [present]. Hernial orifices [intact]. [PR/pelvic if indicated.] Urine dip / pregnancy test [X].',
    ix:'Urine dip ± pregnancy test (all women of childbearing age). [Bloods: FBC, CRP, U&E, LFT, amylase/lipase, glucose.] [USS / erect CXR / surgical referral if acute abdomen.] Stool tests if diarrhoea.',
    safetynet:'Seek same-day/emergency help if: pain becomes severe or constant, the abdomen becomes hard and tender to touch, persistent vomiting, vomiting blood or passing black/bloody stool, fever with rigors, fainting, or (if pregnancy possible) shoulder-tip pain or vaginal bleeding. Return if pain is not settling.'
  });

  add(['back pain'],{
    hpc:'[X]-[week] history of [lower] back pain. Onset [precipitant/lifting/none], character [mechanical — worse on movement, eased by rest], radiation [leg — to knee/below], severity [/10]. Bladder/bowel function [normal], saddle sensation [normal]. Impact on [work/sleep/function]. Red-flag screen below. ICE: worried about [serious damage]; wants [pain relief, stay active].',
    exam:'Mobilising [with discomfort]. Lumbar [paraspinal] tenderness, [reduced] flexion. Straight-leg raise [negative]. Lower-limb power, sensation, reflexes [intact]. [Perianal sensation/tone normal if any concern.] Gait [normal].',
    ix:'None for non-specific back pain. [If red flags or radicular symptoms persisting at 4–6 weeks: FBC, ESR/CRP, bone profile, PSA, myeloma screen, and MRI per pathway.] StarT Back risk tool.',
    safetynet:'Go to A&E immediately if: difficulty passing or controlling urine, loss of bowel control, numbness around the back passage or genitals, or new weakness/numbness in both legs (cauda equina). Also seek help if fever, unexplained weight loss, or pain that is worsening despite treatment. Return if not improving over [6 weeks].'
  });

  add(['breathless'],{
    hpc:'[X] history of breathlessness. Onset [sudden/gradual], exertional tolerance [X], orthopnoea/PND [X], associated [chest pain, cough, sputum, wheeze, haemoptysis, palpitations, leg swelling]. Triggers [X]. PMH [cardiac/resp], smoking [X]. ICE: [X].',
    exam:'[Comfortable/distressed], speaking in [full sentences]. RR [], SpO2 [], HR [], BP [], temp []. Chest [clear/wheeze/creps], heart sounds [normal], JVP [], peripheral oedema [none], calves [no DVT]. [PEFR / ECG if indicated.]',
    ix:'SpO2, PEFR, 12-lead ECG. [Bloods: FBC, U&E; BNP if cardiac; D-dimer only if PE unlikely on Wells.] CXR. Spirometry if chronic. [CTPA via pathway if PE likely.]',
    safetynet:'Call 999 if: sudden severe breathlessness, breathlessness at rest or unable to speak in full sentences, chest pain, blue lips, or coughing up blood. Return urgently if breathlessness is worsening, new leg swelling, or fever develops.'
  });

  add(['cough'],{
    hpc:'[X]-week history of cough, [dry/productive], sputum [colour/blood], diurnal pattern [X]. Associated [breathlessness, wheeze, fever, weight loss, night sweats, reflux, post-nasal drip]. Smoking [pack-years], occupational/TB exposure [X]. ICE: [X].',
    exam:'Well [or unwell]. Temp [], RR [], SpO2 [], HR []. Chest [clear/focal signs/wheeze]. ENT [X]. No clubbing or lymphadenopathy. [PEFR / CXR if indicated.]',
    ix:'Observations, SpO2. [CXR if cough >3 weeks, haemoptysis, weight loss or focal chest signs — also for the NG12 lung pathway in smokers >40.] [Spirometry, FBC, peak flow as indicated.]',
    safetynet:'Seek urgent help if: coughing up blood, breathless at rest, chest pain, high fever, or weight loss. Return if the cough lasts beyond 3 weeks, as a chest X-ray may be needed.'
  });

  add(['sore throat'],{
    hpc:'[X]-day sore throat, [pain on swallowing], [fever], [cough present/absent]. Able to swallow fluids/saliva [yes]. Voice [normal], breathing [normal]. FeverPAIN/Centor features [X]. Immunosuppression / DMARD or carbimazole [no]. ICE: wants [to know if antibiotics needed].',
    exam:'Temp []. Tonsils [enlarged/exudate], anterior cervical nodes [tender]. No trismus, uvula central, no unilateral swelling. No stridor/drooling. Chest clear. FeverPAIN [X] / Centor [X].',
    ix:'None routinely — FeverPAIN/Centor score guides management (throat swabs not recommended). [Urgent FBC if on carbimazole/DMARD and febrile — agranulocytosis.]',
    safetynet:'Seek urgent help if: difficulty breathing or swallowing saliva, drooling, a muffled voice, inability to open the mouth, or one-sided severe swelling. Return if not improving after [1 week], or if you become more unwell. [If on carbimazole/DMARD and febrile — urgent FBC.]'
  });

  add(['dizziness'],{
    hpc:'[X] history of [vertigo — room spinning / light-headedness / unsteadiness]. Onset [X], duration of episodes [X], triggers [head movement/standing], associated [hearing loss, tinnitus, nausea, neurological symptoms, palpitations]. Meds [antihypertensives]. ICE: [X].',
    exam:'[Well]. Lying/standing BP [/ → /], HR [regular]. Cranial nerves intact, [no] nystagmus, gait/Romberg [normal], cerebellar signs [absent]. Ears [normal]. [Dix-Hallpike / HINTS if indicated.]',
    ix:'Lying/standing BP, 12-lead ECG. [Bloods: FBC, U&E, glucose, TFT.] [Dix-Hallpike for BPPV; audiometry if hearing loss.] Neuroimaging only if central features.',
    safetynet:'Seek emergency help if: sudden severe headache, double vision, slurred speech, facial or limb weakness, numbness, difficulty walking, or sudden hearing loss. Return if dizziness persists, worsens, or you have fainting episodes.'
  });

  add(['fatigue'],{
    hpc:'[X]-[week/month] history of fatigue/tiredness. Onset [X], pattern [X], sleep [X], mood [X]. Associated [weight change, night sweats, breathlessness, bruising/bleeding, bowel change]. Diet, alcohol, stress, meds [X]. ICE: worried about [X].',
    exam:'[Well]. BMI [], pallor [none], lymphadenopathy [none], thyroid [normal], no hepatosplenomegaly, no bruising. [Cardioresp/abdo as indicated.]',
    ix:'Bloods: FBC, ferritin, U&E, LFT, TFT, glucose/HbA1c, calcium, CRP/ESR, coeliac serology; [B12/folate, vitamin D]. Urine dip. [Further tests guided by associated features.]',
    safetynet:'Return promptly if: unexplained weight loss, drenching night sweats, new lumps, unusual bruising or bleeding, blood in stool, or breathlessness — these need further tests. Seek urgent help if you feel very unwell. Bloods to review.'
  });

  add(['weight loss'],{
    hpc:'[X] history of unexplained weight loss ([X] kg over [X]). Appetite [X], intentional [no]. Associated [GI symptoms, dysphagia, bleeding, cough, night sweats, mood, thyroid symptoms]. Diet/social [X]. ICE: [X].',
    exam:'Weight/BMI [], pallor [], lymphadenopathy [none], thyroid [normal], abdomen [no mass/organomegaly], chest [clear]. [Examination targeted by associated features.]',
    ix:'Bloods: FBC, ferritin, U&E, LFT, calcium, glucose/HbA1c, TFT, CRP/ESR, coeliac serology. Urinalysis. CXR. [Targeted imaging / 2WW referral by likely source — e.g. CA125, FIT.]',
    safetynet:'Return urgently if: difficulty swallowing, vomiting, blood in stool or urine, coughing up blood, or new lumps. This warrants prompt investigation; attend for arranged tests/referral without delay.'
  });

  add(['fever'],{
    hpc:'[X]-day history of fever [temp up to X]. Associated [localising symptoms — cough, dysuria, abdo pain, rash, headache, ENT]. Rigors [X], travel [X], immunosuppression/chemo [no]. Fluid intake [adequate]. ICE: [X].',
    exam:'Temp [], HR [], BP [], RR [], SpO2 []. [Source examination.] No neck stiffness, no non-blanching rash, well-perfused, alert. [NEWS2 / sepsis screen as indicated.]',
    ix:'Observations + NEWS2. Urine dip. [Bloods: FBC, CRP, U&E, LFT; blood cultures if systemically unwell.] [CXR / source-specific tests.] [Malaria film if travel.]',
    safetynet:'Call 999 / seek emergency help if: a rash that does not fade under a glass, neck stiffness, severe headache, confusion or drowsiness, cold/mottled or blue skin, very fast breathing, or not passing urine. Return if fever persists beyond [X days], or you become more unwell.'
  });

  add(['rash'],{
    hpc:'[X] history of rash. Site/distribution [X], appearance [macular/papular/vesicular/urticarial], itch/pain [X], evolution [X]. Associated [fever, systemic upset, mucosal involvement, swelling/breathing difficulty, new drug/food]. ICE: [X].',
    exam:'Distribution [X], morphology [X], [blanching/non-blanching], mucosae [spared], no blistering/skin peeling. Systemically [well]. Temp []. [Photograph for record.]',
    ix:'Usually clinical — photograph for the record. [Skin swab if infected/weeping; FBC/CRP if systemic upset.] Glass test for any non-blanching rash.',
    safetynet:'Call 999 if: the rash does not fade under pressure (glass test) with feeling unwell, lip/tongue/throat swelling or difficulty breathing, or widespread blistering/skin peeling or sores in the mouth/eyes. Return if the rash spreads rapidly, you develop a fever, or it is not settling.'
  });

  add(['mole'],{
    hpc:'[X] history of a changing [pigmented] skin lesion. Changes: [size, shape, colour, itch, bleeding, crusting]. Site [X], duration [X]. Sun exposure/sunburn history, skin type, FH/PH skin cancer [X]. ICE: worried about [skin cancer].',
    exam:'Lesion site [X], [size] mm, [asymmetry, irregular border, colour variation, diameter >7mm, evolution]. 7-point weighted checklist score [X]. [Dermatoscopy if available.] Regional nodes [not enlarged]. [Photograph for record.]',
    ix:'Clinical assessment ± dermoscopy using the weighted 7-point checklist; photograph for monitoring. Do not biopsy in primary care if melanoma suspected — refer 2WW.',
    safetynet:'Return promptly if the lesion changes further — grows, changes colour or shape, itches, bleeds or crusts. If a 2-week-wait referral is made, please attend the appointment; it is to check the lesion quickly, not because cancer is confirmed.'
  });

  add(['joint pain'],{
    hpc:'[X] history of joint pain affecting [joint(s)]. Pattern [mono/oligo/poly], inflammatory [early-morning stiffness >30 min] vs mechanical, swelling/redness/heat [X], onset [X]. Systemic [fever, rash, weight loss]. Function [X]. ICE: [X].',
    exam:'Affected joint(s) [X] — [swelling, warmth, erythema, effusion, reduced/painful range]. Other joints [X]. Temp []. No [single hot swollen joint with fever]. [Examination of relevant systems.]',
    ix:'[If inflammatory/systemic: FBC, CRP/ESR, urate, RF, anti-CCP, ANA; U&E before NSAID.] [X-ray of the affected joint.] Urgent joint aspiration if septic arthritis is possible.',
    safetynet:'Seek same-day help if: a single joint becomes hot, swollen and very painful especially with fever (possible joint infection), or with new severe headache/scalp tenderness/jaw pain over age 50. Return if symptoms persist, spread, or you develop a rash or feel systemically unwell.'
  });

  add(['dysuria'],{
    hpc:'[X]-day history of dysuria with [frequency, urgency, suprapubic discomfort, cloudy/offensive urine, visible blood]. Vaginal symptoms [none]. Fever/loin pain/vomiting [none]. Pregnancy status [X], recurrent UTI/catheter [no]. ICE: wants [symptom relief].',
    exam:'Afebrile, well. Abdomen soft, [suprapubic tenderness], no loin/renal-angle tenderness. Urine dip [nitrite/leucocyte X]. [Pregnancy test if relevant.]',
    ix:'Urine dipstick. [Send MSU for culture if pregnant, recurrent, treatment failure, atypical, or ≥65.] [Pregnancy test if relevant.]',
    safetynet:'Seek urgent help if: fever, shivering/rigors, loin or back pain, vomiting, blood in the urine, or new confusion (older patients). Return if no improvement within 48 hours of starting antibiotics, or symptoms recur.'
  });

  add(['haematuria'],{
    hpc:'[X] history of [visible/non-visible] blood in urine. Pain [none/loin/dysuria], clots [X], timing in stream [X]. Associated [LUTS, weight loss]. Smoking, occupational exposure, anticoagulation [X]. ICE: [X].',
    exam:'[Well]. BP [], abdomen [no mass], [no] loin tenderness. [PR — prostate if relevant.] Urine dip [confirms blood, X]. [Not menstruating.]',
    ix:'Urine dip (confirm and exclude UTI) + MSU. [Bloods: FBC, U&E/eGFR; PSA in men if relevant.] BP. [Urgent referral for imaging + cystoscopy per NG12.]',
    safetynet:'Seek urgent help if: unable to pass urine, clots with severe pain, fever with loin pain, or feeling very unwell. Please attend any arranged urology appointment or scan promptly — visible blood in the urine always needs checking.'
  });

  add(['rectal bleeding'],{
    hpc:'[X] history of rectal bleeding — colour [bright red/dark], [on paper/in pan/mixed with stool], amount [X]. Associated [change in bowel habit, mucus, pain, weight loss, tenesmus]. PH/FH bowel disease/cancer [X]. ICE: [X].',
    exam:'[Well]. Abdomen [soft, no mass]. Anal inspection [X], PR [no mass, X], [no] blood on glove. [FIT/bloods as indicated.]',
    ix:'DRE + abdominal examination. FIT test (per NG12 thresholds). [Bloods: FBC, ferritin for iron-deficiency anaemia.] [2WW colorectal referral if criteria met.]',
    safetynet:'Seek emergency help if: heavy bleeding, light-headedness or fainting, or black tarry stools. Return promptly if there is a persistent change in bowel habit, weight loss, or the bleeding continues — please attend any arranged tests or referral.'
  });

  add(['change in bowel habit'],{
    hpc:'[X] history of change in bowel habit [looser/more frequent/constipation], duration [X]. Associated [rectal bleeding, mucus, weight loss, abdominal pain, tenesmus, nocturnal symptoms]. Diet/travel/meds [X]. FH bowel cancer/IBD [X]. ICE: [X].',
    exam:'[Well]. BMI []. Abdomen [soft, no mass/organomegaly], PR [no mass]. Pallor [none]. [FIT / bloods (FBC, ferritin, coeliac) as indicated.]',
    ix:'FIT test. Bloods: FBC, ferritin, U&E, LFT, coeliac serology, [CRP, TFT]. DRE. [Faecal calprotectin / stool culture if IBD or infection suspected.] [2WW if NG12 criteria met.]',
    safetynet:'Return promptly if: rectal bleeding, unexplained weight loss, persistent change lasting more than [a few weeks], or you feel a lump in the tummy. Attend any arranged FIT test, bloods or referral. Seek urgent help if severe pain, vomiting, or unable to pass stool/wind.'
  });

  add(['dysphagia'],{
    hpc:'[X] history of difficulty swallowing — [solids/liquids/both], progressive [X], level [throat/chest]. Associated [weight loss, regurgitation, odynophagia, reflux, cough on swallowing, hoarseness]. ICE: [X].',
    exam:'[Well]. Weight/BMI []. Neck [no lump/lymphadenopathy]. Chest clear. [Neuro/cranial nerves if bulbar cause considered.]',
    ix:'Refer for urgent direct-access upper GI endoscopy (2WW) — dysphagia at any age. [FBC for anaemia.] Do not delay referral for tests.',
    safetynet:'Difficulty swallowing needs prompt assessment — please attend the arranged urgent endoscopy/clinic. Seek emergency help if: food becomes completely stuck, you cannot swallow your own saliva, choking, or breathing difficulty.'
  });

  add(['palpitations'],{
    hpc:'[X] history of palpitations — [fast/irregular/skipped beats], onset/offset [sudden/gradual], duration [X], frequency [X], triggers [caffeine, alcohol, exertion, stress]. Associated [chest pain, breathlessness, dizziness, syncope]. FH sudden death [X]. ICE: [X].',
    exam:'[Well]. HR [regular/irregular], BP [], heart sounds [normal, no murmur], no signs of heart failure. Thyroid [normal]. [12-lead ECG done — rhythm X.]',
    ix:'12-lead ECG. [Bloods: FBC, U&E, TFT, glucose, calcium/magnesium.] Ambulatory ECG (24h–7day or event recorder) to capture episodes. [Echo if structural disease suspected.]',
    safetynet:'Call 999 if: palpitations with chest pain, severe breathlessness, fainting or collapse. Return if episodes become more frequent or prolonged, or you faint. [Consider ambulatory ECG to capture episodes.]'
  });

  add(['collapse'],{
    hpc:'[X] episode(s) of [collapse/blackout/faint]. Before [prodrome, posture, exertion, palpitations], during [witnessed?, duration, jerking, colour, tongue-biting, incontinence], after [recovery time, confusion]. Injury [X]. FH sudden death [X]. Driving/occupation [X]. ICE: [X].',
    exam:'[Well]. Lying/standing BP [/ → /], HR [regular], heart sounds [normal, no murmur]. Neuro exam [normal]. Injuries [none]. [12-lead ECG done — X.]',
    ix:'12-lead ECG (all patients) + lying/standing BP. [Bloods: FBC, U&E, glucose.] [Ambulatory ECG / echo if cardiac cause suspected.] Assess against DVLA driving rules.',
    safetynet:'Call 999 if: collapse with chest pain, palpitations or breathlessness, collapse during exertion, a prolonged blackout, or injury. Do not drive until assessed — [advise DVLA rules]. Return urgently if further episodes occur.'
  });

  add(['low mood'],{
    hpc:'[X]-week history of low mood / [anxiety], with [anhedonia, poor sleep, low energy, poor concentration, appetite/weight change, hopelessness, worry]. Impact on [function/work/relationships]. PHQ-9 [X] / GAD-7 [X]. Precipitants [X]. Alcohol/substances [X]. Risk assessed. ICE: [X].',
    exam:'Kempt, [affect reactive], rapport [good]. Speech normal, no psychomotor change. No psychotic features. Cognition grossly intact. Risk — [thoughts of self-harm/suicide: none active; protective factors X].',
    ix:'PHQ-9 / GAD-7. [Bloods to exclude organic contributors: FBC, TFT, ferritin, B12/folate, U&E, LFT, HbA1c, calcium, vitamin D.] Risk assessment documented.',
    safetynet:'Seek urgent help — GP same-day, NHS 111, local crisis line, or A&E — if thoughts of harming yourself or ending your life worsen, or you feel unable to keep yourself safe. Crisis numbers given. Return if symptoms worsen or there are medication concerns.'
  });

  add(['leg swelling'],{
    hpc:'[X] history of [unilateral/bilateral] leg swelling. Onset [X], pain/redness/warmth [X], calf [X]. Associated [breathlessness, chest pain, recent immobility/surgery/travel, trauma]. PMH [cardiac/renal/liver], meds [X]. ICE: [X].',
    exam:'[Unilateral/bilateral] swelling, calf [tender/soft], [warmth/erythema], measure calf circumference [X]. Pitting [X]. Chest/heart [X], JVP []. [Wells score X if DVT considered.]',
    ix:'[Unilateral → Wells score; D-dimer if Wells unlikely, Doppler USS if likely (DVT).] [Bilateral → U&E, LFT, albumin, BNP, urine ACR for cardiac/renal/hepatic cause.] BP.',
    safetynet:'Seek same-day/emergency help if: one leg becomes hot, swollen and painful (possible clot), or you develop breathlessness, chest pain or cough up blood (possible clot on the lung). Return if swelling worsens, spreads, or the skin breaks down.'
  });

  add(['breast lump'],{
    hpc:'[X] history of breast [lump/change]. Site [X], size/change [X], pain [X], relation to cycle, skin/nipple change [discharge/retraction], axillary lump [X]. Age [X], HRT/FH breast cancer [X]. ICE: worried about [cancer].',
    exam:'Breast [side] — lump at [position], [size] mm, [mobile/fixed], [skin/nipple change]. Axilla [no nodes]. [Other breast normal].',
    ix:'None in primary care — refer to the breast clinic (2WW if ≥30 with an unexplained lump). Triple assessment (examination + imaging + biopsy) is done in clinic.',
    safetynet:'A breast lump needs checking — please attend the arranged breast clinic appointment. Most are not cancer, but it is important to be seen. Return sooner if the lump grows quickly, the skin changes, or you feel unwell.'
  });

  add(['neck lump'],{
    hpc:'[X] history of neck lump. Site [X], size/change [X], duration [X], pain [X]. Associated [B symptoms — fever, night sweats, weight loss; sore throat, dental, thyroid symptoms, hoarseness, dysphagia]. Smoking/alcohol [X]. ICE: [X].',
    exam:'Lump at [level], [size] mm, [consistency], [mobile/fixed/tethered], [tender]. Other nodes [X], thyroid [X]. ENT/oral cavity [X]. No stridor.',
    ix:'USS neck (first-line). [Bloods: FBC, EBV serology, TFT if thyroid.] [2WW head & neck or suspected-haematological referral if persistent or B symptoms.]',
    safetynet:'Please attend any arranged urgent clinic/ultrasound. Seek urgent help if the lump grows rapidly, you develop difficulty breathing or swallowing, or drenching night sweats and weight loss. Return if a lump persists beyond [3 weeks].'
  });

  add(['hoarseness'],{
    hpc:'[X]-week history of hoarseness/voice change. Persistent [X], associated [neck lump, dysphagia, throat pain, reflux, cough, weight loss]. Smoking/alcohol [X], voice use [X]. ICE: [X].',
    exam:'Voice [hoarse]. Neck [no lump/lymphadenopathy]. Oral cavity/oropharynx [X]. No stridor or respiratory distress.',
    ix:'Refer 2WW head & neck (persistent >3 weeks, age ≥45) for laryngoscopy. [CXR.] [Trial of reflux measures / voice hygiene if no red flags.]',
    safetynet:'Hoarseness lasting over 3 weeks needs checking — please attend the arranged ENT/2-week-wait appointment. Seek urgent help if you develop difficulty breathing, noisy breathing, or a rapidly growing neck lump.'
  });

  add(['post-menopausal bleeding'],{
    hpc:'Postmenopausal bleeding — LMP [X] ([>12 months]). Bleeding [amount, duration, recurrence], associated [pain, discharge]. HRT [X], tamoxifen [X], risk factors [obesity, diabetes]. ICE: [X].',
    exam:'[Well]. Abdomen [soft, no mass]. [Speculum — cervix X; bimanual — uterus X.] BMI [].',
    ix:'Refer 2WW gynaecology — transvaginal USS (endometrial thickness) ± hysteroscopy and biopsy in clinic. [FBC if heavy.]',
    safetynet:'Postmenopausal bleeding always needs checking — please attend the arranged 2-week-wait gynaecology appointment. Most causes are not cancer, but it is important to be seen. Return sooner if heavy bleeding, pain or feeling unwell.'
  });

  add(['pv bleeding'],{
    hpc:'[X] history of abnormal vaginal bleeding — [intermenstrual/postcoital/heavy/irregular]. Cycle [X], LMP [X], pregnancy status [X]. Associated [pain, discharge, dyspareunia]. Smear history [X], contraception/HRT [X]. ICE: [X].',
    exam:'[Well]. Abdomen [soft, no mass]. [Speculum — cervix X; bimanual — uterus/adnexae X.] [Pregnancy test if relevant.]',
    ix:'Pregnancy test if relevant. [Speculum + cervical assessment; ensure smear is up to date.] [FBC if heavy; chlamydia swab if indicated.] [USS / referral per likely cause.]',
    safetynet:'Seek emergency help if: heavy bleeding with light-headedness/fainting, or (if pregnancy possible) severe one-sided pelvic pain or shoulder-tip pain. Return promptly if persistent bleeding between periods or after sex — examination ± referral may be needed.'
  });

  add(['red eye'],{
    hpc:'[X]-day history of [unilateral/bilateral] red eye. Discharge [watery/purulent], [gritty/itchy], pain [none/severe], photophobia [X], visual change [none]. Contact-lens wear [X], trauma [X]. ICE: [X].',
    exam:'Visual acuity [normal, unchanged]. Conjunctival injection [diffuse], discharge [type]. Cornea [clear], pupil [normal/reactive], no ciliary flush. [Fluorescein if indicated.] Lids [X].',
    ix:'Visual acuity. [Fluorescein staining if pain or corneal involvement.] Usually clinical. [Swab if severe, persistent or neonatal.] Same-day ophthalmology if sight-threatening features.',
    safetynet:'Seek same-day eye assessment if: vision becomes blurred or reduced, significant eye pain, marked light sensitivity, or you wear contact lenses and the eye is red and painful. Return if not improving within [1–2 weeks].'
  });

  add(['ear pain'],{
    hpc:'[X]-day history of ear pain [side]. Associated [discharge, hearing loss, fever, coryza, itch, vertigo]. Recent [URTI, water exposure, trauma]. Diabetes/immunosuppression [X]. [Child: pulling at ear, feeding, irritability.] ICE: [X].',
    exam:'Temp []. Pinna/canal [X], tympanic membrane [red/bulging/perforated/normal], [discharge]. No post-auricular swelling/tenderness. Throat/nose [X]. Neck supple.',
    ix:'Otoscopy — clinical diagnosis. [Ear swab if discharge not settling.] [Audiometry if persistent hearing loss.] [Consider referred causes if the ear looks normal and age ≥45.]',
    safetynet:'Seek urgent help if: swelling or redness behind the ear with the ear pushed forward, neck stiffness, severe headache, drowsiness, dizziness with hearing loss, or (especially if diabetic) severe ear pain. Return if not improving within [3 days] or hearing remains reduced.'
  });

  add(['lump','swelling','mass'],{
    hpc:'[X] history of a lump/swelling at [site]. Size/change [X], duration [X], pain [X], skin change [X], systemic [fever, weight loss, night sweats]. ICE: [X].',
    exam:'Lump at [site], [size] mm, [consistency], [mobile/fixed/deep], [tender], overlying skin [X], [fluctuant/pulsatile]. Regional nodes [X].',
    ix:'Clinical assessment with measurement and photograph. [USS first-line for a soft-tissue lump.] [2WW sarcoma referral if deep, fixed, >5cm or rapidly growing.]',
    safetynet:'Seek same-day help if the lump becomes hot, red, rapidly enlarging or very painful with fever (possible infection). Please attend any arranged scan/referral. Return if a lump persists, grows, or becomes fixed/hard.'
  });

  add(['testicular'],{
    hpc:'[X] history of [scrotal/testicular] pain or lump. Onset [sudden/gradual], side [X], severity [X], associated [swelling, nausea/vomiting, urinary symptoms, trauma]. Age [X]. ICE: [X].',
    exam:'[Well/distressed]. Scrotum — [side] [swollen/tender], lie [X], cremasteric reflex [X], [mass — separate from/part of testis], transillumination [X]. Abdomen [X].',
    ix:'Urgent same-day assessment if torsion suspected — do NOT delay for imaging. [Urine dip if epididymo-orchitis.] [Urgent scrotal USS + urology 2WW for a painless lump.]',
    safetynet:'Call/attend same-day emergency care if: sudden severe testicular pain or swelling — this can be a twisted testicle (torsion) and needs surgery within hours. For a painless lump, please attend the arranged urgent ultrasound/urology appointment.'
  });

  add(['child fever'],{
    hpc:'[Age] child, [X]-day history of fever [up to X]. Activity/feeding/wet nappies [X], rash [X], focal symptoms [cough, ear, urine, D&V]. Immunisations [up to date], contacts/travel [X]. Parental concern [X]. ICE: [X].',
    exam:'Alert/[interactive], well-perfused, CRT [<2s]. Temp [], HR [], RR [], SpO2 []. No non-blanching rash, neck supple, fontanelle [normal], hydration [X]. ENT/chest/abdomen [X]. [Traffic-light: green/amber/red.]',
    ix:'Observations with paediatric traffic-light / NEWS. Urine dip (clean catch) to exclude UTI. [Bloods/CXR only if a focus or systemically unwell.] [Very urgent FBC if petechiae/hepatosplenomegaly — leukaemia, NG12.]',
    safetynet:'Call 999 / go to A&E if your child: has a rash that does not fade under a glass, a stiff neck or dislike of light, is unusually drowsy/difficult to wake or floppy, has fast or difficult breathing, becomes pale/mottled/blue, has a fit, or is not passing urine. Seek same-day help if not improving, fewer wet nappies, or you remain worried. Give fluids and antipyretics for comfort.'
  });

  add(['vomiting'],{
    hpc:'[X] history of vomiting [± diarrhoea]. Frequency [X], content [food/bile/blood/coffee-ground], associated [abdominal pain, fever, headache, dizziness]. Fluid intake/urine output [X]. Unwell contacts/travel [X]. Meds [X]. ICE: [X].',
    exam:'[Well/dehydrated]. Temp [], HR [], BP [lying/standing], mucous membranes [X], CRT []. Abdomen [soft, no mass, bowel sounds X]. [Ketones/glucose if relevant.]',
    ix:'[Hydration assessment.] [If dehydrated/unwell: U&E, FBC, glucose, ketones.] [Pregnancy test if relevant.] Capillary glucose + ketones if diabetic. [Imaging only if a surgical/obstructive cause is suspected.]',
    safetynet:'Seek same-day/emergency help if: vomiting blood or dark "coffee-ground" material, green (bile) vomit, severe or constant tummy pain, signs of dehydration (not passing urine, dizziness), a severe headache, or drowsiness/confusion. Return if unable to keep fluids down or not improving in [24–48 hours].'
  });

  window.RGP_COMPLAINT_SCAFFOLDS = S;
})();
