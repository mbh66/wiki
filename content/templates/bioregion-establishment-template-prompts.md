---
title: "BioRegion Establishment Template: Prompts"
description: "The full text of the BioRegion Establishment Template: the inputs to gather, the three prompts to paste into a deep-research AI platform, the cohort work between them and the handoff to the next template."
aliases: ["bioregion establishment template prompts"]
tags: ["template", "founding-suite", "prompts"]
created: 2026-09-30
updated: 2026-09-30
source_project: "VoG as Patron Project Prototype"
source_documents: ["BioRegion_Establishment_Template.md"]
epistemic_status: "documented-framework"
---

The runnable text of the [[templates/bioregion-establishment-template|BioRegion Establishment Template]], version 0.3. A BioHub cohort uses it to produce the BioRegion Definition, the BioRegion Atlas and the BioRegion Charter for the [[bioregion|BioRegion]] within which its [[biohub|BioHub]] operates. Read the template page first for what the template is for and where it sits in the five-template [[templates/index|founding suite]], and [[templates/running-a-template|Running a Template]] for the conventions every template shares.

Copy each prompt's context and task into a deep-research AI platform with the listed documents attached. Replace the words in square brackets with your own. Do not run a prompt until the cohort work before it is done.

## When to Run This Template

Run this template after both the BioHub Identity Template and the TIME Diagnostic have been completed, and before the BioConomy Value Proposition Template. The BioHub should have:

- The three Identity Template outputs (Identity Statement, Field and Lineage Positioning, Founding Compact) produced and accepted by the cohort.
- TIME Diagnostic output identifying the coordination forms active in the coordinator's local environment.
- A settled anchor location (specified in the Identity Statement).
- The cohort structure and decision-making forms in place (specified in the Founding Compact).

Do not run this template as a first exercise for a coordinator with no prior grounding in the anchor location. Prompt 1 requires the coordinator to supply enough local context to give the AI a real starting point, on top of what is inherited from the Identity documents.

## Prerequisite Documents to Attach

Attach to every submission:

1. **Three outputs from the BioHub Identity Template:**
   - Identity Statement.
   - Field and Lineage Positioning.
   - Founding Compact.
2. Your BioStack and BioConomy foundational document (definitions and dependency direction).
3. Your framework of coordination forms (TIME, or the framework you work within).
4. The TIME Diagnostic output for your BioHub.
5. Any preliminary documents establishing the anchor location's ecological or cultural context (heritage surveys, catchment reports, community histories, prior consulting reports) that were not already incorporated into the Identity documents.
6. Bioregional science reference documents (Water Retention Landscape methodology, biome delineation frameworks, catchment characterization tools).

The Metabolic BioHubs Best Practices Research Brief (or its equivalent global field baseline) is inherited through the Field and Lineage Positioning document and does not need to be attached separately.

## User-Supplied Inputs to Gather

Most inputs for this template are inherited from the Identity documents. The coordinator should compile only the additions and refinements below:

**Inherited from the Identity Statement:**
- Anchor location.
- Coordinator and cohort profile.
- Purpose statement.
- Working BioRegion candidate (where one has already been identified).

**Inherited from the Field and Lineage Positioning:**
- Known adjacent BioHubs (extended and refined during Prompt 2).
- Intellectual lineage informing bioregional practice.
- Field baseline (Metabolic mapping and adjacent field research).

**Inherited from the Founding Compact:**
- Cohort structure and decision-making forms (used for cohort review steps).
- Multi-BioHub coordination protocols (working protocols to be refined once BioRegion evidence is in hand).
- Custodial and consent principles (applied when engaging cultural and indigenous knowledge in boundary work).

**New user-supplied inputs to compile:**

