#!/usr/bin/env python3
"""
Reasoning GP — dose-line consistency: Ready Prescriptions and Medication options against the protocol.

The protocol page is the reviewed source. For every Ready Prescription card linked to a protocol in
assets/topic-links.js (ITEMS.rx[id].m), and every Medication options topic with a protocol (MEDS_PROTOCOL
below), this compares the dose amounts written for each drug with the amounts the protocol gives for
the same drug:

  DIFFERENT   the card states an amount for a drug that the protocol never states for that drug
              (the protocol gives other amounts) — a dose, frequency or duration question for the owner
  DEFERRED    the card states an amount but the protocol states none for that drug (it defers to the
              BNF/SPC/formulary) — the owner decides whether the card should defer too
  (matching amounts written differently — "500 micrograms" / "500 mcg", "1 g" / "1000 mg" — are not reported)

It is a review aid, not a judge: it reads amounts (mg, g, micrograms, mL, units, %), not meaning, so
every line needs a person to read it. Nothing is changed.

Usage (from the repository root; needs Node 18+ to read the JavaScript data files):
    python3 governance/check_rx_consistency.py                     # summary + findings (Markdown)
    python3 governance/check_rx_consistency.py --csv out.csv       # also write one row per finding
    python3 governance/check_rx_consistency.py --out report.md
"""
import os, re, sys, json, csv, html, subprocess

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# Medication options topic (assets/meds/<topic>.js) -> protocol slug (tools/management/<slug>.html)
MEDS_PROTOCOL = {
    'allergic-rhinitis': 'allergic-rhinitis', 'angina': 'stable-angina', 'anxiety': 'anxiety', 'asthma': 'asthma',
    'atrial-fibrillation': 'atrial-fibrillation', 'ckd': 'ckd', 'constipation': 'constipation-adult',
    'contraception': 'contraception', 'copd': 'copd', 'depression': 'depression', 'eczema': 'eczema',
    'erectile-dysfunction': 'erectile-dysfunction', 'gout': 'gout', 'heart-failure': 'heart-failure',
    'hypercholesterolaemia': 'hypercholesterolaemia', 'hypertension': 'hypertension', 'hyperthyroidism': 'hyperthyroidism',
    'hypothyroidism': 'hypothyroidism', 'ibs': 'ibs', 'male-luts': 'male-luts', 'menopause': 'menopause',
    'menorrhagia': 'menorrhagia', 'migraine': 'migraine', 'neuropathic-pain': 'neuropathic-pain',
    'osteoarthritis': 'osteoarthritis', 'osteoporosis': 'osteoporosis', 'psoriasis': 'psoriasis',
    'tia-stroke': 'tia-stroke', 'type-1-diabetes': 'type-1-diabetes', 'type-2-diabetes': 'type-2-diabetes',
    'urinary-incontinence': 'female-urinary-incontinence',
    # low-back-pain: no protocol page (the back-pain pathway only) — not compared
}

LOADER = r"""
const fs=require('fs'),vm=require('vm'),path=require('path');const R=process.argv[1];
const A=p=>path.join(R,'assets',p);
function ctx(){const c={console:{log(){},warn(){},error(){}},document:{readyState:'complete',addEventListener(){},querySelector(){return null},querySelectorAll(){return []},getElementById(){return null},createElement(){return {style:{}}},head:{appendChild(){}}},location:{pathname:'/x'},navigator:{}};c.window=c;vm.createContext(c);return c;}
const out={rx:[],meds:{},prot:{},items:null};
// Ready Prescriptions, in the page's order
let c=ctx();const page=fs.readFileSync(path.join(R,'tools/prescriptions.html'),'utf8');
for(const m of page.matchAll(/src="\.\.\/assets\/(prescriptions-data[^"?]*\.js)/g)) vm.runInContext(fs.readFileSync(A(m[1]),'utf8'),c);
out.rx=c.RGP_PRESCRIPTIONS;
// Medication options
c=ctx();const T={};c.MedChooser={register(n,d){T[n]=d}};
for(const f of fs.readdirSync(A('meds')).filter(f=>/\.js$/.test(f))) vm.runInContext(fs.readFileSync(A('meds/'+f),'utf8'),c);
for(const n in T){const t=T[n];out.meds[n]={title:t.title,drugs:(t.drugs||[]).map(d=>({name:d.name,examples:d.examples||'',dose:(d.detail&&d.detail.Dose)||''}))};}
// topic registry
c=ctx();vm.runInContext(fs.readFileSync(A('topic-links.js'),'utf8'),c);out.items=c.RGP_TOPIC_LINKS.items;
// protocols (the MG.render data)
const dir=path.join(R,'tools/management');
for(const f of fs.readdirSync(dir).filter(f=>/^[a-z0-9].*\.html$/.test(f)&&!/-print\.html$/.test(f))){
  const h=fs.readFileSync(path.join(dir,f),'utf8'); if(/http-equiv=["']refresh/i.test(h)) continue;
  const m=/MG\.render\(/.exec(h); if(!m) continue;
  const s=h.lastIndexOf('<script>',m.index),e=h.indexOf('</script>',m.index);let d=null;
  try{vm.runInNewContext(h.slice(s+8,e),{MG:{render:x=>{d=x}},window:{},document:{querySelector:()=>null,getElementById:()=>null}},{timeout:2000})}catch(x){}
  if(d){const strs=[];(function w(v,k){if(v==null)return;if(typeof v==='string'){if(k!=='href'&&k!=='src'&&k!=='snapshot')strs.push(v);return}if(Array.isArray(v))return v.forEach(x=>w(x,k));if(typeof v==='object')for(const kk in v){if(kk==='sections'){v[kk].forEach(sec=>{if(sec&&sec.id!=='provenance'&&sec.id!=='sca')w(sec,'')})}else w(v[kk],kk)}})(d,'');out.prot[f.replace('.html','')]={title:d.title,text:strs};}
}
process.stdout.write(JSON.stringify(out));
"""

