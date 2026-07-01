/* ============================================
   Diagnostic Tool pack — Fever in Children
   Shared-id triage + differential. NICE NG143 traffic-light system.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Age', id: 'age_months', kind: 'number', label: 'Age', unit: 'months', min: 0, max: 216, step: 1 },

    { group: 'RED features (NICE NG143)', id: 'red_appearance', kind: 'check', label: 'Pale/mottled/blue, no response to social cues, weak/high-pitched cry' },
    { group: 'RED features (NICE NG143)', id: 'red_breathing', kind: 'check', label: 'Grunting / RR >60 / severe recession' },
    { group: 'RED features (NICE NG143)', id: 'red_circulation', kind: 'check', label: 'Reduced skin turgor / cap refill ≥3s / cold mottled' },
    { group: 'RED features (NICE NG143)', id: 'non_blanching', kind: 'check', label: 'Non-blanching rash / neck stiffness / bulging fontanelle / status / focal signs' },
    { group: 'RED features (NICE NG143)', id: 'under3m_38', kind: 'check', label: 'Age <3 months with temp ≥38°C' },

    { group: 'AMBER features', id: 'amber', kind: 'check', label: 'Pallor / poor feeding / reduced activity / 3–6 months ≥39°C / fever ≥5 days' },

    { group: 'Focal source', id: 'cough_resp', kind: 'check', label: 'Cough / coryza / fast breathing (respiratory)' },
    { group: 'Focal source', id: 'ear_throat', kind: 'check', label: 'Ear pain / sore throat' },
    { group: 'Focal source', id: 'urinary', kind: 'check', label: 'Dysuria / smelly urine / unexplained fever (UTI)' },
    { group: 'Focal source', id: 'rash_viral', kind: 'check', label: 'Viral rash / well between fevers' },
  ];

  if (window.RGPTriage) RGPTriage.register('fever-children-triage', {
    title: 'Fever in children — traffic-light triage',
    subtitle: 'Tick features. Applies the NICE NG143 traffic-light system; surfaces meningococcal/sepsis and the under-3-month rule.',
    guideline: 'NICE NG143',
    inputs: INPUTS,
    defaultMessage: 'No red/amber feature flagged (GREEN) — likely self-limiting viral illness. Safety-net (red-flag advice, fluids, antipyretics for distress not fever per se), identify any focal source, review if not improving.',
    rules: [
      {
        id: 'red', tier: 'emergency',
        label: 'RED features / meningococcal signs / <3 months with fever — urgent',
        action: '999 / same-day paediatric assessment; non-blanching rash → immediate (benzylpenicillin + transfer).',
        patientPhrase: '"Your child has warning signs — they need to be seen urgently in hospital today."',
        source: 'NICE NG143', sourceUrl: 'https://www.nice.org.uk/guidance/ng143',
        when: i => i.red_appearance || i.red_breathing || i.red_circulation || i.non_blanching || i.under3m_38,
      },
      {
        id: 'amber', tier: 'urgent',
        label: 'AMBER features — assess and safety-net',
        action: 'Face-to-face assessment; consider investigations/observation; clear safety-net; review.',
        source: 'NICE NG143',
        when: i => i.amber,
      },
      {
        id: 'uti', tier: 'urgent',
        label: 'Unexplained fever / urinary symptoms — exclude UTI',
        action: 'Urine sample (clean catch) for all unexplained fever; treat per NICE CG54.',
        source: 'NICE CG54',
        when: i => i.urinary,
      },
      {
        id: 'focal', tier: 'routine',
        label: 'Focal viral / minor infection (GREEN)',
        action: 'Treat source (otitis/tonsillitis); antipyretic for distress; fluids; safety-net.',
        source: 'NICE NG143',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE NG143 — Fever in under 5s', url: 'https://www.nice.org.uk/guidance/ng143' },
      { label: 'NICE CG54 — UTI in children', url: 'https://www.nice.org.uk/guidance/cg54' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('fever-children-dx', {
    title: 'Fever in children — differential',
    subtitle: 'Most childhood fever is self-limiting viral illness. The engine weights the common focal infections and always surfaces serious bacterial infection / meningococcal disease.',
    guideline: 'NICE NG143',
    patientPresenting: "My child's had a high temperature, doctor — should I be worried?",
    inputs: INPUTS,
    diagnoses: [
      { id: 'viral', name: 'Self-limiting viral illness', summary: 'Well between fevers, viral rash/coryza, GREEN', baseline: 12, category: 'common',
        keyExam: 'Well-looking, identifiable viral features.', nextIx: 'Antipyretic for distress; fluids; safety-net.',
        patientPhrase: 'Most childhood fevers are viral and settle on their own. We give you clear warning signs to watch for.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng143' },
      { id: 'respiratory', name: 'Respiratory infection (URTI / otitis / tonsillitis / pneumonia)', summary: 'Cough, ear/throat, fast breathing', baseline: 7, category: 'common',
        keyExam: 'Ears, throat, chest.', nextIx: 'Treat focal infection; antibiotics if pneumonia/bacterial; safety-net.',
        patientPhrase: 'A focal infection is the source. We treat it and watch the breathing carefully.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng143' },
      { id: 'uti', name: 'Urinary tract infection', summary: 'Unexplained fever / urinary symptoms', baseline: 4, category: 'common',
        keyExam: 'Abdominal/loin tenderness; urine sample.', nextIx: 'Clean-catch urine; treat per NICE CG54; image per criteria.',
        patientPhrase: 'A urine infection can cause fever without obvious symptoms in children — a urine test checks for it.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg54' },

      { id: 'serious_bacterial', name: 'Serious bacterial infection / meningococcal sepsis', summary: 'RED features, non-blanching rash, <3 months', baseline: 2, category: 'cant-miss',
        keyExam: 'Toxic, non-blanching rash, neck stiffness, poor perfusion.', nextIx: '\u26A1 999 / same-day; non-blanching rash → benzylpenicillin + immediate transfer.',
        patientPhrase: 'A few features mean we must rule out a serious infection urgently — that is why I am sending your child in today.',
        ciksUrl: 'https://www.nice.org.uk/guidance/ng143', redFlagAction: '\u26A1 Emergency admission' },
    ],
    effects: {
      age_months: (v) => v != null && v < 3 ? { serious_bacterial: +8 } : {},

      red_appearance: { serious_bacterial: +16 },
      red_breathing: { serious_bacterial: +12, respiratory: +6 },
      red_circulation: { serious_bacterial: +14 },
      non_blanching: { serious_bacterial: +26 },
      under3m_38: { serious_bacterial: +14 },

      amber: { serious_bacterial: +4 },

      cough_resp: { respiratory: +20 },
      ear_throat: { respiratory: +16 },
      urinary: { uti: +22 },
      rash_viral: { viral: +18 },
    },
    askAbout: {
      viral: ['rash_viral'],
      respiratory: ['cough_resp', 'ear_throat'],
      uti: ['urinary'],
      serious_bacterial: ['red_appearance', 'non_blanching', 'under3m_38'],
    },
    sources: [
      { label: 'NICE NG143 — Fever in under 5s', url: 'https://www.nice.org.uk/guidance/ng143' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'fever-children', label: 'Fever in children', triage: 'fever-children-triage', dx: 'fever-children-dx' }
  );
})();
