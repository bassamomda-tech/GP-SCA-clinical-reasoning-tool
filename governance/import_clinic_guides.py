#!/usr/bin/env python3
"""
Reasoning GP - Clinic Guides importer.

Copies the standalone, fact-checked 2-page Clinic Guides into the site and
wires them in. Safe to re-run at any time: every output is rebuilt from the
source guides, so run it again whenever the guides change.

Usage (from anywhere):
    python3 governance/import_clinic_guides.py
    python3 governance/import_clinic_guides.py --src /path/to/cg      # other source folder
    python3 governance/import_clinic_guides.py --check                 # report only, write nothing

What it does, for each <src>/<slug>.html (set*.html bundles and non-guide files are skipped):
  1. Reads the protocol address from the guide's own header text
     ("Full protocol: gpreasoning.uk/tools/management/<x>.html", or
     tools/algorithms/<x>.html) and checks the footer agrees.
  2. Writes tools/clinic-guides/<slug>.html with
       - the top-bar "Full protocol" link pointed at the real page,
         relative to tools/clinic-guides/ (../management/<x>.html or
         ../algorithms/<x>.html);
       - a small "Clinic Guides" back link in the top bar;
       - <link rel="canonical"> set to the protocol page;
       - <meta name="robots" content="noindex"> kept (added if missing);
       - assets/clinic-guides.js (access check, Print-on-open, framed view).
     Nothing inside the printed pages is touched: the top bar is hidden in
     print, and the added CSS is screen-only, so the A4 output is unchanged.
  3. Writes assets/clinic-guides.json - the manifest the protocol and
     pathway pages read to show their "Clinic Guide" entry point.
  4. Rebuilds the card list in tools/clinic-guides.html between the
     <!-- CG:CARDS:START --> and <!-- CG:CARDS:END --> markers.
  5. Removes guides it imported earlier whose source has gone.

The free-sample list is NOT here: it lives in assets/clinic-guides.js
(RGP_CLINIC_GUIDES_FREE), so changing it never needs a re-import.

After importing, rebuild the search index:
    node governance/build-search-index.mjs

Only the Python standard library is used.
"""
import argparse, html, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEFAULT_SRC = os.environ.get(
    'CLINIC_GUIDES_SRC',
    # cg_all = the original Clinic Guides (cg/) plus the lab results series (lab/) in ONE
    # folder. A run removes imported guides missing from the source, so always point
    # it at the combined folder.
    '/tmp/claude-0/-home-user-GP-SCA-clinical-reasoning-tool/db1fda5d-4448-5a27-9996-ec762174568a/scratchpad/cg_all')
DEST_DIR = os.path.join(ROOT, 'tools', 'clinic-guides')
MANIFEST = os.path.join(ROOT, 'assets', 'clinic-guides.json')
HUB = os.path.join(ROOT, 'tools', 'clinic-guides.html')
HOST = 'https://gpreasoning.uk/'
MARK = 'data-cg-import'   # attribute on <html> marking a file this script wrote
SKIP = re.compile(r'^set\d*\.html$')   # combined print sets (set1.html, set2.html, ...), not single guides

