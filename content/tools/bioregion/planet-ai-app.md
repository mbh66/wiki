---
title: "Planet AI App"
description: "Planet Labs' agentic AI app at ai.planet.com (Ask Planet): plain-language questions about any place answered from ten years of satellite imagery, with the terms on data, report ownership and sharing a practitioner should read first."
aliases: ["Ask Planet", "Planet AI", "ai.planet.com"]
tags: ["tool", "bioregion", "earth-observation", "satellite-imagery", "ai"]
url: "https://ai.planet.com/"
maintained_by: "Planet Labs PBC"
platform: "Web application"
pricing: "Free at general availability (November 2026); premium features announced for Planet Insights account holders"
created: 2026-11-07
updated: 2026-11-07
source_project: "BioConomy"
source_documents: ["planet-labs-ownership-and-mission-deep-research.md"]
epistemic_status: "documented-fact"
---

The Planet AI app is a web application from Planet Labs PBC that answers plain-language questions about a place from Planet's satellite imagery archive. Practitioners call it Ask Planet. A user names an area and asks a question; the app searches about ten years of Planet imagery, runs change detection, adds public web material and can write a longer "Deep Research Report" on the area [IC]. It became generally available on 5 November 2026 after an open beta earlier that year, and access was free at launch [IC].

> [!note] Right of reply
> This page describes Planet Labs PBC and the Planet AI app only through Planet's published terms, privacy policy and announcements as read on 7 November 2026. Planet has not yet been invited to comment. Corrections and responses will be recorded here. On this site, [MS] marks a claim that rests on the account of the party the claim is about or on the wiki's own project documents.

> [!warning] Conflict of interest
> This entry was drafted by Claude, made by Anthropic. Anthropic is one of the two model providers that power the app.

## What it is

The app sits on top of Planet's satellite fleet: SuperDove satellites that image most land daily at medium resolution, SkySat and Pelican satellites for high-resolution images, and Tanager for methane detection [MS]. Large language models from Anthropic and Google interpret the user's question and write the answers [IC]. Planet's general terms of service do not govern the app. It has its own Planet AI Terms of Use, effective 5 November 2026, which incorporate Planet's privacy policy of the same date [IC].

The company behind the app is a founder-controlled [[public-benefit-corporation|public benefit corporation]] whose growth since 2024 has come mainly from defense and intelligence customers. [[research/planet-labs-ownership-and-mission|Planet Labs: Ownership, Mission and the Terms of Ask Planet]] sets out that record.

## Terms that matter for place-based work

- Inputs. The app collects "the prompts, questions, areas of interest, geometries and files you submit" and sends them to its model providers, "currently Anthropic, PBC and Google LLC," who may keep them "for a limited period to detect and prevent abuse" [IC].
- Training. Planet does not use inputs or outputs to train or fine-tune its models. When a user gives feedback on an interaction, Planet may use it "to evaluate and improve Planet AI, including its models" [IC].
- Deletion. Conversations are kept until the user deletes them; deleted items leave active systems within 30 days and backups within 90 days [IC].
- Ownership. Planet "retains all right, title, and interest" in the outputs, and users assign to Planet any rights they acquire in an output. Users keep their rights in their own inputs [IC].
- Sharing. Every user falls in one of six categories: Personal, Education and Research, NGO or Non-Profit, Media, Government or Enterprise. A self-employed professional falls in Enterprise. In every category, Deep Research Reports may not be distributed outside the user's organization; Government and Enterprise users may not publish any output at all [IC].
- Personal information. The app "is not intended for processing Personal Information in Inputs," and its rules forbid using it to "identify, locate, track, or surveil specific individuals" [IC].
- Government access. Planet "may be compelled by governmental licensing authorities to provide access to Planet AI to regulators or others," and may disclose information in response to court orders or subpoenas. The terms describe no notice to the affected user [IC].
- Accuracy. Outputs "may be incorrect, incomplete, outdated," and users "should not rely on Outputs without independently checking their accuracy" [IC].

## Use at BioRegion scale

A [[biohub|BioHub]] team can use the app to look at change across a catchment or landscape before commissioning fieldwork: where vegetation, water bodies or built area have shifted over the archive's ten years, and which parts of the [[bioregion|BioRegion]] deserve a closer look. The answers inform the team's own work. Under the terms, the Deep Research Report itself stays inside the organization that produced it, so a finding meant for residents, funders or a public register has to be written up by the team from its own reading of the evidence, with attribution as the terms require.

## Use at BioPlace scale

A steward can ask the app about the history of a single parcel or farm, such as clearing, regrowth or water on the land, without GIS software. The same terms apply: the report belongs to Planet, and the steward may not pass it on.

## Notes and caveats

The app does not meet one test in the [[tools/bioregion/index|BioRegion Tools]] criteria for inclusion: its terms leave little room for community-led programs that need to share what they learn about their place. Knowledge produced about a place through the app becomes Planet's property, which sits uneasily with treating that knowledge as part of a place's [[commons|commons]]. Practitioners who use it can leave personal details about residents out of every question and delete conversations once they have what they need. A conversation that receives no feedback stays out of model improvement.

Reports made during the beta were governed by separate trial terms that have not been read for this entry. Pricing after the free launch period has not been announced.

## Related pages

- [[research/planet-labs-ownership-and-mission|Planet Labs: Ownership, Mission and the Terms of Ask Planet]]
- [[tools/bioregion/index|BioRegion Tools]]
- [[tools/bioplace/index|BioPlace Tools]]
- [[concepts/carbon-silicon-partnership|Carbon-Silicon Partnership]]
- [[data-sovereignty|Data Sovereignty]]
- [[tools/index|Tools]]

## References

- Planet Labs PBC (2026, 5 November). Planet AI Terms of Use. https://ai.planet.com/terms-of-use/
- Planet Labs PBC (2026, 5 November). Privacy Policy. https://www.planet.com/privacy/
- Planet Labs PBC (2026). Introducing the Planet AI app. Planet Pulse. https://www.planet.com/pulse/introducing-the-planet-ai-app-search-explore-act/
- Planet Labs PBC (2026). Planet AI app. https://ai.planet.com/
- FourWeekMBA (2026). Planet makes its AI satellite app free on 10 years of data. https://fourweekmba.com/ai-planet-makes-its-ai-satellite-app-free-on-10-years-of-data/

## Provenance

Entry created 7 November 2026 as a companion to [[research/planet-labs-ownership-and-mission|Planet Labs: Ownership, Mission and the Terms of Ask Planet]], drawing on the same deep research run under `planet-labs-ownership-and-mission-deep-research.md`. The terms and privacy policy were read on 7 November 2026 through a fetch tool that summarizes long pages; quotations should be checked against the live documents. Filed under BioRegion Tools, with a listing under BioPlace Tools, because the app's main use is looking at change across a catchment or landscape. The conflict of interest is handled as described on the research page.
