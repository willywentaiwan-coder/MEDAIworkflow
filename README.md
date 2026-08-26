# Medical AI × Medical Excellence Portal

This repository publishes one Medical Excellence landing page with related AI workflow and Copilot guides presented as first-level tabs.

## Information architecture

| Tab | File | Purpose |
|---|---|---|
| Excellence overview | index.html | Main landing page and Medical Excellence operating model |
| AI workflow | medical-ai-workflow-explainer.html | Five-function Medical AI workflow explainer |
| MSL Knowledge | Copilot_Agent_MSL_Knowledge_Copilot_Prompt_Guide.html | MSL Knowledge Copilot prompt guide |
| mVOC Writing | Copilot_Agent_MSL_mVOC_Writing_Assistant.html | MSL mVOC Writing Assistant design guide |
| Reference Extractor | reference-text-extractor/reference_text_extractor_prompt_guide_global.html | Reference Text Extractor guide |

index.html is the canonical portal entry. The other HTML files are maintained as related tool pages, not competing homepages. Every page contains the same first-level navigation and identifies its active tab.

## Publishing record

- Default branch: main
- Portal entry: index.html
- Audience: Global Medical internal colleagues
- Communication job: Reference and capability enablement
- Delivery: Static GitHub Pages-compatible HTML
- Main-page languages: English, Traditional Chinese, Japanese, Korean, Spanish, Italian, German, and Thai
- Translation status: TRANSLATION_REVIEW_PENDING

## Content status

These pages are internal discussion and capability-development materials. They are not official company policy, an approved SOP, approved Medical content, or a validated production system. Functional experts remain responsible for scientific interpretation and decisions.

## Local use

Open index.html in a modern browser. The portal navigation uses relative links, so keep the repository folder structure unchanged when sharing it offline.

## Release checks

Before publishing, verify:

- all five tab links resolve from every page;
- index.html remains the GitHub Pages entry;
- no credentials, patient-identifiable information, or restricted source material are included;
- current translations and Medical content have the required human review;
- the complete candidate diff is reviewed against the latest remote main.