# Category -> slugs, in display order. A guide missing from this map is still
# imported, under "Other", with a warning.
CATEGORIES = [
    ('Cardiovascular', '❤️', ['hypertension', 'hypercholesterolaemia', 'stable-angina', 'atrial-fibrillation', 'heart-failure', 'chest-pain']),
    ('Respiratory', '\U0001f32c️', ['asthma', 'copd', 'breathlessness', 'allergic-rhinitis']),
    ('Metabolic and endocrine', '\U0001f98b', ['type-2-diabetes', 'ckd', 'hypothyroidism', 'hyperthyroidism', 'osteoporosis', 'gout', 'anaemia']),
    ('Mental health and neurology', '\U0001f9e0', ['depression', 'anxiety', 'adhd', 'dementia', 'insomnia', 'migraine', 'headache', 'dizziness', 'hearing-loss']),
    ("Women's and men's health", '\U0001f338', ['menopause-hrt', 'contraception', 'heavy-menstrual-bleeding', 'male-luts']),
    ('Gut', '\U0001f37d️', ['dyspepsia', 'ulcerative-colitis', 'crohns-disease']),
    ('Musculoskeletal', '\U0001f9b4', ['osteoarthritis', 'sciatica']),
    ('Children and skin', '\U0001f9d2', ['cmpa', 'infant-reflux', 'eczema', 'acne']),
    # Lab results series: one guide per abnormal-result pathway (tools/algorithms/<slug>.html),
    # in the same order as the Lab Results Handbook PDF (GROUP_EXTRA below).
    ('Lab results', '\U0001f9ea', [
        'raised-creatinine', 'hyponatraemia', 'hypernatraemia', 'hyperkalaemia', 'hypokalaemia', 'magnesium-deficiency',
        'hypercalcaemia', 'hypocalcaemia', 'abnormal-bone-profile', 'vitamin-d-deficiency',
        'hyperglycaemia', 'hypoglycaemia', 'abnormal-lipid-profile', 'high-triglycerides',
        'abnormal-tfts', 'hyperprolactinaemia', 'testosterone-deficiency', 'female-hormone-abnormalities',
        'microcytosis', 'macrocytosis', 'normocytic-anaemia', 'low-ferritin', 'high-ferritin',
        'vitamin-b12-deficiency', 'low-folate', 'polycythaemia',
        'leucocytosis', 'leucopenia', 'lymphocytosis', 'lymphopenia', 'eosinophilia',
        'thrombocytosis', 'thrombocytopenia', 'pancytopenia',
        'abnormal-lfts', 'jaundice', 'raised-creatine-kinase',
        'high-crp-esr', 'abnormal-immunoglobulin', 'abnormal-cancer-markers', 'high-psa', 'allergy-test-abnormalities',
    ]),
]
OTHER = ('Other', '\U0001f4c4')

# Optional static block shown at the top of a category's section on the hub,
# above its cards (kept here so a re-run never drops it). Not a .cg-card, so
# it is not counted as a guide; it hides with its section when a search empties it.
# The Lab Results Handbook is a SEPARATE one-off purchase (£20 via PayPal), NOT
# part of any plan. data-cg-product="<id>" must be a product in PRODUCTS in
# backend/worker.js; assets/clinic-guides.js fills .cg-hb-buy with the right
# state (Sign in to buy / PayPal button / Download / Coming soon) and the Worker
# checks the purchase server-side (/api/shop/*, /api/download/<id>).
# data-cg-local is used ONLY on previews/local copies and for the admin account;
# buyers never get the public file. Delete assets/downloads/*.pdf once the shop
# is live (backend/README.md, "Handbook shop").
# data-cg-size is the file size shown on the Download button (optional).
# The same card markup also sells the handbooks on pages/shop.html (all of them).
GROUP_EXTRA = {
    'Lab results': (
        '        <div class="cg-handbook" data-cg-product="lab-handbook" data-cg-price="20" '
        'data-cg-title="Lab Results Handbook" data-cg-size="2.6 MB" data-cg-local="../assets/downloads/Lab_Results_Handbook_v1.pdf">\n'
        '          <div class="cg-hb-icon" aria-hidden="true">PDF</div>\n'
        '          <div class="cg-hb-body">\n'
        '            <h3 class="cg-hb-t">Lab Results Handbook <span class="cg-hb-fmt">(PDF, 89 pages)</span></h3>\n'
        '            <p class="cg-hb-price"><b>£20</b> · one-off purchase · not included in subscription plans</p>\n'
        '            <p class="cg-hb-d">The lab results guides are available only in this handbook: 42 two-page guides to abnormal blood results, plus the Anaemia guide, in one printable A4 book with clickable contents: '
        '43 guides, 89 pages. Version 1.1, October 2026 · next review April 2027. Yours to keep: buy once, download any time.</p>\n'
        '            <p class="cg-hb-d cg-hb-shop"><a href="../pages/shop.html">See all handbooks in the Shop →</a></p>\n'
        '            <p class="cg-hb-note" hidden></p>\n'
        '          </div>\n'
        '          <div class="cg-hb-buy" aria-live="polite">\n'
        '            <a class="cg-btn pri cg-hb-btn" href="mailto:bassamomda@gmail.com?subject=Lab%20Results%20Handbook%20(%C2%A320)">Buy · £20</a>\n'
        '          </div>\n'
        '        </div>\n'
    ),
}
# Categories sold ONLY as a handbook (shop.html, £20): their guides are NOT published as
# pages, NOT in the manifest (so pathway pages show no "Clinic Guide" entry point) and the
# hub shows the handbook card plus a titles-only contents list. Re-publishing would give
# the handbook away inside the plans.
HANDBOOK_ONLY = {'Lab results'}

