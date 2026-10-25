---
title: "Catchment Dam and Initiative Scan"
description: "Reusable deep research instructions that turn a table of the dams in a catchment into a dam register, a register of water initiatives linked to those dams, and a short brief on who stores, uses and works to protect the catchment's water."
aliases: ["dam table scan", "catchment initiative scan", "dams and water initiatives research prompt"]
tags: ["tool", "bioregion", "ai", "prompt", "deep-research", "catchment", "dams", "water"]
maintained_by: "Michael Haupt"
platform: "Claude deep research, or any AI assistant with web search and file upload"
pricing: "Free to use; costs depend on the AI platform"
created: 2026-10-25
updated: 2026-10-25
source_project: "BioConomy"
source_documents: ["dam-table-catchment-initiatives-deep-research.md"]
epistemic_status: "documented-framework"
---

A reusable set of deep research instructions that a [[biohub|BioHub]] runs once it holds a table of the dams in its catchment. The run cleans and enriches the dam table, finds every organized water initiative in the catchment, links each initiative to the dams it sits above, below or depends on, and reports who stores the catchment's water, who uses it and who already works on the land that fills the dams.

## What it does

A [[bioregion|BioRegion]] that wants to take part in catchment finance first needs a factual map of its own water: where storage sits, who owns it, where water leaves the catchment, and which bodies are already active upstream. Most of that information exists, scattered across dam registers, utility reports, NGO project pages, research papers and grant databases. The scan gathers it in two steps.

Step A queries the dam table. It checks the table against its stated totals, describes how concentrated storage is, groups dams by sub-catchment using the country's official catchment codes, and enriches each significant dam from records: owner and operator, supply scheme, transfers out of the catchment and users of record.

Step B finds the water initiatives. It maps the institutions that govern water in the catchment, then searches eleven kinds of initiative, from water funds and [[payment-for-ecosystem-services-pes|payments for ecosystem services]] to [[water-retention-landscape|water retention landscapes]], river monitoring and research. Each initiative is located and tied to the dams around it.

The output is two CSV registers (dams and initiatives) and a 10 to 30 KB brief that answers eight fixed questions. The questions are descriptive. The scan reports what exists and where nothing was found; it makes no recommendations.

## What you need first