- **Preliminary ecological orientation.** The biome you understand yourselves to be in (fynbos, savanna, temperate forest, boreal, and so on), the major watershed the anchor location sits within, and any known catchment position (headwaters, mid-catchment, below-dam, estuarine).
- **Cultural anchors beyond those in the Identity Statement.** Any historical settlements, mission stations, indigenous nations or first-nation territories, heritage institutions, or documented custodial arrangements relevant to the BioRegion but not yet noted in Identity work. Include founding dates and current governance status where known.
- **Institutional footprints the cohort engages with.** Municipalities, wards, districts, protected areas, conservation authorities, government departments (national, provincial, district), universities, NGOs, cooperatives, forums.
- **Practical reach constraints.** How far the cohort can practically travel, mandate constraints, funding constraints, existing partnerships that anchor the scope.

## The Three Output Documents

The template's final deliverables are three separate documents produced in Prompt 3, each with a distinct purpose and audience.

1. **BioRegion Definition.** A short, formal, foundational reference document. States the BioRegion's boundaries, the reasoning behind them, the coordination bodies recognized within, and the constraints acknowledged. This is what the BioHub points to when a counterparty, funder, or peer BioHub asks "what is your BioRegion?" Length: five to ten pages.

2. **BioRegion Atlas.** A long, structured referential document. Compiles the ecological, hydrological, jurisdictional, cultural, institutional, infrastructural, and climate profiles of the BioRegion. Structured for section-by-section reference use. This is the BioHub's operational knowledge base for planning specific coordination work. Length: thirty to sixty pages.

3. **BioRegion Charter.** A governance and commitment document. Establishes the BioRegion as a coordination object worthy of commitment, articulates the principles under which coordination happens within it, recognizes prior custodial and coordination bodies, and can be co-signed by participating bodies. This is what the BioHub uses to convene formal coordination relationships. Length: five to ten pages.

## Sequencing

- **Prompt 1** produces two to four candidate boundaries with rationale for each. The cohort reviews these and selects one candidate (or narrows to two if the trade-offs need further evidence) before proceeding.
- **Between Prompts 1 and 2:** the coordinator convenes the cohort to make the boundary selection. This is cohort work under the decision-making forms established in the Founding Compact. It cannot be delegated to the AI.
- **Prompt 2** does deep evidence gathering on the selected candidate across eleven profile sections. It also surfaces the specific ecological-cultural boundary tensions and multi-BioHub scope questions for the cohort to resolve.
- **Between Prompts 2 and 3:** the coordinator convenes the cohort to resolve the surfaced tensions (which reconciliation to adopt, which multi-BioHub protocol to propose, which contested elements to defer). This is also cohort work.
- **Prompt 3** produces the three final documents (Definition, Atlas, Charter), incorporating the cohort's resolutions.

Run the prompts in sequence, on the same platform where possible.

## Cross-Platform Notes

The prompts are written for portability across ChatGPT Deep Research, Claude Research, Perplexity Deep Research, and Gemini Deep Research.

Prompt 3 produces three separate documents with a combined length that may exceed some platforms' output limits. Where a platform cannot produce all three in a single response, split Prompt 3 into three separate submissions (3a Definition, 3b Atlas, 3c Charter), each carrying the Prompt 2 evidence pack as an attached input.

The Atlas is the largest output. Where a platform imposes tight output limits, produce the Atlas in structured sections (one section per submission) and assemble them separately.

## Prompt 1: Scoping Proposal with Candidate Boundaries

### Context (paste at top of submission)

I am a coordinator with [BioHub name, as established in the Identity Statement]. I am running the BioRegion Establishment Template to define the BioRegion within which our BioHub will operate. This is the first of three prompts. Its purpose is to produce candidate boundaries for the cohort to consider before deeper evidence work begins.

I work within the BioConomy framework, in which a BioHub is the innermost layer of the BioStack (BioHub → BioRegion → BioConomy). The BioRegion is defined as a geographical area with a common ecosystem, typically characterized by a watershed system, at a scale where actors are bound by shared geography, climate, water, soil, species, communities, and cultural history.

The BioHub Identity Template has been completed. I am attaching the three Identity documents (Identity Statement, Field and Lineage Positioning, Founding Compact) which supply the anchor location, cohort structure, purpose statement, field positioning, and multi-BioHub protocol foundations.