# The whole Clinic Guides section is HIDDEN (owner, Oct 2026): no guide pages are
# published, the manifest lists no guides (so protocol and pathway pages show no
# "Clinic Guide" button), and tools/clinic-guides.html is a static redirect to the
# Shop, left alone by this script. The sources stay in the source folder for future
# handbooks. To bring the section back: set HIDE_ALL = False, restore the hub page
# from governance/clinic-guides-hub.html.txt, add the menu entries back in assets/site.js,
# re-run this script and rebuild the search index.
HIDE_ALL = True

# Cache-buster for assets/clinic-guides.js on the guide pages AND the hub.
# Bump it whenever that script changes; a re-run rewrites every reference.
CG_JS_V = 5

CAT_OF = {s: c for c, _, slugs in CATEGORIES for s in slugs}
ORDER = {s: i for i, s in enumerate(s for _, _, slugs in CATEGORIES for s in slugs)}

PROTO_RE = re.compile(r'gpreasoning\.uk/(tools/(?:management|algorithms)/[a-z0-9-]+\.html)')
BAR_RE = re.compile(r'<div class="bar">(.*?)</div>', re.S)

warnings = []
def warn(msg):
    warnings.append(msg)
    print('  ! ' + msg)

def text(s):
    s = re.sub(r'<br\s*/?>', '\n', s or '')
    s = re.sub(r'<[^>]+>', '', s)
    s = html.unescape(s)
    return re.sub(r'[ \t\r\f\v]+', ' ', s).strip()

def one_line(s):
    return re.sub(r'\s+', ' ', s).strip()

def first_sentence(s):
    s = one_line(s)
    m = re.match(r'(.+?[.!?])(\s|$)', s)
    return m.group(1) if m else s

def esc(s):
    return html.escape(s, quote=True)

def slugify(s):
    return re.sub(r'[^a-z0-9]+', '-', s.lower().replace('&', 'and').replace("'", '')).strip('-')

def protocol_title(rel):
    """Title of the protocol / pathway page, from its <title>."""
    p = os.path.join(ROOT, rel)
    if not os.path.exists(p):
        return None
    with open(p, encoding='utf-8') as f:
        head = f.read(20000)
    m = re.search(r'<title>(.*?)</title>', head, re.S)
    if not m:
        return None
    t = one_line(text(m.group(1)))
    t = re.sub(r'\s*[·|]\s*Reasoning GP\s*$', '', t)
    t = re.sub(r'\s+—\s+(Protocol|Pathway)\s*$', '', t)
    t = re.sub(r'\s+Algorithm\s*$', '', t)
    return t.strip()

