#!/usr/bin/env python3
"""
Reasoning GP - cross-page facts register.

check_consistency.py finds a fact stated two ways inside ONE page. This finds
the same fact stated differently on DIFFERENT pages: protocols, algorithms,
Snapshots, Clinic Guides, cases, SCA data, Ready Prescriptions, audio scripts.

  1. Reads every page and every data file (HTML text, plus the string literals
     in assets/*.js and assets/**/*.json), and splits it into sentences.
  2. Keeps each sentence that states a clinical number: a value with a unit
     (mmol/L, mg, IU, x ULN, weeks...) about a known subject (an analyte such
     as sodium or ferritin, or a drug).
  3. Gives each such statement a key: subject | action | unit, where the action
     is the word that says what the number is for (stop, start, refer, admit,
     target, maintenance, loading, recheck, ...).
  4. Groups statements by key. A key whose pages give different numbers is a
     CANDIDATE conflict, for a person (or a checking agent) to read.

It is a review aid, not a judge: different numbers are often both right
(different age bands, a pre-start rule vs an on-treatment rule). Every
candidate needs reading against the source.

Usage (from the repository root):
    python3 governance/facts_register.py                  # writes governance/facts/
    python3 governance/facts_register.py --subject sodium # print one subject's statements
Outputs:
    governance/facts/register.jsonl   one line per statement (key, value, file, text)
    governance/facts/conflicts.json   keys whose pages disagree, ranked
    governance/facts/report.md        summary and the top candidates

Only the Python standard library is used.
"""
import os, re, sys, json, html, collections

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'governance', 'facts')

SKIP_DIRS = {'backend', 'governance', 'node_modules', '.git', 'search', 'downloads'}
SKIP_FILES = re.compile(r'(review-index\.json|idx-[a-z]+\.json|manifest\.json|clinic-guides\.json|sitemap)')