def load():
    r = subprocess.run(['node', '-e', LOADER, ROOT], capture_output=True, text=True, check=True)
    return json.loads(r.stdout)

def clean(s):
    s = re.sub(r'<[^>]+>', ' ', s or '')
    s = html.unescape(s)
    return re.sub(r'\s+', ' ', s).strip()

UNIT = r'(?:mg|g|micrograms?|microgram|mcg|µg|ug|mL|ml|units?|%)'
DOSE_RE = re.compile(r'(?<![\w.])(\d+(?:\.\d+)?)(?:\s*(?:–|-|to|/)\s*(\d+(?:\.\d+)?))?\s*(' + UNIT + r')(?![a-zA-Z])', re.I)
def amounts(text):
    """canonical amounts: mass in mg, volume in mL, units, % — returns set of 'value unit' strings"""
    out = set()
    for m in DOSE_RE.finditer(text):
        u = m.group(3).lower()
        for v in (m.group(1), m.group(2)):
            if not v: continue
            x = float(v)
            if u == 'g': x, u2 = x * 1000, 'mg'
            elif u in ('micrograms', 'microgram', 'mcg', 'µg', 'ug'): x, u2 = x / 1000, 'mg'
            elif u == 'mg': u2 = 'mg'
            elif u in ('ml',): u2 = 'mL'
            elif u.startswith('unit'): u2 = 'units'
            else: u2 = u
            out.add(('%g' % x) + ' ' + u2)
    return out

# drug names: BNF drug-page and emc SPC-search names the site already links to, plus common short names
def drug_lexicon():
    names = set()
    for root, _, files in os.walk(os.path.join(ROOT, 'assets')):
        for f in files:
            if f.endswith('.js'):
                try: s = open(os.path.join(root, f), encoding='utf-8').read()
                except Exception: continue
                names.update(re.findall(r'bnf\.nice\.org\.uk/drugs/([a-z0-9-]+)/', s))
                # Upload 121: dose sources are SPC (emc) search links — read those drug names too
                names.update(x.replace('%20', '-') for x in re.findall(r'medicines\.org\.uk/emc/search\?q=([a-z0-9%-]+)', s))
    words = set()
    for n in names:
        base = re.sub(r'-(hydrochloride|sodium|calcium|fumarate|sulfate|maleate|butyrate|propionate|furoate|acetate|hydrobromide|butylbromide|tartrate|mesilate|dihydrochloride|bromide|phosphate|oxalate|succinate|hexahydrate|husk|3350|potassium)$', '', n)
        w = base.replace('-', ' ')
        if len(w) > 4: words.add(w)
    words |= {'naproxen', 'colchicine', 'prednisolone', 'allopurinol', 'febuxostat', 'propranolol', 'topiramate', 'amitriptyline',
              'tranexamic acid', 'mefenamic acid', 'doxycycline', 'azithromycin', 'erythromycin', 'amoxicillin', 'ivermectin',
              'permethrin', 'malathion', 'nitrofurantoin', 'trimethoprim', 'pivmecillinam', 'fosfomycin', 'cefalexin',
              'clarithromycin', 'flucloxacillin', 'phenoxymethylpenicillin', 'co-amoxiclav', 'metronidazole', 'clindamycin',
              'fluconazole', 'clotrimazole', 'terbinafine', 'aciclovir', 'valaciclovir', 'sumatriptan', 'candesartan',
              'norethisterone', 'levonorgestrel', 'ulipristal', 'sertraline', 'citalopram', 'fluoxetine', 'mirtazapine',
              'gabapentin', 'pregabalin', 'duloxetine', 'carbamazepine', 'omeprazole', 'lansoprazole', 'esomeprazole',
              'loperamide', 'senna', 'macrogol', 'lactulose', 'ispaghula', 'mebendazole', 'hydrocortisone', 'dexamethasone',
              'ceftriaxone', 'oseltamivir', 'tadalafil', 'sildenafil', 'finasteride', 'minoxidil', 'adapalene',
              'benzoyl peroxide', 'lymecycline', 'oxytetracycline', 'isotretinoin', 'cetirizine', 'loratadine', 'fexofenadine',
              'mometasone', 'fluticasone', 'beclometasone', 'betamethasone', 'clobetasol', 'calcipotriol', 'ketoconazole',
              'levothyroxine', 'carbimazole', 'metformin', 'gliclazide', 'ramipril', 'amlodipine', 'atorvastatin', 'bisoprolol',
              'apixaban', 'rivaroxaban', 'edoxaban', 'warfarin', 'alendronic acid', 'colecalciferol', 'ferrous sulfate',
              'ferrous fumarate', 'folic acid', 'hydroxocobalamin', 'cyanocobalamin', 'mirabegron', 'solifenacin',
              'oxybutynin', 'tamsulosin', 'estradiol', 'utrogestan', 'progesterone', 'methenamine', 'cinnarizine'}
    return sorted(words, key=len, reverse=True)

