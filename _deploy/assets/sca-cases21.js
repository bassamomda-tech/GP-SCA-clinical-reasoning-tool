/* ============================================================
   Reasoning GP — Case Library batch 21: "Falls, bones & frailty"
   Four ORIGINAL cases. Hidden agenda + full ICE in every case.
   IDs REPAIR pre-existing dangling live: flags in the library
   (recurrent-falls-review, dexa-bisphosphonate, pagets-incidental, carer-strain).
   No NG12 cancer link applies to these presentations (correctly omitted).
   Pushes into SCA_CASES + SCA_EXTRAS. Load AFTER sca-cases20.js.
   ============================================================ */

(function(){

  /* ============ 77. TELEPHONE — Recurrent falls: the multifactorial review ============ */
  const c77 = {
    id:'recurrent-falls-review', title:'"I just tripped, that\u2019s all \u2014 these old carpets"', type:'telephone', duration:12,
    meta:{ age:79, sex:'F', setting:'Telephone — third fall in three months; daughter prompted the call.', system:'Older adults / Multifactorial falls review' },
    brief:'Mrs Eunice Barley, 79, lives alone in a terraced house. Three falls in three months; the latest left a bruised hip. Rings (pushed by her daughter) and immediately blames "the carpets". On record: hypertension on amlodipine + indapamide, amitriptyline (old, for sleep), zopiclone PRN, BMI 21, cataracts awaiting surgery, drinks little. Minimises throughout; very keen not to "lose her independence". Last fall she lay on the floor 40 minutes.',
    script:{
      opening:'"Honestly, I don\u2019t know why my daughter\u2019s made such a fuss. I just caught my foot on the carpet \u2014 these old rugs, they\u2019re a menace. It\u2019s nothing to do with me being doddery; I\u2019m perfectly capable. I really don\u2019t want a load of people traipsing through my house deciding I can\u2019t cope. Can you just tell her I\u2019m fine so she stops on at me?"',
      facts:[
        { topic:'The falls pattern',    text:'If explored beyond "the carpet": three falls in three months \u2014 a recurrent faller by definition. The latest she lay on the floor ~40 minutes before help (a long lie \u2014 a red flag for serious consequences). Some occurred on standing (possible postural drop). No clear loss of consciousness, but worth excluding syncope/cardiac causes.' },
        { topic:'The reversible factors', text:'A multifactorial cluster: polypharmacy (two antihypertensives incl. a diuretic, amitriptyline \u2014 anticholinergic/sedating, zopiclone \u2014 sedating/falls-risk), possible postural hypotension, impaired vision (cataracts awaiting surgery), and likely home hazards. Each is modifiable; the meds are the highest-yield.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 the minimising is fear: she is terrified that admitting to falls means losing her home and being "put in a home". The blame on the carpet is a shield. Underneath she is frightened by the long lie (she couldn\u2019t get up and thought no one would come), and she has quietly stopped going out, becoming isolated, because she\u2019s scared of falling outside.' },
        { topic:'The fear of dependence', text:'If reached: she equates a falls assessment with surveillance and the first step to a care home; the daughter\u2019s worry is the reliable signal. Reframing the assessment as the route to STAYING independent is the key.' },
        { topic:'What she wants',       text:'Officially: to be told she\u2019s fine so her daughter stops fussing. What is needed: a proper multifactorial falls assessment (meds review/deprescribing, postural BP, vision, gait/balance, bone health, home hazards) framed around preserving independence, with a personal-alarm/long-lie safety net.' },
      ],
      ice:{
        ideas:'It was just tripping on the carpets \u2014 nothing to do with her health; she\u2019s perfectly capable.',
        concerns:'HIDDEN AGENDA \u2014 terror that admitting to falls means losing her home and being "put in a home"; frightened by lying on the floor unable to get up, and quietly isolating herself for fear of falling outside.',
        expectations:'To be reassured and left alone. What she actually needs: a multifactorial falls assessment and medication review framed around keeping her independent, plus a long-lie safety net.'
      },
      cues:['"I just tripped on the carpet" \u2014 a single external cause offered to deflect a multifactorial problem; three falls is recurrent.','Lay on the floor 40 minutes \u2014 a long lie; a major red flag she\u2019s glossed over.','"I don\u2019t want people deciding I can\u2019t cope" \u2014 the fear of losing independence driving the minimisation; the daughter\u2019s worry is the signal.']
    },
    checkpoints:[
      { dom:'tasks', text:'Recognises this as RECURRENT falls (\u22652 in a year) warranting a structured MULTIFACTORIAL assessment, and does not accept "just the carpet" as the explanation' },
      { dom:'tasks', text:'Prioritises the MEDICATION review/deprescribing as highest-yield: two antihypertensives incl. a diuretic (postural drop), amitriptyline (anticholinergic/sedating \u2014 rarely justified for sleep at 79) and zopiclone (sedating, falls-risk) \u2014 plans rationalisation (STOPP-START thinking)' },
      { dom:'tasks', text:'Covers the other multifactorial domains: postural (lying/standing) BP, vision (cataracts awaiting surgery \u2014 expedite), gait/balance and strength (physio/falls service), continence, cognition, footwear, alcohol, and home-hazard assessment (OT)' },
      { dom:'tasks', text:'Addresses BONE HEALTH and the long lie: a bruised hip and recurrent falls warrant fracture-risk/osteoporosis assessment (FRAX/DEXA), and the 40-minute long lie is flagged as a red flag (rhabdomyolysis, pressure injury, hypothermia, fear) prompting a personal-alarm/lifeline solution' },
      { dom:'tasks', text:'Considers syncope/cardiac causes where relevant (falls on standing, any blackout) and refers to the falls service / appropriate pathway rather than managing piecemeal' },
      { dom:'rto',   text:'Hears the fear beneath the minimisation and the daughter\u2019s worry as the reliable signal; does not collude with "tell her I\u2019m fine"' },
      { dom:'rto',   text:'Reframes EVERY intervention around PRESERVING independence and dignity: a falls assessment and the right changes are how she STAYS in her home, not the road to a care home; partners with her (and, with consent, her daughter)' },
      { dom:'gs',    text:'Safety-nets and coordinates: deprescribe with a plan and BP recheck, falls-service/OT/physio referral, expedite cataract surgery, bone-health assessment, a personal alarm and "fall + can\u2019t get up = 999", and a defined review \u2014 risk reduced, independence protected' },
    ],
    worked:[
      { lbl:'Disarm the deflection',  txt:'"I hear you on the carpets \u2014 and we should sort those too. But can I be honest with you, Eunice? Three falls in three months usually isn\u2019t just the rugs; it\u2019s often a handful of small things adding up, and the good news is most of them are fixable. I\u2019m not interested in deciding you can\u2019t cope \u2014 I\u2019m interested in keeping you on your feet and in your own home."' },
      { lbl:'Name the long lie',      txt:'"The thing that actually worries me most \u2014 last time you were on the floor about forty minutes before anyone came. That must have been frightening, lying there wondering if anyone would. That on its own is a reason for us to act, because next time we want help to reach you fast."' },
      { lbl:'The medication win',     txt:'"Here\u2019s the most powerful bit, and it\u2019s easy: several of your tablets can make you light-headed or unsteady \u2014 the water tablet, the old sleeping one, and the zopiclone. We can safely trim those back, and I\u2019d expect the falls to improve a lot. That\u2019s not taking something away from you; it\u2019s removing things that are tripping you up."' },
      { lbl:'Reframe the fear',       txt:'"I think the real worry under all this is that a falls assessment is the first step to a home. Let me turn that right around: it\u2019s the opposite. The whole point \u2014 the right tablets, getting your cataracts done sooner, a bit of balance work, a check of the house \u2014 is exactly what keeps you independent and OUT of a home. My goal is your front door staying yours."' },
      { lbl:'Bones + the outside fear', txt:'"Because you bruised your hip and you\u2019ve fallen a few times, I want to check your bone strength too, so a fall doesn\u2019t become a broken hip. And I get the sense you\u2019ve stopped going out for fear of falling \u2014 that\u2019s understandable, but it makes you weaker and more isolated, which raises the risk. Let\u2019s build your confidence back with the right support."' },
      { lbl:'Plan + safety-net',      txt:'"So: I\u2019ll review and adjust your tablets and check your blood pressure lying and standing, get the falls team and an occupational therapist to look at balance and the house, chase your cataract op, and check your bones. And let\u2019s get you a personal alarm \u2014 a button you wear \u2014 so if you ever go down and can\u2019t get up, help comes quickly; that\u2019s always a 999, never a wait. I\u2019ll ring you in a week. None of this is about taking over \u2014 it\u2019s about you staying you, at home."' },
    ],
    learning:'Three falls in three months is recurrent falls requiring a structured MULTIFACTORIAL assessment, not acceptance of "just the carpet". The highest-yield intervention is almost always the MEDICATION review/deprescribing \u2014 here a polypharmacy cluster (two antihypertensives including a diuretic, amitriptyline, zopiclone) driving postural drop and sedation. The full assessment spans postural BP, vision (expedite the cataracts), gait/balance/strength (physio/falls service), continence, cognition, footwear, alcohol, home hazards (OT), and \u2014 importantly \u2014 bone health (a bruised hip + recurrent falls warrants fracture-risk/DEXA) and the long lie (40 minutes on the floor is a red flag prompting a personal alarm). The examinable hidden agenda is the fear that admitting falls means losing her home; the minimisation is a shield and the daughter\u2019s worry is the reliable signal. Reframe every intervention around PRESERVING independence \u2014 the assessment is how she STAYS home, not the road to a care home \u2014 and safety-net the long lie. Dignity protected, risk reduced.',
    knowledge:{
      guideline:'NICE CG161 falls in older people · NICE NG56 multimorbidity / STOPP-START · NOGG/FRAX bone health · BGS frailty',
      points:[
        { h:'Recurrent falls = multifactorial assessment', t:'\u22652 falls in a year (or any fall with injury/gait-balance concern) warrants a structured multifactorial assessment: falls history, medications, postural BP, gait/balance/strength, vision, cognition, continence, cardiovascular (syncope), feet/footwear, home hazards, and bone health. Don\u2019t accept a single "tripped" cause.' },
        { h:'Medication review is highest-yield', t:'Culprits: antihypertensives (especially combined/diuretics), sedatives/hypnotics (zopiclone), anticholinergics and tricyclics (amitriptyline), opioids, and others. Rationalise/deprescribe (STOPP-START); it is often the single most effective falls intervention. Amitriptyline for sleep in a 79-year-old is rarely justified.' },
        { h:'Postural hypotension & syncope', t:'Check lying-and-standing BP (drop \u226520 systolic/\u226510 diastolic with symptoms). Consider cardiac/syncopal causes if falls occur on standing or with any blackout, and refer appropriately rather than managing piecemeal.' },
        { h:'Bone health & the long lie', t:'Recurrent falls plus injury (bruised hip) warrant fracture-risk assessment (FRAX) \u00b1 DEXA and treatment if indicated \u2014 a fall plus osteoporosis is a hip fracture waiting to happen. A "long lie" (>1 hour, or any inability to get up) risks rhabdomyolysis, pressure injury, hypothermia and pneumonia, and signals the need for a personal alarm/telecare.' },
        { h:'Vision, strength & confidence', t:'Expedite cataract surgery; refer to falls service/physiotherapy for strength and balance training (evidence-based for falls reduction). Fear of falling causes activity restriction, deconditioning and isolation \u2014 a vicious cycle to break with graded confidence-building.' },
        { h:'Preserve independence \u2014 the framing', t:'Older people conceal falls fearing loss of independence/care-home placement. Frame assessment and intervention as the route to STAYING independent. The worried relative is usually the reliable historian; engage them with consent.' },
        { h:'Never do', t:'Never accept a single external cause for recurrent falls; never miss the polypharmacy contribution; never overlook bone health or the long lie; never collude with "tell my daughter I\u2019m fine"; never medicalise without protecting independence.' },
        { h:'Safety-net & follow-up', t:'Deprescribe with a plan and BP recheck; falls-service/OT/physio referral; expedite cataracts; bone-health/DEXA; personal alarm and "fall + can\u2019t get up = 999"; defined GP follow-up.' }
      ]
    }
  };

  /* ============ 78. TELEPHONE — DEXA result: starting a bisphosphonate ============ */
  const c78 = {
    id:'dexa-bisphosphonate', title:'"My bones are crumbling \u2014 am I going to end up in a wheelchair?"', type:'telephone', duration:12,
    meta:{ age:67, sex:'F', setting:'Telephone — DEXA result after a wrist fracture.', system:'Older adults / Osteoporosis & bisphosphonates' },
    brief:'Mrs Patricia Naylor, 67, fractured her wrist tripping in the garden 8 weeks ago (a fragility fracture). DEXA: T-score \u22122.7 at the hip (osteoporosis). FRAX high. Rings for the result, anxious after googling. PMH: well, early menopause at 44, mother had a hip fracture, ex-smoker. Meds: none. She has read frightening things about bisphosphonates (jaw, "they\u2019re poison") and is inclined to refuse. Takes little calcium/vitamin D.',
    script:{
      opening:'"Hello \u2014 I\u2019m ringing about my bone scan. The lady said my bones are thin? I\u2019ve been up half the night reading about it and I\u2019m terrified \u2014 does this mean my bones are crumbling, that I\u2019ll end up bent over or in a wheelchair? And I read about those bone tablets rotting your jaw, so I\u2019ll be honest, I don\u2019t want to take those. Is there anything natural instead? I just want to know how bad it is."',
      facts:[
        { topic:'The result',          text:'T-score \u22122.7 at the hip = osteoporosis (\u2264\u22122.5). She has already had a FRAGILITY fracture (low-trauma wrist fracture from standing height) \u2014 which, with the DEXA and high FRAX, places her firmly in the treat category. Risk factors: early menopause (44), maternal hip fracture, ex-smoker.' },
        { topic:'The catastrophising',  text:'HIDDEN AGENDA layer one \u2014 she has catastrophised "thin bones" into imminent disability (wheelchair, hunched, "crumbling"), fuelled by night-time googling. The anxiety is the presenting state; the result needs reframing accurately, neither minimised nor inflated.' },
        { topic:'The treatment fear',   text:'HIDDEN AGENDA layer two \u2014 she\u2019s read scare stories about bisphosphonates (osteonecrosis of the jaw, "poison") and is inclined to refuse; she half-wants permission to avoid them. The fear is real but the absolute risks are tiny versus the fracture-prevention benefit, which she hasn\u2019t had explained.' },
        { topic:'The deeper worry',     text:'If reached: her mother\u2019s hip fracture led to a nursing home and death within a year; Patricia is privately terrified of "becoming my mother" and losing independence. This is the engine under both the catastrophising and the treatment ambivalence.' },
        { topic:'What she wants',       text:'Officially: to know how bad it is and to avoid the "jaw-rotting" tablets. What is needed: accurate reframing (osteoporosis is treatable, not crumbling-to-a-wheelchair), honest balanced information on bisphosphonates (tiny absolute risks vs real fracture-prevention benefit), calcium/vitamin D + lifestyle, and her mother-fear addressed \u2014 supporting an informed decision.' },
      ],
      ice:{
        ideas:'"Thin bones" means her skeleton is crumbling and she\u2019ll end up disabled/in a wheelchair; the bone tablets rot your jaw and are "poison".',
        concerns:'HIDDEN AGENDA \u2014 her mother\u2019s hip fracture led to a care home and death within a year; she\u2019s terrified of "becoming my mother" and losing independence; fear of bisphosphonate side-effects.',
        expectations:'To be told how bad it is and to be let off the "jaw-rotting" tablets. What she needs: accurate reframing, honest balanced bisphosphonate information, lifestyle/calcium-vitD, and her mother-fear addressed for an informed decision.'
      },
      cues:['"Crumbling / wheelchair / bent over" \u2014 catastrophised picture from googling; reframe accurately without dismissing.','"Tablets that rot your jaw / poison / something natural" \u2014 treatment fear and a wish for permission to refuse; give honest absolute risk.','A fragility wrist fracture + T-score \u22122.7 + maternal hip fracture \u2014 firmly in the treat group; this matters.']
    },
    checkpoints:[
      { dom:'tasks', text:'Interprets the result correctly and reframes it accurately: T-score \u2264\u22122.5 = osteoporosis; explains it as reduced bone density and increased FRACTURE RISK \u2014 treatable and modifiable \u2014 NOT "crumbling" or inevitable disability/wheelchair' },
      { dom:'tasks', text:'Recognises the FRAGILITY FRACTURE as decisive: a low-trauma wrist fracture plus osteoporotic DEXA and high FRAX places her clearly in the treat category, and explains that the goal is preventing the next, more serious fracture (especially hip/spine)' },
      { dom:'tasks', text:'Gives honest, balanced BISPHOSPHONATE information: the benefit (substantial fracture-risk reduction) versus the side-effects she fears (osteonecrosis of the jaw and atypical femoral fracture are VERY RARE; common issues are GI upset, manageable with correct administration) \u2014 putting the tiny absolute risks in proportion' },
      { dom:'tasks', text:'Covers the full package: calcium and vitamin D (she takes little), weight-bearing/resistance exercise, smoking/alcohol, falls prevention; dental check before/with bisphosphonates; correct oral administration (upright, empty stomach, water) \u2014 or alternatives (e.g. zoledronate, denosumab) if not tolerated/declined' },
      { dom:'tasks', text:'Addresses the mother-fear (the engine): a treated osteoporosis is precisely how she AVOIDS her mother\u2019s outcome; frames treatment + falls prevention as protecting independence' },
      { dom:'rto',   text:'Responds to the anxiety and catastrophising first; corrects misinformation with warmth, not dismissal, and surfaces the "becoming my mother" fear' },
      { dom:'rto',   text:'Shares the decision and respects autonomy: gives her the real numbers to choose with rather than steam-rollering or simply accepting refusal based on scare stories; offers alternatives' },
      { dom:'gs',    text:'Safety-nets and follows up: how to take the medication and what side-effects genuinely warrant contact (jaw pain, thigh/groin pain, severe reflux), dental advice, calcium/vitD, a review of tolerance/adherence and a re-assessment plan \u2014 a shared, informed plan' },
    ],
    worked:[
      { lbl:'Reframe, don\u2019t minimise', txt:'"Let\u2019s take the fear down a notch with the truth. \u2018Thin bones\u2019 \u2014 osteoporosis \u2014 means your bones are less dense than ideal, so they break more easily than they should. It does NOT mean they\u2019re crumbling, and it does not mean a wheelchair. It means we have a clear, treatable risk we can act on now \u2014 which is far better than not knowing."' },
      { lbl:'Why this matters',       txt:'"Here\u2019s why your case is one I do want to treat: the wrist you broke in the garden \u2014 that was a \u2018fragility fracture\u2019, a break from a minor fall that strong bone would have shrugged off. That fracture, plus the scan, plus your mum\u2019s history, tells me your risk of a worse break \u2014 a hip or spine \u2014 is high enough that treating it really pays off. The whole aim is to stop the NEXT one."' },
      { lbl:'The jaw fear, honestly', txt:'"Now the jaw thing, because I\u2019m not going to dodge it. The jaw problem you read about is real but genuinely rare \u2014 a tiny fraction of people, mostly after major dental surgery or at cancer doses, not the dose for bones. The thigh-bone one is rare too. Set against that: these tablets meaningfully cut your chance of a broken hip \u2014 the break that, frankly, is the one that steals independence. The maths is firmly on the side of treating."' },
      { lbl:'Meet the mother-fear',   txt:'"Can I gently ask \u2014 is your mum in your mind through all this? \u2026 Her hip, the home, losing her so soon after. That makes complete sense, and I\u2019m so sorry. But here\u2019s the thing to hold onto: treating your bones and preventing falls is EXACTLY how we keep you from going the way she did. This is your chance to not become that story."' },
      { lbl:'The whole plan',         txt:'"It\u2019s not just a tablet either. Calcium and vitamin D, which you\u2019re low on; weight-bearing and a bit of strength exercise, which genuinely builds bone; staying off the cigarettes. If you do take the tablet, a quick dental check first, take it upright with water on an empty stomach. And if you really don\u2019t want the weekly tablet, there are other options \u2014 we have choices."' },
      { lbl:'Shared decision + net',  txt:'"So I\u2019m not going to push something on you \u2014 I\u2019m giving you the real numbers so YOU decide. My honest recommendation, with your fracture and your risk, is to treat. Take a day to think if you like. If you start the tablet and get bad heartburn, jaw pain, or thigh/groin pain, tell me. Let\u2019s sort your calcium and vitamin D today either way, and I\u2019ll review how you\u2019re getting on. You came in terrified your bones are crumbling \u2014 they\u2019re not, and we\u2019ve got a real plan to keep you strong."' },
    ],
    learning:'A T-score \u2264\u22122.5 is osteoporosis, and a low-trauma (fragility) fracture plus a high FRAX places this patient firmly in the treat category \u2014 the goal is preventing the next, more serious fracture (hip/spine). The first task is accurate reframing: osteoporosis is reduced bone density and increased fracture risk \u2014 treatable and modifiable \u2014 NOT "crumbling" or inevitable disability, the catastrophic picture night-time googling produces. The second is honest, balanced bisphosphonate information: the feared harms (osteonecrosis of the jaw, atypical femoral fracture) are very rare and dose/context-dependent, while the fracture-prevention benefit is substantial; common GI effects are manageable with correct administration. Add the full package \u2014 calcium/vitamin D, weight-bearing/resistance exercise, smoking/alcohol, falls prevention, dental check \u2014 and offer alternatives if declined/not tolerated. The examinable hidden agenda is the mother who fractured a hip, went to a home and died within a year; treatment plus falls prevention is precisely how she AVOIDS that fate. Reframe with warmth, give real numbers, and support an informed, shared decision rather than steam-rollering or accepting a scare-story refusal.',
    knowledge:{
      guideline:'NICE CG146 osteoporosis / fragility fracture · NOGG/FRAX · NICE TA bisphosphonates · MHRA (ONJ/atypical fracture)',
      points:[
        { h:'Interpret the DEXA', t:'T-score \u2265\u22121.0 normal; \u22121.0 to \u22122.5 osteopenia; \u2264\u22122.5 osteoporosis (severe if plus a fragility fracture). Assess fracture risk with FRAX/QFracture and apply NOGG thresholds; a prior fragility fracture markedly raises risk independent of the T-score.' },
        { h:'A fragility fracture is decisive', t:'A low-trauma fracture (fall from standing height or less) signals underlying bone fragility and strongly indicates assessment and usually treatment, especially with osteoporotic DEXA and risk factors (early menopause, maternal hip fracture, smoking, steroids). The aim is preventing the next, more serious fracture.' },
        { h:'Bisphosphonate benefit vs feared harms', t:'Oral bisphosphonates (alendronate/risedronate) substantially reduce vertebral and hip fracture risk \u2014 first-line for most. Osteonecrosis of the jaw and atypical femoral fractures are RARE (more associated with high oncology doses/major dental surgery/long duration); common issues are upper-GI effects, mitigated by correct administration. Put absolute risks in proportion.' },
        { h:'The full package', t:'Ensure adequate calcium and vitamin D; weight-bearing and resistance exercise; smoking cessation and alcohol moderation; falls prevention. Recommend a dental check before/with bisphosphonates. Correct oral dosing: with water, upright for 30 minutes, on an empty stomach. Alternatives (zoledronate, denosumab) if oral not tolerated/declined.' },
        { h:'Address the catastrophising and the real fear', t:'Reframe "crumbling/wheelchair" accurately. Often a specific family memory (a parent\u2019s hip fracture, care home, decline) drives the anxiety \u2014 surface it and frame treatment + falls prevention as the route to AVOIDING that outcome and preserving independence.' },
        { h:'Shared, informed decision', t:'Give real, proportionate numbers (benefit vs rare harms) and support autonomy rather than steam-rollering or accepting a scare-story refusal. Offer alternatives and review adherence/tolerance and re-assessment intervals (drug holidays after ~3\u20135 years for some).' },
        { h:'Never do', t:'Never minimise a fragility fracture; never let osteoporosis be catastrophised into inevitable disability; never dismiss the jaw fear without honest proportionate data; never omit calcium/vitD, exercise and falls prevention; never ignore the family-history fear driving refusal.' },
        { h:'Safety-net & follow-up', t:'Correct administration and genuine warning symptoms (jaw pain, thigh/groin pain, severe reflux) to report; dental advice; calcium/vitD; review tolerance/adherence; re-assessment plan; shared decision documented.' }
      ]
    }
  };

  /* ============ 79. VIDEO — Paget's disease on an incidental X-ray ============ */
  const c79 = {
    id:'pagets-incidental', title:'"They found something on my hip X-ray \u2014 is it cancer?"', type:'video', duration:12,
    meta:{ age:71, sex:'M', setting:'Video consultation — incidental radiology finding.', system:'Older adults / Paget\u2019s disease of bone' },
    brief:'Mr Gordon Pyle, 71, retired joiner, had a pelvis/hip X-ray for hip ache. Report: changes consistent with PAGET\u2019S DISEASE of bone (pelvis) \u2014 cortical thickening, coarse trabeculae, bony expansion; no aggressive/destructive features. Raised ALP on bloods (bone source; calcium normal). He\u2019s seen "abnormal bone" on the patient portal and is convinced it\u2019s bone cancer or secondaries. Mild hip ache, occasional headache, hat "feels tighter". No weight loss.',
    script:{
      opening:'"Doctor, I\u2019ve been beside myself since I saw \u2018abnormal bone\u2019 on the app. My X-ray\u2019s shown something wrong with the bone in my hip, hasn\u2019t it? My brother had cancer that went to his bones, and that\u2019s all I can think \u2014 is this that? Is it spread from somewhere? I need you to be straight with me. Have I got bone cancer?"',
      facts:[
        { topic:'The diagnosis',        text:'If explained: the X-ray and the isolated raised ALP (bone-specific, with normal calcium) fit PAGET\u2019S DISEASE of bone \u2014 a common, benign disorder of bone remodelling in older adults, NOT cancer or secondaries. Classic clues he\u2019s mentioned: bony aching, headache, and the hat feeling tighter (skull/bony enlargement).' },
        { topic:'The reassurance + nuance', text:'Paget\u2019s is benign and treatable; symptomatic disease is managed with bisphosphonates, and monitored. Rare complications (deafness if skull base involved, fractures, very rarely sarcomatous change \u2014 emphasise rare) need awareness but should not dominate the reassurance.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 his terror is specific and personal: his brother died of cancer that "went to the bones", and Gordon has pattern-matched "abnormal bone" onto that exact death. The real consultation is dismantling the cancer fear with a confident benign diagnosis, then grief about his brother may surface. He also fears, unspoken, that bone cancer = a death sentence and hasn\u2019t told his wife he saw the result.' },
        { topic:'The portal problem',   text:'He saw a raw radiology phrase ("abnormal bone") on the app before any clinician explained it \u2014 a common modern trigger for catastrophic misreading. Acknowledge this and correct it clearly.' },
        { topic:'What he wants',        text:'Officially: a straight answer on whether it\u2019s bone cancer. What is needed: a confident, clear explanation that this is Paget\u2019s disease \u2014 benign, not cancer or secondaries \u2014 with honest information on what it is and the plan (bloods, possibly treatment, monitoring), the brother-grief acknowledged, and appropriate safety-netting.' },
      ],
      ice:{
        ideas:'The "abnormal bone" on his X-ray is bone cancer or cancer that has spread, like his brother\u2019s.',
        concerns:'HIDDEN AGENDA \u2014 his brother died of cancer that "went to the bones"; Gordon has mapped that onto his own result and is terrified it\u2019s the same death sentence; hasn\u2019t told his wife he saw the result.',
        expectations:'A straight answer on bone cancer. What he needs: a confident benign diagnosis (Paget\u2019s disease), clear explanation and plan, the brother-grief acknowledged, and safety-netting.'
      },
      cues:['"Is it bone cancer / has it spread?" \u2014 catastrophic misreading of a portal phrase; the cancer fear is the consultation.','Hat feels tighter + headache + bony ache \u2014 classic Paget\u2019s features, not sinister; use them to explain.','"My brother\u2019s cancer went to his bones" \u2014 the personal pattern-match driving the terror; address it directly.']
    },
    checkpoints:[
      { dom:'tasks', text:'Explains the diagnosis confidently and unfrighteningly: the X-ray changes plus isolated raised ALP (normal calcium) are typical of PAGET\u2019S DISEASE of bone \u2014 a common, BENIGN disorder of bone turnover \u2014 NOT bone cancer and NOT metastases' },
      { dom:'tasks', text:'Uses his own symptoms to make it make sense: bony aching, headache, and the hat feeling tighter (bony enlargement, e.g. skull) are classic Paget\u2019s features \u2014 turning frightening symptoms into a coherent, benign explanation' },
      { dom:'tasks', text:'Outlines the plan: confirm/characterise (bloods incl. ALP, calcium, vitamin D; sometimes isotope bone scan/further imaging), treat with a bisphosphonate if symptomatic, analgesia, and monitor ALP; explains it is manageable' },
      { dom:'tasks', text:'Mentions relevant complications proportionately WITHOUT eclipsing the reassurance: possible hearing loss if the skull base is involved, fracture risk, rarely deformity, and very rarely malignant change \u2014 framed as reasons for monitoring, not as new threats' },
      { dom:'tasks', text:'Addresses the portal-misreading directly: acknowledges how alarming raw report wording is when seen before explanation, and corrects "abnormal bone" \u2192 a specific benign condition' },
      { dom:'rto',   text:'Answers the real question ("is it cancer?") clearly and early; surfaces and acknowledges the brother-grief that is driving the terror, with compassion' },
      { dom:'rto',   text:'Checks understanding and the unspoken fears (death sentence; not telling his wife), and offers to involve his wife; leaves him reassured rather than half-reassured' },
      { dom:'gs',    text:'Safety-nets and follows up: what symptoms to report (new hearing change, worsening/rapidly increasing pain, a lump, fracture), the bloods/treatment/monitoring plan, and a review to confirm understanding and response \u2014 a clear, calming plan' },
    ],
    worked:[
      { lbl:'Answer it head-on',      txt:'"Let me answer your question straight away, because you\u2019ve been carrying it: no, this is not bone cancer, and it is not cancer that\u2019s spread. What your X-ray shows is a condition called Paget\u2019s disease of bone. It\u2019s common in people your age, it\u2019s benign \u2014 not cancer \u2014 and it\u2019s very manageable. Take a breath; you can put the worst fear down."' },
      { lbl:'Make it make sense',     txt:'"And actually it explains things you\u2019ve noticed. In Paget\u2019s, the bone renews itself in a slightly disorganised, overactive way, so the bone can thicken and enlarge a little. That\u2019s why your hat feels tighter, why you get the odd headache, and the aching in your hip. Those aren\u2019t sinister \u2014 they\u2019re the condition itself, and they\u2019re treatable."' },
      { lbl:'The portal moment',      txt:'"I\u2019m sorry the app showed you \u2018abnormal bone\u2019 before anyone could explain it \u2014 those raw report words are written for doctors, not to be read cold at midnight, and they send people\u2019s minds straight to the worst place. \u2018Abnormal\u2019 here just means \u2018not the usual pattern\u2019, and the pattern it IS is this benign condition."' },
      { lbl:'Acknowledge the brother', txt:'"Can I just say \u2014 you mentioned your brother, his cancer going to his bones. I think that\u2019s why your mind went straight there, and that\u2019s completely understandable; you\u2019ve seen what that looked like. I\u2019m sorry you lost him. But this is a genuinely different thing, and I can tell you that with confidence."' },
      { lbl:'The plan',               txt:'"Here\u2019s what we do. A couple of blood tests to confirm and see how active it is, sometimes a bone scan to see which bones are involved. If it\u2019s causing you pain, there\u2019s a very effective treatment \u2014 usually a bisphosphonate, often a single infusion \u2014 plus simple pain relief. Then we keep an eye on a blood marker over time. Most people do very well."' },
      { lbl:'Safety-net + wife',      txt:'"A few things to tell me about, just so you know: if your hearing changes, if the pain gets much worse or a new lump appears, or you have a fall and think you\u2019ve broken something \u2014 those we\u2019d check. Otherwise this is a watch-and-treat condition, not an emergency. And \u2014 have you told your wife about the result? It might help to have her in the next chat; you don\u2019t need to carry the scare, or the reassurance, on your own. I\u2019ll see you to go through the bloods. You came in fearing the worst; the truth is a great deal kinder."' },
    ],
    learning:'An incidental X-ray reported as Paget\u2019s disease, with an isolated raised (bone-specific) ALP and normal calcium, is a benign disorder of bone remodelling \u2014 NOT bone cancer or metastases. The first and central task is a CONFIDENT benign diagnosis that answers the patient\u2019s real question ("is it cancer?") clearly and early, using his own classic symptoms (bony ache, headache, the hat feeling tighter from bony enlargement) to make the benign explanation cohere. The plan is to confirm/characterise (ALP, calcium, vitamin D, sometimes isotope bone scan), treat with a bisphosphonate if symptomatic plus analgesia, and monitor ALP; complications (skull-base hearing loss, fracture, rare sarcomatous change) are mentioned proportionately as reasons to monitor, not as new threats. The examinable hidden agenda is a brother who died of cancer that "went to the bones", onto which he has pattern-matched a raw portal phrase ("abnormal bone") read before any explanation. Address the portal misreading, acknowledge the brother-grief, check the unspoken death-sentence fear, offer to involve his wife, and safety-net \u2014 leaving him fully, not half, reassured.',
    knowledge:{
      guideline:'CKS Paget\u2019s disease of bone · Royal Osteoporosis Society Paget\u2019s guidance',
      points:[
        { h:'Recognise Paget\u2019s', t:'A common benign disorder of excessive, disorganised bone remodelling in older adults. Often incidental: isolated raised ALP (bone source) with normal calcium/phosphate, and characteristic X-ray changes (cortical thickening, coarse trabeculae, bony expansion/enlargement, mixed lytic/sclerotic). Commonly affects pelvis, spine, skull, femur, tibia.' },
        { h:'It is NOT cancer', t:'Paget\u2019s is benign. Distinguish from metastatic bone disease/primary bone tumours (which the report here did not show \u2014 no aggressive/destructive features). Reassure clearly and early; the confident benign diagnosis is the core of the consultation.' },
        { h:'Symptoms & clues', t:'Often asymptomatic. Symptomatic features: bone pain, bony deformity/enlargement (e.g. skull \u2014 "hat feels tighter"), headache, warmth over affected bone, secondary osteoarthritis, and complications. Use these to explain the diagnosis intelligibly.' },
        { h:'Management', t:'Confirm with bloods (ALP, calcium, vitamin D) and often an isotope bone scan to map disease \u00b1 targeted X-rays. Treat symptomatic disease with a bisphosphonate (e.g. single IV zoledronate) and analgesia; monitor ALP for response/activity. Many need only monitoring.' },
        { h:'Complications (proportionate)', t:'Hearing loss (skull-base involvement), fractures and deformity, secondary OA, high-output cardiac effects (extensive disease), and \u2014 rarely \u2014 osteosarcoma (a new/rapidly worsening pain or mass warrants review). Mention as reasons to monitor, not to frighten.' },
        { h:'The portal/incidental trap', t:'Patients increasingly see raw radiology/lab wording (e.g. "abnormal bone", a raised marker) before clinician explanation, prompting catastrophic misreading \u2014 frequently pattern-matched to a relative\u2019s cancer. Acknowledge this, correct the wording, and address the specific personal fear/grief.' },
        { h:'Never do', t:'Never leave "is it cancer?" unanswered or hedged; never let rare complications eclipse the benign reassurance; never ignore the portal-driven misreading or the family-cancer pattern-match; never under-explain so the patient stays half-reassured.' },
        { h:'Safety-net & follow-up', t:'Report new hearing change, rapidly worsening pain, a new lump, or fracture; bloods/bone scan and treatment/monitoring plan; offer to involve the partner; review to confirm understanding and response.' }
      ]
    }
  };

  /* ============ 80. VIDEO — The exhausted carer ============ */
  const c80 = {
    id:'carer-strain', title:'"It\u2019s my husband who\u2019s the patient, not me"', type:'video', duration:12,
    meta:{ age:66, sex:'F', setting:'Video consultation — booked about her husband; she is the one struggling.', system:'Older adults / Carer strain & burnout' },
    brief:'Mrs Sheila Comerford, 66, sole carer for her husband Brian (72, advancing dementia). Books an appointment "about Brian\u2019s tablets" but on the call looks exhausted, tearful, has lost weight. If explored: up several times nightly, no respite, has given up friends/hobbies, low mood, resentment then guilt, occasional thoughts that "I can\u2019t do this anymore". She deflects every question back to Brian. Hasn\u2019t had a break in two years. Their daughter lives abroad.',
    script:{
      opening:'"Thanks for seeing me. It\u2019s really about Brian \u2014 his memory tablets, I wanted to check the dose, and he\u2019s been a bit more confused at night. He\u2019s the one who needs sorting, not me, I\u2019m fine. I just\u2026 sorry. (composes herself) Ignore me, I\u2019m just a bit tired. So, about his medication \u2014 is the dose right, do you think?"',
      facts:[
        { topic:'The real patient',     text:'If gently redirected: SHE is the one struggling \u2014 exhausted, tearful, weight loss, low mood, broken sleep (up several times nightly with Brian), no respite or break in two years, lost her friends, hobbies and identity. Classic carer strain/burnout, with depressive features.' },
        { topic:'The risk',             text:'On sensitive enquiry: thoughts that "I can\u2019t do this anymore" \u2014 needs gentle exploration of whether this is exhaustion/hopelessness or any suicidal ideation, and screening of mood. Also worth (delicately) considering whether carer stress affects Brian\u2019s care/safety \u2014 handled without accusation.' },
        { topic:'The hidden agenda',    text:'HIDDEN AGENDA \u2014 she booked under Brian\u2019s name because she does not feel ENTITLED to be the patient; she believes asking for help for herself is selfish and an admission of failure ("for better or worse"), and is terrified that admitting she can\u2019t cope means Brian will be "taken away" into a home and she\u2019ll have failed him. The deflection is permission-seeking: she needs to be told her own health matters and that accepting help is not abandonment.' },
        { topic:'The guilt/resentment cycle', text:'If reached: she loves him, grieves the man he was, feels resentment at the relentlessness, then crushing guilt for the resentment \u2014 a normal, exhausting cycle she thinks makes her a bad wife. Naming it as normal is therapeutic.' },
        { topic:'What she wants',       text:'Officially: to sort Brian\u2019s tablets. What is needed: to gently make HER the patient, validate carer strain, screen and treat her mood/risk, and mobilise practical support \u2014 carer\u2019s assessment, respite, carer support services, and addressing Brian\u2019s night-time symptoms too \u2014 reframing help as sustaining her care, not failing.' },
      ],
      ice:{
        ideas:'Brian is the patient; her own exhaustion is just tiredness and not something she\u2019s entitled to bring.',
        concerns:'HIDDEN AGENDA \u2014 believes asking for help for herself is selfish and an admission of failure; terrified that admitting she can\u2019t cope means Brian is "taken away" and she\u2019s failed him; guilt over resentment.',
        expectations:'To sort Brian\u2019s tablets. What she actually needs: to be made the patient \u2014 carer strain validated, mood/risk screened and treated, and practical support (carer\u2019s assessment, respite) mobilised, framed as sustaining her care, not failing.'
      },
      cues:['Books about Brian but is exhausted, tearful, lost weight \u2014 the carer is the patient; gently redirect.','"Ignore me, I\u2019m fine / he\u2019s the one who needs sorting" \u2014 deflection and not feeling entitled to help; the real agenda.','"I can\u2019t do this anymore" \u2014 screen mood and risk sensitively; don\u2019t let it pass as a turn of phrase.']
    },
    checkpoints:[
      { dom:'tasks', text:'Gently REDIRECTS the consultation to make HER the patient: recognises carer strain/burnout (exhaustion, weight loss, tearfulness, broken sleep, loss of self) behind the "it\u2019s about Brian" framing, rather than only adjusting his medication' },
      { dom:'tasks', text:'Screens her MOOD and RISK sensitively: explores low mood/depressive features and what "I can\u2019t do this anymore" means \u2014 distinguishing exhaustion/hopelessness from suicidal ideation \u2014 and responds appropriately' },
      { dom:'tasks', text:'Mobilises PRACTICAL carer support: a statutory Carer\u2019s Assessment, respite/day-care options, carer support organisations (e.g. Carers UK, local carers\u2019 service, Admiral Nurses for dementia), benefits (Carer\u2019s Allowance/Attendance Allowance), and involving their daughter/wider network' },
      { dom:'tasks', text:'Addresses Brian\u2019s NIGHT-TIME symptoms appropriately too (the presenting hook): assesses the night-time confusion (delirium triggers, pain, infection, environment, non-drug measures before any sedation) \u2014 which also directly relieves her sleep burden' },
      { dom:'tasks', text:'Validates and normalises the GUILT/RESENTMENT cycle and reframes accepting help: looking after herself is what ENABLES her to keep caring; accepting support is not abandonment or failure, and does not mean Brian is "taken away"' },
      { dom:'rto',   text:'Creates space and permission for her to be the patient: notices the tears and exhaustion, gently gives her permission to talk about herself, and does not let her deflect entirely back to Brian' },
      { dom:'rto',   text:'Responds with warmth to the guilt and the fear of failing/loss, normalising the carer experience and dismantling the "selfish/failure" belief' },
      { dom:'gs',    text:'Safety-nets and follows up: a Carer\u2019s Assessment and respite plan, mood treatment/review (and crisis routes if risk emerges), carer-support signposting, a plan for Brian\u2019s night symptoms, and a dedicated follow-up FOR HER \u2014 not folded back into Brian\u2019s care' },
    ],
    worked:[
      { lbl:'Notice her, gently',     txt:'"We\u2019ll absolutely sort Brian\u2019s tablets, I promise. But can I stop for a second \u2014 because you\u2019re tearful, and you\u2019ve told me you\u2019re shattered, and I don\u2019t think you\u2019re fine. Would it be alright if, just for a few minutes, YOU were the person I\u2019m looking after? You\u2019re allowed to be."' },
      { lbl:'Make her the patient',   txt:'"From what you\u2019re describing \u2014 up half the night, lost weight, given up your friends and the things you loved, in tears \u2014 that\u2019s not just \u2018a bit tired\u2019. That\u2019s carer exhaustion, and it\u2019s real and it\u2019s common, and it deserves attention in its own right. You have been carrying an enormous amount, alone, for two years."' },
      { lbl:'Screen the dark thought', txt:'"You said \u2018I can\u2019t do this anymore\u2019. Can I ask gently what you mean by that \u2014 is it that you\u2019re utterly worn down, or have there been times you\u2019ve felt you didn\u2019t want to go on at all? \u2026 Thank you for being honest with me. That matters, and I\u2019m going to make sure you\u2019re looked after, not just Brian."' },
      { lbl:'Normalise the guilt',    txt:'"Can I tell you something I see all the time? People in your position love their partner AND feel worn to the bone AND sometimes resent the relentlessness \u2014 and then feel terribly guilty for the resentment. That doesn\u2019t make you a bad wife. It makes you a human being doing one of the hardest jobs there is, without a break. The guilt is the price of caring, not proof of failing."' },
      { lbl:'Dismantle the fear',     txt:'"I think part of why you booked under Brian\u2019s name is a fear that if you admit you\u2019re struggling, he\u2019ll be taken away and you\u2019ll have failed him. Let me be clear: getting YOU support \u2014 a carer\u2019s assessment, some respite, a few hours that are yours \u2014 is exactly what lets you KEEP caring for him at home. Looking after yourself isn\u2019t abandoning him. It\u2019s how you don\u2019t run out of road."' },
      { lbl:'Practical plan + net',   txt:'"So here\u2019s what I\u2019d like to do. Arrange a carer\u2019s assessment and look at respite and day-care \u2014 even half a day a week to breathe. Point you to dementia carer support \u2014 there are nurses and groups for exactly this. Check what benefits you\u2019re entitled to. And let\u2019s tackle Brian\u2019s night-time confusion properly, because that\u2019ll give you some sleep back. I want to see YOU again in two weeks \u2014 a proper appointment in your own name. And if those darker feelings get stronger, here\u2019s who you call, any time. You came in for his tablets; I\u2019m not letting you leave without help for you too."' },
    ],
    learning:'When a carer books "about the patient" but is themselves exhausted, tearful and losing weight, the carer IS the patient \u2014 gently redirect to carer strain/burnout (often with depressive features) rather than only adjusting the relative\u2019s medication. Screen mood and risk sensitively (what does "I can\u2019t do this anymore" mean \u2014 exhaustion or suicidal ideation?), and mobilise practical support: a statutory Carer\u2019s Assessment, respite/day-care, carer organisations (Carers UK, Admiral Nurses), and benefits (Carer\u2019s/Attendance Allowance). Address the relative\u2019s presenting problem too (Brian\u2019s night-time confusion \u2014 assess delirium triggers and non-drug measures, which also restores her sleep). The examinable hidden agenda is that she booked under his name because she does not feel ENTITLED to be the patient: she believes asking for help is selfish and a failure, and fears that admitting she can\u2019t cope means he will be "taken away". Normalise the guilt/resentment cycle, dismantle the "selfish/failure" belief, and reframe accepting help as what ENABLES her to keep caring \u2014 not abandonment. Give her a dedicated follow-up in her own name, with crisis routes if risk emerges.',
    knowledge:{
      guideline:'Care Act 2014 (Carer\u2019s Assessment) · NICE NG150 carer support / dementia (NG97) · NICE depression · safeguarding',
      points:[
        { h:'The carer is the patient', t:'When someone consults ostensibly about the person they care for but shows exhaustion, tearfulness, weight loss, low mood and loss of self, recognise carer strain/burnout and make them the focus. Gently give permission for them to be the patient; do not only adjust the cared-for person\u2019s medication.' },
        { h:'Screen mood and risk', t:'Carer burnout commonly coexists with depression and anxiety. Screen mood; explore statements like "I can\u2019t do this anymore" to distinguish exhaustion/hopelessness from suicidal ideation, and respond proportionately (treatment, crisis routes). Consider \u2014 sensitively, without accusation \u2014 whether strain affects the cared-for person\u2019s safety.' },
        { h:'Statutory and practical support', t:'Under the Care Act 2014, carers are entitled to a Carer\u2019s Assessment. Mobilise respite/day-care, carer support organisations (Carers UK, local carers\u2019 service, Admiral Nurses for dementia), peer support, and benefits (Carer\u2019s Allowance; Attendance Allowance for the cared-for person). Involve wider family/network.' },
        { h:'Treat the presenting hook too', t:'Address the cared-for person\u2019s problem (here night-time confusion in dementia): assess for delirium triggers (infection, pain, constipation, medication), optimise environment/sleep hygiene, use non-pharmacological measures first, and avoid reflex sedation \u2014 improving his nights restores the carer\u2019s sleep.' },
        { h:'Normalise guilt and reframe help', t:'The love\u2013resentment\u2013guilt cycle is normal, not evidence of being a "bad" carer. Reframe self-care and accepting support as what SUSTAINS caring, not abandonment or failure; correct the fear that asking for help means the person will be "taken away".' },
        { h:'Dedicated follow-up', t:'Arrange follow-up FOR THE CARER in their own name \u2014 not folded into the cared-for person\u2019s appointments \u2014 with mood review, support uptake, and crisis routes if risk emerges.' },
        { h:'Never do', t:'Never treat only the cared-for person\u2019s medication and miss the carer; never let "I can\u2019t do this anymore" pass without screening risk; never omit the Carer\u2019s Assessment and respite; never reinforce the "asking for help is selfish/failure" belief; never ignore the cared-for person\u2019s safety.' },
        { h:'Safety-net & follow-up', t:'Carer\u2019s Assessment and respite plan; mood treatment and crisis routes if risk; carer-support signposting; plan for the night-time symptoms; dedicated carer follow-up in her own name.' }
      ]
    }
  };

  if (window.SCA_CASES) window.SCA_CASES.push(c77, c78, c79, c80);

  window.SCA_EXTRAS = window.SCA_EXTRAS || {};
  Object.assign(window.SCA_EXTRAS, {

    'recurrent-falls-review': {
      ceg: ['Older adults', 'Prescribing & pharmacology'],
      stem: {
        name: 'Eunice Barley', age: '79 years · female',
        pmh: ['Three falls in 3 months; latest a bruised hip + 40-min long lie', 'Hypertension; cataracts awaiting surgery; BMI 21; lives alone', 'On two antihypertensives + amitriptyline + zopiclone'],
        meds: ['Amlodipine', 'Indapamide', 'Amitriptyline (old, for sleep)', 'Zopiclone PRN'],
        allergy: 'NKDA',
        recent: 'Rang at daughter\u2019s insistence; blames "the carpets"; adamant she won\u2019t "lose her independence".',
        reason: 'Telephone — recurrent falls.'
      },
      timeMap: [
        { t:'0–2',  h:'Disarm the deflection', d:'"Just the carpets" deflects a multifactorial problem; three falls is recurrent. Not here to decide she can\u2019t cope \u2014 to keep her on her feet at home.' },
        { t:'2–4',  h:'The long lie',          d:'40 minutes on the floor \u2014 the biggest red flag; frightening and dangerous. Reason to act now and to get a personal alarm.' },
        { t:'4–6',  h:'Medication win',         d:'Highest-yield: the diuretic, amitriptyline, zopiclone \u2014 deprescribe/rationalise (STOPP-START). Postural BP. Expect falls to fall.' },
        { t:'6–9',  h:'Multifactorial + bones', d:'Vision (expedite cataracts), gait/balance (falls service/physio), home (OT), bone health (FRAX/DEXA \u2014 bruised hip). Consider syncope.' },
        { t:'9–12', h:'Reframe + safety-net',   d:'Assessment KEEPS her independent, not the road to a home; personal alarm + "fall + can\u2019t get up = 999"; defined review. Daughter\u2019s worry is the signal.' }
      ],
      wordPics: {
        fail: 'Accepts "the carpets", reassures and tells the daughter she\u2019s fine; misses the polypharmacy, the long lie and the bone health; leaves the independence fear unaddressed \u2014 and the next fall is a fractured hip.',
        pass: 'Recognises recurrent falls, reviews/rationalises the medications, covers the multifactorial domains and bone health, arranges falls-service/OT, and safety-nets the long lie.',
        exc:  'Refuses the single-cause deflection and reads the daughter\u2019s worry as the signal; targets the polypharmacy as the high-yield fix; covers postural BP, vision, balance, home and bone health; flags the long lie with a personal-alarm solution; and reframes every step around PRESERVING independence with a clear safety-net.'
      },
      avoid: [
        { dont:'"Sounds like the carpets are the problem \u2014 get those rugs sorted and you\u2019ll be fine."', instead:'"We\u2019ll sort the rugs, but three falls in three months is usually several small things adding up \u2014 most of them fixable. Let\u2019s look properly so you stay on your feet."', why:'Accepting a single external cause misses a multifactorial, modifiable problem (and a hip fracture risk).' },
        { dont:'"As long as you didn\u2019t hurt yourself badly, let\u2019s just keep an eye on things."', instead:'"You were on the floor 40 minutes unable to get up \u2014 that alone is a reason to act, and to get you an alarm so help reaches you fast next time."', why:'Glossing over a long lie ignores a major red flag (rhabdomyolysis, pressure injury, hypothermia, fear).' },
        { dont:'"I\u2019ll tell your daughter you\u2019re managing fine on your own."', instead:'"Your daughter\u2019s worry is the instinct I trust \u2014 so rather than say you\u2019re fine, let\u2019s actually make you safer, which is how you stay in your own home."', why:'Colluding with "tell her I\u2019m fine" silences the reliable historian and abandons a treatable, dangerous problem.' }
      ]
    },

    'dexa-bisphosphonate': {
      ceg: ['Investigations & results', 'Older adults'],
      stem: {
        name: 'Patricia Naylor', age: '67 years · female',
        pmh: ['Wrist fracture (fragility) 8 weeks ago from a garden trip', 'DEXA T-score \u22122.7 hip (osteoporosis); FRAX high', 'Early menopause at 44; mother had a hip fracture; ex-smoker'],
        meds: ['None; low dietary calcium/vitamin D'],
        allergy: 'NKDA',
        recent: 'Anxious after googling; catastrophising ("crumbling/wheelchair"); inclined to refuse bisphosphonates ("rot your jaw").',
        reason: 'Telephone — DEXA result.'
      },
      timeMap: [
        { t:'0–2',  h:'Reframe accurately',   d:'Osteoporosis = lower density + higher fracture risk; treatable. NOT crumbling, NOT a wheelchair. Take the fear down with the truth.' },
        { t:'2–4',  h:'Why treat',            d:'The wrist was a fragility fracture; with the DEXA + FRAX + maternal hip, she\u2019s firmly treat-category. Goal: prevent the next, worse break.' },
        { t:'4–7',  h:'The jaw fear, honest', d:'ONJ/atypical fracture very rare and dose/context-dependent; benefit (hip-fracture reduction) substantial. Put absolute risk in proportion.' },
        { t:'7–9',  h:'Whole package + mother', d:'Calcium/vitD, weight-bearing exercise, smoking, falls prevention, dental check, correct dosing/alternatives. Treatment is how she AVOIDS her mother\u2019s fate.' },
        { t:'9–12', h:'Shared decision + net', d:'Real numbers, autonomy, alternatives; warning symptoms (jaw/thigh pain, severe reflux); calcium/vitD today; review adherence/tolerance.' }
      ],
      wordPics: {
        fail: 'Either lets her refuse on scare stories without context, or steam-rollers the tablet; catastrophises or minimises the result; omits calcium/vitD, exercise and falls prevention; never surfaces the mother-fear driving it.',
        pass: 'Reframes the result, recognises the fragility fracture, gives balanced bisphosphonate information, covers the lifestyle package, and supports a decision.',
        exc:  'Reframes osteoporosis accurately (treatable, not crumbling); makes the fragility fracture the decisive point; puts the rare jaw/femur risks in honest proportion against substantial fracture-prevention benefit; covers calcium/vitD, exercise, smoking, falls and dental check with alternatives; surfaces and answers the "becoming my mother" fear; and supports an informed, shared decision with a clear safety-net.'
      },
      avoid: [
        { dont:'"Your bones are quite thin \u2014 you\u2019ll need to be careful you don\u2019t end up disabled."', instead:'"Osteoporosis means your bones break more easily than they should \u2014 it\u2019s a treatable risk we can act on, not crumbling bones or a wheelchair."', why:'Feeding the catastrophic picture amplifies anxiety instead of giving an accurate, actionable frame.' },
        { dont:'"If you\u2019re worried about the jaw thing, we can just skip the tablets and try diet."', instead:'"The jaw risk is real but very rare; the tablets meaningfully cut your chance of a broken hip. Let me give you the actual numbers so you can decide \u2014 and there are alternatives too."', why:'Letting a scare story drive refusal without honest absolute risk abandons a high-benefit treatment after a fragility fracture.' },
        { dont:'"Let\u2019s just start the bisphosphonate, it\u2019s what the guidelines say."', instead:'"My honest recommendation is to treat, given your fracture and risk \u2014 but it\u2019s your decision; here are the real benefits and the rare risks, and the other options."', why:'Steam-rollering ignores her fears and autonomy and undermines adherence.' }
      ]
    },

    'pagets-incidental': {
      ceg: ['Investigations & results', 'Older adults'],
      stem: {
        name: 'Gordon Pyle', age: '71 years · male',
        pmh: ['Hip/pelvis X-ray reported as Paget\u2019s disease (cortical thickening, coarse trabeculae, bony expansion; no aggressive features)', 'Isolated raised ALP (bone source); calcium normal', 'Mild hip ache, headache, hat "feels tighter"'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: '⚠ Saw "abnormal bone" on the patient portal; brother died of cancer that "went to the bones"; convinced it\u2019s bone cancer.',
        reason: 'Video consultation — incidental X-ray finding.'
      },
      timeMap: [
        { t:'0–2',  h:'Answer it head-on',   d:'No, not bone cancer, not secondaries. It\u2019s Paget\u2019s disease \u2014 common, benign, manageable. Let him put the worst fear down.' },
        { t:'2–4',  h:'Make it make sense',   d:'Overactive, disorganised bone renewal \u2014 explains the tighter hat, headache, hip ache. Symptoms are the condition, not sinister.' },
        { t:'4–6',  h:'The portal moment',    d:'Raw report words read cold send minds to the worst place. "Abnormal" = "not the usual pattern" \u2014 the pattern is this benign condition.' },
        { t:'6–8',  h:'Acknowledge the brother', d:'The pattern-match to his brother\u2019s bone cancer; the grief; why his mind went there. Different thing \u2014 said with confidence.' },
        { t:'8–12', h:'Plan + safety-net',     d:'Bloods (ALP, Ca, vitD) \u00b1 bone scan; bisphosphonate if symptomatic + analgesia; monitor ALP. Report hearing change/worsening pain/lump/fracture; offer to involve his wife.' }
      ],
      wordPics: {
        fail: 'Leaves "is it cancer?" hedged or unanswered; lets rare complications eclipse the reassurance; ignores the portal misreading and the brother pattern-match, so he stays terrified or only half-reassured.',
        pass: 'Gives a confident benign Paget\u2019s diagnosis, explains it with his symptoms, outlines bloods/treatment/monitoring, and safety-nets.',
        exc:  'Answers the cancer question clearly and early; uses his own symptoms to make the benign diagnosis cohere; corrects the portal misreading; acknowledges the brother-grief driving the terror; mentions complications proportionately as reasons to monitor; offers to involve his wife; and leaves him fully reassured with a clear plan and safety-net.'
      },
      avoid: [
        { dont:'"We can\u2019t be completely sure what it is until we\u2019ve done more tests."', instead:'"This is Paget\u2019s disease \u2014 benign, not cancer and not spread. We\u2019ll do bloods and maybe a bone scan to confirm and see how active it is, but I can reassure you now."', why:'Hedging the central question leaves a frightened, pattern-matching patient assuming the worst.' },
        { dont:'"There\u2019s a small chance it can turn into bone cancer, so we\u2019ll keep watching."', instead:'"It\u2019s benign. Very rarely Paget\u2019s can change, which is just why we monitor \u2014 but that\u2019s a reason to keep an eye, not something to fear today."', why:'Leading with a rare complication eclipses the reassurance and re-ignites the cancer fear.' },
        { dont:'"Try not to read too much into what the app says."', instead:'"I\u2019m sorry the app showed you \u2018abnormal bone\u2019 before anyone explained it \u2014 those words are for doctors. \u2018Abnormal\u2019 here just means this specific benign condition."', why:'Dismissing the portal trigger ignores the catastrophic misreading that brought him in and the brother pattern-match behind it.' }
      ]
    },

    'carer-strain': {
      ceg: ['Older adults', 'Mental health & addiction'],
      stem: {
        name: 'Sheila Comerford', age: '66 years · female',
        pmh: ['Sole carer for husband Brian (72, advancing dementia)', 'Exhausted, tearful, weight loss, broken sleep; no respite in 2 years', 'If explored: low mood, resentment/guilt cycle, "I can\u2019t do this anymore"'],
        meds: ['None'],
        allergy: 'NKDA',
        recent: 'Books "about Brian\u2019s tablets" and his night-time confusion; deflects every question back to him; daughter abroad.',
        reason: 'Video consultation — ostensibly about her husband.'
      },
      timeMap: [
        { t:'0–2',  h:'Notice her, gently',  d:'Promise to sort Brian\u2019s tablets, then pause: she\u2019s tearful and shattered. Give permission for HER to be the patient \u2014 she\u2019s allowed.' },
        { t:'2–4',  h:'Make her the patient', d:'Up half the night, lost weight, lost her friends and self \u2014 carer exhaustion, real and common, deserving attention in its own right.' },
        { t:'4–6',  h:'Screen mood + risk',   d:'Explore "I can\u2019t do this anymore" \u2014 exhaustion or suicidal ideation? Screen low mood; respond proportionately.' },
        { t:'6–8',  h:'Normalise + dismantle', d:'The love/resentment/guilt cycle is normal, not bad-wife. Accepting help SUSTAINS caring; it isn\u2019t abandonment, and won\u2019t mean Brian is "taken away".' },
        { t:'8–12', h:'Practical plan + net',  d:'Carer\u2019s Assessment, respite/day-care, Admiral Nurses/Carers UK, benefits; assess Brian\u2019s night confusion (delirium triggers, non-drug first); dedicated follow-up FOR HER; crisis routes.' }
      ],
      wordPics: {
        fail: 'Adjusts Brian\u2019s medication and lets her deflect; never makes her the patient, never screens her mood or the "can\u2019t do this anymore"; no Carer\u2019s Assessment or respite; reinforces (or ignores) her belief that asking for help is selfish \u2014 and she leaves unhelped and at risk.',
        pass: 'Recognises carer strain, makes her the patient, screens mood/risk, arranges a Carer\u2019s Assessment and respite, addresses Brian\u2019s night symptoms, and follows up.',
        exc:  'Gently makes the carer the patient and gives her permission to be cared for; screens mood and the suicidal-ideation question sensitively; normalises the guilt/resentment cycle and dismantles the "selfish/failure/he\u2019ll be taken away" belief; mobilises Carer\u2019s Assessment, respite, dementia carer support and benefits; treats Brian\u2019s night confusion to restore her sleep; and arranges a dedicated follow-up in her own name with crisis routes.'
      },
      avoid: [
        { dont:'"Let\u2019s adjust Brian\u2019s tablets and that should settle his nights."', instead:'"We\u2019ll sort Brian\u2019s tablets \u2014 but can I stop a second? You\u2019re tearful and exhausted, and I don\u2019t think you\u2019re fine. For a few minutes, let YOU be the patient."', why:'Treating only the cared-for person\u2019s medication misses the carer who is the one in crisis.' },
        { dont:'"You\u2019re doing such a good job \u2014 just keep going, you\u2019re coping wonderfully."', instead:'"You\u2019ve carried an enormous amount alone for two years \u2014 that\u2019s carer exhaustion, and it deserves help. Looking after you is how you keep caring for him."', why:'Praising her "coping" reinforces the martyr role and the belief she isn\u2019t entitled to help.' },
        { dont:'"If it\u2019s really too much, we might have to think about a home for Brian."', instead:'"Getting YOU support \u2014 a carer\u2019s assessment, some respite \u2014 is exactly what lets you keep caring for him at home. Accepting help isn\u2019t failing him or losing him."', why:'Jumping to "a home" confirms her deepest fear and shuts down disclosure; reframe help as what sustains caring.' }
      ]
    }
  });

})();