# ------------------------------------------------------------------ subjects
# name -> regex. Order matters only for display.
SUBJECTS = {
 'sodium': r"\bsodium\b|\bNa\+?⁺?(?=\s*[<>≤≥]|\s+\d)|hyponatra|hypernatra",
 'potassium': r"\bpotassium\b|\bK\+?⁺?(?=\s*[<>≤≥]|\s+\d)|hyperkala|hypokala",
 'calcium': r"\bcalcium\b(?! channel)|\bCa\b(?=\s*[<>≤≥]|\s+\d)|hypercalc|hypocalc",
 'magnesium': r"\bmagnesium\b|\bMg\b(?=\s*[<>≤≥]|\s+\d)|hypomagnes",
 'phosphate': r"\bphosphate\b",
 'ferritin': r"\bferritin\b",
 'transferrin saturation': r"\bTSAT\b|transferrin saturation",
 'haemoglobin': r"\bHb\b|haemoglobin(?! A1c|A1c| electrophoresis)",
 'MCV': r"\bMCV\b",
 'B12': r"\bB12\b|cobalamin",
 'folate': r"\bfolate\b|folic acid",
 'platelets': r"\bplatelets?\b|thrombocyt",
 'neutrophils': r"\bneutrophils?\b|\bANC\b|neutropeni",
 'lymphocytes': r"\blymphocytes?\b|lymphopeni|lymphocytosis",
 'eosinophils': r"\beosinophils?\b|eosinophilia",
 'white cells': r"\bWCC\b|\bwhite (cell|count)",
 'haematocrit': r"\bhaematocrit\b|\bHct\b",
 'TSH': r"\bTSH\b",
 'FT4': r"\bFT4\b|free T4",
 'HbA1c': r"\bHbA1c\b",
 'glucose': r"\bglucose\b|\bCBG\b|blood sugar",
 'eGFR': r"\beGFR\b|\bCrCl\b|creatinine clearance",
 'ACR': r"\bACR\b|albumin.creatinine",
 'creatinine': r"\bcreatinine\b(?! clearance)",
 'CK': r"\bCK\b|creatine kinase",
 'ALT': r"\bALT\b|transaminase",
 'ALP': r"\bALP\b|alkaline phosphatase",
 'bilirubin': r"\bbilirubin\b",
 'PSA': r"\bPSA\b",
 'CA125': r"\bCA-?125\b",
 'testosterone': r"\btestosterone\b",
 'prolactin': r"\bprolactin\b",
 'vitamin D': r"vitamin D|colecalciferol|cholecalciferol|25-?OH",
 'CRP': r"\bCRP\b",
 'ESR': r"\bESR\b",
 'triglycerides': r"triglyceride|\bTG\b",
 'LDL/non-HDL': r"\bLDL\b|non-HDL",
 'blood pressure': r"blood pressure|\bBP\b|mmHg",
 'BMI': r"\bBMI\b",
 'FIT': r"\bFIT\b|faecal immunochemical",
 'NEWS2': r"\bNEWS2?\b",
 'temperature': r"°C",
 'tryptase': r"\btryptase\b",
 'IgG/IgA/IgM/paraprotein': r"\bIg[GAMDE]\b|paraprotein",
 'urate': r"\burate\b|uric acid",
 'INR': r"\bINR\b",
 'lithium': r"\blithium\b",
 'adrenaline': r"\badrenaline\b|\bepinephrine\b",
 'prednisolone': r"\bprednisolone\b",
 'methylprednisolone': r"methylprednisolone",
 'hydrocortisone': r"\bhydrocortisone\b",
 'levothyroxine': r"\blevothyroxine\b",
 'carbimazole': r"\bcarbimazole\b",
 'hydroxocobalamin': r"\bhydroxocobalamin\b",
 'iron': r"ferrous (sulfate|sulphate|fumarate|gluconate)|oral iron",
 'metformin': r"\bmetformin\b",
 'statin': r"\bstatins?\b|atorvastatin|simvastatin|rosuvastatin",
 'amoxicillin': r"\bamoxicillin\b",
 'doxycycline': r"\bdoxycycline\b",
 'clarithromycin': r"\bclarithromycin\b",
 'nitrofurantoin': r"\bnitrofurantoin\b",
 'trimethoprim': r"\btrimethoprim\b",
 'flucloxacillin': r"\bflucloxacillin\b",
 'phenoxymethylpenicillin': r"phenoxymethylpenicillin|penicillin V",
 'metronidazole': r"\bmetronidazole\b",
 'paracetamol': r"\bparacetamol\b",
 'ibuprofen': r"\bibuprofen\b",
 'naproxen': r"\bnaproxen\b",
 'codeine': r"\bcodeine\b",
 'morphine': r"\bmorphine\b",
 'amitriptyline': r"\bamitriptyline\b",
 'sertraline': r"\bsertraline\b",
 'citalopram': r"\bcitalopram\b",
 'amlodipine': r"\bamlodipine\b",
 'ramipril': r"\bramipril\b",
 'furosemide': r"\bfurosemide\b",
 'bisoprolol': r"\bbisoprolol\b",
 'aspirin': r"\baspirin\b",
 'clopidogrel': r"\bclopidogrel\b",
 'apixaban': r"\bapixaban\b",
 'rivaroxaban': r"\brivaroxaban\b",
 'edoxaban': r"\bedoxaban\b",
 'warfarin': r"\bwarfarin\b",
 'allopurinol': r"\ballopurinol\b",
 'colchicine': r"\bcolchicine\b",
 'alendronic acid': r"alendron",
 'zoledronic acid': r"zoledron",
 'denosumab': r"\bdenosumab\b",
 'gabapentin': r"\bgabapentin\b",
 'pregabalin': r"\bpregabalin\b",
 'salbutamol': r"\bsalbutamol\b",
 'glucagon': r"\bglucagon\b",
 'insulin': r"\binsulin\b",
 'tamsulosin': r"\btamsulosin\b",
 'finasteride': r"\bfinasteride\b|5-ARI",
 'medroxyprogesterone': r"medroxyprogesterone",
 'tranexamic acid': r"tranexamic",
 'cabergoline': r"\bcabergoline\b",
 'clozapine': r"\bclozapine\b",
 'methotrexate': r"\bmethotrexate\b",
 'mesalazine': r"\bmesalazine\b",
 'omeprazole/PPI': r"\bomeprazole\b|\blansoprazole\b|\bPPI\b",
 'beclometasone/ICS': r"beclometasone|budesonide|\bICS\b",
 'emollient/steroid cream': r"hydrocortisone 1%|clobetasone|betamethasone",
 'oxygen saturation': r"\bSpO2\b|\bsats?\b|saturation",
 'heart rate': r"heart rate|\bpulse\b|\bHR\b|bpm",
 'respiratory rate': r"respiratory rate|\bRR\b|breaths/min",
 'alcohol units': r"\bunits? (a|per) week|units/week",
 'age threshold': r"\baged? (over|under|\d)",
}
SUBJ_RE = {k: re.compile(v, re.I if k not in ('ALT','CK','FIT','TG','BP') else 0) for k, v in SUBJECTS.items()}