I am attaching the following foundational documents:

[List attached documents, including the three Identity documents]

I am providing the following additional context (not already in the Identity documents):

- Preliminary ecological orientation: [insert biome, major watershed, catchment position]
- Cultural anchors beyond those in the Identity Statement: [insert]
- Institutional footprints the cohort engages with: [insert municipalities, protected areas, conservation authorities, government departments, universities, NGOs, cooperatives, forums]
- Practical reach constraints: [insert travel reach, mandate, funding, existing partnerships]
- TIME Diagnostic output: [attach or summarize]

### Task

Produce two to four candidate BioRegion boundaries for the cohort's consideration. For each candidate, articulate:

1. **The candidate boundary.** Named and described with enough specificity that the cohort can identify it on a map. Include the primary defining feature (watershed, biome, cultural territory, hybrid) and rough scale (settlement cluster, catchment, multi-catchment, bio-geographic province).

2. **The ecological basis.** What ecological feature or system the boundary tracks (specific watershed, biome, catchment, ecosystem type). Cite ecological science where available.

3. **The cultural and historical basis.** What cultural, historical, or custodial territory the boundary tracks (indigenous nation, mission territory, historical settlement pattern, contemporary community territory). Draw on the Identity Statement's cultural context where relevant. Cite historical and anthropological sources where available.

4. **The jurisdictional overlay.** Which municipalities, protected areas, provincial or national jurisdictions the boundary crosses. Note any regulatory constraints this creates.

5. **The coordination bodies already active.** Named NGOs, cooperatives, forums, conservation authorities, government departments, custodial bodies operating within the candidate. Cross-reference the known adjacent BioHubs documented in the Field and Lineage Positioning and extend where new evidence emerges.

6. **The size classification.** Sub-catchment or settlement cluster; catchment or district; multi-catchment or regional; bio-geographic province.

7. **The trade-offs.** What this candidate offers as a coordination scope, and what it makes harder. Identify where ecological and cultural boundaries diverge within the candidate and where the tension points sit.

Vary the candidates so the cohort sees genuine alternatives. At minimum, include one ecologically-primary candidate and one culturally-primary candidate. Where relevant, include a hybrid candidate and a candidate at a different scale (smaller or larger than the others).

Where the Identity Statement records a working BioRegion candidate, include it as one of the candidates and evaluate whether the evidence supports it, extends it, or challenges it.

After presenting the candidates, produce a preliminary recommendation with reasoning. The recommendation is provisional. The cohort retains the choice.

### Output specification

Produce:

1. **Candidate profiles.** One section per candidate, structured to the seven categories above. Length: 500 to 1,000 words per candidate.
2. **Comparative table.** A single table comparing all candidates across the seven categories.
3. **Preliminary recommendation.** One to two pages naming the candidate the AI would recommend, the reasoning, and the specific circumstances under which one of the other candidates would be preferable.
4. **Cohort selection form.** A short document the coordinator can bring to the cohort review, listing each candidate with recommended selection, alternatives, and space for cohort decisions and reasoning.
5. **Open questions for the cohort to resolve** before Prompt 2 can proceed.

### Evidentiary discipline

Tag every substantive claim as:

- **IC** (Independently Corroborated) for claims from cited external sources.
- **MS** (Mission-Sourced) for claims drawn from the attached Identity documents or other cohort documents.
- **TBV** (To Be Verified) for plausible claims that need Prompt 2 to substantiate.

Cite ecological, historical, and institutional sources where available.

### Constraints

- Do not default to the coordinator's home municipality as the boundary. Municipal boundaries are administrative artifacts and rarely align with ecological or cultural coherence.
- Do not force ecological and cultural boundaries into artificial alignment. Where they diverge, name the divergence.
- Do not treat size as a proxy for legitimacy. A small, ecologically coherent, culturally rooted BioRegion is a stronger coordination object than a large, jurisdictionally-defined one.
- Do not fabricate ecological or historical claims. Where evidence is thin, mark it TBV.
- Do not narrow to a single candidate. The cohort needs alternatives to make an informed choice.
- Do not disregard the working BioRegion candidate recorded in the Identity Statement. Include it as a candidate and evaluate it on the same terms as the others.