def parse_guide(slug, src):
    """Pull everything the site needs out of one source guide."""
    hdr_end = src.find('class="ptitle"')
    hdr = src[:hdr_end] if hdr_end > 0 else src[:12000]
    body_start = src.find('<body')
    hdr_body = hdr[body_start:] if body_start >= 0 else hdr
    m = PROTO_RE.search(re.sub(r'<div class="bar">.*?</div>', '', hdr_body, count=1, flags=re.S))
    if not m:
        raise ValueError('no "Full protocol: gpreasoning.uk/tools/..." address in the header')
    proto = m.group(1)
    foot = re.findall(r'<div class="foot"[^>]*>(.*?)</div>', src, re.S)
    foot_protos = set(PROTO_RE.findall(' '.join(foot)))
    if foot_protos and foot_protos != {proto}:
        warn(f'{slug}: footer names {", ".join(sorted(foot_protos))} but the header names {proto} (header used)')
    h1 = re.search(r'<h1>(.*?)</h1>', src, re.S)
    title = one_line(text(re.sub(r'<small>.*?</small>', '', h1.group(1), flags=re.S))) if h1 else slug
    scope_m = re.search(r'<div class="scope"[^>]*>(.*?)</div>', src, re.S)
    scope = one_line(text(scope_m.group(1))) if scope_m else ''
    meta_m = re.search(r'<div class="meta"[^>]*>(.*?)</div>', src, re.S)
    guidance, reviewed, next_review = [], '', ''
    if meta_m:
        mt = text(meta_m.group(1))
        # the protocol / pathway address (may wrap onto its own line) is not guidance
        mt = re.sub(r'Full (?:protocol|pathway):?\s*(?:gpreasoning\.uk/\S+)?', '', mt, flags=re.I)
        # "Reviewed <Mon YYYY> · next [review] <Mon YYYY>", on its own line or run on after the sources
        r = re.search(r'Reviewed\s+(.+?)[\s·]+next(?:\s+review)?\s+([A-Za-z]+\s+\d{4})', mt, re.I)
        if r:
            reviewed, next_review = one_line(r.group(1)), one_line(r.group(2))
            mt = mt[:r.start()] + mt[r.end():]
        for line in mt.split('\n'):
            line = one_line(line).strip(' ·')
            if line:
                guidance.append(line)
    pages = len(re.findall(r'<section class="page"', src))
    if pages != 2:
        warn(f'{slug}: {pages} .page sections (expected 2)')
    return {
        'slug': slug, 'title': title, 'scope': scope, 'scopeLine': first_sentence(scope),
        'guidance': ' · '.join(guidance), 'reviewed': reviewed, 'nextReview': next_review,
        'protocol': proto,
    }

def rewrite(slug, src, g):
    """Return the site copy of one guide."""
    out = src
    rel = '../' + g['protocol'][len('tools/'):]          # tools/clinic-guides/ -> tools/<kind>/<x>.html

    # 1. top bar: the protocol link + a small back link to the hub
    bm = BAR_RE.search(out)
    if not bm:
        raise ValueError('no <div class="bar"> top bar')
    bar = bm.group(1)
    if not re.search(r'<a\b[^>]*href="[^"]*"', bar):
        raise ValueError('top bar has no protocol link')
    bar = re.sub(r'(<a\b[^>]*?href=")[^"]*(")', lambda m: m.group(1) + rel + m.group(2), bar, count=1)
    bar = re.sub(r'<a class="cg-back"[^>]*>.*?</a>\s*', '', bar, flags=re.S)
    back = '<a class="cg-back" href="../clinic-guides.html" title="All Clinic Guides">← Clinic Guides</a> '
    if bar.startswith('<span>'):
        bar = '<span>' + back + bar[len('<span>'):]
    else:
        bar = back + bar
    out = out[:bm.start()] + '<div class="bar">' + bar + '</div>' + out[bm.end():]

    # 2. canonical -> the protocol page
    canon = f'<link rel="canonical" href="{HOST}{g["protocol"]}">'
    if re.search(r'<link\s+rel="canonical"[^>]*>', out):
        out = re.sub(r'<link\s+rel="canonical"[^>]*>', canon, out, count=1)
    else:
        out = out.replace('</title>', '</title>\n' + canon, 1)

    # 3. noindex kept (added if a source ever drops it)
    if not re.search(r'<meta\s+name="robots"\s+content="[^"]*noindex', out):
        out = re.sub(r'<meta\s+name="robots"[^>]*>\s*', '', out)
        out = out.replace('</title>', '</title>\n<meta name="robots" content="noindex">', 1)

    # 4. screen-only style for the back link (print output untouched)
    style = ('<style id="cg-site">@media screen{.bar a.cg-back{font-size:12px;font-weight:600;padding:6px 10px;'
             'background:transparent;border-color:rgba(255,255,255,.28);margin-right:8px}}'
             # phones: let the header wrap and long words/addresses break, so nothing scrolls sideways
             '@media screen and (max-width:820px){.hdr{flex-wrap:wrap}.hdr .meta{flex:1 1 100%!important;white-space:normal!important}'
             '.page,.page *{overflow-wrap:anywhere}.page table{width:100%;table-layout:fixed}}</style>')
    out = re.sub(r'<style id="cg-site">.*?</style>\s*', '', out, flags=re.S)
    if '</head>' not in out:   # some guides omit the optional </head>; put it before <body>
        out = re.sub(r'<body', '</head>\n<body', out, count=1)
    out = out.replace('</head>', style + '\n</head>', 1)

    # 5. shared script: access check, #print, framed view
    out = re.sub(r'<script src="[^"]*assets/clinic-guides\.js[^"]*"></script>\s*', '', out)
    out = out.replace('</body>', f'<script src="../../assets/clinic-guides.js?v={CG_JS_V}"></script>\n</body>', 1)

    # 6. mark as imported (lets a re-run tidy up guides whose source has gone)
    out = re.sub(r'<html\b([^>]*)>', lambda m: '<html' + re.sub(r'\s' + MARK + r'="[^"]*"', '', m.group(1)) + f' {MARK}="{esc(slug)}">', out, count=1)
    return out

