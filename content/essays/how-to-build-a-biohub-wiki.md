---
title: "How to Build a BioHub Wiki"
description: "How a BioHub publishes its local knowledge in the BioHubs directory: the layout, the conventions that make BioHub wikis interoperable, and the reading pattern an AI agent follows."
aliases: ["biohub wiki", "building a biohub wiki", "biohub wiki layout"]
tags: ["essay", "orientation", "biohub", "coordination", "wiki"]
created: 2026-08-30
updated: 2026-09-30
source_project: "BioConomy"
source_documents: []
epistemic_status: "documented-framework"
---

A [[biohub|BioHub]] wiki is the set of pages a BioHub publishes at its own address in the [BioHubs directory](https://biohubs.bioconomy.earth), holding the BioHub's local knowledge in a semi-structured form. Other BioHubs can read it, both through human coordinators and through AI agents scanning for ways to combine efforts. This essay describes the layout, the conventions that make it interoperable across a [[bioregion|BioRegion]], and the reading pattern an AI agent follows when it arrives at a peer BioHub's wiki looking for collaboration.

## Overview

The [[frameworks/evolution-of-coordination-nodes|Evolution of Coordination Nodes]] traces the physical structures each coordination form produces as it matures: sacred site, cathedral, skyscraper, bioregional hub. The BioHub is the coordination node of the [[e-form-emergent|Emergent form]]. Its wiki is the knowledge layer of that node.

A single BioHub holds local knowledge no other BioHub holds: which sub-catchments are being restored, which monitoring methodology is producing usable data, which government frameworks the cohort has chosen to work within, which financial instruments the BioHub is aligning to, which services are contractable now and which are still in build-out. That knowledge is the raw material of inter-BioHub coordination. Without a structured way to publish it, peer BioHubs have to discover it through personal relationships and slow correspondence. With a structured wiki, an AI agent can read a peer BioHub's published knowledge in minutes and surface the specific complementarities a human coordinator would take weeks to identify.

This is [[glossary/m-s/mycelial-coordination|mycelial coordination]] made operational. The biological analogy holds: in a mature forest, the mycelial layer connects trees across species boundaries, distributing nutrients and information according to local need, without a central regulator. BioHub wikis connected across a BioRegion do the same thing for coordination knowledge. Each node publishes what it holds. The network reads what each node publishes. Complementary capabilities surface through the reading.

## What the wiki publishes

The wiki publishes the outputs of the [[templates/index|five-template founding suite]], organized for both human navigation and machine parsing. It assumes the founding suite has been completed and the nine establishment outputs exist. The content falls into nine areas.

**Identity.** The three outputs of the [[templates/biohub-identity-template|BioHub Identity Template]]: the [[identity-statement|Identity Statement]], the Field and Lineage Positioning, and the [[founding-compact|Founding Compact]]. These tell a peer BioHub who you are, what intellectual lineage you draw on, how your cohort is governed, and what patronage architecture funds the work.

**BioRegion.** The three outputs of the [[templates/bioregion-establishment-template|BioRegion Establishment Template]]: the BioRegion Definition, the BioRegion Atlas (broken into biodiversity, climate, cultural heritage, economic, geology and soils, hydrology, invasive species, jurisdictional, and restoration baseline profiles), and the BioRegion Charter. These tell a peer BioHub where you work, what the living system contains, and what governance principles your coordination operates under. They sit in the BioRegion's own folder in the directory, which the BioHubs in that BioRegion share.

**Services.** The six-service [[tenderable-services-portfolio|Tenderable Services Portfolio]] from the [[templates/value-proposition-template|BioConomy Value Proposition Template]], with the Value Proposition Statement and the [[tender-compact|Tender Compact]]. Each service page carries its [[readiness-diagnostic|readiness status]], its [[retention-economics|retention]] logic, its monitoring and verification methodology, and its [[gap-register|gap register]] entries. These are the pages a peer BioHub's AI agent reads most closely, because they are where complementary capabilities surface.

**Mandate.** The three outputs of the [[templates/place-mandate-template|Place Mandate Template]]: the [[place-mandate|Place Mandate]], the [[twenty-year-value-ledger|Twenty-Year Value Ledger]], and the [[terms-of-engagement|Terms of Engagement]]. These tell a peer BioHub, a public body or a buyer what the place has set itself to do over twenty years and the terms on which it engages. Costings or other parts of the Ledger the cohort does not want public stay in the BioHub's private folder.

**Alignments.** One subfolder per financial instrument the BioHub has run the [[templates/bankable-service-alignment-template|Bankable Service Alignment Template]] against. Each subfolder holds the [[alignment-statement|Alignment Statement]], the Alignment Evidence Pack, and the [[alignment-compact|Alignment Compact]]. Where two BioHubs target subsequent tranches of the same instrument series, their alignment pages are where joint coordination begins.

**Policy frameworks.** A dedicated index of every government framework the BioHubs in a BioRegion have chosen to embrace, kept in the BioRegion's `policy/` folder and organized by jurisdiction level (international, national, provincial, municipal) and by domain (water, biodiversity, land use, climate, cultural heritage, cooperative governance, finance). Each entry states the framework's name, its adoption status, and links to the section of the Atlas, Charter, or Alignment Evidence Pack where the framework is treated in operational depth. Where a framework is substantial enough to warrant its own page (a national water act, a biodiversity offset regulation, a municipal spatial development framework), it gets one. The policy index is a coordination signal: two BioHubs operating under the same national water act have a natural basis for sharing compliance documentation, coordinating engagement with government agencies, and aligning verification methodologies. A BioHub can add a `policy-alignments.md` page that maps the frameworks to its own work, as the Valley of Grace does.

**Data.** Monitoring information: what is measured, where, how often, by what methodology. [[bioscore|BioScore]] sub-scores where the BioHub is enrolled with Guardians of Earth. Baselines from the Atlas. This section carries structured metadata an AI agent can parse to compare monitoring approaches across peer BioHubs.

**Entities.** Reference pages for the institutional parties named across the BioHub's historical record and current coordination context: municipalities, government departments, church bodies, consultancies, community organizations, and other institutions the wiki refers to. Each entity page carries the factual record for the party (formation, mandate, actions taken, current position), so a reader arriving without context can situate every acronym and short name the wiki uses. Active partners with ongoing relationships to the BioHub get their fuller relational entry under Partners. A peer BioHub's AI agent uses the entities pages to disambiguate references it encounters in the historical record and to trace institutional continuity across time.

The line between Entities and Partners tracks physical domicile. An entity is any actor domiciled inside the BioRegion the BioHub anchors: the local and district municipalities, the community committees and residents' associations, the churches and their landholdings, the schools and museums, the businesses and cooperatives whose registered address sits within the BioRegion's territory. A partner is any actor whose domicile lies outside the BioRegion: a national government department headquartered in the capital, a consultancy working on a contract, a philanthropic funder, a verification agent, a peer BioHub in another bioregion. A party's page goes in the folder its domicile places it in, regardless of how frequently that party engages with the BioHub. Where a partner opens a local office within the BioRegion, an entity page opens for that office as well, with the two cross-linked and domicile treated as the primary organizing fact.

**Coordination surface.** The page that makes the mycelial pattern operational. It lists what the BioHub offers peer BioHubs (methodology, data, legal templates, cohort secondment, joint tenders), what it seeks from peer BioHubs (verification partnerships, entity-structure precedents, measurement capacity), and which financial instruments it is targeting where joint alignment would be valuable. The coordination surface is the first page a peer BioHub's AI agent reads after `llms.txt`.

## The folder structure

Every BioHub wiki is a folder in the BioHubs directory at `content/{realm}/{code}-{name}/`, and every BioRegion has a folder of its own beside the BioHubs it coordinates. The folders inside are the same for every BioHub and for every BioRegion, so an AI agent navigating a peer BioHub's pages can find the coordination surface, services, and policy pages at the same paths every time.

A BioHub's folder:

```
{realm}/{code}-{name}/          e.g. afrotropic/at12-vog/
├── index.md                    Home page
├── llms.txt                    AI entry point
├── coordination-surface.md     Offers, seeks, shared instruments
├── policy-alignments.md        Frameworks mapped to the BioHub's work (optional)
├── identity/                   Identity Statement, Field Positioning, Founding Compact
├── services/                   Six service pages + Value Proposition + Tender Compact
├── mandate/                    Place Mandate, Value Ledger, Terms of Engagement
├── alignments/                 One subfolder per instrument
├── cohort/                     Founding cohort and current participants
├── partners/                   Implementation partners, verification agents, peer BioHubs
├── entities/                   Institutional parties named across the record
├── research/                   Research pages
├── data/                       Monitoring, BioScore, baselines
├── journal/                    Chronological coordination milestones
└── sources/                    Local source pages
```

A BioRegion's folder:

```
{realm}/{code}-{name}/          e.g. afrotropic/at12-overberg/
├── index.md                    BioRegion home
├── llms.txt                    AI entry point
├── definition.md               BioRegion Definition
├── charter.md                  BioRegion Charter
├── coordination-surface.md     Regional offers, seeks, shared instruments
├── atlas/                      Nine profile pages
├── biohubs/                    The BioHubs the BioRegion coordinates
├── policy/                     Government frameworks index + individual pages
├── data/                       Regional baselines and monitoring
├── journal/                    Regional coordination milestones
└── sources/                    Shared bibliography
```

Pages with no content yet carry `status: placeholder` in their frontmatter.

The wiki links back to `wiki.bioconomy.earth` for shared vocabulary rather than duplicating it. Glossary terms, frameworks, concepts, and source pages that exist on the BioConomy wiki are linked there with full URLs. The BioHub wiki maintains local source pages only for works cited in its own documents that do not appear on the BioConomy wiki.

## The dual-layer convention

Every page is written for a human coordinator arriving without context. Every page also carries structured YAML frontmatter that an AI agent can extract without parsing prose.

Service pages carry frontmatter naming the service category, readiness status, counterparties, retention model, monitoring status, verification agent, applicable policy frameworks, gap count, and whether peer coordination is open. The coordination surface carries structured lists of offers, seeks, shared instruments, and contact protocols. The home page carries the BioHub's name, BioRegion, anchor location, founding date, link to the BioConomy wiki, and a list of known peer BioHubs with their addresses in the directory.

The structured layer uses a controlled vocabulary consistent across the directory. Service categories use the same six slugs everywhere: `water-yield`, `carbon-sequestration`, `biodiversity-data`, `heritage-and-tourism`, `food-systems`, `coordination-as-employment`. Readiness status uses the same three categories: `contractable-now`, `contractable-after-build-out`, `speculative-pending-research`. Page types use the directory's shared set, which includes `biohub-home`, `coordination-surface`, `biohub-service`, `alignment`, `cohort-index`, `partner`, `entity`, `biohub-data-index`, `policy-framework-index` and `journal-entry`. An AI agent filtering on type and service slug can match complementary capabilities across BioHubs without parsing a sentence.

## How an AI agent reads a peer BioHub's wiki

The reading sequence for an AI agent from BioHub A scanning BioHub B's wiki:

Fetch `llms.txt`. It carries a coordination-surface summary in the first 500 tokens: the BioHub's priority services and current seeks. The agent determines whether the profiles overlap before fetching anything else.

If overlap exists, fetch `coordination-surface.md`. Parse the structured YAML for offers, seeks, and shared instruments. Match against BioHub A's own coordination surface.

For each matching service, fetch the relevant service page. Check readiness status, verification methodology, and policy frameworks. Identify complementarities: one BioHub has the methodology, the other has the monitoring sites; one has the legal template, the other has the field experience.

Check the policy index for shared or adjacent government frameworks. Two BioHubs operating under the same national water act surface as natural coordination partners.

Check the alignments index for shared instrument targets. Two BioHubs targeting subsequent tranches of the same bond series should coordinate their alignment runs per the conventions in [[templates/using-templates-across-biohubs|Using Templates Across BioHubs]].

Check the data pages for comparable monitoring approaches. Where monitoring methodologies differ, flag the difference for human coordinators.

Produce a coordination brief: what BioHub B offers that BioHub A needs, what BioHub A offers that BioHub B needs, shared instruments, shared policy frameworks, and recommended next steps. Deliver the brief to BioHub A's coordinator.

This sequence is not prescribed in code. It is the reading pattern the wiki layout is designed to support. The structured metadata makes it tractable for any sufficiently capable AI agent given a link to a peer BioHub's wiki.

## The `llms.txt` file

Each BioHub wiki carries an `llms.txt` at the root of its folder, following the convention the BioConomy wiki already uses. The directory's own `llms.txt` lists every registered BioRegion and BioHub. It opens with a one-sentence identity statement, then lists the site's sections with one-line descriptions. The coordination surface section sits at the top of the site map so an AI agent can determine in the first read whether collaboration is worth exploring.

The `llms.txt` file names the BioHub's priority services and current seeks in plain text. It links to the coordination surface, the service pages, the policy index, and the alignment pages. It links to `wiki.bioconomy.earth` for the shared vocabulary and frameworks.

## The policy index

Government frameworks the BioHubs in a BioRegion have chosen to embrace get a dedicated index in the BioRegion's `policy/` folder, organized by jurisdiction and domain. Each entry carries the framework name, jurisdiction, adoption status (`adopted`, `partially-adopted`, `under-review`, `monitoring`), a one-sentence summary, and a link to the Atlas, Charter, or Alignment section where the framework is treated in depth.

A dedicated policy page is warranted where the framework is load-bearing for the BioHub's operations, where the relationship involves specific compliance requirements or reporting obligations, or where the framework is not well-known outside its jurisdiction and a peer BioHub's AI agent would need more than a sentence to understand it.

The policy index serves as a coordination signal. When a peer BioHub's AI agent reads the policy index, it identifies shared regulatory environments. Two BioHubs operating under the same national water act, the same biodiversity offset regulations, or the same municipal spatial development framework have a natural basis for sharing compliance documentation, joint engagement with government agencies, coordinated tender submissions, shared verification methodologies, and policy advocacy.

## Relationship to the BioConomy wiki

The BioHub wiki and the BioConomy wiki serve different purposes. The BioConomy wiki at `wiki.bioconomy.earth` documents the architecture: the concepts, frameworks, templates, glossary, sources, and people that constitute the shared intellectual foundation. The BioHub wiki documents one instance of that architecture: this BioHub's identity, BioRegion, services, alignments, policies, data, and coordination surface.

A BioHub wiki never redefines a term the BioConomy wiki has defined. Where local usage extends a term, the BioHub wiki page states the local specifics and links to the BioConomy wiki for the general definition.

The BioConomy wiki holds the templates. The BioHub wiki publishes their outputs.

## Getting started

A coordinator whose founding suite is complete publishes the BioHub's pages in the [BioHubs directory](https://biohubs.bioconomy.earth), where every BioHub and BioRegion in the network is registered. The directory is a single Quartz site built from the repository at `github.com/mbh66/biohubs`. A BioHub joins it by adding its own folder through a pull request, so the coordinator needs no hosting or domain of their own. The instructions below assume no prior experience with GitHub, the terminal, or static site generators.

### Naming your BioHub

Every BioHub has an address in the directory of this form:

```
https://biohubs.bioconomy.earth/{realm}/{code}-{name}
```

The components:

- **Realm**: the biogeographic realm that contains the BioHub, written out in full as a folder name (`afrotropic`, `neotropic` and so on).
- **Code**: the two-letter realm prefix followed by the two-digit RESOLVE biome number, with no separator. For the Mediterranean Forests, Woodlands and Scrub biome in the Afrotropic realm, the code is `at12`.
- **Name**: a short, recognizable name for the BioHub, typically three to five characters. The BioHub in the Riviersonderend catchment uses `vog` (Valley of Grace).

Examples: the Valley of Grace BioHub is registered at `biohubs.bioconomy.earth/afrotropic/at12-vog`, and the Overberg BioRegion that coordinates it at `biohubs.bioconomy.earth/afrotropic/at12-overberg`. A BioHub in the rainforest of the Xingu basin would sit at `neotropic/nt01-xingu`.

Every address carries a name, including the first BioHub registered in a realm and biome. Many BioHubs will share a code, and the name is what tells them apart.

The absence of a country field is deliberate. Country codes belong to the addressing layer of the [[economy|Economy]] and inherit its assumptions about who counts as a coordinating actor. The BioConomy anchors its addressing to the biosphere. The choice is treated at concept-level depth in [[concepts/bioregional-addressing|Bioregional Addressing]].

#### Finding your code

The code has two parts: a realm prefix and a biome number. To find yours:

1. **Identify your realm.** Eight biogeographic realms cover the planet. Find the one that contains your BioHub's location:

| Prefix | Folder | Realm | Approximate coverage |
|---|---|---|---|
| `at` | `afrotropic` | Afrotropic | Sub-Saharan Africa, Madagascar |
| `au` | `australasia` | Australasia | Australia, New Guinea, New Zealand, eastern Indonesia |
| `im` | `indomalayan` | Indomalayan | South and Southeast Asia, southern China |
| `na` | `nearctic` | Nearctic | North America north of central Mexico |
| `nt` | `neotropic` | Neotropic | Central and South America, Caribbean |
| `oc` | `oceania` | Oceania | Pacific islands, Hawai'i |
| `pa` | `palearctic` | Palearctic | Europe, North Africa, northern and central Asia |
| `an` | `antarctica` | Antarctica | Antarctic continent and subantarctic islands |

2. **Identify your biome.** The RESOLVE Ecoregions 2017 dataset assigns every ecoregion to one of 14 biomes. The biome key on the [[research/resolve-ecoregions|RESOLVE Ecoregions]] page gives each biome's number. Find the ecoregion your BioHub sits in, and its biome follows.

3. **Combine them.** The code is the lowercase realm prefix followed by the biome number written with two digits. The Valley of Grace sits in the Afrotropic realm and in biome 12, so its code is `at12`. A BioHub in the Xingu rainforest sits in the Neotropic realm and in biome 1 (Tropical & Subtropical Moist Broadleaf Forests), so its code is `nt01`. The code matches the first four characters of the RESOLVE ecoregion IDs it covers: the Overberg's ecoregions include `AT1202` (Lowland fynbos and renosterveld).

### What you will need

Three things, all free:

1. A **GitHub account** at [github.com](https://github.com). If you do not have one, create one now.
2. A computer with a **terminal**, used to preview your pages before you submit them. On macOS, open the application called Terminal. On Windows, use PowerShell. On Linux, use any terminal emulator.
3. An **AI assistant** (Claude, ChatGPT, or equivalent). The process involves terminal commands that an AI assistant can walk you through step by step.

### AI-assisted setup

If you are comfortable with Git and Node.js, skip to the command summary below. If not, paste the following prompt into your AI assistant. It will walk you through each step, wait for your confirmation, and troubleshoot any errors.

> I need to add my BioHub to the BioHubs directory, a Quartz v5 site built from the GitHub repository `github.com/mbh66/biohubs`. I have no experience with GitHub, Git, or the terminal. Walk me through the entire process one step at a time. Wait for me to confirm each step before moving to the next. If I encounter an error, help me fix it before proceeding.
>
> My BioHub's realm folder is `MY-REALM` and its folder name is `MY-CODE-MY-NAME` (for example, `afrotropic` and `at12-vog`).
>
> Here is what needs to happen, in order:
>
> **1. Install prerequisites.**
> I need Node.js v22 or higher and Git installed on my computer. Check whether I have them and install them if not. On macOS, use Homebrew. On Windows, use the official installers. Confirm the versions before proceeding.
>
> **2. Fork and clone the directory.**
> Help me fork `github.com/mbh66/biohubs` to my own GitHub account. Then run these commands in sequence:
> ```
> git clone https://github.com/MY-USERNAME/biohubs.git
> cd biohubs
> git checkout -b add-MY-CODE-MY-NAME
> npm ci
> npx quartz plugin install
> ```
>
> **3. Create my BioHub's folder.**
> Create `content/MY-REALM/MY-CODE-MY-NAME/` with this structure: `index.md`, `llms.txt`, `coordination-surface.md`, and the folders `identity/`, `services/`, `mandate/`, `alignments/`, `cohort/`, `partners/`, `entities/`, `research/`, `data/`, `journal/` and `sources/`, each with an `index.md`. Use `content/afrotropic/at12-vog/` as the model for each page's frontmatter keys (`title`, `type`, `description`), but do not copy its content. Every page I have not written yet gets `status: placeholder` in its frontmatter. If my BioRegion is not yet registered in the directory, also create its folder in `content/MY-REALM/` with the BioRegion structure: `index.md`, `llms.txt`, `definition.md`, `charter.md`, `coordination-surface.md`, and the folders `atlas/`, `biohubs/`, `policy/`, `data/`, `journal/` and `sources/`, using `content/afrotropic/at12-overberg/` as the model.
>
> **4. List my BioHub.**
> Add my BioHub to `content/MY-REALM/index.md`. If my BioRegion is already registered in the directory, add it to that BioRegion's `biohubs/` folder as well.
>
> **5. Preview the site locally.**
> Run `npx quartz build --serve` and confirm my BioHub's home page loads at `http://localhost:8080/MY-REALM/MY-CODE-MY-NAME`.
>
> **6. Submit the pull request.**
> Commit my changes, push the branch to my fork, and open a pull request against the `v5` branch of `mbh66/biohubs`. Help me write a short description of the BioHub for the pull request.
>
> Confirm each step with me. If anything fails, diagnose the error and walk me through the fix.

Replace the placeholder values with your realm folder, your BioHub's code and name, and your GitHub username before pasting.

The directory's editorial team reviews the pull request. Once it is merged, the BioHub's pages are live at its address in the directory. No DNS record or custom domain is involved.

### Command summary (for experienced users)

```bash
# Prerequisites: Node.js >= 22, Git
# Fork github.com/mbh66/biohubs to your account, then:
git clone https://github.com/YOUR-USERNAME/biohubs.git
cd biohubs
git checkout -b add-YOUR-CODE-YOUR-NAME
npm ci
npx quartz plugin install

# Create content/{realm}/{code}-{name}/ with the BioHub standard structure
# (status: placeholder on every page not yet written)
# List the BioHub on content/{realm}/index.md

# Preview locally
npx quartz build --serve

# Submit
git add content
git commit -m "Add {code}-{name} BioHub"
git push -u origin add-YOUR-CODE-YOUR-NAME
# Open a pull request against the v5 branch of mbh66/biohubs
```

### Populating the wiki

Write the home page and `llms.txt` from the Identity Statement. Populate the identity folder from the three Identity outputs. Populate the BioRegion folder from the three BioRegion outputs, breaking the Atlas into the nine profile pages. Populate the services folder from the Value Proposition Statement, Evidence Pack, and Tender Compact. Populate the mandate folder from the Place Mandate, the Value Ledger and the Terms of Engagement. Populate the alignments folder from each Alignment run's three outputs.

Build the policy index in the BioRegion's `policy/` folder by extracting every government framework referenced across the outputs and organising them by jurisdiction and domain. Populate the data pages from the monitoring and verification sections of the Atlas and Alignment Evidence Packs. Populate the cohort and partners pages from the Founding Compact and Alignment Compact. Populate the entities folder by extracting every named institutional party from the identity, alignment, policy, and historical pages, and writing a factual reference page for each.

Write the coordination surface from the Readiness Diagnostic, Gap Register, and the coordinator's knowledge of what the BioHub seeks from peers. Begin the journal with the founding milestone.

The wiki grows from there. Each new alignment run adds to the alignments folder. Each policy adoption adds to the policy index. Each monitoring cycle updates the data pages. Each coordination milestone adds to the journal. The coordination surface is revised as offers and seeks change. And each revision is legible to every peer BioHub whose AI agent reads the site.

### Citation format

Quartz does not render markdown formatting inside wikilink display text. A source cited as `[[sources/margulis-symbiotic-planet|Margulis, L. (1998). *Symbiotic Planet*]]` shows up on the built site with the asterisks visible.

Write citations with the author unlinked, the title linked, and any italics on the outside of the brackets. For books and standalone works: `Margulis, L. (1998). *[[sources/margulis-symbiotic-planet|Symbiotic Planet]]*`. For journal articles, link the article title and leave the journal in italics outside the brackets: `Morris, C.E. et al. (2014). "[[sources/morris-2014-bioprecipitation|Bioprecipitation: a feedback cycle...]]." *Global Change Biology*, 20(2), 341-351`.

The link wraps the specific work being cited. Nothing formatted sits inside the brackets.

## Related pages

- [[essays/what-is-a-biohub|What Is a BioHub]]
- [[essays/what-is-a-bioregion|What Is a BioRegion]]
- [[essays/how-to-engage-your-bioregion|How to Engage Your Bioregion]]
- [[essays/from-bioregion-to-bioregion|From a Bioregion to a BioRegion]]
- [[templates/index|The Templates]]
- [[templates/using-templates-across-biohubs|Using Templates Across BioHubs]]
- [[templates/the-nine-outputs|The Nine Outputs]]
- [[frameworks/evolution-of-coordination-nodes|The Evolution of Coordination Nodes]]
- [[concepts/mycelial-coordination|Mycelial Coordination]]
- [[concepts/carbon-silicon-partnership|Carbon-Silicon Partnership]]
- [[concepts/cosmo-local-production|Cosmo-Local Production]]
- [[tenderable-services-portfolio|Tenderable Services Portfolio]]
- [[readiness-diagnostic|Readiness Diagnostic]]
- [[coordination-node|Coordination Node]]
- [[bioscore|BioScore]]

## Sources

- Gladek, E. et al. (2026). *[[sources/gladek-metabolic-biohubs|BioHubs: A Pathway to Regional Resilience]]*
- Ronfeldt, D. (1996). *[[sources/ronfeldt-timn|Tribes, Institutions, Markets, Networks]]* (RAND P-7967)
- Dinerstein, E. et al. (2017). *An Ecoregion-Based Approach to Protecting Half the Terrestrial Realm*. BioScience, 67(6), 534-545. [RESOLVE Ecoregions 2017](https://developers.google.com/earth-engine/datasets/catalog/RESOLVE_ECOREGIONS_2017).
- One Earth (2023). *Bioregions 2023*. [oneearth.org/bioregions-2023](https://www.oneearth.org/bioregions-2023/).

## Provenance

Written 30 August 2026 as the operational companion to the four-template founding suite. The essay describes how a BioHub publishes its local knowledge for inter-BioHub coordination, drawing on the wiki layout specification produced in conversation with the BioConomy editorial team. The interoperability conventions (consistent folder names, controlled frontmatter vocabulary, dual-layer readability, the coordination surface as handshake page) are proposed standards. The first BioHub to publish a wiki using this layout is invited to feed refinements back through the project's GitHub repository at `github.com/mbh66/biohubs`.

### Changes from prior version

Revised 28 September 2026. Rewrote the Getting Started section for the BioHubs directory at `biohubs.bioconomy.earth`, where every BioHub and BioRegion is now registered. The address is now `biohubs.bioconomy.earth/{realm}/{code}-{name}`, replacing the `{bioregion}-{slug}.bioconomy.earth` subdomains. The code now joins the realm prefix to the two-digit RESOLVE biome number, in place of the One Earth bioregion number, and the name is required in every address. The setup prompt and command summary now walk a coordinator through adding a folder to the directory by pull request, replacing the steps for a standalone Quartz site, GitHub Pages and a custom domain. The rest of the essay now describes a BioHub wiki as a BioHub's folder in the directory: the folder structure shows the directory's BioHub and BioRegion layouts, the BioRegion outputs and the policy index sit at BioRegion level, the atlas profiles and page types match the directory's, and `llms.txt` lives at the root of each folder.

Revised 6 September 2026. Added a Citation Format subsection under Getting Started. Rationale: Quartz does not render markdown formatting inside wikilink display text, so citations written as `[[sources/slug|Author (Year). *Title*]]` render on the built site with the asterisks visible. The subsection specifies the corrected shape for both books and journal articles, with the author unlinked, the title linked, and any italics on the outside of the brackets.

Revised 3 September 2026. The Getting Started section now includes a subdomain naming convention using ISO country codes, One Earth Bioregions Framework codes (built on the RESOLVE Ecoregions 2017 dataset), and a BioHub slug. Added a complete AI-assisted setup prompt that non-technical coordinators can paste into any AI assistant to be walked through Quartz installation, GitHub repository creation, GitHub Actions deployment, and custom domain configuration. Added a command summary for experienced users. Sources updated to include the RESOLVE Ecoregions dataset and One Earth Bioregions Framework.

Revised 5 September 2026. Added an Entities folder to the wiki layout, described in the What the Wiki Publishes and Populating the Wiki sections and shown in the folder structure. Added `entity` to the shared page-type vocabulary. Rationale: BioHubs operate inside institutional environments where municipalities, government departments, church bodies, consultancies, and community organizations are named repeatedly across the historical record and the current coordination context. A factual reference page for each such party lets a human coordinator and a peer BioHub's AI agent disambiguate acronyms and trace institutional continuity without having to reconstruct context from prose. Added a second Entities paragraph specifying the line between Entities and Partners as physical domicile inside the BioRegion, with the entities folder holding pages for parties domiciled inside and the partners folder holding pages for parties domiciled elsewhere.

Revised 4 September 2026. Removed ISO country codes from the subdomain naming convention. The scheme is now `{bioregion}-{slug}.bioconomy.earth`. Rationale: country codes belong to the addressing layer of the Economy. The BioConomy anchors its addressing to the biosphere. Added a paragraph explaining the choice and linking to the new [[concepts/bioregional-addressing|Bioregional Addressing]] concept page. Updated examples throughout to the country-free form (`at12-vog`, `at10-laikipia`, `nt1-xingu`). The Cape Shrublands bioregion example was updated to `at12` to match the codes in use across the current wiki network.

Updated 30 September 2026 for the five-template founding suite: a Mandate area and a `mandate/` folder added to the layout.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": "https://wiki.bioconomy.earth/essays/how-to-build-a-biohub-wiki/",
  "headline": "How to Build a BioHub Wiki",
  "author": {
    "@type": "Person",
    "name": "Michael Haupt"
  },
  "inLanguage": "en",
  "isPartOf": {
    "@id": "https://wiki.bioconomy.earth/#website"
  },
  "datePublished": "2026-08-30",
  "dateModified": "2026-09-05",
  "keywords": [
    "essay",
    "orientation",
    "biohub",
    "coordination",
    "wiki"
  ]
}
</script>