## Prompt 2: BioRegion Evidence Pack

### Context (paste at top of submission)

I am continuing the BioRegion Establishment Template for [BioHub name]. In the previous run I produced candidate boundaries. The cohort has selected the following candidate as the working BioRegion:

[Name and describe selected candidate, with cohort reasoning]

I am now asking for the full evidence pack that will inform the BioRegion Definition, Atlas, and Charter documents in Prompt 3.

Attached:

- [Prompt 1 output with cohort selection marked]
- [Three Identity documents: Identity Statement, Field and Lineage Positioning, Founding Compact]
- [Original foundational documents]
- [TIME Diagnostic output]

### Task

Produce a comprehensive evidence pack for the selected BioRegion, organized into the following eleven sections:

1. **Ecological profile.**
   - Biome and ecosystem types
   - Key species, with attention to endemism and IUCN Red List status
   - Biodiversity inventory drawing on GBIF, iNaturalist, IUCN, and national biodiversity databases
   - Vegetation and habitat mapping
   - Wildlife corridors and connectivity assessments
   - Ecological threats (invasive species, habitat loss, fragmentation)

2. **Hydrological profile.**
   - Watershed and catchment structure
   - Rivers, tributaries, wetlands, estuaries
   - Storage infrastructure (dams, reservoirs, aquifers)
   - Groundwater systems
   - Water quality baseline
   - **Water Retention Landscape baseline** drawing on the Kravčík, Jehne, Holzer, Yeomans, and Ruddick traditions. Where WRL assessment has not been done for this specific catchment, propose the assessment framework and identify what data would need to be collected.

3. **Jurisdictional profile.**
   - Municipalities, wards, districts
   - Provincial and national jurisdictions
   - Protected areas (national parks, nature reserves, biosphere reserves, mountain catchment areas)
   - Conservation status of unprotected land
   - Land tenure regimes, including any contested or transitional tenure arrangements

4. **Cultural and historical profile.**
   - Indigenous nations and first-nation territories, with attention to current governance status
   - Historical settlement patterns
   - Mission stations, heritage settlements, and long-baseline observational sites
   - Documented custodial arrangements
   - Language communities and linguistic heritage
   - Cultural institutions (museums, archives, cultural centers)
   - Draw on the cultural context already established in the Identity Statement and extend where the BioRegion scope exceeds it.

5. **Institutional profile.**
   - Government bodies active in the region
   - Conservation authorities
   - NGOs and community-based organizations
   - Cooperatives and forums
   - Research institutions and university partnerships
   - Philanthropic institutions with regional presence
   - Corporate actors with material regional footprint

6. **Infrastructural profile.**
   - Water infrastructure (schemes, transfers, treatment, distribution)
   - Energy infrastructure (generation, grid, small-scale embedded generation, off-grid capacity)
   - Transport infrastructure
   - Tourism infrastructure
   - Digital infrastructure (connectivity, data centers, community networks)

7. **Climate profile.**
   - Temperature and precipitation baselines
   - CMIP6 projections for the region
   - Ecosystem service assessments where available
   - **Bioprecipitation research candidates:** which biomes and ecosystems within the BioRegion have INA (ice-nucleation-active) bacteria potential worth investigating as citizen science research threads. Draw on the Cape fynbos precedent and the SW-Australia methodology where applicable. Tag as speculative research candidates.

8. **Soil carbon baseline.**
   - Current soil organic carbon estimates
   - Soil types and agricultural context
   - Sequestration potential
   - Existing soil restoration or regenerative agriculture initiatives

