---
title: "Open-Weight Model"
description: "An AI model whose trained weights are published for anyone to download and run, under a licence that may permit or restrict use."
aliases: ["open-weight model", "open-weight models", "open weights", "open model weights", "open foundation model"]
tags: ["glossary", "technology", "ai"]
term_type: "borrowed-technical"
first_defined_in: "NTIA, *Dual-Use Foundation Models with Widely Available Model Weights* (July 2024)"
related_terms: ["local-first", "dark-ai", "dual-use", "data-sovereignty"]
source_project: "BioConomy"
created: 2026-11-13
updated: 2026-11-13
epistemic_status: "documented-fact"
---

An AI model whose trained weights are published for anyone to download and run, under a licence that may permit or restrict use.

Weights are the learned parameters that sit over a model's architecture and turn an input into an output (Open Source Initiative 2024). When they're published, anyone with suitable hardware can run, study or adapt the model without going through the maker's service. The US National Telecommunications and Information Administration called these "dual-use foundation models with widely available model weights" in its July 2024 report, and recommended that the government monitor their risks without restricting their availability for now.

Open-weight isn't the same as open source. The Open Source Initiative's Open Source AI Definition 1.0 (October 2024) asks for the parameters, the full code used to train and run the system, and detailed information about the training data, all on terms that permit use, study, change and sharing. Many published models release the weights alone, often under licences that restrict commercial use or set conditions on it.

For a place-based body, an open-weight model is one it can run on its own hardware and keep under its own rules. Lelapa AI's InkubaLM, at 0.4 billion parameters, is an example.

## Contrast with adjacent terms

- **A closed model** is reached only through the maker's API, on the maker's terms.
- **Open source AI**, in the OSI sense, also requires training code and data information.
- **A small model** is defined by size. A model can be small and closed, or large and open-weight.

## Related terms

- [[glossary/f-l/local-first|Local-First]]
- [[glossary/a-e/dark-ai|Dark AI]]
- [[glossary/a-e/dual-use|Dual Use]]
- [[glossary/a-e/data-sovereignty|Data Sovereignty]]

## Related pages

- [[research/dark-ai-and-the-place-based-inheritance|Dark AI and the Place-Based Inheritance]]
- [[research/dark-fiber-and-the-ai-overbuild|Dark Fiber and the AI Overbuild]]

## Sources

- National Telecommunications and Information Administration (2024, 30 July). *[[sources/ntia-2024-open-model-weights|Dual-Use Foundation Models with Widely Available Model Weights]]*. https://www.ntia.gov/issues/artificial-intelligence/open-model-weights-report
- Open Source Initiative (2024, October). [[sources/osi-2024-open-source-ai-definition|The Open Source AI Definition 1.0]]. https://opensource.org/ai/open-source-ai-definition

## Provenance

Written on 13 November 2026 from hand-back item 10 of the Dark AI research run. The definition follows the NTIA report and the OSI definition. InkubaLM is the brief's example.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "https://wiki.bioconomy.earth/glossary/m-s/open-weight-model/",
  "name": "Open-Weight Model",
  "description": "An AI model whose trained weights are published for anyone to download and run, under a licence that may permit or restrict use.",
  "termCode": "open-weight-model",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "@id": "https://wiki.bioconomy.earth/glossary/#termset",
    "name": "BioConomy Glossary"
  },
  "url": "https://wiki.bioconomy.earth/glossary/m-s/open-weight-model/",
  "alternateName": [
    "open-weight model",
    "open-weight models",
    "open weights",
    "open model weights",
    "open foundation model"
  ]
}
</script>
