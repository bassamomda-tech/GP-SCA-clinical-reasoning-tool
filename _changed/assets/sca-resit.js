/* ============================================================
   Reasoning GP — The Resit Clinic: diagnostic data & engine
   The failed diet is treated as a clinical presentation:
   HISTORY (results letter) → EXAMINATION (symptom questionnaire)
   → DIAGNOSIS (named failure syndromes, with evidence)
   → TREATMENT (personalised week-by-week plan).
   All original content.
   ============================================================ */

window.SCA_RESIT = {

  /* ---- RCGP-style feedback areas, paraphrased & grouped.
         The candidate ticks the ones that appeared on their letter. ---- */
  statements: [
    { id:'fb-dg-focus',   dom:'dg', t:'Questioning lacked focus — data gathering not tailored to the presenting problem' },
    { id:'fb-dg-records', dom:'dg', t:'Did not make adequate use of the information provided (records / test results)' },
    { id:'fb-dg-redflag', dom:'dg', t:'Did not adequately identify or assess significant/red-flag features' },
    { id:'fb-dg-dx',      dom:'dg', t:'Did not reach or share an appropriate working diagnosis' },
    { id:'fb-cm-plan',    dom:'cm', t:'Management plan not appropriate, not specific enough, or unsafe for this presentation' },
    { id:'fb-cm-guide',   dom:'cm', t:'Management did not reflect current UK primary-care practice / guidance' },
    { id:'fb-cm-urgency', dom:'cm', t:'Urgency misjudged — wrong timeframe for action or referral' },
    { id:'fb-cm-net',     dom:'cm', t:'Inadequate safety-netting or follow-up arrangements' },
    { id:'fb-cm-share',   dom:'cm', t:'Did not offer options or involve the patient in management decisions' },
    { id:'fb-ro-cues',    dom:'ro', t:'Did not recognise or respond to patient cues' },
    { id:'fb-ro-ice',     dom:'ro', t:'Did not adequately explore or use the patient\u2019s ideas, concerns and expectations' },
    { id:'fb-ro-lang',    dom:'ro', t:'Explanations unclear — jargon, or not matched to the patient\u2019s understanding' },
    { id:'fb-ro-centred', dom:'ro', t:'Consultation doctor-centred — patient\u2019s perspective did not shape the encounter' },
    { id:'fb-time',       dom:'gs', t:'Time management — consultations incomplete or key stages rushed/missing' },
  ],

  /* ---- Examination: honest symptom questionnaire ---- */
  symptoms: [
    { id:'sy-time',     t:'In three or more cases, the buzzer arrived before I\u2019d finished (or started) the management plan', maps:{ minute11:3, collapse:1 } },
    { id:'sy-template', t:'I asked the same opening battery of questions in most cases regardless of presentation', maps:{ template:3 } },
    { id:'sy-records',  t:'Looking back, the case records contained information I never used or repeated questions about', maps:{ template:1, records:3 } },
    { id:'sy-cues',     t:'Reading the cases afterwards, I can think of patient remarks I heard but didn\u2019t follow', maps:{ cues:3 } },
    { id:'sy-script',   t:'I used prepared phrases for empathy/ICE ("I\u2019m sorry to hear that", "what are your concerns?") at set points', maps:{ formulaic:3 } },
    { id:'sy-hedge',    t:'I rarely told the patient a working diagnosis by name — I kept options open out loud', maps:{ hedging:3 } },
    { id:'sy-refer',    t:'My default plan involved referral, "discussing with a senior", or arranging tests rather than treating', maps:{ secondary:3 } },
    { id:'sy-generic',  t:'My management plans would mostly have fitted any patient with that condition', maps:{ generic:3 } },
    { id:'sy-net',      t:'My safety-netting was usually a version of "come back if it gets worse"', maps:{ nonet:3 } },
    { id:'sy-phone',    t:'The audio-only (telephone) cases felt distinctly harder than the video ones', maps:{ phone:3 } },
    { id:'sy-collapse', t:'One bad case shook me and I underperformed in the case(s) immediately after it', maps:{ collapse:3 } },
    { id:'sy-blank',    t:'In at least one case I didn\u2019t know the clinical area well enough to manage it', maps:{ knowledge:3 } },
    { id:'sy-jargon',   t:'I sometimes translated my thinking into formal/medical English rather than everyday words', maps:{ jargon:3 } },
    { id:'sy-rush',     t:'I spoke noticeably faster as cases went on, or interrupted patients to save time', maps:{ minute11:1, formulaic:1, collapse:1 } },
    { id:'sy-prep',     t:'Most of my preparation was reading cases/notes rather than consulting out loud', maps:{ silent:3 } },
    { id:'sy-solo',     t:'I had little or no role-play with another person before sitting', maps:{ silent:2, formulaic:1 } },
  ],

  /* ---- The named diagnoses ---- */
  diagnoses: {
    template: {
      name:'Template questioning syndrome', ic:'📋', dom:'dg',
      mech:'A memorised question battery replaces hypothesis-driven thinking. It feels safe and looks busy — but examiners mark discrimination, not coverage, and the recited screen eats the minutes your management needed.',
      sign:'Low Data Gathering grades + "questioning lacked focus" feedback + the same opening questions in every case.',
      rx:[
        { do:'Before every practice case, write the 3 most likely diagnoses from the brief alone, then ask ONLY questions that separate them', tool:'sca-practice.html', tl:'The Hot Seat — every case brief trains this' },
        { do:'Re-mark 3 candidate transcripts watching specifically for template vs hypothesis questioning', tool:'sca-examiner.html', tl:'You Be the Examiner' },
        { do:'Daily: one cue-spotting rep — cues are what template questioning talks over', tool:'sca-daily.html', tl:'The Daily 10' },
      ]
    },
    records: {
      name:'Unmined records', ic:'🗂️', dom:'dg',
      mech:'The 3-minute records window is treated as a countdown instead of a resource. Questions then duplicate what the notes already said — which examiners read as not preparing, and patients experience as not being known.',
      sign:'"Did not use information provided" feedback; discovering afterwards that the stem contained the case\u2019s hinge.',
      rx:[
        { do:'Drill the 3-minute read: for each Hot Seat stem, write WHAT\u2019S the trap / WHAT\u2019s already answered / WHERE must I be by minute 7 — before starting', tool:'sca-practice.html', tl:'Hot Seat record stems' },
        { do:'Run circuits where you only get the 3-minute window — no pausing', tool:'sca-circuit.html', tl:'Mock Exam Circuit' },
      ]
    },
    minute11: {
      name:'The minute-11 plan', ic:'⏱️', dom:'cm',
      mech:'A thorough history with no time left to manage. Clinical Management is weighted ×1.5 — so the domain you starve is the most expensive one. This is the single commonest mechanical cause of failed diets.',
      sign:'Time-management feedback + CM grades lower than DG + the buzzer beating the plan in 3+ cases.',
      rx:[
        { do:'Hard rule for every practice case: summarise by minute 6, first management sentence by minute 7 — set an audible timer until it\u2019s automatic', tool:'sca-practice.html', tl:'Time maps in every case brief' },
        { do:'Weekly circuit under true exam timing — the skill is pacing across cases, not within one', tool:'sca-circuit.html', tl:'Mock Exam Circuit' },
        { do:'Tick the time-discipline checklist after every run and watch the trend', tool:'sca-practice.html', tl:'Feedback Part 2' },
      ]
    },
    generic: {
      name:'Generic management', ic:'💊', dom:'cm',
      mech:'The plan is correct for the condition and wrong for the person — it ignores the taxi licence, the fast, the carer, the deadline. Examiners specifically reward plans that could only belong to THIS patient.',
      sign:'"Plan not specific enough" feedback; pass-level DG with fail-level CM; plans you could copy-paste between cases.',
      rx:[
        { do:'After every case ask: name 2 things in my plan that exist ONLY because of who this patient is. If you can\u2019t, redo the plan', tool:'sca-practice.html', tl:'Word-pictures show what specific sounds like' },
        { do:'Read the Manage rows of the clinical pathways — they model patient-shaped management', tool:'sca-practice.html', tl:'SCA Knowledge step' },
      ]
    },
    nonet: {
      name:'The vanishing safety-net', ic:'🪢', dom:'cm',
      mech:'"Come back if it gets worse" is not a safety-net — it has no symptoms, no timeframe, no route. A complete net takes 25 seconds and is among the most mechanically fixable marks in the exam.',
      sign:'Safety-netting feedback; closes that trail off; no named symptoms in your endings.',
      rx:[
        { do:'Daily safety-net drill: build one net out loud, mark it against named symptoms + timeframe + route back', tool:'sca-drills.html', tl:'Micro-Drills — Safety-net builder' },
        { do:'End every practice case by writing your net down verbatim — if it has fewer than 3 parts, it failed', tool:'sca-daily.html', tl:'The Daily 10' },
      ]
    },
    secondary: {
      name:'Secondary-care reflex', ic:'🏥', dom:'cm',
      mech:'Hospital training installs "refer/escalate/investigate" as the safe default. The SCA examines an INDEPENDENT GP — deferring what UK primary care manages in-house reads as below the licensing standard.',
      sign:'Plans built around referral and senior discussion; urgency feedback; strongest in candidates with recent hospital posts or non-UK training.',
      rx:[
        { do:'For every case ask first: what would a UK GP do TODAY without anyone\u2019s permission? Start the plan there', tool:'sca-guide.html', tl:'Guide §4 — fail pattern 5' },
        { do:'Learn the in-house ladders for your weak topic areas from the site\u2019s protocols and pathways', tool:'../tools/algorithms.html', tl:'Algorithms hub' },
        { do:'Note which referrals in your practice cases a trainer would have kept — review with your ES', tool:'sca-real-feedback.html', tl:'Real-Consultation Feedback' },
      ]
    },
    cues: {
      name:'Cue deafness', ic:'🎭', dom:'ro',
      mech:'Stations plant 2–3 cues deliberately — the throwaway "since Margaret passed", the glance away. Missing them caps Relating to Others at borderline no matter how warm you are, because responding to cues IS the marked behaviour.',
      sign:'"Did not respond to cues" feedback; reading a case afterwards and seeing the line you sailed past.',
      rx:[
        { do:'Daily cue-spotting reps until your hit-rate is >80%', tool:'sca-drills.html', tl:'Micro-Drills — Cue-spotting' },
        { do:'In every Hot Seat debrief, complete the cue-recognition checklist honestly', tool:'sca-practice.html', tl:'Feedback Part 2' },
        { do:'Re-mark Candidate A\u2019s transcript — watch cues being refused twice and what it costs', tool:'sca-examiner.html', tl:'You Be the Examiner' },
      ]
    },
    formulaic: {
      name:'Formulaic empathy', ic:'📜', dom:'ro',
      mech:'Rehearsed lines ("I\u2019m sorry to hear that, that must be difficult") deployed on schedule. Examiners hear them ten times a day; scripted warmth registers as absence of warmth. The fix is responding to the SPECIFIC thing said, not performing a phase.',
      sign:'"Doctor-centred / ICE not used" feedback despite you "doing ICE"; empathy lines that could move between cases unchanged.',
      rx:[
        { do:'Study the "Heard all day vs Sounds like you" contrast pairs for every case — learn the principle, not new scripts', tool:'sca-practice.html', tl:'Feedback Part 6' },
        { do:'Golden-minute drill: respond to openings with content, not ceremony', tool:'sca-drills.html', tl:'Micro-Drills — Golden minute' },
        { do:'Rule for practice: never ask "what are your concerns?" — instead respond to a concern they\u2019ve already shown', tool:'sca-playbooks.html', tl:'Playbooks' },
      ]
    },
    hedging: {
      name:'Diagnostic hedging', ic:'🌫️', dom:'dg',
      mech:'Fear of being wrong produces "it could be several things…" — which examiners mark as not knowing. The exam rewards a sensible working diagnosis said plainly, with uncertainty managed honestly, even when it turns out wrong.',
      sign:'"Did not reach/share a working diagnosis" feedback; patients in your practice runs not being told what you think.',
      rx:[
        { do:'Script the commitment sentence and use it every case: "I think this is X — here\u2019s why, and here\u2019s what would change my mind"', tool:'sca-practice.html', tl:'The Hot Seat' },
        { do:'45-second explainer daily — naming and explaining conditions builds the committing muscle', tool:'sca-explainer.html', tl:'45-Second Explainer' },
      ]
    },
    jargon: {
      name:'Register mismatch', ic:'🗣️', dom:'ro',
      mech:'Thinking happens in medical English and surfaces untranslated — "stage 2 hypertension", "we\u2019ll titrate". Patients (and examiners) need everyday words. Disproportionately penalised because it compounds: every explanation, every consent, every net.',
      sign:'"Explanations unclear / jargon" feedback; patients in practice saying "so what does that actually mean?"',
      rx:[
        { do:'Three 45-second explainers a day until plain English is the default register, not a translation step', tool:'sca-explainer.html', tl:'45-Second Explainer' },
        { do:'Teach-back in every practice case: "what will you tell your partner tonight?" — if they can\u2019t say it, you didn\u2019t explain it', tool:'sca-practice.html', tl:'Worked phrases' },
      ]
    },
    phone: {
      name:'Telephone craft deficit', ic:'📞', dom:'ro',
      mech:'~A quarter of the diet is audio-only. Without eyes, unsignposted silence reads as absence, unverbalised actions vanish, and disposition (today / tomorrow / 999) becomes the centre of gravity. It is a separate, trainable craft.',
      sign:'Audio cases felt harder; telephone-case grades lower than video.',
      rx:[
        { do:'Run Hot Seat cases in Telephone mode — verbalise everything you\u2019d normally show', tool:'sca-practice.html', tl:'📞 toggle in the consultation step' },
        { do:'Practise the two telephone cases (RIF pain, FIT result) until disposition decisions are instant', tool:'sca-practice.html', tl:'Telephone cases' },
      ]
    },
    knowledge: {
      name:'True knowledge gap', ic:'📚', dom:'dg',
      mech:'Rarer than candidates believe — most "knowledge" failures are consulting failures — but real when specific clinical areas collapse across all three domains. The fix is targeted, not another textbook lap.',
      sign:'Specific experience groups failing across every domain; "didn\u2019t know what to do" moments you can name.',
      rx:[
        { do:'List the case topics that beat you; revise ONLY those via the site\u2019s pathways, protocols and case walkthroughs', tool:'../tools/algorithms.html', tl:'Algorithms hub' },
        { do:'Check your heat-map for cold experience groups and practise those cases first', tool:'sca-progress.html', tl:'Progress Heat-map' },
        { do:'Read the SCA Knowledge step (all 7 stages) for every weak case before re-running it', tool:'sca-practice.html', tl:'SCA Knowledge' },
      ]
    },
    collapse: {
      name:'Station bleed', ic:'🌊', dom:'gs',
      mech:'One bad case contaminates the next two — rumination steals the records window, anxiety speeds your speech, and a single fail becomes three. Examiners mark cases independently; candidates often don\u2019t.',
      sign:'A cluster of weak grades following one disaster case; remembering the day as "it unravelled after case N".',
      rx:[
        { do:'Weekly full circuits with a practised 10-second reset ritual between cases (exhale, name the next task, open the records)', tool:'sca-circuit.html', tl:'Mock Exam Circuit' },
        { do:'Deliberately practise recovering: mid-circuit, have a partner make one case brutal, then mark how the NEXT one goes', tool:'sca-roleplay.html', tl:'Role-Play Packs' },
      ]
    },
    silent: {
      name:'Silent preparation', ic:'🤫', dom:'gs',
      mech:'Reading cases builds recognition; only speaking builds consultations. A diet failed after mostly-silent preparation is usually a performance gap, not a knowledge gap — the words had never been said aloud before exam day.',
      sign:'Extensive notes, little role-play; fluency collapsing under pressure despite knowing the material.',
      rx:[
        { do:'Every practice element OUT LOUD from today — explainers, nets, golden minutes, whole cases. No silent reps', tool:'sca-daily.html', tl:'The Daily 10' },
        { do:'Weekly three-person role-play with the printable packs — recruit colleagues; it is the gold standard for a reason', tool:'sca-roleplay.html', tl:'Role-Play Packs' },
        { do:'Record yourself and run the transcript through examiner feedback', tool:'sca-real-feedback.html', tl:'Real-Consultation Feedback' },
      ]
    },
  },

  /* ---- statement → diagnosis evidence weights ---- */
  stmtMap: {
    'fb-dg-focus':   { template:3 },
    'fb-dg-records': { records:3 },
    'fb-dg-redflag': { template:1, knowledge:2 },
    'fb-dg-dx':      { hedging:3 },
    'fb-cm-plan':    { generic:2, knowledge:1 },
    'fb-cm-guide':   { secondary:2, knowledge:2 },
    'fb-cm-urgency': { secondary:1, knowledge:1, minute11:1 },
    'fb-cm-net':     { nonet:3 },
    'fb-cm-share':   { generic:1, formulaic:1 },
    'fb-ro-cues':    { cues:3 },
    'fb-ro-ice':     { formulaic:2, cues:1 },
    'fb-ro-lang':    { jargon:3 },
    'fb-ro-centred': { formulaic:2, template:1 },
    'fb-time':       { minute11:3, collapse:1 },
  },

  /* ---- domain-grade → diagnosis nudges (applied from per-domain self-report) ---- */
  domMap: {
    dg: ['template', 'records', 'hedging'],
    cm: ['minute11', 'generic', 'nonet', 'secondary'],
    ro: ['cues', 'formulaic', 'jargon'],
  }
};
