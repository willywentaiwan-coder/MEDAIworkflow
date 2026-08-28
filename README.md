# Medical AI × Medical Excellence Portal

This repository publishes one Medical Excellence landing page with related AI workflow and Copilot guides presented as first-level tabs.

## Information architecture

| Tab | File | Purpose |
|---|---|---|
| Excellence overview | index.html | Main landing page and Medical Excellence operating model |
| AI workflow | medical-ai-workflow-explainer.html | Five-function Medical AI workflow explainer |
| Patient Affairs | patient-affairs-workflow.html | Detailed patient-insight-to-impact workflow, decision gates, handoffs, example, and measures |
| TA Impact & OKR | ta-medical-impact-okr-workflow.html | TA Lead Medical Impact Framework and OKR design, operating cadence, and learning workflow |
| Management Monitoring | management-monitoring-workflow.html | Risk-based MM workflow with a common engine, target-specific rule packs, human decision gates, CAPA, and effectiveness verification |
| MSL Knowledge | Copilot_Agent_MSL_Knowledge_Copilot_Prompt_Guide.html | MSL Knowledge Copilot prompt guide, including Section 11 starters for Infectious Disease, Respiratory, Specialty, Oncology, and Vaccine assets |
| mVOC Writing | Copilot_Agent_MSL_mVOC_Writing_Assistant.html | MSL mVOC Writing Assistant design guide |
| Reference Extractor | reference-text-extractor/reference_text_extractor_prompt_guide_global.html | Reference Text Extractor guide |

index.html is the canonical portal entry. The other HTML files are maintained as related tool pages, not competing homepages. Every page contains the same first-level navigation, identifies its active tab, and provides a visible return-to-home control.

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

- all eight tab links resolve from every page;
- index.html remains the GitHub Pages entry;
- no credentials, patient-identifiable information, or restricted source material are included;
- current translations and Medical content have the required human review;
- the complete candidate diff is reviewed against the latest remote main.
