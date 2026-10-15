/* ============================================
   Medication Chooser — Parkinson's disease
   NICE NG71 (2017) · SPC
   Fixed lists (Upload 128, October 2026): no patient factors and no scoring.
   ============================================ */
MedChooser.register('parkinsons', {
  title: 'Parkinson\'s disease — medication options',
  subtitle: 'NICE NG71: Parkinson\'s medicines are started by a specialist (do not start them in suspected Parkinson\'s before specialist review). Levodopa is offered first-line where motor symptoms affect quality of life; a dopamine agonist, levodopa or an MAO-B inhibitor where they do not. The GP role is continuing, reviewing side effects, and making sure doses are never missed or delayed.',
  guideline: 'NICE NG71 · SPC',

  safety: [
    {"tone":"red","label":"Time-critical medicine","text":"Never stop abruptly or delay doses (hospital admission, surgery, nil by mouth) — risk of acute akinesia and neuroleptic malignant-like syndrome. Give on time; seek specialist advice for an alternative route (e.g. rotigotine patch)."},
    {"tone":"red","label":"Impulse-control disorders","text":"Dopamine agonists especially — gambling, shopping, hypersexuality, binge eating. Warn the patient and family before starting and ask at every review (NG71)."},
    {"tone":"amber","label":"Drugs that worsen Parkinson's","text":"Avoid metoclopramide, prochlorperazine, haloperidol and most antipsychotics. Domperidone (short course, lowest dose) or ondansetron caution; quetiapine (or clozapine via specialist) for psychosis."},
    {"tone":"amber","label":"Excessive daytime sleepiness","text":"Sudden onset of sleep with dopaminergic drugs — DVLA and driving advice."}
  ],

  drugs: [
    {
      id:'levodopa',
      name:'Levodopa (co-careldopa, co-beneldopa)',
      examples:'Specialist-titrated; immediate- and modified-release forms',
      step:'First-line when motor symptoms affect quality of life',
      source:'NICE NG71 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng71',
      sideEffects:'Nausea, postural hypotension, dyskinesia and motor fluctuations over time, hallucinations, sleepiness',
      monitor:'Motor fluctuations; postural BP; mood, hallucinations, impulse control',
      counsel:'"Take each dose at the same times every day. Protein-heavy meals can reduce how well it works — your team may suggest timing doses around meals."',
      detail:{ 'Key teaching':'Most effective for motor symptoms; more dyskinesia than agonists long term, fewer impulse-control and psychiatric effects.' },
      conditions: [
        {"kind":"favoured","label":"Older or cognitively impaired","text":"Fewer neuropsychiatric effects than dopamine agonists"},
        {"kind":"caution","label":"Postural hypotension / falls","text":"Check lying and standing BP"}
      ]
    },
    {
      id:'dopamine_agonist',
      name:'Non-ergot dopamine agonists — pramipexole, ropinirole, rotigotine (patch)',
      examples:'Specialist-titrated; rotigotine patch daily',
      step:'Option when motor symptoms do not affect quality of life; adjunct for fluctuations',
      source:'NICE NG71 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng71',
      sideEffects:'Impulse-control disorders, sleepiness/sudden sleep, hallucinations, oedema, nausea',
      monitor:'Impulse control at every review; sleepiness',
      counsel:'"This medicine can cause urges you find hard to control — gambling, spending, eating or sexual. Tell us — the dose can be changed."',
      detail:{ 'Key teaching':'Rotigotine patch is useful when oral route is unavailable (specialist advice for dose equivalence). Ergot-derived agonists (bromocriptine, cabergoline) need fibrosis monitoring and are not first choice.' },
      conditions: [
        {"kind":"caution","label":"History of addiction / impulsivity","text":"Higher risk of impulse-control disorders"},
        {"kind":"caution","label":"Cognitive impairment / hallucinations","text":"Neuropsychiatric effects more likely"}
      ]
    },
    {
      id:'maob',
      name:'MAO-B inhibitors — rasagiline, safinamide, selegiline',
      examples:'Once daily; specialist-initiated',
      step:'Option in early disease; adjunct for fluctuations',
      source:'NICE NG71 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng71',
      sideEffects:'Headache, nausea, insomnia; interactions (serotonin syndrome risk with some antidepressants, opioids such as pethidine/tramadol)',
      monitor:'Interactions at each new prescription',
      counsel:'"Check with a pharmacist before any new medicine, including cough and cold remedies."',
      detail:{ 'Key teaching':'Modest symptomatic benefit; check interactions with SSRIs, SNRIs, tricyclics and tramadol.' },
      conditions: [
        {"kind":"caution","label":"On an SSRI / SNRI / tramadol","text":"Serotonin syndrome risk — check SPC"}
      ]
    },
    {
      id:'comt',
      name:'COMT inhibitors (entacapone, opicapone) and amantadine',
      examples:'Specialist adjuncts',
      step:'Adjunct for motor fluctuations or dyskinesia',
      source:'NICE NG71 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng71',
      sideEffects:'COMT-I: dyskinesia, urine discolouration, diarrhoea; amantadine: livedo, oedema, hallucinations',
      monitor:'As in the specialist letter',
      counsel:'"Entacapone can turn urine orange-red — that is harmless."',
      detail:{ 'Key teaching':'Amantadine is renally cleared and should not be stopped abruptly.' },
      conditions: [
        {"kind":"caution","label":"CKD","text":"Amantadine accumulates — dose reduction"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG71 — Parkinson\'s disease in adults', url:'https://www.nice.org.uk/guidance/ng71' },
    { label:'SPC — co-careldopa', url:'https://www.medicines.org.uk/emc/search?q=co-careldopa' },
    { label:'SPC — ropinirole', url:'https://www.medicines.org.uk/emc/search?q=ropinirole' },
    { label:'BNF — Parkinson\'s disease', url:'https://bnf.nice.org.uk/treatment-summaries/parkinsons-disease/' }
  ],
});
