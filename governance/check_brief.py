#!/usr/bin/env python3
"""Validate (and optionally apply) a Medwise revision brief.

Usage (from the repo root): python3 path/to/check_brief.py <brief.md> [--apply]

Brief format: a line `File: tools/algorithms/<slug>.html`, then edits:
  ### E<n> — label
  FIND:
  ```html
  ...exact text, must occur exactly once in the file...
  ```
  REPLACE:
  ```html
  ...new text (empty block = delete)...
  ```
Edits are applied in order; each FIND must be unique at the time it is applied.
"""
import re, sys, pathlib

root = pathlib.Path.cwd()  # run from the repo root
brief = pathlib.Path(sys.argv[1]).read_text(encoding="utf-8")
m = re.search(r"^File:\s*`?([^\s`]+)`?", brief, re.M)
if not m:
    sys.exit("No 'File:' line")
target = root / m.group(1)
html = target.read_text(encoding="utf-8")
pat = re.compile(r"^### (E\d+[^\n]*)\n.*?^FIND:\s*\n```[a-z]*\n(.*?)^```\s*\n+^REPLACE:\s*\n```[a-z]*\n(.*?)^```", re.M | re.S)
edits = pat.findall(brief)
declared = len(re.findall(r"^### E\d+", brief, re.M))
ok = True
if len(edits) != declared:
    print(f"! parsed {len(edits)} edits but {declared} headings"); ok = False
for label, find, repl in edits:
    find = find[:-1] if find.endswith("\n") else find
    repl = repl[:-1] if repl.endswith("\n") else repl
    n = html.count(find)
    if n != 1:
        print(f"! {label.strip()}: FIND occurs {n}x"); ok = False; continue
    html = html.replace(find, repl, 1)
print(f"{target.name}: {len(edits)} edits, {'OK' if ok else 'FAILED'}")
if ok and "--apply" in sys.argv:
    target.write_text(html, encoding="utf-8"); print("applied")
sys.exit(0 if ok else 1)
