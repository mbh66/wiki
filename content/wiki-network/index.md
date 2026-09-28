---
title: "Wiki Network"
aliases: ["wiki network", "biohub network", "registered biohubs"]
tags: ["landing", "orientation", "wiki-network", "biohub"]
created: 2026-09-04
updated: 2026-09-28
source_project: "BioConomy"
source_documents: []
epistemic_status: "documented-framework"
---

BioHubs and BioRegions in the network. Each entry names a peer registered in the [BioHubs directory](https://biohubs.bioconomy.earth), where it publishes a coordination surface at a predictable path and is therefore readable by the [[essays/how-the-bioconomy-coordinates|stigmergic coordination pattern]] the corpus describes.

## What listing here means

Listing here means the BioHub's pages in the directory follow the layout convention that the interoperability of the network depends on. A coordinator (or the AI agent working on the coordinator's behalf) arriving at any entry in this folder can then read the peer's coordination surface directly at `https://biohubs.bioconomy.earth/{realm}/{code}/coordination-surface`, see what the BioHub offers and seeks, and identify complementarities against their own coordination surface.

Listing is a light-touch verification. The meta-wiki editorial team has read the peer's pages in the directory, confirmed they follow the layout, and merged the pull request that added the entry here. It is not endorsement of the peer BioHub's service claims, financial-instrument alignments, or governance choices. Those the peer BioHub publishes on its own coordination surface and stands behind on its own.

## Distinction from related-wikis

The [[wiki-related/index|related-wikis folder]] holds external knowledge commons whose scope overlaps the BioConomy corpus (P2P Foundation, Omniharmonic, BioHubs.earth, Bioregioning Earth). Those are outside sources the corpus draws on.

This folder holds BioHubs and BioRegions inside the network. Each entry is a peer that publishes to the same layout convention, and coordination between the meta-wiki and each entry happens through the same reading-and-revising pattern that operates between any two peers.

## Currently listed

- [[at12-vog|Valley of Grace BioHub]] ([biohubs.bioconomy.earth/afrotropic/at12-vog](https://biohubs.bioconomy.earth/afrotropic/at12-vog)). Overberg region, Mediterranean Forests, Woodlands and Scrub biome. Riviersonderend corridor.
- [[at12-overberg|Overberg BioRegion]] ([biohubs.bioconomy.earth/afrotropic/at12-overberg](https://biohubs.bioconomy.earth/afrotropic/at12-overberg)). The regional coordinating entity for the Overberg BioRegion, currently holding the Valley of Grace BioHub with anticipated additions at Volmoed and Witsand.

## Adding a BioHub

Every BioHub is registered in the BioHubs directory at `https://biohubs.bioconomy.earth/{realm}/{code}/`, where the code follows RESOLVE ecoregion codes (`{realm-code}{biome}-{shortname}`, for example `at12-vog`). A coordinator whose BioHub is registered there, with a coordination surface in the layout convention, opens a pull request to `github.com/mbh66/wiki` that adds a `wiki-network/{code}.md` file. The file follows the pattern of the entries currently listed and draws its content from the BioHub's coordination surface in the directory at the time of listing. The editorial team merges after checking that the directory entry follows the layout.

The [[concepts/bioregional-addressing|bioregional addressing convention]] sets out the naming the file name mirrors. Country codes do not enter the address, and they do not enter the file name.

## Related pages

- [[engage|Wiki Home]]
- [[concepts/coordination-surface|Coordination Surface]]
- [[essays/how-to-build-a-biohub-wiki|How to Build a BioHub Wiki]]
- [[essays/how-the-bioconomy-coordinates|How the BioConomy Coordinates]]
- [[concepts/bioregional-addressing|Bioregional Addressing]]
- [[wiki-related/index|Related Wikis]]

## Provenance

Folder created 4 September 2026 as the registry for peer BioHub wikis that publish the coordination-surface layout convention. Distinct from `related-wikis/`, which holds external knowledge commons whose material the BioConomy corpus draws on. Bootstrapped with the Valley of Grace BioHub and the Overberg BioRegion, the first two published entries.

Revised 28 September 2026. All BioHubs are now registered in the BioHubs directory at `biohubs.bioconomy.earth`. Entries, the coordination-surface path and the listing procedure now point there in place of the earlier per-BioHub subdomains. The folder is placed last in the wiki's alphabetical folder order so it sits at the bottom of the sidebar as the outward-facing edge of the network.
