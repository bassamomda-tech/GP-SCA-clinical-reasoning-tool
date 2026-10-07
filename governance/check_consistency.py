#!/usr/bin/env python3
"""
Reasoning GP — page consistency check.

Finds the kinds of error the October 2026 Snapshot review found by hand:
the same fact stated differently in different parts of one page.

  URGENCY   one trigger (red flag) sent to 999 / same-day in one place and to a
            routine or softer route in another place of the same page
            (this includes patient safety-net scripts softer than the red-flag table)
  STRENGTH  NICE "consider X" in one place, "offer/arrange/start X" in another
  SNAPSHOT  a number in the one-page summary that is not in the full page (source lock),
            or "offer" in the summary where the page says "consider"
  TWIN      a number with a unit in a protocol but not in its -print twin, or the reverse
  HIDDEN    a hidden block of clinical text left in the page (dead text that still gets
            searched, copied and indexed)
  DATE      review date in the page, print twin and summary do not match

It is a review aid, not a judge. Every finding needs a person to read the lines
and decide. Clinical correctness against guidance still needs the 6-monthly check.

Usage (from the repository root):
    python3 governance/check_consistency.py                 # every page with a one-page summary
    python3 governance/check_consistency.py --all           # every protocol and algorithm page
    python3 governance/check_consistency.py tools/algorithms/red-eye.html tools/management/ckd.html
    python3 governance/check_consistency.py --out governance/consistency-report.md
    python3 governance/check_consistency.py --strict        # exit 1 if any HIGH finding

Only the Python standard library is used.
"""
import os, re, sys, glob, html

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

# ---------------------------------------------------------------- urgency tiers
TIERS = [  # (rank, name, regex) — highest rank wins when a line has several
    (4, '999', r"\b999\b|(?<!non-)\bemergency\b|\bA&E\b|\bA ?& ?E\b|emergency department|\bED\b|blue[- ]light|ambulance|\bimmediate(ly)?\b|admit\b|admission"),
    (3, 'same-day', r"same[- ]day|\bSDEC\b|\btoday\b|within (2|4|6|12|24) ?(h|hours?)\b|on-call|\bNHS 111\b|\b111\b|eye casualty|urgent eye"),
    (2, 'urgent', r"\b2WW\b|suspected cancer|urgent referral|refer urgently|(?<!non-)\burgent\b|within (1|2|7|14) ?(d|days?|weeks?)\b|48 ?h|≤ ?7 days|\bwithin a week\b"),
    (1, 'routine', r"\broutine (referral|appointment|review)|refer routinely|\bnon-urgent\b|book an? (routine )?appointment|make an? appointment|see (your|the) GP|review in \d+ ?(weeks?|months?)|at (the )?next (appointment|review)"),
]
TIER_RE = [(r, n, re.compile(p, re.I)) for r, n, p in TIERS]
TIER_NAME = {r: n for r, n, _ in TIERS}

# Red-flag words that are always checked, in addition to the bold phrases found on each page.
LEXICON = [
    'syncope', 'collapse', 'melaena', 'haematemesis', 'vomiting blood', 'black stools', 'tarry',
    'haemoptysis', 'stridor', 'anaphylaxis', 'sepsis', 'neutropenic', 'meningism', 'neck stiffness',
    'non-blanching', 'petechial', 'purpura', 'thunderclap', 'worst headache', 'papilloedema', 'visual loss',
    'loss of vision', 'diplopia', 'ptosis', 'cauda equina', 'saddle', 'urinary retention', 'cord compression',
    'slurred speech', 'facial droop', 'suicidal', 'self-harm', 'testicular pain', 'torsion', 'ectopic',
    'shoulder tip', 'peritonism', 'rigid abdomen', 'dissection', 'pulsatile mass', 'cyanosis', 'silent chest',
    'unable to complete sentences', 'broad complex', 'dka', 'hot swollen joint', 'septic arthritis',
    'non-weight-bearing', 'unable to weight bear', 'dysphagia', 'acute angle', 'photophobia', 'chemical injury',
    'penetrating', 'hypopyon', 'scleritis', 'orbital cellulitis',
]
STRONG_VERB = r"(offer|start|give|prescribe|arrange|request|refer|do|perform|needs?|must|always|should)"


