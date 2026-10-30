---
title: "Metabolic Study Template: Prompts"
description: "The full text of the Metabolic Study Template: the Step 0 Flow Gathering guide, the three prompts to paste into a deep-research AI platform, and the cohort work between them."
aliases: ["metabolic study prompts", "metabolic study template prompts"]
tags: ["template", "founding-suite", "measurement", "prompts"]
created: 2026-10-28
updated: 2026-10-28
source_project: "BioConomy"
source_documents: ["Life, The Missing Middle of Bioregional Development (Part II), 25 October 2026"]
epistemic_status: "working-hypothesis"
---

The runnable text of the [[templates/metabolic-study-template|Metabolic Study Template]], version 0.1. A [[biohub|BioHub]] cohort uses it to gather its Flow Gathering record and then to produce the Carrying Budget, the Metabolic Map and the [[circulation-goals|Circulation Goals]]. Read the template page first for what the template is for, and [[templates/running-a-template|Running a Template]] for the conventions every template in the suite shares.

Copy each prompt into a deep-research AI platform with the listed documents attached. Replace the words in square brackets with your own. Do not run a prompt until the cohort work before it is done.

## Prerequisites

- The BioRegion Definition, BioRegion Atlas and BioRegion Charter.
- The Value Proposition Evidence Pack, with its readiness diagnostic and gap register.
- The Founding Compact's consent and custodial principles.
- The Flow Gathering record from Step 0.
- Public data for the BioRegion: census and household survey tables, municipal and provincial budgets and procurement records, utility data, agricultural statistics, business registers.
- Any existing ecological threshold work for the territory: catchment reserve determinations, groundwater allocations, biodiversity targets.
- A list of the place's ratifying authorities and the decisions each holds.

## Step 0: Flow Gathering (cohort only, no AI)

**Who.** The coordinator and cohort, working with households, enterprises, producers and public bodies across every settlement in the BioRegion. Include the economically excluded: informal traders, households without bank accounts, seasonal workers.

**Consent and privacy.** Every household and enterprise takes part by consent and may withdraw. Record figures in aggregate by settlement and income band. No named household's spending and no enterprise's confidential figures enter the record or any output. Custodial knowledge follows the Founding Compact: record that it exists and who holds it, never its content or the location of sensitive sites.

**The four records.**

1. Spending sample. For a spread of households across settlements and income levels, the share of monthly spending on food, energy, water, housing and building materials, transport, care and health, and learning, and for each category where it is spent: inside the BioRegion with a locally owned business, inside the BioRegion with a business owned elsewhere, or outside the BioRegion.
2. Enterprise inventory. The enterprises operating in the BioRegion, formal and informal: what each sells and to whom, what it buys and from where, how many people it employs, and whether its owners live in the BioRegion.
3. Procurement record. What municipal, provincial and national bodies, and large institutions such as schools, clinics, farms and tourism operators, buy for the BioRegion, and from whom.
4. Producer conversations. What farmers, makers and processors sell inside the BioRegion and what leaves it; the inputs they import; where their waste goes; and what stops them selling locally.

**Output.** The Flow Gathering record: four sections, aggregated, with a note on how many households and enterprises took part and how they were chosen.

## Prompt 1: Set the carrying budget

Attach the BioRegion Definition and Atlas, the public data, any existing threshold work, and the list of ratifying authorities.