def card(g):
    kind = 'protocol' if g['protocol'].startswith('tools/management/') else 'pathway'
    href = 'clinic-guides/' + g['slug'] + '.html'
    proto_href = g['protocol'][len('tools/'):]
    ptitle = g['protocolTitle'] or g['title']
    words = ' '.join([g['title'], g['scope'], g['guidance'], ptitle, g['slug'].replace('-', ' ')]).lower()
    meta = esc(g['guidance'])
    rev = (f'Reviewed {esc(g["reviewed"])} · next review {esc(g["nextReview"])}' if g['reviewed'] else '')
    return (
        f'          <article class="cg-card" data-cg-slug="{esc(g["slug"])}" data-search="{esc(one_line(words))}">\n'
        f'            <h3 class="cg-card-t"><a href="{href}">{esc(g["title"])}</a></h3>\n'
        f'            <p class="cg-scope">{esc(g["scopeLine"])}</p>\n'
        + (f'            <p class="cg-src">{meta}</p>\n' if meta else '')
        + (f'            <p class="cg-rev">{rev}</p>\n' if rev else '')
        + f'            <div class="cg-actions"><a class="cg-btn pri" href="{href}">Open</a>'
          f'<a class="cg-btn" href="{href}#print" title="Opens the guide and its print dialogue: 2 A4 pages">Print</a></div>\n'
          f'            <a class="cg-proto" href="{proto_href}">Full {kind}: {esc(ptitle)} →</a>\n'
          '          </article>'
    )

def hub_cards(guides, sold=()):
    groups = []
    cats = [(c, ic) for c, ic, _ in CATEGORIES] + [OTHER]
    for cat, icon in cats:
        if cat in HANDBOOK_ONLY:
            ts = [g for g in sold if g['category'] == cat]
            if not ts:
                continue
            groups.append(
                f'      <section class="cg-group cg-group-hb" id="{slugify(cat)}" data-group="{slugify(cat)}">\n'
                f'        <div class="alg-group-head"><span class="agh-icon" aria-hidden="true">{icon}</span><h2>{esc(cat)}</h2>'
                f'<span class="agh-count">in the handbook</span></div>\n'
                + GROUP_EXTRA.get(cat, '')
                + '        <details class="cg-hb-list"><summary>What is inside: ' + str(len(ts)) + ' guides</summary>\n'
                + '          <ul>' + ''.join(f'<li>{esc(g["title"])}</li>' for g in ts) + '</ul>\n'
                + '        </details>\n      </section>')
            continue
        gs = [g for g in guides if g['category'] == cat]
        if not gs:
            continue
        n = len(gs)
        groups.append(
            f'      <section class="cg-group" id="{slugify(cat)}" data-group="{slugify(cat)}">\n'
            f'        <div class="alg-group-head"><span class="agh-icon" aria-hidden="true">{icon}</span><h2>{esc(cat)}</h2>'
            f'<span class="agh-count">{n} guide{"s" if n != 1 else ""}</span></div>\n'
            + GROUP_EXTRA.get(cat, '')
            + '        <div class="cg-grid">\n' + '\n'.join(card(g) for g in gs) + '\n        </div>\n      </section>')
    return '\n'.join(groups)

