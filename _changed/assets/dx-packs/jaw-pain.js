/* ============================================
   Diagnostic Tool pack — Jaw Pain
   Shared-id triage + differential. CKS · GCA · cardiac mimic.
   ============================================ */
(function () {
  const INPUTS = [
    { group: 'Demographics & context', id: 'age', kind: 'number', label: 'Age', unit: 'yrs', min: 0, max: 120, step: 1 },

    { group: 'Pattern', id: 'tmd', kind: 'check', label: 'Worse on chewing/opening, clicking, jaw-muscle tenderness (TMD)' },
    { group: 'Pattern', id: 'dental', kind: 'check', label: 'Tooth pain / sensitivity / swelling (dental)' },
    { group: 'Pattern', id: 'sinus', kind: 'check', label: 'Upper teeth/cheek pain + nasal symptoms (sinusitis)' },
    { group: 'Pattern', id: 'trigeminal', kind: 'check', label: 'Brief electric-shock facial pains, triggered by touch (trigeminal neuralgia)' },
    { group: 'Pattern', id: 'salivary_meal', kind: 'check', label: 'Swelling/pain below ear/jaw at meals (salivary)' },

    { group: 'Red flags', id: 'gca', kind: 'check', label: 'Age ≥50, jaw claudication on chewing + headache / scalp tenderness / visual symptoms (GCA)' },
    { group: 'Red flags', id: 'cardiac', kind: 'check', label: 'Exertional jaw/arm pain + chest tightness / sweating (cardiac)' },
    { group: 'Red flags', id: 'spreading_infection', kind: 'check', label: 'Facial swelling + fever / trismus / floor-of-mouth swelling (spreading infection)' },
  ];

  if (window.RGPTriage) RGPTriage.register('jaw-pain-triage', {
    title: 'Jaw pain — triage',
    subtitle: 'Tick features. Surfaces GCA, cardiac and spreading dental infection emergencies.',
    guideline: 'CKS · BSR GCA · CG95',
    inputs: INPUTS,
    defaultMessage: 'No red-flag rule fired. Examine TMJ, teeth, sinuses, salivary glands; most jaw pain is TMD or dental — analgesia, dental review, conservative TMD measures.',
    rules: [
      {
        id: 'cardiac', tier: 'emergency',
        label: 'Possible cardiac pain — exertional jaw/arm pain + chest/autonomic symptoms',
        action: '999 / same-day — ECG, troponin; treat as ?ACS.',
        patientPhrase: '"Jaw pain with these features can come from the heart — I need an urgent heart trace today."',
        source: 'NICE CG95',
        when: i => i.cardiac,
      },
      {
        id: 'gca', tier: 'emergency',
        label: 'Possible giant cell arteritis — jaw claudication + headache / visual symptoms',
        action: 'Same-day high-dose steroid + urgent rheumatology/ophthalmology (sight-threatening).',
        patientPhrase: '"Jaw ache on chewing with headache can mean an artery inflammation that threatens sight — I am starting steroids and referring urgently."',
        source: 'BSR GCA',
        when: i => i.gca,
      },
      {
        id: 'infection', tier: 'emergency',
        label: 'Spreading dental/facial infection (Ludwig\u2019s / abscess)',
        action: 'Same-day — airway risk; IV antibiotics + drainage; urgent maxillofacial.',
        source: 'CKS',
        when: i => i.spreading_infection,
      },
      {
        id: 'dental', tier: 'urgent',
        label: 'Dental cause',
        action: 'Urgent dental review; analgesia ± antibiotics if spreading.',
        source: 'CKS',
        when: i => i.dental,
      },
      {
        id: 'manage', tier: 'routine',
        label: 'TMD / sinus / neuralgia — assess & manage',
        action: 'TMD → conservative (soft diet, jaw rest, analgesia); sinusitis → treat; trigeminal neuralgia → carbamazepine + neurology.',
        source: 'CKS',
        when: i => true,
      },
    ],
    sources: [
      { label: 'NICE CKS — Temporomandibular disorders', url: 'https://cks.nice.org.uk/topics/temporomandibular-disorders-tmds/' },
      { label: 'NICE CKS — Giant cell arteritis', url: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/' },
    ],
  });

  if (window.RGPDiagnostic) RGPDiagnostic.register('jaw-pain-dx', {
    title: 'Jaw pain — differential',
    subtitle: 'The engine weights TMD, dental, sinus, trigeminal neuralgia and salivary causes, and always surfaces GCA, cardiac pain and spreading infection.',
    guideline: 'CKS · BSR · CG95',
    patientPresenting: "My jaw's been aching, doctor — it hurts when I chew and clicks when I open wide.",
    inputs: INPUTS,
    diagnoses: [
      { id: 'tmd', name: 'Temporomandibular disorder', summary: 'Pain on chewing/opening, clicking, muscle tenderness', baseline: 12, category: 'common',
        keyExam: 'Tender masticatory muscles/TMJ, clicking, limited opening.', nextIx: 'Conservative: soft diet, jaw rest, analgesia, stress/bruxism advice; dental/maxfax if persistent.',
        patientPhrase: 'The jaw joint and muscles are strained — often from clenching. Rest, soft diet and simple measures settle most cases.',
        ciksUrl: 'https://cks.nice.org.uk/topics/temporomandibular-disorders-tmds/' },
      { id: 'dental', name: 'Dental cause', summary: 'Tooth pain / decay / abscess', baseline: 7, category: 'common',
        keyExam: 'Tooth tenderness/swelling.', nextIx: 'Dental review; analgesia ± antibiotics if spreading.',
        patientPhrase: 'A dental problem is the source. A dentist can treat it directly.',
        ciksUrl: 'https://cks.nice.org.uk/topics/temporomandibular-disorders-tmds/' },
      { id: 'sinus', name: 'Sinusitis (referred)', summary: 'Upper-teeth/cheek pain + nasal symptoms', baseline: 4, category: 'common',
        keyExam: 'Sinus tenderness; nasal signs.', nextIx: 'Treat sinusitis; analgesia.',
        patientPhrase: 'Sinus inflammation can refer pain to the upper jaw. Treating the sinuses helps.',
        ciksUrl: 'https://cks.nice.org.uk/topics/sinusitis/' },
      { id: 'trigeminal', name: 'Trigeminal neuralgia', summary: 'Brief electric-shock pains, triggered by touch/chewing', baseline: 3, category: 'less-common',
        keyExam: 'Trigger zones; normal exam between attacks.', nextIx: 'Carbamazepine; neurology; MRI to exclude secondary cause.',
        patientPhrase: 'A nerve is firing abnormally, causing brief shock-like pains. A specific medication usually controls it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/trigeminal-neuralgia/' },
      { id: 'salivary', name: 'Salivary gland (stone/sialadenitis)', summary: 'Meal-related swelling/pain below ear/jaw', baseline: 2, category: 'less-common',
        keyExam: 'Salivary swelling; stone.', nextIx: 'Hydration, sialogogues; USS; ENT if persistent.',
        patientPhrase: 'A salivary gland or stone can cause meal-related pain. We confirm with a scan and treat it.',
        ciksUrl: 'https://cks.nice.org.uk/topics/temporomandibular-disorders-tmds/' },

      { id: 'gca', name: 'Giant cell arteritis', summary: '≥50, jaw claudication + headache / visual symptoms', baseline: 1, category: 'cant-miss',
        keyExam: 'Scalp/temporal tenderness, reduced pulse.', nextIx: '\u26A1 Same-day high-dose steroid + urgent referral (sight-threatening).',
        patientPhrase: 'Jaw ache on chewing with headache can threaten sight — we start steroids and refer urgently today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/', redFlagAction: '\u26A1 Steroid now + urgent referral' },
      { id: 'cardiac', name: 'Cardiac (referred)', summary: 'Exertional jaw/arm pain + chest/autonomic symptoms', baseline: 1, category: 'cant-miss',
        keyExam: 'CV risk; recreate on exertion.', nextIx: '\u26A1 ECG ± troponin; treat as ?ACS.',
        patientPhrase: 'Jaw pain on exertion can come from the heart — I will check that to be safe.',
        ciksUrl: 'https://www.nice.org.uk/guidance/cg95', redFlagAction: '\u26A1 ECG / troponin' },
      { id: 'infection', name: 'Spreading facial infection', summary: 'Swelling + fever / trismus / floor-of-mouth', baseline: 1, category: 'cant-miss',
        keyExam: 'Facial swelling, trismus, raised tongue.', nextIx: '\u26A1 Same-day — airway risk, IV antibiotics + drainage.',
        patientPhrase: 'A spreading dental infection can threaten the airway — that needs emergency treatment today.',
        ciksUrl: 'https://cks.nice.org.uk/topics/temporomandibular-disorders-tmds/', redFlagAction: '\u26A1 Same-day maxfax' },
    ],
    effects: {
      age: (v) => v >= 50 ? { gca: +2, cardiac: +2 } : (v < 40 ? { tmd: +3, dental: +2 } : {}),

      tmd: { tmd: +22 },
      dental: { dental: +22 },
      sinus: { sinus: +22 },
      trigeminal: { trigeminal: +24 },
      salivary_meal: { salivary: +22 },

      gca: { gca: +30 },
      cardiac: { cardiac: +30 },
      spreading_infection: { infection: +30 },
    },
    askAbout: {
      tmd: ['tmd'],
      dental: ['dental'],
      sinus: ['sinus'],
      trigeminal: ['trigeminal'],
      salivary: ['salivary_meal'],
      gca: ['gca'],
      cardiac: ['cardiac'],
      infection: ['spreading_infection'],
    },
    sources: [
      { label: 'NICE CKS — TMD', url: 'https://cks.nice.org.uk/topics/temporomandibular-disorders-tmds/' },
      { label: 'NICE CKS — Giant cell arteritis', url: 'https://cks.nice.org.uk/topics/giant-cell-arteritis/' },
    ],
  });

  (window.RGP_EXTRA_TOPICS = window.RGP_EXTRA_TOPICS || []).push(
    { id: 'jaw-pain', label: 'Jaw pain', triage: 'jaw-pain-triage', dx: 'jaw-pain-dx' }
  );
})();
