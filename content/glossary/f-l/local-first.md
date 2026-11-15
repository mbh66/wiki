---
title: "Local-First"
description: "Software that keeps the primary copy of a user's data on the user's own device, works without a network connection, and syncs with other devices and collaborators when one is available."
aliases: ["local-first", "local-first software", "local first"]
tags: ["glossary", "technology", "data-sovereignty"]
term_type: "borrowed-technical"
first_defined_in: "Kleppmann, Wiggins, van Hardenberg and McGranaghan, 'Local-first software' (Onward! 2019)"
related_terms: ["data-sovereignty", "open-weight-model"]
source_project: "BioConomy"
created: 2026-11-13
updated: 2026-11-13
epistemic_status: "documented-fact"
---

Software that keeps the primary copy of a user's data on the user's own device, works without a network connection, and syncs with other devices and collaborators when one is available.

Martin Kleppmann, Adam Wiggins, Peter van Hardenberg and Mark McGranaghan of the research lab Ink & Switch named the approach in a 2019 essay presented at the Onward! conference. They set it against cloud apps, where all access to data goes through the provider's server and the user can lose access if the service shuts down. Local-first software treats the copy on the user's laptop, tablet or phone as the main one, and uses data structures that let several copies be edited separately and merged later (conflict-free replicated data types, or CRDTs). The essay sets out seven ideals, among them speed, working offline, collaboration and keeping the user in control of the data.

For a place-based body the approach matters in two ways. It works where connections are slow or intermittent. It keeps the community's records on devices the community holds, which bears on [[glossary/a-e/data-sovereignty|data sovereignty]].

## Contrast with adjacent terms

- **Offline-capable cloud apps** can be used without a connection for a while, but the server copy stays the main one.
- **Self-hosted software** runs on a server the user controls. It's still server-first, with the server in different hands.
- **A model run locally** is local compute. Local-first is about where the data lives; the two often go together and are separate choices.

## Related terms

- [[glossary/a-e/data-sovereignty|Data Sovereignty]]
- [[glossary/m-s/open-weight-model|Open-Weight Model]]

## Related pages

- [[research/dark-ai-and-the-place-based-inheritance|Dark AI and the Place-Based Inheritance]]

## Sources

- Kleppmann, M., Wiggins, A., van Hardenberg, P. and McGranaghan, M. (2019). [[sources/kleppmann-2019-local-first-software|Local-first software: you own your data, in spite of the cloud]]. *Proceedings of the 2019 ACM SIGPLAN International Symposium on New Ideas, New Paradigms, and Reflections on Programming and Software (Onward! 2019)*: 154-178. https://doi.org/10.1145/3359591.3359737

## Provenance

Written on 13 November 2026 from hand-back item 10 of the Dark AI research run. The definition follows Kleppmann et al. (2019). The paragraph on place-based bodies is the wiki's own reading.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "DefinedTerm",
  "@id": "https://wiki.bioconomy.earth/glossary/f-l/local-first/",
  "name": "Local-First",
  "description": "Software that keeps the primary copy of a user's data on the user's own device, works without a network connection, and syncs with other devices and collaborators when one is available.",
  "termCode": "local-first",
  "inDefinedTermSet": {
    "@type": "DefinedTermSet",
    "@id": "https://wiki.bioconomy.earth/glossary/#termset",
    "name": "BioConomy Glossary"
  },
  "url": "https://wiki.bioconomy.earth/glossary/f-l/local-first/",
  "alternateName": [
    "local-first",
    "local-first software",
    "local first"
  ]
}
</script>