def update_hub(guides, check, sold=()):
    if not os.path.exists(HUB):
        warn('tools/clinic-guides.html not found: hub cards not written')
        return False
    with open(HUB, encoding='utf-8') as f:
        hub = f.read()
    a, b = '<!-- CG:CARDS:START -->', '<!-- CG:CARDS:END -->'
    i, j = hub.find(a), hub.find(b)
    if i < 0 or j < i:
        warn('tools/clinic-guides.html has no CG:CARDS markers: hub cards not written')
        return False
    new = hub[:i + len(a)] + '\n' + hub_cards(guides, sold) + '\n      ' + hub[j:]
    # guide counts shown in the hub copy: <span data-cg-count>N</span>
    new = re.sub(r'(<span data-cg-count>)\d+(</span>)', lambda m: m.group(1) + str(len(guides)) + m.group(2), new)
    new = re.sub(r'(assets/clinic-guides\.js)(?:\?v=\d+)?(")', lambda m: f'{m.group(1)}?v={CG_JS_V}{m.group(2)}', new)
    new = re.sub(r'(<span data-cg-cats>)\d+(</span>)', lambda m: m.group(1) + str(len({g["category"] for g in guides})) + m.group(2), new)
    if new != hub and not check:
        with open(HUB, 'w', encoding='utf-8') as f:
            f.write(new)
    return new != hub

