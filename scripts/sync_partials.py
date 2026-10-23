#!/usr/bin/env python3
"""Copy the shared header and footer in _partials/ into every page.

  _partials/header.html  replaces each page's <nav class="doc-nav">...</nav>
  _partials/footer.html  replaces each page's <footer class="footer">...</footer>

Pages without a given block are left alone (the homepage has its own header).
{{root}} in a partial becomes the relative path back to the site root:
"./" for top-level pages, "../" for pages in products/, and so on.

Usage:
    python3 scripts/sync_partials.py           # rewrite pages in place
    python3 scripts/sync_partials.py --check   # list out-of-date pages, exit 1 if any
"""
import re
import sys
import textwrap
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
PARTIALS = [
    ('header.html', re.compile(r'^([ \t]*)<nav class="doc-nav">.*?</nav>', re.S | re.M)),
    ('footer.html', re.compile(r'^([ \t]*)<footer class="footer">.*?</footer>', re.S | re.M)),
]
SKIP_DIRS = {'.git', '.github', '.idea', '_partials', 'node_modules'}


def pages():
    for path in sorted(ROOT.rglob('*.html')):
        if not SKIP_DIRS.intersection(path.relative_to(ROOT).parts):
            yield path


def sync(src, partial, pattern, root):
    match = pattern.search(src)
    if not match:
        return src
    block = textwrap.indent(partial.replace('{{root}}', root), match.group(1))
    return src[:match.start()] + block + src[match.end():]


def main():
    check = '--check' in sys.argv[1:]
    partials = [((ROOT / '_partials' / name).read_text().strip('\n'), pattern) for name, pattern in PARTIALS]
    stale = []
    for page in pages():
        depth = len(page.relative_to(ROOT).parts) - 1
        root = '../' * depth or './'
        src = page.read_text()
        out = src
        for partial, pattern in partials:
            out = sync(out, partial, pattern, root)
        if out == src:
            continue
        stale.append(page.relative_to(ROOT))
        if not check:
            page.write_text(out)

    if check:
        for page in stale:
            print(f'out of date: {page}')
        sys.exit(1 if stale else 0)
    print(f'updated {len(stale)} page(s)' if stale else 'all pages already in sync')


if __name__ == '__main__':
    main()