def read(p):
    with open(p, encoding='utf-8', errors='ignore') as f:
        return f.read()


def unesc(t):
    t = re.sub(r'\\u([0-9a-fA-F]{4})', lambda m: chr(int(m.group(1), 16)), t)
    return t.encode('utf-16', 'surrogatepass').decode('utf-16', 'replace')


def drop_hidden(t):
    """Remove elements marked hidden so the checks look at what readers see."""
    out, i = [], 0
    pat = re.compile(r'<(div|section|details|aside)\b[^>]*\shidden\b[^>]*>', re.I)
    while True:
        m = pat.search(t, i)
        if not m:
            out.append(t[i:]); break
        out.append(t[i:m.start()])
        i = skip_element(t, m.start(), m.group(1))
    return ''.join(out)


def skip_element(t, start, tag):
    depth, j = 0, start
    rx = re.compile(r'<(/?)%s\b[^>]*>' % tag, re.I)
    for m in rx.finditer(t, start):
        depth += -1 if m.group(1) else 1
        if depth == 0:
            return m.end()
    return len(t)


def lines_of(raw, keep_bold=False):
    """Visible text split into lines (one per list item, cell, paragraph or sentence)."""
    t = unesc(raw)
    t = re.sub(r'(?is)<script[^>]*type="application/ld\+json".*?</script>', ' ', t)
    t = re.sub(r'(?is)<style.*?</style>', ' ', t)
    t = re.sub(r'(?is)<head.*?</head>', ' ', t)
    t = drop_hidden(t)
    t = re.sub(r'\\n|\\"', lambda m: '\n' if m.group(0) == '\\n' else '"', t)
    t = re.sub(r'(?i)<br\s*/?>|</(p|li|div|h\d|tr|td|th|dd|dt|summary)>|<(li|tr|p)\b[^>]*>', '\n', t)
    if keep_bold:
        t = re.sub(r'(?i)<(b|strong)\b[^>]*>', '⦃', t)
        t = re.sub(r'(?i)</(b|strong)>', '⦄', t)
    t = re.sub(r'<[^>]+>', ' ', t)
    t = html.unescape(t)
    out = []
    for ln in t.split('\n'):
        for s in re.split(r'(?<=[.!?])\s+(?=[A-Z⦃])|\s+[•·]\s+|",\s*"|\'\s*,\s*\'', ln):
            s = re.sub(r'\s+', ' ', s).strip(' "\',:;{}[]()')
            if len(s) > 3 and not re.match(r'^[\w$.]+\s*[:=]\s*$', s):
                out.append(s)
    return out


def tier(line):
    best = 0
    for r, _, rx in TIER_RE:
        if rx.search(line):
            best = max(best, r)
    return best


def bold_triggers(blines):
    found = set()
    for ln in blines:
        if tier(ln) >= 3:
            for b in re.findall(r'⦃([^⦃⦄]{4,60})⦄', ln):
                b = re.sub(r'[^\w\s/+-]', ' ', b.lower()).strip()
                b = re.sub(r'\s+', ' ', b)
                if 2 <= len(b.split()) <= 6 and not re.search(r'core rule|safety|output|snapshot|reasoning gp|^not$|summary|step \d', b):
                    found.add(b)
    return found


NUM_RE = re.compile(r'([<>≥≤]=?|<|>)?\s?(\d+(?:\.\d+)?)\s?(mmol/L|micromol/L|mg/L|mg|micrograms?|g/L|g|%|mmHg|ml/min(?:/1\.73m²)?|mL|ml|kg/m²|kg|weeks?|days?|hours?|h\b|months?|years?|°C|bpm|cm|mm|units?|IU|mL/min)', re.I)


def numbers(lines):
    s = set()
    for ln in lines:
        for m in NUM_RE.finditer(ln):
            unit = m.group(3).lower().rstrip('s')
            unit = {'hour': 'h', 'microgram': 'microgram', 'ml': 'ml'}.get(unit, unit)
            s.add((m.group(2).rstrip('0').rstrip('.') if '.' in m.group(2) else m.group(2), unit))
    return s