def segments(texts):
    segs = []
    for t in texts:
        t = clean(t)
        for s in re.split(r'(?<=[.])\s+|\s+·\s+|\s+—\s+(?=[A-Z])', t):
            if s: segs.append(s)
    return segs

# short forms used in the card tables ("doxy 200 mg then 100 mg / clarith 500 mg")
ALIAS = {'amox': 'amoxicillin', 'doxy': 'doxycycline', 'clarith': 'clarithromycin', 'metro': 'metronidazole',
         'cipro': 'ciprofloxacin', 'oflox': 'ofloxacin', 'lanso': 'lansoprazole', 'nitro': 'nitrofurantoin'}

def mentions(text, lex):
    """drug names in text with their positions (longest name wins where two overlap)"""
    t = text.lower(); taken = []; out = []
    for w in lex + list(ALIAS):
        for m in re.finditer(r'(?<![a-z])' + re.escape(w) + r'(?![a-z])', t):
            if any(m.start() < e and s < m.end() for s, e in taken): continue
            taken.append((m.start(), m.end())); out.append((m.start(), ALIAS.get(w, w)))
    return sorted(out)

def per_drug(text, lex, default=None, names=None):
    """amounts in text, each given to the nearest drug named before it (or to `default`).
    A card line such as "Paracetamol ± ibuprofen — 1 g / 400 mg" (no drug named in the dose, two in the
    name, amounts split by " / ") gives the amounts to the named drugs in order."""
    ms = mentions(text, lex); res = {}
    if not ms and names and len(names) > 1:
        groups = re.split(r'\s+/\s+', re.split(r'\s{2,}|\s(?=[A-Z]{2,}\b)', text)[0])
        if len(groups) == len(names):
            for g, d in zip(groups, names):
                a = amounts(g)
                if a: res.setdefault(d, set()).update(a)
            return res
    for m in DOSE_RE.finditer(text):
        prev = [w for p, w in ms if p < m.start()]
        d = prev[-1] if prev else default
        if d: res.setdefault(d, set()).update(amounts(m.group(0)))
    return res

