/* ============================================
   Medication Chooser — VTE treatment (confirmed DVT or PE, adults)
   NICE NG158 (2020, updated 2023) · SPC
   Fixed lists (Upload 128, October 2026): no patient factors and no scoring.
   ============================================ */
MedChooser.register('vte-treatment', {
  title: 'VTE treatment — confirmed DVT or PE',
  subtitle: 'NICE NG158: offer apixaban or rivaroxaban first. If neither is suitable, LMWH for at least 5 days then dabigatran or edoxaban, or LMWH with a vitamin K antagonist (warfarin) until the INR is at least 2.0 on two readings. Treat for at least 3 months (3–6 months for active cancer), then review. These are treatment doses — not the AF doses.',
  guideline: 'NICE NG158 · SPC',

  safety: [
    {"tone":"red","label":"Use Cockcroft–Gault","text":"Calculate creatinine clearance (Cockcroft–Gault, actual body weight) — DOAC SPCs use CrCl, not eGFR (MHRA, 2019). No DOAC below CrCl 15 mL/min; dabigatran not below 30."},
    {"tone":"red","label":"Loading phase","text":"Apixaban and rivaroxaban have a higher-dose loading phase (7 and 21 days). Dabigatran and edoxaban need at least 5 days of LMWH first."},
    {"tone":"amber","label":"Interactions","text":"Avoid with strong CYP3A4 and P-gp inhibitors (azole antifungals, HIV protease inhibitors) and inducers (rifampicin, carbamazepine, phenytoin, St John\'s wort). Antiplatelets, NSAIDs and SSRIs add bleeding risk."},
    {"tone":"red","label":"Antiphospholipid syndrome","text":"DOACs are not recommended in triple-positive antiphospholipid syndrome — warfarin (NG158/MHRA)."},
    {"tone":"amber","label":"Pregnancy and breastfeeding","text":"DOACs are not used — LMWH."}
  ],

  drugs: [
    {
      id:'apixaban',
      name:'Apixaban',
      examples:'10 mg twice daily for 7 days, then 5 mg twice daily',
      step:'First-line (NG158)',
      source:'NICE NG158 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng158',
      sideEffects:'Bleeding, anaemia, nausea',
      monitor:'FBC, renal and liver function at baseline then at least annually; more often if CrCl <60, age ≥75 or frail',
      counsel:'"Take the higher dose twice a day for the first week, then the lower dose. Do not miss doses. Seek help for black stools, blood in urine, or a head injury."',
      detail:{
        'Dose':'Treatment: 10 mg BD for 7 days then 5 mg BD (SPC). Extended prevention of recurrence after at least 6 months: 2.5 mg BD.',
        'Renal':'Use with caution at CrCl 15–29; not recommended below 15 (SPC). No dose reduction by age or weight for VTE treatment.'
      },
      conditions: [
        {"kind":"avoid","label":"CrCl <15 mL/min","text":"Not recommended (SPC)"},
        {"kind":"caution","label":"CrCl 15–29 mL/min","text":"Use with caution (SPC)"},
        {"kind":"avoid","label":"Triple-positive antiphospholipid syndrome","text":"Use warfarin"}
      ]
    },
    {
      id:'rivaroxaban',
      name:'Rivaroxaban',
      examples:'15 mg twice daily for 21 days, then 20 mg once daily, with food',
      step:'First-line (NG158)',
      source:'NICE NG158 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng158',
      sideEffects:'Bleeding, anaemia',
      monitor:'As for apixaban',
      counsel:'"The 15 mg and 20 mg tablets must be taken with food or they are not absorbed properly."',
      detail:{
        'Dose':'15 mg BD with food for 21 days, then 20 mg OD with food (SPC). Extended prevention after 6 months: 10 mg OD (20 mg OD if higher recurrence risk).',
        'Renal':'CrCl 15–49: after day 21, consider 15 mg OD if bleeding risk outweighs recurrence risk (SPC). Not recommended below 15.'
      },
      conditions: [
        {"kind":"avoid","label":"CrCl <15 mL/min","text":"Not recommended (SPC)"},
        {"kind":"caution","label":"CrCl 15–49 mL/min","text":"Consider 15 mg OD after the loading phase (SPC)"},
        {"kind":"avoid","label":"Triple-positive antiphospholipid syndrome","text":"Use warfarin"}
      ]
    },
    {
      id:'edoxaban',
      name:'Edoxaban',
      examples:'After ≥5 days LMWH: 60 mg once daily (30 mg if criteria met)',
      step:'If apixaban/rivaroxaban unsuitable (NG158)',
      source:'NICE NG158 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng158',
      sideEffects:'Bleeding, anaemia, rash, abnormal LFTs',
      monitor:'As for apixaban',
      counsel:'"Start this the day after your last heparin injection."',
      detail:{
        'Dose':'60 mg OD after at least 5 days of parenteral heparin. 30 mg OD if any of: CrCl 15–50, weight ≤60 kg, or certain P-gp inhibitors (ciclosporin, dronedarone, erythromycin, ketoconazole) (SPC).',
        'Renal':'Not recommended below CrCl 15.'
      },
      conditions: [
        {"kind":"caution","label":"Weight ≤60 kg","text":"30 mg OD (SPC)"},
        {"kind":"caution","label":"CrCl 15–50 mL/min","text":"30 mg OD (SPC)"}
      ]
    },
    {
      id:'dabigatran',
      name:'Dabigatran',
      examples:'After ≥5 days LMWH: 150 mg twice daily (110 mg twice daily if criteria met)',
      step:'If apixaban/rivaroxaban unsuitable (NG158)',
      source:'NICE NG158 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng158',
      sideEffects:'Dyspepsia, bleeding',
      monitor:'Renal function closely — renally cleared',
      counsel:'"Swallow the capsules whole with water; do not open them."',
      detail:{
        'Dose':'150 mg BD after at least 5 days of parenteral anticoagulant. 110 mg BD if age ≥80 or on verapamil; consider 110 mg BD at 75–80, CrCl 30–50 with high bleeding risk, or gastritis/oesophagitis/reflux (SPC).',
        'Renal':'Contraindicated below CrCl 30.'
      },
      conditions: [
        {"kind":"avoid","label":"CrCl <30 mL/min","text":"Contraindicated (SPC)"},
        {"kind":"avoid","label":"On ketoconazole, itraconazole, ciclosporin or dronedarone","text":"Contraindicated (SPC)"},
        {"kind":"caution","label":"Age ≥80 / verapamil","text":"110 mg BD (SPC)"}
      ]
    },
    {
      id:'lmwh_warfarin',
      name:'LMWH and warfarin',
      examples:'LMWH for ≥5 days and until INR ≥2.0 on two consecutive readings; warfarin target INR 2.5',
      step:'If DOACs unsuitable — e.g. CrCl <15, antiphospholipid syndrome, extremes of weight, interactions',
      source:'NICE NG158 · SPC',
      sourceUrl:'https://www.nice.org.uk/guidance/ng158',
      sideEffects:'Bleeding; LMWH: heparin-induced thrombocytopenia; warfarin: many interactions',
      monitor:'INR through an anticoagulation service; platelets per local LMWH policy',
      counsel:'"Carry your yellow book and tell every prescriber and pharmacist you take warfarin."',
      detail:{ 'Key teaching':'LMWH alone is used in pregnancy and often in active cancer where DOACs are unsuitable.' },
      conditions: [
        {"kind":"favoured","label":"Triple-positive antiphospholipid syndrome","text":"Warfarin is preferred"},
        {"kind":"favoured","label":"Pregnant","text":"LMWH"}
      ]
    }
  ],

  sources: [
    { label:'NICE NG158 — Venous thromboembolic diseases: diagnosis, management and thrombophilia testing', url:'https://www.nice.org.uk/guidance/ng158' },
    { label:'MHRA DSU — Prescribing medicines in renal impairment: using the appropriate estimate of renal function (2019)', url:'https://www.gov.uk/drug-safety-update/prescribing-medicines-in-renal-impairment-using-the-appropriate-estimate-of-renal-function-to-avoid-the-risk-of-adverse-drug-reactions' },
    { label:'SPC — apixaban', url:'https://www.medicines.org.uk/emc/search?q=apixaban' },
    { label:'SPC — rivaroxaban', url:'https://www.medicines.org.uk/emc/search?q=rivaroxaban' },
    { label:'SPC — edoxaban', url:'https://www.medicines.org.uk/emc/search?q=edoxaban' },
    { label:'SPC — dabigatran', url:'https://www.medicines.org.uk/emc/search?q=dabigatran' }
  ],
});