def norm(s):
    return re.sub(r'\s+', ' ', re.sub(r'[^\w\s]', ' ', s.lower())).strip()


# ---------------------------------------------------------------- checks
SAFETY_NET = re.compile(r"\\bif you\\b|contact us|call us|tell us|come back|seek (urgent )?(medical )?(help|advice|attention)|get (urgent )?help|return (if|urgently)", re.I)
# Triggers whose minimum urgency is fixed site-wide, wherever they appear with a time frame.
MIN_TIER = {'vomiting blood': 4, 'haematemesis': 3, 'non-blanching': 4, 'thunderclap': 4, 'anaphylaxis': 4,
            'cauda equina': 4, 'saddle': 4, 'stridor': 3, 'silent chest': 4, 'testicular torsion': 4, 'torsion': 3,
            'papilloedema': 3, 'chemical injury': 3, 'hypopyon': 3, 'scleritis': 3, 'orbital cellulitis': 3,
            'septic arthritis': 3, 'ectopic': 3, 'neutropenic': 3}
STOP = {'with', 'without', 'and', 'or', 'the', 'not', 'any', 'new', 'pain', 'acute', 'severe', 'sudden', 'other', 'age'}


def check_urgency(path, lines, blines, findings):
    trig = set(LEXICON) | {b for b in bold_triggers(blines) if any(len(w) >= 5 and w not in STOP for w in b.split())}
    low = [(ln, ln.lower(), tier(ln)) for ln in lines if len(ln) < 600]
    seen = set()
    for tg in sorted(trig):
        rx = re.compile(r'(?<![\\w])' + re.escape(tg) + r'(?![\\w])')
        hits = [(ln, t) for ln, l, t in low if rx.search(l)]
        if len(hits) < 2 and tg not in MIN_TIER:
            continue
        if not hits:
            continue
        top = max(t for _, t in hits)
        if top < 3 and tg not in MIN_TIER:
            continue
        strong = next(ln for ln, t in hits if t == top)
        for ln, t in hits:
            if (tg, ln) in seen or ln == strong or re.search(r'\\b(not|never|rather than|instead of|no longer|unless)\\b[^.]{0,40}(routine|appointment|urgent|999|emergency)', ln, re.I):
                continue
            mn = MIN_TIER.get(tg, 0)
            if t and t < mn:
                kind = ('MEDIUM' if t == 2 else 'HIGH'), f'"{tg}" always needs **{TIER_NAME[mn]}** or faster, but here it is **{TIER_NAME[t]}**.'
            elif t == 1:
                kind = 'HIGH', f'"{tg}" is **{TIER_NAME[top]}** in one place and **routine** in another.'
            elif top == 4 and t <= 2 and SAFETY_NET.search(ln) and not re.search(r'\\b999\\b|A&E|same[- ]day|111', ln):
                kind = 'HIGH', f'"{tg}" is **999** in the red flags, but this safety-net wording gives ' + ('only "urgent" with no time frame.' if t == 2 else 'no time frame.')
            else:
                continue
            seen.add((tg, ln))
            findings.append((kind[0], 'URGENCY', path, kind[1], [strong, ln]))


def check_strength(path, lines, findings):
    cons, strong = {}, {}
    for ln in lines:
        for m in re.finditer(r'\bconsider(?:ing)?\s+((?:\w+[\s-]+){2}\w+)', ln, re.I):
            cons.setdefault(norm(m.group(1)), ln)
        for m in re.finditer(r'\b' + STRONG_VERB + r'\s+((?:\w+[\s-]+){2}\w+)', ln, re.I):
            k = norm(m.group(2))
            if not re.search(r'\bconsider', ln[:m.start()][-30:], re.I):
                strong.setdefault(k, ln)
    for k, ln in cons.items():
        if k in strong and len(k) > 12:
            findings.append(('MEDIUM', 'STRENGTH', path, f'"consider {k}" in one place, a firmer instruction in another.', [ln, strong[k]]))