9. **Ecological-cultural boundary tensions.**
   - Where within the selected boundary do ecological and cultural boundaries diverge?
   - What are the specific tension points (populations that fall outside the ecological boundary but within the cultural one, or the reverse case)?
   - What precedents exist in bioregional practice globally for handling such divergences?
   - Surface these for the cohort to resolve before Prompt 3. Do not resolve them here. Apply the custodial and consent principles established in the Founding Compact where indigenous or first-nation authority is involved.

10. **Multi-BioHub context.**
    - Are there other BioHubs, bioregional initiatives, or coordination bodies operating within the selected boundary?
    - Are there emerging BioHubs at adjacent scales (nested inside, or containing this BioRegion within a larger one)?
    - What coordination protocols exist or would need to be developed to handle multi-BioHub scope? Draw on the working protocols established in the Founding Compact and refine them where BioRegion evidence supports refinement.
    - Surface these for the cohort to resolve before Prompt 3. Do not resolve them here.

11. **Cross-profile synthesis.**
    - Which parts of the evidence base are strongest?
    - Which parts are thinnest?
    - Where does the evidence support the selected boundary, and where does it suggest revision?
    - What further specialized research would strengthen the BioRegion knowledge base?

### Output specification

Produce all eleven sections as a single evidence pack document. Length: 40 to 80 pages depending on evidence available. Where possible, include:

- Named citations with source, date, and locator
- Tables and structured data where the evidence is quantitative
- Maps described textually where the deep research platform does not produce images
- Reference lists organized by section

### Evidentiary discipline

Same IC / MS / TBV tagging as Prompt 1. Every citation should carry source name, date, publisher, and a direct paraphrase or quote locating the claim.

For scientific claims (biodiversity, hydrology, climate, soil), prioritize peer-reviewed sources, national scientific bodies (biodiversity institutes, environmental observation networks, research councils), and established research institutions.

For cultural and historical claims, prioritize primary archival sources, indigenous scholarship, and community-authored documents. Where secondary sources are used, note the primary source they draw from.

For institutional claims, prioritize official documents from the bodies concerned.

### Constraints

- Do not compress the evidence pack. The Atlas depends on it being comprehensive.
- Do not omit sections where evidence is thin. Produce the section with an honest statement of the evidence gap and a proposal for what research would fill it.
- Do not resolve the ecological-cultural boundary tensions or the multi-BioHub scope questions. Surface them for the cohort.
- Do not present speculative science (including bioprecipitation candidates) as established fact. Tag it as a research candidate.
- Do not treat the selected boundary as unchallengeable. If the evidence suggests the boundary should be revised, say so clearly and identify what the revision would look like.
- Do not restate content already documented in the Identity documents. Cross-reference and extend, do not duplicate.

## Prompt 3: BioRegion Definition, Atlas, and Charter

### Context (paste at top of submission)

I am completing the BioRegion Establishment Template for [BioHub name]. I have the Prompt 1 candidate proposals and the Prompt 2 evidence pack. The cohort has resolved the following:

