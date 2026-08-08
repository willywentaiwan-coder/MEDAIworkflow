# GSK TW Medical AI Workflow Explainer

## Publishing record

- Mode: `OFFLINE`
- Canonical source: `index.html`
- Version: 1.0
- Created: 2026-08-08
- Language: Traditional Chinese with stable English workflow and skill names
- Communication job: explain how five Medical Affairs functions participate in one governed AI workflow
- Intended audience: GSK Taiwan Medical Affairs colleagues and decision owners
- Intended outcome: readers can distinguish AI assistance, human decision gates, cross-functional handoffs, and Medical Governance controls
- Positioning: conceptual working narrative; not an official company policy, SOP, or validated production system

## Navigation and deep-link map

| Chapter | Stable deep link | Reader question |
|---|---|---|
| 01 | `#mental-model` | What is an AI workflow? |
| 02 | `#shared-loop` | What control steps are shared by every Hub? |
| 03 | `#five-hubs` | How do the five functions divide responsibility? |
| 04 | `#cross-functional-journey` | How does one HCP signal move across functions? |
| 05 | `#skill-contract` | What makes an AI skill deployable? |
| 06 | `#phase-one` | How should Phase 1 be piloted and measured? |
| 07 | `#guardrails` | Where are the governance boundaries? |
| 08 | `#summary` | What are the three main messages? |

Additional stable role links: `#hub-msl`, `#hub-ta`, `#hub-content`, `#hub-patient`, and `#hub-governance`.

## Citation and media ledger

| ref_id | Source or media | Usage | Status |
|---|---|---|---|
| `SRC-001` | User-supplied “GSK TW Medical AI Workflow, Version 1.0” | Five Hubs, skill names, workflows, Phase 1 list, and stated principles | Supplied in conversation; no public URL |
| `MEDIA-001` | CSS-native diagrams and process visuals | Mental model, shared loop, Hub map, cross-functional journey | Embedded; no external dependency |

No external clinical, product, regulatory, or policy claims were added. No external media, fonts, scripts, tracking, or network calls are used. Best-practice web research was not requested and is not included.

## QA record

| Area | Status | Evidence |
|---|---|---|
| Opening, central takeaway, chapter sequence, closing | PASS | Eight cumulative chapters from mental model to application and summary |
| Source alignment and limitations | PASS | Source and limitation statement in `#summary`; no external Medical claims |
| Table of contents and deep-link targets | PASS | Eight TOC targets match eight chapter IDs |
| Duplicate IDs | PASS | Static audit found none |
| Broken internal anchors | PASS | Static audit found none |
| Semantic landmarks | PASS | One `main`; labeled navigation; ordered headings; tables and callouts |
| Offline operation | PASS | Static audit found no remote dependencies |
| Responsive rules | PASS | Desktop, tablet, and mobile breakpoints are present |
| Reduced motion and focus visibility | PASS | Reduced-motion rule and focus-visible styles are present |
| Print fallback | PASS | Dedicated print stylesheet is present |
| Embedded JavaScript syntax | PASS | Parsed successfully by Node.js syntax check |
| Desktop visual rendering | NOT_TESTED | Automated browser could not open a local `file://` page under the active security policy |
| Mobile visual rendering | NOT_TESTED | Same limitation as desktop visual rendering |
| Browser back/forward and live scrollspy | NOT_TESTED | Requires a permitted live browser session |
| PDF | NOT_REQUESTED | Browser print control is available; no verified PDF derivative was requested |
| PPTX | NOT_REQUESTED | No presentation derivative was requested |

## Known limitations

- Visual layout and live interactions were not browser-verified in this environment because automated access to local `file://` pages was blocked.
- Governance descriptions are conceptual and require confirmation against applicable company policies, local procedures, and authorized decision roles.
- The stated 70–80% workload coverage is treated as an assumption pending a workload baseline and pilot evidence.
- The page uses modern CSS such as `color-mix`; older browsers may render some accents differently while retaining readable content.

## Local use

Open `index.html` directly in a modern browser. The file is self-contained and does not require a server or network connection. Use the built-in “列印／存成 PDF” button for an unverified browser-generated print copy.
