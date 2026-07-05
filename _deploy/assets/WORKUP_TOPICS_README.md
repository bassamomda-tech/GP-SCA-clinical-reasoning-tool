# Workup Tool — Topic Datasets

The Diagnostic Tool at `/tools/diagnostic.html` combines a **triage** verdict (urgency: emergency / 2WW / urgent / routine) and a **differential diagnosis** ranking for each presenting complaint.

Every topic in the tool needs **two registered datasets** that map to each other via the topic registry in `assets/workup.js`:

| Topic id | Triage data | Diagnostic data |
|---|---|---|
| `headache` | `assets/triage/headache.js` → registers `'headache-triage'` | `assets/diagnostic/headache.js` → registers `'headache'` |
| `chest-pain` | `assets/triage/chest-pain.js` → registers `'chest-pain-triage'` | `assets/diagnostic/chest-pain.js` → registers `'chest-pain'` |
| …etc | | |

Naming convention:
- **Triage** datasets are registered with the `-triage` suffix
- **Diagnostic** datasets use the bare topic id
- Tiredness is the legacy exception: triage registered as `'tiredness'`, dx as `'tatt'`

---

## Adding a new presenting complaint

### Step 1 — Create the triage dataset

Create `assets/triage/<topic>.js`:

```js
RGPTriage.register('<topic>-triage', {
  title: 'Topic — symptom triage',
  subtitle: 'One-line description of what the engine surfaces.',
  guideline: 'NICE NG... · CKS · ...',

  // Symptoms / vitals / context the engine reads.
  inputs: [
    { group:'Demographics', id:'age', kind:'number', label:'Age', unit:'yrs', step:1 },
    { group:'Red flags', id:'flag_x', kind:'check', label:'Red-flag feature X' },
    { group:'Vitals', id:'sbp', kind:'number', label:'Systolic BP', unit:'mmHg', step:1 },
    // ...
  ],

  // Rules that fire on input combinations. Use 4 tiers:
  //   emergency · cancer (2WW) · urgent (non-cancer) · routine
  rules: [
    {
      id: 'unique-rule-id',
      tier: 'emergency',
      label: 'Headline label shown in verdict',
      action: 'What the GP should do — call 999, refer 2WW, etc.',
      patientPhrase: 'Optional plain-English phrase to say to the patient.',
      proformaUrl: 'https://...',          // optional referral form
      proformaLabel: '2WW lower GI proforma',
      source: 'NICE NG12',                  // optional source citation
      sourceUrl: 'https://...',
      when: (i) => !!i.flag_x && i.age >= 50,  // boolean predicate
    },
    // ... more rules
  ],

  defaultMessage: 'Shown as headline when no rule fires.',
  sources: [
    { label: 'NICE CKS Topic', url: 'https://cks.nice.org.uk/topics/...' },
  ],
});
```

**Rule predicate API**: `when(inputs)` receives the unified `state.inputs` object. Boolean inputs are `true`/missing; number inputs are numbers or `undefined`. Always guard against undefined: `i.sbp && i.sbp < 90`.

### Step 2 — Create the diagnostic dataset

Create `assets/diagnostic/<topic>.js`:

```js
RGPDiagnostic.register('<topic>', {
  title: 'Topic — what is causing it?',
  subtitle: 'How the differential is built.',
  guideline: 'NICE / source criteria',
  patientPresenting: "A patient-vignette quote shown at the top of the verdict panel.",

  // Symptoms / features the engine consumes.
  // Inputs can OVERLAP with the triage dataset — duplicates are deduped by id.
  inputs: [
    { group:'Demographics', id:'age', kind:'number', label:'Age', unit:'yrs', step:1 },
    { group:'Symptoms',     id:'feature_x', kind:'check', label:'Feature X' },
    // ...
  ],

  // The differential. Each diagnosis has a baseline weight and a category.
  diagnoses: [
    {
      id: 'dx-id',
      name: 'Diagnosis name',
      summary: 'One-line characterisation.',
      baseline: 10,                            // pre-test weight
      category: 'common',                       // 'common' | 'less-common' | 'cant-miss'
      keyExam: 'Key examination findings.',
      nextIx: 'Next investigation that confirms / refutes.',
      ciksUrl: 'https://cks.nice.org.uk/topics/...',
      caseLink: '../cases/topic.html',         // optional cross-link to full case
      patientPhrase: 'Plain-English explanation for the patient.',
      // Only for cant-miss:
      redFlagAction: '⚡ Same-day specialist / 999',
    },
    // ...
  ],

  // Feature weights. Each input id maps to {dxId: weight}.
  // Positive = supports that Dx; negative = refutes.
  // For numeric inputs, use a function: (val, inputs) => { dxId: weight }.
  effects: {
    age: (v) => {
      const o = {};
      if (v >= 50) { o.dx_id = +10; }
      if (v < 30) { o.other_dx = +5; }
      return o;
    },
    feature_x: { dx_id: +15, other_dx: -5 },
  },

  // Optional: list features still worth asking about per Dx
  // (surfaced in the Pro/Con view as "💡 Ask about").
  askAbout: {
    dx_id: ['feature_x', 'age'],
  },

  sources: [
    { label: 'NICE CKS Topic', url: 'https://cks.nice.org.uk/topics/...' },
  ],
});
```

**Scoring**: each Dx starts at its `baseline`, then `effects` adds/subtracts weights from ticked features. Final score is normalised to a relative %. **Cant-miss diagnoses are excluded from the % unless a positive weight fires for them** — so they only surface when their red-flag triggers are present.

### Step 3 — Register the topic in the orchestrator

In `assets/workup.js`, add to the `TOPICS` array (preserving order — first item is the default):

```js
const TOPICS = [
  // ... existing topics
  { id:'<topic>',  label:'Display name',  triage:'<topic>-triage',  dx:'<topic>' },
];
```

If a topic has *only* triage or *only* differential data, set the other to `null`.

### Step 4 — Add the script tags in `tools/diagnostic.html`

```html
<script src="../assets/triage/<topic>.js"></script>
<!-- ... and -->
<script src="../assets/diagnostic/<topic>.js"></script>
```

### Step 5 — Done

The new topic appears in the picker automatically with badges showing which views (🚦 triage / 🩺 differential) are available. The shared input panel merges inputs from both datasets, deduplicating by id.

---

## Tuning weights

Weights are **manually calibrated** — not derived from likelihood ratios in published literature. The principle is:
- **+15 to +25**: classic / specific feature for that Dx (e.g. tearing back pain → aortic dissection)
- **+5 to +12**: supportive but non-specific feature
- **-5 to -10**: refutes the Dx (e.g. burning rash → reduces MSK score, increases shingles)
- `cant-miss` diagnoses have low baseline (1) but high single-feature weights so they spike when triggered.

Validation tip: tick the classic features in clinical sequence and check the headline Dx matches what you'd diagnose. If a top-ranked Dx is wrong, look at which feature weights fired (the % view's expand-card shows the rule trail) and adjust.

---

## File checklist

```
assets/
├── triage.js                              # engine — do not touch
├── diagnostic.js                          # engine — do not touch
├── workup.js                              # orchestrator — update TOPICS array
├── workup.css                             # combined-layout styles
├── triage/
│   ├── <topic>.js                         # registers '<topic>-triage'
│   └── …
└── diagnostic/
    ├── <topic>.js                         # registers '<topic>'
    └── …

tools/
└── diagnostic.html                        # add script tags for new topic files
```