def check_snapshot(path, src_lines, sum_path, sum_lines, findings):
    src_nums = numbers(src_lines)
    src_text = norm(' '.join(src_lines))
    src_vals = set(re.findall(r'(?<![\d.])\d+(?:\.\d+)?(?![\d.])', ' '.join(src_lines)))
    conv = lambda v, u: {str(int(float(v) * 1000)) if u == 'mg' and float(v) < 10 else None,
                         (('%g' % (float(v) / 1000)) if u == 'microgram' else None)}
    for ln in sum_lines:
        if re.search(r'Reviewed|next review|©|gpreasoning', ln):
            continue
        for n in numbers([ln]) - src_nums:
            if n[0] in src_vals or (conv(*n) & src_vals):
                continue  # same value is on the page with another unit or wording; read the report if in doubt
            findings.append(('HIGH', 'SNAPSHOT', sum_path, f'Number **{n[0]} {n[1]}** is in the summary but not in the full page (source lock).', [ln]))
        for m in re.finditer(r'\boffer\s+((?:\w+[\s-]+){1}\w+)', ln, re.I):
            k = norm(m.group(1))
            if ('consider ' + k) in src_text and ('offer ' + k) not in src_text:
                findings.append(('HIGH', 'SNAPSHOT', sum_path, f'Summary says "offer {k}"; the full page says "consider {k}".', [ln]))


def check_twin(path, lines, twin, tlines, findings):
    a, b = numbers(lines), numbers(tlines)
    for n in sorted(a - b):
        findings.append(('MEDIUM', 'TWIN', twin, f'**{n[0]} {n[1]}** is on the page but not in its print twin.', [next((l for l in lines if n[0] in l), '')]))
    for n in sorted(b - a):
        findings.append(('MEDIUM', 'TWIN', twin, f'**{n[0]} {n[1]}** is in the print twin but not on the page.', [next((l for l in tlines if n[0] in l), '')]))


def check_hidden(path, raw, findings):
    pat = re.compile(r'<(div|section|details|aside)\b([^>]*\shidden\b[^>]*)>', re.I)
    for m in pat.finditer(raw):
        end = skip_element(raw, m.start(), m.group(1))
        txt = re.sub(r'<[^>]+>', ' ', raw[m.start():end])
        txt = re.sub(r'\s+', ' ', html.unescape(txt)).strip()
        if len(txt) > 400:
            ident = re.search(r'id="([^"]+)"', m.group(2))
            findings.append(('LOW', 'HIDDEN', path, f'Hidden block {("#" + ident.group(1)) if ident else ""} holds {len(txt)} characters of text. Remove it, or check it like visible text.', [txt[:160] + '…']))
    for m in re.finditer(r'<style>#viewSummary>\.sum-bar,#viewSummary>\.sum\{display:none!important\}</style>', raw):
        findings.append(('LOW', 'HIDDEN', path, 'The old 2-page summary is still inside #viewSummary (hidden by CSS). Remove it.', []))


def review_date(raw):
    m = re.search(r'Reviewed:?\s*(?:</b>\s*)?(January|February|March|April|May|June|July|August|September|October|November|December) (\d{4})', unesc(raw))
    return (m.group(1) + ' ' + m.group(2)) if m else None


# ---------------------------------------------------------------- pages
def summary_for(rel):
    slug = os.path.basename(rel)[:-5]
    if rel.startswith('tools/management/'):
        p = f'tools/management/summaries/{slug}.html'
    else:
        p = f'tools/algorithms/one-page/{slug}.html'
    return p if os.path.exists(os.path.join(ROOT, p)) else None


def is_redirect(t):
    return 'http-equiv="refresh"' in t[:4000] and len(t) < 8000


def default_pages(all_pages):
    pages = []
    for p in sorted(glob.glob(os.path.join(ROOT, 'tools/management/*.html')) + glob.glob(os.path.join(ROOT, 'tools/algorithms/*.html'))):
        rel = os.path.relpath(p, ROOT).replace(os.sep, '/')
        if rel.endswith('-print.html'):
            continue
        if all_pages or summary_for(rel):
            pages.append(rel)
    return pages