# ------------------------------------------------------------------ actions
ACTIONS = [
 ('999/admit', r"\b999\b|\badmi(t|ssion)\b|emergency|A&E|immediate"),
 ('same-day', r"same[- ]day|today|within 24"),
 ('refer', r"\brefer|referral|specialist|advice and guidance"),
 ('stop/withhold', r"\bstop\b|withhold|discontinue|\bhold\b"),
 ('do not start', r"do not start|don't start|avoid starting|contraindicat"),
 ('start/initiate', r"\bstart|initiat|first[- ]line|offer"),
 ('loading', r"\bloading\b|\bload\b"),
 ('maintenance', r"maintenance|thereafter|long[- ]term"),
 ('target', r"\btarget|\baim\b|goal"),
 ('recheck/monitor', r"recheck|re-check|repeat|monitor|review|follow[- ]up|check .* (at|after|every)"),
 ('max dose', r"\bmax(imum)?\b"),
 ('dose', r"\b(mg|micrograms?|mcg|IU|units?)\b"),
 ('diagnose/threshold', r"diagnos|threshold|defin|suggests|consistent with|indicates"),
]
ACT_RE = [(n, re.compile(r, re.I)) for n, r in ACTIONS]

# ------------------------------------------------------------------ numbers
UNIT = (r"mmol/mol|mmol/L|mmol|µmol/L|umol/L|nmol/L|pmol/L|ng/L|ng/mL|µg/L|ug/L|micrograms?/L|g/L|mg/L|mg/dL|g/dL|"
        r"mL/min(?:/1\.73 ?m²)?|mU/L|mIU/L|IU/L|U/L|IU|units?|mg/kg|micrograms?/kg|mg|micrograms?|mcg|µg|g\b|mL|"
        r"× ?10⁹/L|x ?10\^?9/L|×10⁹/L|× ?ULN|x ?ULN|×ULN|times (?:the )?ULN|%|kg/m²|kg/m2|mmHg|bpm|°C|"
        r"weeks?|days?|months?|years?|hours?|h\b|minutes?|min\b")
NUM = r"(?:[<>≤≥~≈]|over|under|above|below|at least|up to)?\s?\d+(?:[.,]\d+)?(?:\s?(?:–|-|to)\s?\d+(?:[.,]\d+)?)?"
VAL_RE = re.compile(r"(" + NUM + r")\s?(" + UNIT + r")", re.I)