def main():
    ap = argparse.ArgumentParser(description='Import the Clinic Guides into the site.')
    ap.add_argument('--src', default=DEFAULT_SRC, help='folder holding the source <slug>.html guides')
    ap.add_argument('--check', action='store_true', help='report only; write nothing')
    args = ap.parse_args()
    src_dir = os.path.abspath(args.src)
    if not os.path.isdir(src_dir):
        sys.exit(f'Source folder not found: {src_dir}')

    files = sorted(f for f in os.listdir(src_dir) if f.endswith('.html') and not SKIP.match(f))
    guides, outputs = [], {}
    for fn in files:
        slug = fn[:-5]
        if not re.fullmatch(r'[a-z0-9-]+', slug):
            warn(f'{fn}: skipped (file name is not a slug)')
            continue
        with open(os.path.join(src_dir, fn), encoding='utf-8') as f:
            src = f.read()
        if 'class="page"' not in src or 'Clinic Guide' not in src:
            warn(f'{fn}: skipped (not a Clinic Guide)')
            continue
        try:
            g = parse_guide(slug, src)
            outputs[slug] = rewrite(slug, src, g)
        except ValueError as e:
            warn(f'{fn}: skipped ({e})')
            continue
        g['category'] = CAT_OF.get(slug, OTHER[0])
        if slug not in CAT_OF:
            warn(f'{slug}: not in CATEGORIES, listed under "Other" (add it to CATEGORIES in this script)')
        g['protocolTitle'] = protocol_title(g['protocol'])
        if g['protocolTitle'] is None:
            warn(f'{slug}: protocol page {g["protocol"]} does not exist in the site')
        g['kind'] = 'protocol' if g['protocol'].startswith('tools/management/') else 'pathway'
        g['guide'] = f'tools/clinic-guides/{slug}.html'
        guides.append(g)

    guides.sort(key=lambda g: (ORDER.get(g['slug'], 10**6), g['slug']))
    sold = [g for g in guides if g['category'] in HANDBOOK_ONLY]
    guides = [g for g in guides if g['category'] not in HANDBOOK_ONLY]
    if HIDE_ALL:
        sold, guides = sold + guides, []
    dup = {}
    for g in guides:
        dup.setdefault(g['protocol'], []).append(g['slug'])
    for p, s in dup.items():
        if len(s) > 1:
            warn(f'{p} has more than one guide ({", ".join(s)}): its page shows the first')
    missing = [s for s in ORDER if s not in {g['slug'] for g in guides + sold}]
    for s in missing:
        warn(f'{s}: listed in CATEGORIES but no source guide found')

    changed = []
    if not args.check:
        os.makedirs(DEST_DIR, exist_ok=True)
    for slug, out in outputs.items():
        if slug not in {g['slug'] for g in guides}:
            continue
        p = os.path.join(DEST_DIR, slug + '.html')
        old = open(p, encoding='utf-8').read() if os.path.exists(p) else None
        if old != out:
            changed.append('tools/clinic-guides/' + slug + '.html')
            if not args.check:
                with open(p, 'w', encoding='utf-8') as f:
                    f.write(out)
    # tidy up: guides this script imported before whose source has gone
    removed = []
    if os.path.isdir(DEST_DIR):
        keep = {g['slug'] + '.html' for g in guides}
        for fn in sorted(os.listdir(DEST_DIR)):
            if not fn.endswith('.html') or fn in keep:
                continue
            p = os.path.join(DEST_DIR, fn)
            with open(p, encoding='utf-8') as f:
                if MARK not in f.read(3000):
                    continue
            removed.append('tools/clinic-guides/' + fn)
            if not args.check:
                os.remove(p)

    manifest = {
        'v': 1,
        'about': 'Clinic Guides: 2-page printable desk guides. Written by governance/import_clinic_guides.py; do not edit by hand. '
                 'The free-sample list is RGP_CLINIC_GUIDES_FREE in assets/clinic-guides.js.',
        'hub': 'tools/clinic-guides.html',
        'categories': [c for c, _, _ in CATEGORIES if any(g['category'] == c for g in guides)]
                      + ([OTHER[0]] if any(g['category'] == OTHER[0] for g in guides) else []),
        'guides': [{
            'slug': g['slug'], 'title': g['title'], 'category': g['category'],
            'guide': g['guide'], 'protocol': g['protocol'], 'protocolTitle': g['protocolTitle'] or '',
            'kind': g['kind'], 'scope': g['scopeLine'], 'guidance': g['guidance'],
            'reviewed': g['reviewed'], 'nextReview': g['nextReview'],
        } for g in guides],
    }
    mjson = json.dumps(manifest, ensure_ascii=False, indent=1) + '\n'
    old = open(MANIFEST, encoding='utf-8').read() if os.path.exists(MANIFEST) else None
    if old != mjson:
        changed.append('assets/clinic-guides.json')
        if not args.check:
            with open(MANIFEST, 'w', encoding='utf-8') as f:
                f.write(mjson)
    if not HIDE_ALL and update_hub(guides, args.check, sold):
        changed.append('tools/clinic-guides.html')

    print(f'Clinic Guides: {len(guides)} guides published, {len(sold)} handbook-only (not published) from {src_dir}')
    for cat in manifest['categories']:
        print(f'  {cat}: ' + ', '.join(g['slug'] for g in guides if g['category'] == cat))
    verb = 'would change' if args.check else 'changed'
    print(f'{len(changed)} file(s) {verb}' + (':' if changed else '.'))
    for c in changed:
        print('  ' + c)
    if removed:
        print(('would remove' if args.check else 'removed') + ': ' + ', '.join(removed))
    print(f'{len(warnings)} warning(s).')
    if changed and not args.check:
        print('Next: node governance/build-search-index.mjs')
    return 1 if any('skipped' in w for w in warnings) else 0

if __name__ == '__main__':
    sys.exit(main())