def run(pages):
    findings = []
    for rel in pages:
        raw = read(os.path.join(ROOT, rel))
        if is_redirect(raw):
            continue
        lines, blines = lines_of(raw), lines_of(raw, keep_bold=True)
        check_urgency(rel, lines, blines, findings)
        check_strength(rel, lines, findings)
        check_hidden(rel, raw, findings)
        dates = {rel: review_date(raw)}
        src_lines = list(lines)
        twin = rel[:-5] + '-print.html'
        if rel.startswith('tools/management/') and os.path.exists(os.path.join(ROOT, twin)):
            traw = read(os.path.join(ROOT, twin))
            tlines = lines_of(traw)
            check_twin(rel, lines, twin, tlines, findings)
            src_lines += tlines
            dates[twin] = review_date(traw)
        sp = summary_for(rel)
        if sp:
            sraw = read(os.path.join(ROOT, sp))
            check_snapshot(rel, src_lines, sp, lines_of(sraw), findings)
            dates[sp] = review_date(sraw)
        known = {k: v for k, v in dates.items() if v}
        if len(set(known.values())) > 1:
            findings.append(('HIGH', 'DATE', rel, 'Review dates differ: ' + '; '.join(f'`{k}` {v}' for k, v in known.items()), []))
    return findings


def load_ignore():
    p = os.path.join(ROOT, 'governance', 'consistency-ignore.txt')
    rules = []
    if os.path.exists(p):
        for ln in read(p).splitlines():
            ln = ln.strip()
            if ln and not ln.startswith('#') and ln.count('|') >= 2:
                path, kind, snip = [x.strip() for x in ln.split('|', 2)]
                rules.append((path, kind, snip.lower()))
    return rules


def ignored(f, rules):
    lvl, kind, path, msg, ev = f
    text = (msg + ' ' + ' '.join(ev[-1:])).lower()
    return any(path == p and kind == k and s.split('|')[0].strip() in text for p, k, s in rules)


def report(findings, pages):
    rules = load_ignore()
    n0 = len(findings)
    findings = [f for f in findings if not ignored(f, rules)]
    skipped = n0 - len(findings)
    order = {'HIGH': 0, 'MEDIUM': 1, 'LOW': 2}
    findings.sort(key=lambda f: (order[f[0]], f[2], f[1]))
    cnt = {k: sum(1 for f in findings if f[0] == k) for k in order}
    out = [f'# Consistency report\n\n{len(pages)} pages checked. HIGH {cnt["HIGH"]} · MEDIUM {cnt["MEDIUM"]} · LOW {cnt["LOW"]}.\n',
           f'{skipped} findings already reviewed and accepted (governance/consistency-ignore.txt) are not shown.\n' if skipped else '',
           'Read each finding. Fix it on **every** place it appears (page, print twin, one-page summary, Casebook, Ready Prescriptions, audio), using the safer wording that matches guidance. If a finding is a deliberate difference, leave it.\n']
    cur = None
    for lvl, kind, path, msg, ev in findings:
        if path != cur:
            out.append(f'\n## `{path}`\n'); cur = path
        out.append(f'- **{lvl} · {kind}** — {msg}')
        for e in ev:
            if e:
                out.append(f'  - > {e[:240]}')
    return '\n'.join(out) + '\n', cnt


def main():
    args = sys.argv[1:]
    out = None
    if '--out' in args:
        i = args.index('--out'); out = args[i + 1]; del args[i:i + 2]
    strict = '--strict' in args
    all_pages = '--all' in args
    pages = [a for a in args if not a.startswith('--')] or default_pages(all_pages)
    text, cnt = report(run(pages), pages)
    if out:
        with open(os.path.join(ROOT, out) if not os.path.isabs(out) else out, 'w', encoding='utf-8') as f:
            f.write(text)
        print(f'{len(pages)} pages: HIGH {cnt["HIGH"]}, MEDIUM {cnt["MEDIUM"]}, LOW {cnt["LOW"]} -> {out}')
    else:
        sys.stdout.write(text)
    if strict and cnt['HIGH']:
        sys.exit(1)


if __name__ == '__main__':
    main()
