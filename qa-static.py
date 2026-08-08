from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse
import json
import re


class AuditParser(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids = []
        self.links = []
        self.remote_dependencies = []
        self.tags = Counter()
        self.nav_labels = []
        self.html_lang = None
        self.title_parts = []
        self.in_title = False

    def handle_starttag(self, tag, attrs):
        values = dict(attrs)
        self.tags[tag] += 1
        if values.get("id"):
            self.ids.append(values["id"])
        if tag == "a" and values.get("href", "").startswith("#"):
            self.links.append(values["href"])
        if tag in {"script", "link", "img"}:
            source = values.get("src") or values.get("href")
            if source and urlparse(source).scheme in {"http", "https"}:
                self.remote_dependencies.append(source)
        if tag == "nav":
            self.nav_labels.append(values.get("aria-label"))
        if tag == "html":
            self.html_lang = values.get("lang")
        if tag == "title":
            self.in_title = True

    def handle_endtag(self, tag):
        if tag == "title":
            self.in_title = False

    def handle_data(self, data):
        if self.in_title:
            self.title_parts.append(data)


path = Path("ai-workflow-explainer/index.html")
content = path.read_text(encoding="utf-8")
parser = AuditParser()
parser.feed(content)
duplicates = sorted(item for item, count in Counter(parser.ids).items() if count > 1)
broken = sorted({href for href in parser.links if len(href) > 1 and href[1:] not in parser.ids})
chapter_ids = re.findall(r'<section class="chapter" id="([^"]+)"', content)
toc_hrefs = re.findall(r'<a href="#([^"]+)">(?:0[1-8]|[0-9])', content)
result = {
    "title": "".join(parser.title_parts).strip(),
    "lang": parser.html_lang,
    "chapters": chapter_ids,
    "toc_targets": toc_hrefs,
    "duplicate_ids": duplicates,
    "broken_internal_links": broken,
    "remote_dependencies": parser.remote_dependencies,
    "main_landmarks": parser.tags["main"],
    "nav_labels": parser.nav_labels,
    "buttons": parser.tags["button"],
    "details": parser.tags["details"],
    "has_reduced_motion_css": "prefers-reduced-motion" in content,
    "has_print_css": "@media print" in content,
    "has_responsive_css": "@media (max-width:" in content,
    "has_live_region": 'aria-live="polite"' in content,
    "has_viewport_meta": 'name="viewport"' in content,
}
print(json.dumps(result, ensure_ascii=False, indent=2))
