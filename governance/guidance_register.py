#!/usr/bin/env python3
"""
Reasoning GP — guidance register builder.

Scans every clinical page and data file on the site and lists each piece of
external guidance it relies on (NICE products, MHRA Drug Safety Updates,
BNF/BNFc pages, national/society guidelines linked by URL), with the pages
that cite it. The 6-monthly update check uses this register as its work list.

Usage (from the repository root):
    python3 governance/guidance_register.py            # writes governance/guidance-register.json
    python3 governance/guidance_register.py --summary  # also prints counts

Only the Python standard library is used.
"""
import json, os, re, sys, glob, html
from datetime import date

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, 'governance', 'guidance-register.json')

SCAN = [
    'tools/algorithms/*.html', 'tools/algorithms/summaries/*.html',
    'tools/management/*.html', 'cases/*.html', 'tools/*.html', 'pages/*.html',
    'assets/prescriptions-data*.js', 'assets/audio-scripts-*.js',
    'assets/sca-*.js', 'assets/triage/*.js', 'assets/meds/*.js',
    'assets/diagnostic-cases.js', 'assets/articles-data*.js',
]
NICE_RE = re.compile(r'(?<![A-Za-z0-9])(?:NICE\s+)?(NG|CG|TA|QS|PH|DG|IPG|MTG|HTG)\s?(\d{1,4})(?![0-9])')
NICE_URL_RE = re.compile(r'nice\.org\.uk/guidance/([a-z]+)(\d+)', re.I)
URL_RE = re.compile(r'https?://[^\s"\'<>)\\]+')
SKIP_HOSTS = ('fonts.googleapis', 'fonts.gstatic', 'gpreasoning.uk', 'schema.org', 'w3.org', 'cdnjs', 'jsdelivr', 'unpkg')

def is_redirect(text):
    return 'http-equiv="refresh"' in text[:4000] and len(text) < 8000

def page_kind(path):
    if path.startswith('tools/management/'): return 'protocol'
    if path.startswith('tools/algorithms/summaries/'): return 'algorithm-summary'
    if path.startswith('tools/algorithms/'): return 'algorithm'
    if path.startswith('cases/'): return 'case'
    if 'prescriptions-data' in path: return 'ready-prescriptions'
    if 'audio-scripts' in path: return 'audio'
    return 'other'

def category(url):
    u = url.lower()
    if 'nice.org.uk/guidance' in u: return 'nice'
    if 'cks.nice.org.uk' in u: return 'cks'
    if 'bnf.nice.org.uk' in u or 'bnfc.nice.org.uk' in u: return 'bnf'
    if 'gov.uk/drug-safety-update' in u: return 'mhra-dsu'
    if 'gov.uk' in u: return 'gov-uk'
    if 'doi.org' in u or 'pubmed' in u or 'ncbi.nlm.nih.gov' in u: return 'paper'
    return 'other-guidance'

def main():
    reg = {}
    def add(key, kind, label, path):
        e = reg.setdefault(key, {'type': kind, 'label': label, 'pages': [], 'page_kinds': {}})
        if path not in e['pages']:
            e['pages'].append(path)
            k = page_kind(path); e['page_kinds'][k] = e['page_kinds'].get(k, 0) + 1
    files = []
    for pat in SCAN: files += glob.glob(os.path.join(ROOT, pat))
    for f in sorted(set(files)):
        rel = os.path.relpath(f, ROOT).replace(os.sep, '/')
        if rel.startswith('governance/'): continue
        with open(f, encoding='utf-8', errors='ignore') as fh: t = fh.read()
        if f.endswith('.html') and is_redirect(t): continue
        txt = html.unescape(re.sub(r'\\u([0-9a-fA-F]{4})', lambda m: chr(int(m.group(1), 16)), t))
        for m in NICE_RE.finditer(txt):
            pid = (m.group(1) + m.group(2)).upper()
            add('NICE ' + pid, 'nice', 'NICE ' + pid, rel)
        for m in NICE_URL_RE.finditer(txt):
            pid = (m.group(1) + m.group(2)).upper()
            add('NICE ' + pid, 'nice', 'NICE ' + pid, rel)
        for u in URL_RE.findall(t):
            u = u.rstrip('.,;')
            if any(h in u for h in SKIP_HOSTS): continue
            if 'nice.org.uk/guidance/' in u.lower(): continue
            add(u, category(u), u, rel)
    prev, prev_top = {}, {}
    if os.path.exists(OUT):
        try:
            with open(OUT) as fh: prev_top = json.load(fh)
            prev = prev_top.get('entries', {})
        except Exception: prev, prev_top = {}, {}
    for k, e in reg.items():
        p = prev.get(k, {})
        e['status'] = p.get('status', 'unchecked')        # current / replaced / withdrawn / broken / moved
        e['replacement'] = p.get('replacement', '')
        e['last_checked'] = p.get('last_checked', '')
        e['note'] = p.get('note', '')
        e['pages'].sort()
    out = {
        'generated': date.today().isoformat(),
        'how_to_use': 'Work list for the 6-monthly guidance check. Each entry: a guidance item and every page citing it. '
                      'The checker updates status/replacement/last_checked; regenerate with governance/guidance_register.py.',
        'last_full_check': prev_top.get('last_full_check', ''),
        'next_due': prev_top.get('next_due', ''),
        'counts': {t: sum(1 for e in reg.values() if e['type'] == t) for t in sorted({e['type'] for e in reg.values()})},
        'entries': dict(sorted(reg.items())),
    }
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, 'w') as fh: json.dump(out, fh, indent=1, ensure_ascii=False)
    if '--summary' in sys.argv:
        print('entries:', len(reg)); print(json.dumps(out['counts'], indent=1))

if __name__ == '__main__':
    main()