```
You are assisting the cohort of [BIOHUB NAME], a BioHub in [BIOREGION NAME], to set the
BioRegion's carrying budget: the share of each ecological ceiling its economy may draw
on, and the social floor it must meet, as thresholds for the whole BioRegion and
allocations within it.

Use a thresholds-and-allocations approach. Start from the ecological ceilings and the
social foundation of the doughnut framework, and from any statutory or scientific
thresholds that already apply to this territory. Work at the scale of the BioRegion
Definition (attached).

Build these sections:

1. Ecological ceilings. For each of water (surface yield, groundwater recharge,
   environmental flows), soil (organic carbon, erosion), biodiversity (habitat extent and
   condition, threatened species), land (area by use), and carbon (net emissions and
   sequestration): the threshold, its source, the current state against it, the trend,
   and whether the BioRegion is inside or beyond the threshold.

2. Social floor. For each of food, water, shelter, energy, health, learning, work and
   income, and voice in decisions: the minimum the BioRegion's people need, its source,
   the current state by settlement where data allows, and the gap.

3. Allocations. For each ecological ceiling, how the available budget is currently used
   (by sector, by sub-area, by upstream and downstream users) and which existing legal
   allocations bind it. Do not propose new allocations. List the allocation decisions
   the cohort and ratifying authorities would need to make, and who holds each.

4. Interactions. Where a change to one ceiling or floor moves another (for example,
   restored water retention raising soil carbon and groundwater recharge together).

5. Data gaps. Every threshold or state the evidence does not support, with what would
   be needed to fill it.

Constraints:
- Every threshold carries its source. If no source exists for this territory, say so
  and mark the item [TBV]. Never invent a threshold.
- Tag every factual claim: [IC] independently corroborated, [MS] from the cohort's own
  documents, [TBV] to be verified.
- Structural inferences are labeled as inferences.
- Plain, formal register. No promotional language.
```

### Cohort work between Prompts 1 and 2

- Test each threshold and current state against local knowledge and correct them.
- Decide how to treat uncertain thresholds: precautionary limit, provisional limit with a monitoring trigger, or open question.
- Mark the allocation decisions that belong to the ratifying authorities and take them there.
- Confirm the Flow Gathering record is complete enough for Prompt 2, or extend it.

## Prompt 2: Map the metabolism

Attach the reviewed carrying budget, the Flow Gathering record, the Value Proposition Evidence Pack and the public data.

```
You are building the Metabolic Map for [BIOHUB NAME]: how materials and money move
through [BIOREGION NAME], read against its reviewed carrying budget (attached).

For each provisioning system (food, water, energy, building materials and housing,
care and health, waste), build these sections:

A. Material flows. What is produced inside the BioRegion, what is imported, what is
   exported, and what becomes waste and where it goes. Give quantities where evidence
   allows, with their basis.

B. Money flows. What households, enterprises and public bodies spend on the system;
   the share spent with locally owned enterprises, with enterprises owned elsewhere,
   and outside the BioRegion; and the estimated share of each unit spent that stays in
   the BioRegion after its first and second round.

C. Ownership. Where the land, enterprises and infrastructure of the system are owned,
   and what the BioRegion loses each year to owners who live elsewhere.

D. Overshoot. Where the system's flows breach or approach a ceiling in the carrying
   budget, or leave a floor unmet.

E. Loop opportunities. Where an import could be met from within, or a waste stream
   could become an input, without breaching the carrying budget. For each: the flow it
   would close, the households and enterprises it would involve, and its chokepoints
   (for example a missing processing step, cold storage, aggregation, or finance),
   ordered by severity.

Then across all systems:

F. Ranking. Rank the loop opportunities by the share of household spending they would
   keep in the BioRegion, the number of existing producers they would draw in, and the
   carrying-budget headroom they need. State the ranking rule.

G. Method and data gaps. How each figure was estimated, the sample sizes behind the
   Flow Gathering estimates, and what would improve them.

Constraints:
- Use the Flow Gathering record in aggregate only. Never name a household or disclose
  an enterprise's confidential figures.
- Every figure carries its source or is labeled as an estimate with its basis.
- Tag every factual claim [IC], [MS] or [TBV]. Never invent a figure, an enterprise or
  a buyer. If evidence cannot be found, say so and mark the item [TBV].
- Do not set targets. Targets are the cohort's decision.
```

### Cohort work between Prompts 2 and 3