def norm_unit(u):
    u = u.lower().replace(' ', '')
    u = {'ug/l': 'µg/l', 'micrograms/l': 'µg/l', 'microgram/l': 'µg/l', 'umol/l': 'µmol/l', 'mcg': 'micrograms',
         'µg': 'micrograms', 'microgram': 'micrograms', 'unit': 'units', 'x10^9/l': '×10⁹/l', 'x10⁹/l': '×10⁹/l',
         'xuln': '×uln', 'timestheuln': '×uln', 'timesuln': '×uln', 'kg/m2': 'kg/m²', 'h': 'hours', 'hour': 'hours',
         'min': 'minutes', 'minute': 'minutes', 'week': 'weeks', 'day': 'days', 'month': 'months', 'year': 'years',
         'miu/l': 'mu/l'}.get(u, u)
    return u
def norm_val(v):
    v = re.sub(r'(?<=\d),(?=\d{3}\b)', '', v)   # thousands separator: 2,000 -> 2000
    v = v.replace(',', '.').replace('-', '–').replace(' to ', '–').replace(' ', '')
    v = re.sub(r'^(over|above)', '>', v); v = re.sub(r'^(under|below)', '<', v)
    v = re.sub(r'^atleast', '≥', v); v = re.sub(r'^upto', '≤', v)
    return v
TIME_UNITS = {'weeks', 'days', 'months', 'years', 'hours', 'minutes'}

# ------------------------------------------------------------------ text sources
def html_text(t):
    t = re.sub(r'<(style|noscript)\b.*?</\1>', ' ', t, flags=re.S | re.I)
    scripts = re.findall(r'<script\b[^>]*>(.*?)</script>', t, flags=re.S | re.I)
    t = re.sub(r'<script\b.*?</script>', ' ', t, flags=re.S | re.I)
    t = re.sub(r'<(br|/p|/li|/td|/th|/tr|/div|/h\d|/dt|/dd)\b[^>]*>', '. ', t, flags=re.I)
    t = html.unescape(re.sub(r'<[^>]+>', ' ', t))
    parts = [t] + [js_strings(s) for s in scripts if 'ld+json' not in s[:40]]
    return '\n'.join(parts)

STR_RE = re.compile(r"'((?:[^'\\\n]|\\.){12,})'|\"((?:[^\"\\\n]|\\.){12,})\"|`((?:[^`\\]|\\.){12,})`", re.S)
def js_strings(t):
    out = []
    for m in STR_RE.finditer(t):
        s = m.group(1) or m.group(2) or m.group(3) or ''
        s = s.replace("\\'", "'").replace('\\"', '"').replace('\\n', ' ')
        s = html.unescape(re.sub(r'<[^>]+>', ' ', s))
        out.append(s)
    return '\n'.join(out)

SENT_SPLIT = re.compile(r'(?<=[.;!?])\s+(?=[A-Z0-9(•·–-])|\n+|\s·\s|\s\|\s')
def sentences(text):
    for s in SENT_SPLIT.split(text):
        s = re.sub(r'\s+', ' ', s).strip(' .;·')
        if 15 <= len(s) <= 400:
            yield s

def kind_of(path):
    p = path.replace('\\', '/')
    for k, pre in [('snapshot', '/one-page/'), ('summary', '/summaries/'), ('clinic-guide', 'tools/clinic-guides/'),
                   ('protocol', 'tools/management/'), ('algorithm', 'tools/algorithms/'), ('case', 'cases/'),
                   ('sca', 'sca/'), ('sca-data', 'assets/sca'), ('meds', 'assets/meds/'), ('rx', 'prescriptions'),
                   ('audio', 'audio-scripts'), ('article', 'articles-data'), ('teaching', 'basic-science')]:
        if pre in p: return k
    return 'other'

def files():
    for root, dirs, fs in os.walk(ROOT):
        rel = os.path.relpath(root, ROOT)
        dirs[:] = [d for d in dirs if d not in SKIP_DIRS and not d.startswith('.')]
        for f in fs:
            p = os.path.join(rel, f) if rel != '.' else f
            if SKIP_FILES.search(f): continue
            if f.endswith('-print.html'): continue          # print twins are checked by check_consistency TWIN
            if f.endswith(('.html', '.js', '.json')): yield p