A table of the dams in your catchment, with at least names or coordinates and storage capacity. The free [Global Watersheds web app](https://mghydro.com/watersheds/) produces one: choose your catchment outlet on the map, generate the Watershed Data Report, and the dams section lists every dam the Global Dam Watch database records inside the catchment, with river, year, main use, capacity and coordinates. The report is released under CC BY 4.0. A national dam register, where your country publishes one, is a useful second source.

Choose the outlet with care. The app delineates everything upstream of the point you click, so an outlet near a river mouth returns the whole basin. If your BioHub sits on a tributary, place the outlet where that tributary joins the main river, and run the basin-wide report separately if you need the wider picture.

## How to use it

1. Generate or obtain your dam table and save it as a PDF, CSV or spreadsheet.
2. Copy the instructions below into a document.
3. Fill in the table in section 2 of the instructions. Write "unknown" for anything you do not know; the run will look for it.
4. Start a Claude deep research run (or a research session in another assistant with web search), attach the dam table and paste the instructions.
5. Check the registers before using them. Open a sample of the sources, confirm the largest dams' owners and transfers against official records, and treat every `[TBV]` row as unconfirmed.
6. Publish the brief on your BioRegion's page in the [BioHubs directory](https://biohubs.bioconomy.earth), and send general findings about methods or instruments back to this wiki.

## The instructions

````markdown
# Deep Research Instructions: From a Dam Table to the Water Initiatives in a Catchment

Fill in the table in section 2, attach your dam table, and run.

## 1. What this run produces

1. **A dam register** for the catchment: the attached dam table, cleaned and enriched, as a CSV with the columns in section 5.1.
2. **An initiative register**: every water initiative found in the catchment, as a CSV with the columns in section 5.2, each row linked to the dams it sits above, below or depends on.
3. **A catchment brief**, 10 to 30 KB in Markdown, that reads the two registers together (section 8).
4. **A hand-back** to the BioHub (section 10).

### 1.1 The question

Who stores the water in this catchment, who uses it, and who is already working to protect, restore, finance or govern the land that fills those dams?

The run describes what exists. It does not recommend projects, rank initiatives or say what any party should do.

## 2. Inputs to fill in

| Input | Value for this run |
|---|---|
| BioRegion or BioHub name | `{BIOREGION}` |
| Country and first-level region | `{COUNTRY}`, `{PROVINCE_OR_STATE}` |
| Catchment outlet (latitude, longitude) | `{OUTLET}` |
| Drainage area | `{AREA_KM2}` km² |
| Dam table file and its source | `{FILE}`, from `{SOURCE}` (for example the Global Watersheds web app at mghydro.com, which draws on the Global Dam Watch database) |
| Number of dams and total storage stated in the source | `{N_DAMS}` dams, `{CAPACITY}` million m³ |
| The BioHub's own area, if smaller than the catchment | `{FOCUS_AREA}` (towns, sub-catchments or a polygon) |
| National dam register, if one is known | `{NATIONAL_REGISTER}` |
| Local languages to search in | `{LANGUAGES}` |
| Where the brief will be published | `{HOME}` (normally the BioRegion's page on the BioHubs directory) |

If a value is unknown, write "unknown" and let the run find it. Do not guess.

## 3. Step A: query the dam table

### 3.1 Read and check the table

1. Load every row. Report the row count and compare it with `{N_DAMS}`. Sum the capacity column and compare it with `{CAPACITY}`. Report any mismatch.
2. Count the rows with no name, no river, no year, no main use and no height. Global datasets often leave most small dams unnamed; say how many.
3. Flag likely spelling errors in names by checking them against national records and maps. Keep the source spelling in one column and the corrected name, with its source, in another.
4. Check every coordinate falls inside the catchment. Flag any that do not.

### 3.2 Describe storage

1. Rank dams by capacity. Report the share of total storage held by the largest one, the largest three and the largest ten.
2. Group dams by main use (irrigation, water supply, hydropower, flood control, other, unknown) and give count and capacity for each.
3. Group dams by decade built, and note the share with no year.
4. Group dams by sub-catchment. Use the country's official catchment coding where one exists (for example tertiary and quaternary catchments in South Africa, HUC codes in the United States, or water body codes under the EU Water Framework Directive). Otherwise use HydroBASINS level 6 to 8. Report count and capacity per sub-catchment, and mark which sub-catchments overlap `{FOCUS_AREA}`.

### 3.3 Enrich each dam

For each named dam, and for each unnamed dam above 1 million m³, find from records:

- the official name and any other names;
- owner and operator (state agency, municipality, water board, irrigation board or water user association, mining or industrial company, or "private farm" for a privately owned farm dam);
- the scheme or supply system it belongs to;
- whether water from it is transferred out of the catchment, and to whom;
- users of record (towns, irrigation districts, industry), with volumes where published;
- its dam safety classification, if the national register publishes one.

For unnamed small dams, identify by coordinates only where a national register, an official map or OpenStreetMap gives a match within 250 m. Record the match distance. Leave the rest unnamed.

Never name an individual who owns a private farm dam. Record ownership as "private farm".

### 3.4 Gaps in the source data

Global dam datasets miss many small farm dams. Where the national register or published studies give a higher count for the catchment, report both figures and the source of each. This gap matters, because small farm dams can hold a large share of storage in agricultural catchments.

## 4. Step B: find the water initiatives

### 4.1 Map the institutions first

Before searching for initiatives, identify the bodies that govern water in the catchment: the national water department, the catchment or basin agency, water management area, water user associations or irrigation boards, water boards or utilities, municipalities that draw from the dams, and any river basin organization that crosses borders. These bodies run or license many initiatives, and their names are the best search terms.

### 4.2 What counts as a water initiative

Any organized, named effort in the catchment, current or ended since 2000, that protects, restores, measures, finances or governs water or the land that yields it. Search for each of these kinds:

| Code | Kind | Examples of what to look for |
|---|---|---|
| W1 | Water funds and Watershed Investment Programs | Check the case studies of the Resilient Watersheds Toolbox, the Nature for Water Facility's portfolio and national water fund lists |
| W2 | Payments for ecosystem services and outcome finance | PES schemes, performance-based or green bonds tied to catchment outcomes, debt-for-nature components, carbon or biodiversity credits that claim water benefits |
| W3 | Utility and municipal catchment programs | Source-water protection, catchment management plans, water conservation and demand management programs |
| W4 | Invasive plant clearing and public works | National clearing programs, contractor teams, public employment programs on catchment land |
| W5 | River, riparian and wetland restoration | Rehabilitation projects, ecological flow or reserve determinations, fish passage, dam removal |
| W6 | Water retention and regenerative land practice | Water retention landscapes, keyline, holistic grazing, soil carbon projects, farmer groups doing any of these |
| W7 | Protected areas and stewardship | Nature reserves, stewardship agreements on private or communal land, conservancies, strategic water source area designations |
| W8 | Governance and participation | Catchment forums, river committees, water user association reform, community water committees, legal cases on water allocation |
| W9 | Monitoring and citizen science | River health monitoring, rainfall networks, groundwater monitoring, biomonitoring, sediment or water quality sampling by residents |
| W10 | Research | University and research council projects in the catchment, with their datasets |
| W11 | Drought, flood and supply resilience | Drought plans, flood risk programs, managed aquifer recharge, desalination or reuse only where they change demand on the catchment's dams |

If the evidence shows a kind missing from this list, add a code and say so.

### 4.3 How to search

1. Search by each dam name, each river name, each sub-catchment code and each town in `{FOCUS_AREA}`, combined with the kinds in 4.2.
2. Search in `{LANGUAGES}`, as well as English.
3. Search the websites and annual reports of the bodies found in 4.1.
4. Search grant and project databases: GEF Small Grants Programme, Green Climate Fund, Global Environment Facility, Adaptation Fund, national lottery or environment funds, and the main foundations active in the country.
5. Search Google Scholar and national research repositories for studies sited in the catchment.
6. Search news archives for recent events (since 2023) only, and label them as journalism.
7. For each initiative found, follow its partners: partner lists lead to further initiatives.

### 4.4 Link initiatives to dams

For every initiative, record its location as precisely as the record allows (coordinates, farm or reserve name, sub-catchment, town). Then say which dams it sits upstream of, which it sits downstream of, and which dam's water it depends on. Use the sub-catchment grouping from 3.2. Where the record does not allow a link, write "not located".

## 5. The registers

### 5.1 Dam register columns

`dam_id`, `name_source`, `name_official`, `name_source_ref`, `river`, `sub_catchment`, `in_focus_area` (yes/no), `latitude`, `longitude`, `year_built`, `main_use`, `capacity_mcm`, `owner_type`, `owner_operator`, `scheme`, `transfer_out` (yes/no/unknown, and to whom), `users_of_record`, `safety_class`, `initiatives_upstream` (initiative ids), `initiatives_downstream`, `grade`, `sources`.

### 5.2 Initiative register columns

`init_id`, `name`, `kind` (W1 to W11), `lead_body`, `partners`, `funders`, `years`, `status` (active / ended / proposed), `location`, `sub_catchment`, `in_focus_area`, `dams_upstream_of`, `dams_downstream_of`, `what_it_does` (one sentence, from the record), `who_takes_part` (landholders, communities, workers, as the record describes them), `outputs_or_results` (figures with dates), `public_data` (yes/no, with link), `contact_route` (organization website only, never a personal email or phone number), `grade`, `sources`.

## 6. Questions the brief must answer

Answer each from the registers, with figures:

1. How concentrated is storage, and who owns and operates the dams that hold most of it?
2. How much stored water leaves the catchment, and for which users?
3. Which sub-catchments above the largest dams have one or more initiatives, and which have none found?
4. Which kinds of initiative (W1 to W11) are present, and which are absent?
5. Who leads the initiatives (state, utility, NGO, research body, landholder group, community body), and who funds them?
6. Where do landholders and residents take part, and in what role (decision-maker, paid participant, worker, volunteer, consulted, none recorded)?
7. Which initiatives publish data a BioHub could use, and under what terms?
8. Is there a water fund or Watershed Investment Program in or near the catchment? If so, which phase of the project cycle has it reached, as the Resilient Watersheds Toolbox defines the phases?

Answers describe what the record shows. A finding of "none found" is a full answer; say where you looked.

## 7. Sources, grading and parties

1. Prefer official registers and primary records, then peer-reviewed work, then reports by the bodies concerned, then journalism. Label anything that is not peer-reviewed.
2. Date every figure and name its source.
3. Grade every row and every claim in the brief:
   - `[IC]` Independently Corroborated: two or more independent sources, or an official record.
   - `[MS]` Mission-Sourced: from the account of the party the claim is about (an initiative's own report of its results is `[MS]`).
   - `[TBV]` To Be Verified: plausible and unconfirmed.
   Never upgrade a claim without a source.
4. Describe every organization only through what it has said or done, as recorded. Never state what an organization needs, wants or would accept, and do not attribute motives.
5. Name individuals only through public roles. Leave out home addresses, personal contact details and names of private landowners.
6. Do not publish the location of rock art, burial sites or other sensitive heritage sites, even where a record gives it.
7. Give equal scrutiny to state agencies, utilities, NGOs, companies and community bodies.

## 8. Brief format

Working title: "Dams and Water Initiatives in the `{CATCHMENT_NAME}` Catchment".

Body, with no level-one heading:

1. One paragraph that stands on its own: the catchment, its storage, and the main finding on initiatives.
2. The catchment in brief: area, outlet, rivers, the institutions from 4.1, and the data sources used.
3. Storage (from 3.2 and 3.3), with a short table of the ten largest dams.
4. Initiatives by kind, with a short table per kind.
5. Dams and initiatives together: a table by sub-catchment showing storage, initiatives present and kinds absent.
6. Answers to the questions in section 6.
7. Data gaps and conflicts between sources.
8. `## Related`, `## Sources` (full citations with URLs), `## Provenance`.

Write dollar amounts as `US\$` and local currency with its code or symbol. Use American spelling unless `{HOME}` uses another.

## 9. Voice

- No em dashes.
- No "not X, but Y" constructions in any form, including "X, not Y", "rather than", "instead of", and "X does not mean Y. It means Z."
- No three-part rhythmic phrases.
- No hollow praise and no stock phrases ("leverage", "navigate", "delve", "unpack", "tapestry", "landscape" as a metaphor, "journey" for a process, "ultimately", "moreover", "furthermore").
- No closing summary.
- Describe what each dam and initiative is and does. Let readers judge its worth.

## 10. Hand back

With the two CSVs and the brief, return:

1. Mismatches between the dam table and its stated totals, and spelling corrections made.
2. The count of small dams the source likely misses, with the evidence.
3. Initiatives found that have published data, with links.
4. Organizations described, so the BioHub can decide on right-of-reply notes.
5. Material of general interest (methods, instruments, tools) that belongs on the BioConomy wiki at https://wiki.bioconomy.earth and not on the BioRegion's page.
6. Every judgment call to check: how unnamed dams were matched, how initiatives were located and linked to dams, and what was left out and why.

## 11. Background reading

The BioConomy wiki's map for AI agents is at https://wiki.bioconomy.earth/llms.txt. Read https://wiki.bioconomy.earth/tools/bioregion/resilient-watersheds-toolbox for the Watershed Investment Program phases used in question 8 of section 6.
````

## Design notes

The scan starts from dams because they are the most legible water infrastructure in almost any catchment. Global and national datasets record them with coordinates and capacity, and each large dam has an owner, an operator and users of record. That gives a researcher fixed points to which scattered initiatives can be attached, and it shows a BioHub where the catchment's stored water is going before it asks who works on the land upstream.

Linking each initiative to the dams it sits above or below turns two lists into a map of coverage. A sub-catchment above a large supply dam with no initiative found is a finding; so is one with five overlapping programs and no landholder body among their leads.

The participation question (who takes part, and in what role) follows the wiki's work on [[concepts/exclusion-from-water-finance|exclusion from water finance]]. It asks the run to record roles as the sources describe them, so a BioHub can see where residents and landholders sit in existing programs without the brief drawing conclusions for it.

The instructions forbid naming private farm-dam owners and publishing the location of sensitive heritage sites, because the registers are meant to be published.

## Limitations

Global dam datasets miss many small farm dams, and in agricultural catchments those can hold a large share of storage. The instructions ask the run to report the gap, which only a national register or local survey can close.

Most rows in a global dam table may carry no name. Matching them to records by coordinates is uncertain, so the instructions allow a match only within 250 m and ask for the distance to be recorded.

AI research runs can misattribute projects, merge similar names and cite pages that do not support the claim. Every row carries a grade and its sources so a person can check it. An initiative's own report of its results is graded `[MS]` until someone else confirms it.

The search will find initiatives with an online presence. Community efforts that publish nothing will be missing; the BioHub's own knowledge of the catchment is the check on that.

## Worked example

The first run used a Watershed Data Report for the Breede River basin in South Africa's Western Cape (outlet near the river mouth, about 12,500 km², 93 dams, 1,030 million m³ of stated storage). Two dams hold about 88 percent of that storage, 79 of the 93 rows carry no name, and the source misspells the name of one of those two. Because the outlet sits at the mouth, the report covers the whole basin and not the tributary where the Valley of Grace BioHub sits, which is why the guidance on choosing an outlet appears above. The place-specific results belong on the [Valley of Grace BioHub](https://biohubs.bioconomy.earth/afrotropic/at12-vog) page.

## Related pages

- [[tools/bioregion/index|BioRegion Tools]]
- [[tools/bioregion/resilient-watersheds-toolbox|Resilient Watersheds Toolbox]]
- [[concepts/exclusion-from-water-finance|Exclusion from Water Finance]]
- [[concepts/performance-based-water-bonds|Performance-Based Water Bonds]]
- [[concepts/water-as-compound-asset|Water as Compound Asset]]
- [[strategic-water-source-area-swsa|Strategic Water Source Area]]
- [[watershed-mapping|Watershed Mapping]]
- [[tools/ai/index|AI Tools]]

## Provenance

Written 25 October 2026 from Michael Haupt's deep research instruction set of the same date, prepared after generating a Global Watersheds report for the Breede River basin. The instructions are reproduced in full without the Valley of Grace input values, which are summarized in the worked example. Figures in the worked example were checked against the report's dam table on the same date.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://wiki.bioconomy.earth/tools/bioregion/catchment-dam-and-initiative-scan/",
  "name": "Catchment Dam and Initiative Scan",
  "description": "Reusable deep research instructions that turn a table of the dams in a catchment into a dam register, a register of water initiatives linked to those dams, and a brief on who stores, uses and protects the catchment's water.",
  "applicationCategory": "AI Tool",
  "operatingSystem": "Any AI assistant with web search and file upload",
  "author": {
    "@type": "Person",
    "name": "Michael Haupt"
  },
  "datePublished": "2026-10-25",
  "isPartOf": {
    "@id": "https://wiki.bioconomy.earth/#website"
  },
  "keywords": [
    "tool",
    "bioregion",
    "deep research",
    "catchment",
    "dams",
    "water initiatives"
  ]
}
</script>