- Correct the map from local knowledge, especially ownership and informal trade.
- Set a target internal share for each flow for each five-year period, and check each against the carrying budget.
- Choose the pilot loop. Life's guidance is food first, because it is the highest-frequency household spend, unless the map shows a stronger case.
- Order the pilot loop's chokepoints and decide which the cohort will address first.
- State the conditions under which later financing facilities would open, starting with a bioregional trust for the convenings that gather producers.
- Take the allocations and the Circulation Goals to the ratifying authorities. Prompt 3 waits until they have ruled on the decisions they hold.

## Prompt 3: The three final documents

Attach the reviewed carrying budget, the reviewed Metabolic Map and the cohort's decisions. On platforms with tight output limits, run this prompt as 3a, 3b and 3c, one document each.

```
Produce three documents for [BIOHUB NAME] from the attached carrying budget, Metabolic
Map and cohort decisions.

Document 1: Carrying Budget (five to ten pages)
Sections: the BioRegion and its scale; the ecological ceilings, each with threshold,
source, current state and trend; the social floor, each with minimum, source, current
state and gap; the allocations agreed by the cohort and ratifying authorities; the
decisions still pending and who holds them; the revision cycle. Formal register.

Document 2: Metabolic Map (twenty-five to fifty pages)
The reviewed map, sections A to G for each provisioning system, structured for
reference use: numbered sections, a flow table per system, a sources list, and all
tags preserved.

Document 3: Circulation Goals (five to ten pages)
Sections:
1. Standing. Who agreed these goals, and the ratifying authorities and their decisions.
2. Today. The internal share of each flow, from the Metabolic Map.
3. Targets. For each flow, the target internal share at the end of each five-year
   period, and the carrying-budget limit the target respects.
4. The pilot loop. The loop chosen, why, the producers and households it involves, and
   its chokepoints in the order the cohort will address them.
5. Activation conditions. The conditions under which each later financing facility
   (bioregional trust, venture studio, investment company, bank) would open.
6. Measurement. How each share will be measured and reported, on the same cycle as the
   Terms of Engagement's reporting.
7. Revision. The goals are revised at the end of each five-year period, or when the
   ratifying authorities call for it, through the place's own process.
8. Signatures. The cohort and the ratifying authorities sign.

Register for all three documents: firm and courteous. State findings and commitments
without arguing for them.

Constraints: preserve all tags; aggregate data only; never invent a source, figure,
enterprise or signatory; no closing summaries; no promotional language.
```

## Multi-BioHub regions

Where more than one BioHub operates in a BioRegion, set one carrying budget for the BioRegion jointly under the BioRegion Charter, since the ceilings belong to the whole watershed. Each BioHub may map the metabolism of its own part and set its own Circulation Goals, provided the allocations they draw on are reconciled under the Charter.

## Constraints

- The AI does not set thresholds without a source, allocations, targets or the pilot loop.
- The AI does not assume consent. Decisions that belong to a ratifying authority are recorded as pending until made.
- Flow data is used in aggregate only.
- Never record the content of custodial or sacred knowledge, or the location of sensitive heritage sites.
- Evidence tagging and the no-fabrication rule apply throughout, as in every template in the suite.

## Cross-platform notes

As for the rest of the suite (see Running a Template). Step 0 is done by people and needs no platform. Prompt 2 is the largest output: on platforms with tight output limits, run it one provisioning system at a time and assemble the ranking and method sections last.

## Related pages

- [[templates/metabolic-study-template|Metabolic Study Template]]
- [[templates/bioregional-development-plan|Assembling a Bioregional Development Plan]]
- [[templates/index|The Templates]]
- [[templates/running-a-template|Running a Template]]
- [[templates/place-mandate-template|Place Mandate Template]]

## Provenance

Written 28 October 2026 as version 0.1 of the Metabolic Study Template. The prompts are the wiki author's construction on Benjamin Life's account of carrying-capacity analysis and the metabolic study (Part II, 25 October 2026). Where the prompts and the template page differ, the prompts govern how the template runs.