def extract():
    stmts = []
    for p in files():
        try: t = open(os.path.join(ROOT, p), encoding='utf-8').read()
        except Exception: continue
        if p.endswith('.html'):
            if re.search(r'http-equiv="refresh"', t[:3000], re.I): continue   # redirect stub
            text = html_text(t)
        else:
            text = js_strings(t)
        seen = set()
        for s in sentences(text):
            if not VAL_RE.search(s): continue
            subj_hits = [(m.start(), m.end(), k) for k, r in SUBJ_RE.items() for m in r.finditer(s)]
            if not subj_hits: continue
            act_hits = [(m.start(), n) for n, r in ACT_RE for m in r.finditer(s) if n != 'dose']
            for m in VAL_RE.finditer(s):
                v, u = m.group(1), m.group(2)
                vs = m.start()
                # the subject this number is about: the closest mention before it (within 70 chars),
                # else one just after it (within 25 chars) - "40 mg prednisolone"
                before = [(vs - e, k) for b, e, k in subj_hits if e <= vs and vs - e <= 70]
                after = [(b - m.end(), k) for b, e, k in subj_hits if b >= m.end() and b - m.end() <= 25]
                cand = sorted(before) or sorted(after)
                if not cand: continue
                sj = cand[0][1]
                near = [(abs(a - vs), n) for a, n in act_hits if abs(a - vs) <= 90]
                un = norm_unit(u); vn = norm_val(v)
                act = sorted(near)[0][1] if near else ('dose' if un in ('mg', 'micrograms', 'iu', 'units', 'g', 'ml', 'mg/kg') else 'state')
                if un in TIME_UNITS and act in ('dose', 'state'): continue
                key = f'{sj} | {act} | {un}'
                sig = (key, vn, s[:120])
                if sig in seen: continue
                seen.add(sig)
                stmts.append({'key': key, 'subject': sj, 'action': act, 'unit': un, 'value': vn,
                              'file': p, 'kind': kind_of(p), 'text': s})
    return stmts

TIER1 = re.compile(r'999|admi|emergency|same[- ]day|immediate|anaphylaxis|sepsis|child|infant|pregnan|'
                   r'adrenaline|insulin|methotrexate|lithium|clozapine|warfarin|apixaban|rivaroxaban|edoxaban|'
                   r'potassium|sodium|glucagon|morphine|codeine|stop', re.I)