- Selected boundary: [confirm or state any revision from the Prompt 1 selection]
- Ecological-cultural boundary reconciliation: [state the chosen resolution]
- Multi-BioHub protocol: [state the chosen approach, referencing the Founding Compact's working protocols]
- Any other open questions from Prompt 2: [state resolutions]

I am now asking for the three final documents.

Attached:

- [Prompt 1 output]
- [Prompt 2 output]
- [Three Identity documents]
- [Original foundational documents]

### Task

Produce three separate documents.

#### Document 1: BioRegion Definition

A short, formal, foundational reference document stating what this BioRegion is. Structure:

1. Statement of the BioRegion (name, boundaries, defining ecological and cultural features)
2. Reasoning for the boundary (drawing on Prompt 2 evidence)
3. Reconciliation of ecological and cultural boundaries (stating the chosen resolution)
4. Coordination bodies recognized within the BioRegion
5. Multi-BioHub context and protocols (where applicable, drawing on the Founding Compact)
6. Jurisdictional overlays and regulatory context
7. Constraints acknowledged
8. Relationship to the founding BioHub (as documented in the Identity Statement)
9. Founding date and provenance of the definition
10. Provisions for revision

Length: five to ten pages. Prose-forward, formal register. This is the document a counterparty, funder, or peer BioHub will read to answer "what is your BioRegion?"

#### Document 2: BioRegion Atlas

A long, structured referential document compiling the operational knowledge base of the BioRegion. Structure follows the eleven sections of the Prompt 2 evidence pack, edited into a coherent reference form:

1. Ecological profile
2. Hydrological profile
3. Jurisdictional profile
4. Cultural and historical profile
5. Institutional profile
6. Infrastructural profile
7. Climate profile
8. Soil carbon baseline
9. Water Retention Landscape baseline
10. Biodiversity inventory
11. Bioprecipitation research candidates and other specialized science threads

Length: thirty to sixty pages. Reference register. Structured for section-by-section reference use. This is what the BioHub uses when planning specific coordination work.

#### Document 3: BioRegion Charter

A governance and commitment document establishing the BioRegion as a coordination object worthy of commitment. Structure:

1. Preamble stating why this BioRegion exists as a coordination object (drawing on ecological coherence, cultural continuity, and coordination necessity)
2. Principles governing coordination within the BioRegion (retention logic, subsidiarity, polycentricity, commitment pooling, honest gap-flagging)
3. Recognition of prior custodial and coordination bodies with their authority intact
4. Consent and custodial principles for cultural and indigenous knowledge (aligned with those in the Founding Compact)
5. Multi-BioHub coordination protocols (where applicable, refining those established in the Founding Compact), including how disputes and overlaps are handled
6. Governance forms recognized (which coordination forms are legitimate under what circumstances)
7. Provisions for co-signature by participating bodies
8. Provisions for revision and dissent

Length: five to ten pages. Commitment register. This is what the BioHub uses to convene formal coordination relationships. It can be co-signed.

### Output specification

Produce all three documents as separately structured sections within a single deliverable, or as three separate deliverables where the platform's output limits require it. Each document should be self-contained (readable without reference to the others) while cross-referencing where appropriate.

For each document, include:

- Full front matter (title, type, status, date, version)
- Table of contents
- Full body per specification
- Reference list
- Revision history section

### Evidentiary discipline

Same IC / MS / TBV tagging. Every claim in the Definition and Charter should trace to evidence in the Prompt 2 pack. Claims in the Atlas should carry their citations inline.

For the Definition and Charter specifically: if a claim cannot be traced to Prompt 2 evidence, either revise it or remove it. These documents will be read by counterparties and funders and must withstand due diligence.

### Constraints

- Do not present the Definition, Atlas, and Charter as interchangeable. Each has a distinct purpose and audience.
- Do not import speculative science into the Definition or Charter. Speculative science belongs in the Atlas, tagged as research candidates.
- Do not include marketing language in any of the three documents. The Definition is formal. The Atlas is referential. The Charter is committing. None of them is promotional.
- Do not close any document with a summary or a call to action. Each ends when its content ends.
- Do not omit the ecological-cultural reconciliation from the Definition or the multi-BioHub protocol from the Charter (where applicable). These are load-bearing elements the cohort has committed to.
- Do not exceed the length guidelines significantly. If the Atlas is running past sixty pages, split it into a main Atlas and a supplementary volume.

## Handoff to the BioConomy Value Proposition Template

Once the three BioRegion documents are produced, the cohort proceeds to the BioConomy Value Proposition Template. The BioConomy template inherits from this template as follows:

**BioRegion Definition inherits as:**
- The bioregion boundary (BioConomy template no longer needs to ask for this as a raw descriptor).
- The coordination bodies recognized within the BioRegion (BioConomy template's coordination assets input is inherited).
- The jurisdictional overlays and regulatory context (BioConomy template's contested tenure input is inherited).
- The multi-BioHub context (BioConomy template's tender coordination draws on this).

**BioRegion Atlas inherits as:**
- The ecological, hydrological, jurisdictional, cultural, institutional, infrastructural, and climate profiles (BioConomy template's Living Substrate panel is populated from the Atlas).
- The Water Retention Landscape baseline (BioConomy template's water yield tender is grounded in this baseline).
- The soil carbon baseline (BioConomy template's carbon sequestration tender is grounded in this baseline).
- The biodiversity inventory (BioConomy template's biodiversity data tender is grounded in this inventory).
- The heritage anchor and cultural profile (BioConomy template's heritage and tourism tender is grounded in this profile).

**BioRegion Charter inherits as:**
- The governance principles (BioConomy template's Retention Guarantee panel draws on these principles).
- The consent and custodial principles (BioConomy template applies these to cultural and heritage tenders).
- The multi-BioHub coordination protocols (BioConomy template's tender coordination in a multi-BioHub context uses these protocols).

Attach all three BioRegion documents to the first prompt of the BioConomy Value Proposition Template, along with the three Identity documents. Preserve the vocabulary and conventions established across the suite.

## Flags

- The three-document structure (Definition, Atlas, Charter) is proposed here in parallel to the Identity template's tripartite structure. Test against at least one BioRegion establishment beyond the Overberg case before treating the tripartite structure as settled.

- The size classifications in Prompt 1 (sub-catchment or settlement cluster; catchment or district; multi-catchment or regional; bio-geographic province) are working proposals. They may need adjustment for different biomes or continental contexts. In marine, coastal, or high-latitude BioRegions, the classifications may not map cleanly.

- The eleven-section Atlas structure is a working template. Some BioRegions may need additional sections (for example, marine ecosystems for coastal BioRegions, formalized indigenous governance protocols for jurisdictions where first-nation sovereignty is recognized). The structure should be treated as extensible.

- The template assumes the BioHub Identity Template and the TIME Diagnostic are both complete before this template runs. Where a BioHub attempts to run this template without those prerequisites, Prompt 1 will be constrained. The template should not be run without the Identity documents in hand.

- The ecological-cultural reconciliation is surfaced by the AI in Prompt 2 but resolved by the cohort. Where the cohort does not have the standing or the relationships to resolve it (particularly where indigenous or first-nation authority is involved), the template's Prompt 2 tensions will be unresolved and Prompt 3 should be paused until the cohort has done the necessary consent and relationship work.

- The Water Retention Landscape baseline in Prompt 2 depends on WRL assessment methodology being applied to the specific catchment. Where no such assessment exists, Prompt 2 will produce a proposal for the assessment, and follow-on specialized research is needed to produce the baseline itself.

- Bioprecipitation research candidates are speculative and tagged as such. They belong in the Atlas as research threads. They must not appear in the Definition or Charter.

- Between-prompt cohort review steps (candidate selection between Prompts 1 and 2, tension resolution between Prompts 2 and 3) are essential to the template. They cannot be delegated to the AI. This introduces cohort facilitation work for the coordinator and may benefit from a separate cohort-facilitation guide.

- The Prompt 2 evidence pack is long (40 to 80 pages). Some deep research platforms will struggle with outputs of this length in a single response. Where the platform imposes limits, produce the evidence pack in structured sections and assemble them separately before running Prompt 3.

- The BioRegion Definition Section 8 (Relationship to the founding BioHub) closes the cross-reference opened by the Identity Statement Section 8 (Relationship to the BioRegion). After the BioRegion Definition is produced, update the Identity Statement to complete its Section 8.

## Related pages

- [[templates/bioregion-establishment-template|BioRegion Establishment Template]]
- [[templates/index|The Templates]]
- [[templates/running-a-template|Running a Template]]

## Provenance

Published 30 September 2026 from *BioRegion Establishment Template* v0.3 in the VoG as Patron Project Prototype knowledge base. The prompt text is reproduced as written. The version history, change log, overview and suite position statement are omitted, since the template page covers them. Version 0.3 updated the source document to the five-template suite and to the voice conversions first made on this page.