def main():
    args = sys.argv[1:]
    D = load()
    lex = drug_lexicon()
    prot = D['prot']
    findings = []  # dict(protocol, drug, source, id, kind, card, prot)

    seg_cache = {}
    def protocol_amounts(slug, drug):
        if slug not in seg_cache: seg_cache[slug] = segments(prot[slug]['text'])
        segs = [s for s in seg_cache[slug] if re.search(r'(?<![a-z])' + re.escape(drug) + r'(?![a-z])', s.lower())]
        am = set(); dose_segs = []
        for s in segs:
            a = per_drug(s, lex).get(drug, set())
            if a: am |= a; dose_segs.append(s)
        return am, segs, dose_segs

    def compare(slug, drug, a_card, card_text, source, ident):
        if slug not in prot or not a_card: return
        a_prot, segs, dose_segs = protocol_amounts(slug, drug)
        if not a_prot:
            kind = 'DEFERRED'
            ptext = (segs[0] if segs else '(drug not named on the protocol page)')
        else:
            extra = a_card - a_prot
            if not extra: return
            kind = 'DIFFERENT'
            ptext = ' | '.join(dose_segs[:3])
        findings.append(dict(protocol=slug, drug=drug, source=source, id=ident, kind=kind, card=card_text, prot=ptext[:700]))

    # Ready Prescriptions
    rx_items = D['items']['rx']
    for p in D['rx']:
        it = rx_items.get(p['id'])
        if not it or not it['m']: continue
        slug = it['m'][0]
        for d in p.get('drugs') or []:
            name = clean(d.get('name', '')); dose = clean(' '.join(str(d.get(k) or '') for k in ('dose', 'freq', 'days')))
            first = mentions(name, lex)
            dose_only = clean(str(d.get('dose') or ''))
            got = per_drug(dose_only, lex, first[0][1] if first else None, [w for _, w in first])
            got2 = per_drug(dose, lex, first[0][1] if first else None)
            for k2, v2 in got2.items():
                if k2 not in got: got[k2] = v2
            for drug, am in got.items():
                compare(slug, drug, am, name + ' — ' + dose, 'Ready Prescription', p['id'])
    # Medication options
    for topic, t in D['meds'].items():
        slug = MEDS_PROTOCOL.get(topic)
        if not slug: continue
        for d in t['drugs']:
            name = clean(d['name']); txt = clean(d['examples'] + (' · ' + d['dose'] if d['dose'] else ''))
            first = mentions(name, lex)
            for drug, am in per_drug(txt, lex, first[0][1] if first else None).items():
                compare(slug, drug, am, name + ' — ' + txt, 'Medication options', topic)

    # merge per protocol + drug
    merged = {}
    for f in findings:
        k = (f['protocol'], f['drug'])
        m = merged.setdefault(k, dict(protocol=f['protocol'], drug=f['drug'], kind=set(), prot=f['prot'], rx=[], meds=[]))
        m['kind'].add(f['kind'])
        (m['rx'] if f['source'] == 'Ready Prescription' else m['meds']).append('%s: %s' % (f['id'], f['card']))
    rows = sorted(merged.values(), key=lambda m: (m['protocol'], m['drug']))

    lines = ['# Dose-line consistency: Ready Prescriptions and Medication options against the protocol', '',
             '%d protocol/drug pairs with a difference (%d DIFFERENT, %d DEFERRED only), from %d Ready Prescription lines and %d Medication options lines.' % (
                 len(rows), sum(1 for r in rows if 'DIFFERENT' in r['kind']), sum(1 for r in rows if r['kind'] == {'DEFERRED'}),
                 sum(1 for f in findings if f['source'] == 'Ready Prescription'), sum(1 for f in findings if f['source'] != 'Ready Prescription')), '',
             'The protocol is the reviewed source. DIFFERENT: the card gives an amount the protocol does not give for that drug. '
             'DEFERRED: the card gives an amount where the protocol gives none (it defers to the BNF/SPC/formulary). '
             'Amounts that match but are written differently are not reported. Each line needs a person to read it; nothing is changed.', '']
    for r in rows:
        lines.append('## `%s` — %s (%s)' % (r['protocol'], r['drug'], ', '.join(sorted(r['kind']))))
        lines.append('- **Protocol:** ' + r['prot'])
        for x in r['rx']: lines.append('- **Ready Prescription** ' + x)
        for x in r['meds']: lines.append('- **Medication options** ' + x)
        lines.append('')
    report = '\n'.join(lines)
    if '--out' in args: open(args[args.index('--out') + 1], 'w', encoding='utf-8').write(report)
    else: print(report)
    if '--csv' in args:
        with open(args[args.index('--csv') + 1], 'w', newline='', encoding='utf-8') as fh:
            w = csv.writer(fh)
            w.writerow(['protocol', 'drug', 'finding', 'protocol text', 'Ready Prescription text', 'Medication options text', 'proposed unified text'])
            for r in rows:
                prop = ('Use the protocol wording: ' + r['prot']) if 'DIFFERENT' in r['kind'] else 'Defer as the protocol does (dose per BNF/SPC/local formulary), or add the dose to the protocol'
                w.writerow([r['protocol'], r['drug'], ' + '.join(sorted(r['kind'])), r['prot'], ' || '.join(r['rx']), ' || '.join(r['meds']), prop])
    print('pairs: %d' % len(rows), file=sys.stderr)

if __name__ == '__main__':
    main()