def main():
    args = sys.argv[1:]
    stmts = extract()
    if '--subject' in args:
        sj = args[args.index('--subject') + 1]
        for s in stmts:
            if s['subject'].lower() == sj.lower(): print(f"{s['key']:45} {s['value']:12} {s['file']}\n    {s['text'][:200]}")
        return
    os.makedirs(OUT, exist_ok=True)
    with open(os.path.join(OUT, 'register.jsonl'), 'w') as f:
        for s in stmts: f.write(json.dumps(s, ensure_ascii=False) + '\n')
    by = collections.defaultdict(list)
    for s in stmts: by[s['key']].append(s)
    conflicts = []
    for k, L in by.items():
        vals = collections.defaultdict(set)
        for s in L: vals[s['value']].add(s['file'])
        files_ = {s['file'] for s in L}
        if len(vals) < 2 or len(files_) < 2: continue
        # a value seen on one page only, while another value is on several pages = the most suspicious
        common = max(vals.items(), key=lambda kv: len(kv[1]))
        outliers = {v: sorted(fs) for v, fs in vals.items() if v != common[0]}
        tier = 1 if TIER1.search(k) or any(TIER1.search(s['text']) for s in L[:50]) else 2
        score = (3 if tier == 1 else 1) * len(files_) * len(vals)
        conflicts.append({'key': k, 'tier': tier, 'pages': len(files_), 'distinct_values': len(vals),
                          'majority': {'value': common[0], 'pages': len(common[1])},
                          'values': {v: sorted(fs)[:25] for v, fs in sorted(vals.items(), key=lambda kv: -len(kv[1]))},
                          'examples': [{'value': s['value'], 'file': s['file'], 'text': s['text'][:300]} for s in L[:40]],
                          'score': score})
    conflicts.sort(key=lambda c: -c['score'])
    json.dump(conflicts, open(os.path.join(OUT, 'conflicts.json'), 'w'), ensure_ascii=False, indent=1)
    kinds = collections.Counter(s['kind'] for s in stmts)
    subj = collections.Counter(s['subject'] for s in stmts)
    with open(os.path.join(OUT, 'report.md'), 'w') as f:
        f.write('# Facts register report\n\n')
        f.write(f'- Statements with a clinical number: **{len(stmts)}**\n- Files: **{len({s["file"] for s in stmts})}**\n')
        f.write(f'- Distinct fact keys (subject | action | unit): **{len(by)}**\n')
        f.write(f'- Keys where pages give different numbers: **{len(conflicts)}** '
                f'(tier 1: {sum(c["tier"]==1 for c in conflicts)}, tier 2: {sum(c["tier"]==2 for c in conflicts)})\n\n')
        f.write('## Statements by source\n\n' + ''.join(f'- {k}: {v}\n' for k, v in kinds.most_common()) + '\n')
        f.write('## Top subjects\n\n' + ''.join(f'- {k}: {v}\n' for k, v in subj.most_common(40)) + '\n')
        f.write('## Top 60 candidate conflicts\n\n')
        for c in conflicts[:60]:
            f.write(f"### {c['key']}  (tier {c['tier']}, {c['pages']} pages, {c['distinct_values']} values)\n")
            for v, fs in list(c['values'].items())[:6]:
                f.write(f"- `{v}` — {len(fs)} page(s): {', '.join(fs[:4])}\n")
            f.write('\n')
    # one review dossier per subject: every number stated about it, grouped by action and unit,
    # each distinct value with the pages that give it and one example sentence
    dd = os.path.join(OUT, 'dossiers'); os.makedirs(dd, exist_ok=True)
    bysubj = collections.defaultdict(list)
    for s in stmts: bysubj[s['subject']].append(s)
    for sj, L in bysubj.items():
        keys = collections.defaultdict(lambda: collections.defaultdict(list))
        for s in L: keys[(s['action'], s['unit'])][s['value']].append(s)
        with open(os.path.join(dd, re.sub(r'[^a-z0-9]+', '-', sj.lower()).strip('-') + '.md'), 'w') as f:
            f.write(f'# {sj}: every number the site states ({len(L)} statements, {len({s["file"] for s in L})} files)\n\n')
            for (act, un), vals in sorted(keys.items(), key=lambda kv: -sum(len(x) for x in kv[1].values())):
                f.write(f'## {act} | {un}' + ('  — VALUES DIFFER' if len(vals) > 1 else '') + '\n')
                for v, ss in sorted(vals.items(), key=lambda kv: -len(kv[1])):
                    fs = sorted({s['file'] for s in ss})
                    ex = {}
                    for s in ss: ex.setdefault(re.sub(r'\W+', ' ', s['text'].lower())[:80], s)
                    f.write(f'- **{v}** ({len(fs)} file(s): {", ".join(fs[:6])}{" …" if len(fs) > 6 else ""})\n')
                    for s in list(ex.values())[:3]:
                        f.write(f'  - `{s["file"]}`: {s["text"][:260]}\n')
                f.write('\n')
    print(f'{len(stmts)} statements · {len(by)} keys · {len(conflicts)} candidate conflicts -> governance/facts/')

if __name__ == '__main__':
    main()
