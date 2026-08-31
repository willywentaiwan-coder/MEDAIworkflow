# Medical AI × Medical Excellence Portal

This repository publishes one Medical Excellence landing page with a function-based directory for related AI workflows, Agents, and Copilot prompt guides.

## Information architecture

The global navigation has only two permanent destinations: `Overview` and `By function`. Agent pages add one contextual link back to their current function. New Agents must be placed inside a function rather than added as another global tab.

| Level | File | Purpose |
|---|---|---|
| Overview | index.html | Main landing page and shared Medical Excellence operating model |
| By function | functions.html | Directory for MSL, TA Lead, Medical Content, Patient Affairs, Medical Excellence, and Medical Governance |

### Agent and workflow pages

| Function | File | Purpose |
|---|---|---|
| Medical Excellence / shared | medical-ai-workflow-explainer.html | Medical AI workflow operating model |
| Patient Affairs | patient-affairs-workflow.html | Detailed patient-insight-to-impact workflow, decision gates, handoffs, example, and measures |
| TA Lead | ta-medical-impact-okr-workflow.html | TA Lead Medical Impact Framework and OKR design, operating cadence, and learning workflow |
| Medical Governance | management-monitoring-workflow.html | Risk-based MM workflow with a common engine, target-specific rule packs, human decision gates, CAPA, and effectiveness verification |
| MSL | Copilot_Agent_MSL_Knowledge_Copilot_Prompt_Guide.html | MSL Knowledge Copilot prompt guide, including Section 11 starters for Infectious Disease, Respiratory, Specialty, Oncology, and Vaccine assets |
| Medical Content / Governance | medical-claims-pre-review-prompt-guide.html | Traditional Chinese Medical Claims Pre-Review Agent prompt guide with claim inventory, source traceability, six review statuses, minimal wording edits, and MLR handoff |
| MSL | Copilot_Agent_MSL_mVOC_Writing_Assistant.html | MSL mVOC Writing Assistant design guide |
| MSL / Medical Content | reference-text-extractor/reference_text_extractor_prompt_guide_global.html | Reference Text Extractor guide |

index.html is the canonical portal entry. functions.html is the scalable directory. The other HTML files are maintained as Agent or workflow pages, not competing homepages. Shared navigation is rendered by medai-navigation.js and preserves the path `Overview → By function → Current function`.

## Publishing record

- Default branch: main
- Portal entry: index.html
- Audience: Global Medical internal colleagues
- Communication job: Reference and capability enablement
- Delivery: Static GitHub Pages-compatible HTML
- Core landing, Patient Affairs, TA Impact & OKR, and Management Monitoring selectors: all 24 official EU languages, plus Traditional Chinese, Japanese, Korean, and Thai (28 options total)
- EU language scope source: https://european-union.europa.eu/principles-countries-history/languages_en
- Fully localized landing-page languages: English, Traditional Chinese, Japanese, Korean, Spanish, Italian, German, and Thai
- Newly added EU languages: localized language controls with visible English canonical-content fallback during development
- Translation status: TRANSLATION_REVIEW_PENDING for all content not independently or natively reviewed

## Content status

These pages are internal discussion and capability-development materials. They are not official company policy, an approved SOP, approved Medical content, or a validated production system. Functional experts remain responsible for scientific interpretation and decisions.

## Local use

Open index.html in a modern browser. The portal navigation uses relative links, so keep the repository folder structure unchanged when sharing it offline.

## Release checks

Before publishing, verify:

- the Overview and By function links resolve from every page;
- functions.html lists every Agent and workflow under at least one accountable function;
- shared tools are visibly identified and do not become global tabs;
- index.html remains the GitHub Pages entry;
- no credentials, patient-identifiable information, or restricted source material are included;
- current translations and Medical content have the required human review;
- the complete candidate diff is reviewed against the latest remote main.
