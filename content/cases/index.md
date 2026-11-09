---
title: "Community Catchment Case Register"
description: "A register of cases in which a community holds, governs or is paid for a living catchment, one page per case, coded for assets, coordination, tenure, value flow, beyond-market markers, measured outcomes, capture and evidence level, with filters by place, climate and governance."
aliases: ["case register", "catchment case register", "community catchment cases", "cases"]
tags: ["landing", "case-register", "commons", "water-retention"]
created: 2026-11-09
updated: 2026-11-09
source_project: "BioConomy"
source_documents: ["Deep research report: Mountain Water Commons (9 November 2026)"]
epistemic_status: "academic-inference"
---

The register holds one page per case in which a community mobilized a living catchment, so that research briefs and later enrichment runs add to a single, filterable record.

## Overview

Each case page records who began the work, who holds the land and the rules, who pays whom and on what trigger, what was measured, and what failed. The first 46 cases come from [[research/mountain-water-commons|Mountain Water Commons: Community-Held Catchments Beyond Asset-Based Development]] (9 November 2026), and a 47th, Yakpugang in Bhutan, was added by that brief's second enrichment run. A case can belong to more than one brief: its `briefs` key lists every brief that uses it, and each brief embeds a base filtered to its own cases.

A practitioner can use the views below to find cases near their own conditions: the same continent, mountain system or climate group, the same kind of tenure, or the same arrangement for holding money. A case marked as a failure or capture is kept in the register on equal terms with the cases that lasted.

> [!note] Right of reply
> Case pages describe communities, organizations and programs only through their published records and statements. None has yet been invited to comment. Responses and corrections will be recorded on the case page with their date.

## Regions

The register follows the regions of the Mountain Water Commons brief. Each regional page carries the brief's narrative for its cases and a table of them.

- [[cases/andes/index|Andes]]
- [[cases/mexico-and-north-america/index|Mexico and North America]]
- [[cases/iberia-mediterranean-and-arabia/index|Iberia, the Mediterranean and Arabia]]
- [[cases/alps-and-europe/index|Alps and Europe]]
- [[cases/himalaya/index|Himalaya]]
- [[cases/southeast-and-east-asia/index|Southeast and East Asia]]
- [[cases/africa/index|Africa]]
- [[cases/oceania/index|Oceania]]

## How a case is coded

**Assets.** A1 individual gifts and skills, A2 associations, A3 local institutions, A4 physical and built assets, A5 economic exchange, A6 culture and story, A7 living systems, A8 the retention function itself, named as an asset. A case enters the register only if it mobilized A7.

**Coordination** uses the [[frameworks/time-framework|TIME Framework]]: [[glossary/t-z/t-form-tribal|T-form (Tribal)]], [[glossary/f-l/i-form-institutional|I-form (Institutional)]], [[glossary/m-s/m-form-market|M-form (Market)]] and [[glossary/a-e/e-form-emergent|E-form (Emergent)]], dominant form first.

**Beyond-market markers.** B1 collective or customary ownership of the catchment or its water; B2 rules on use, sharing and rest set by the users; B3 reciprocal or in-kind exchange with downstream users; B4 payments received into a collective fund under community rules; B5 legal personhood or rights of nature; B6 value retained through local currency, cooperative ownership or a community trust; B7 the community contracted as a provider of water outcomes ([[glossary/m-s/needed-vs-needy|needed versus needy]]); B8 decisions held by the community over an outside party's money.

**Evidence levels,** graded separately for water and for community outcomes. E1 randomized, paired-catchment or before-after-control-impact design; E2 long-term monitored record with a baseline and credible counterfactual; E3 before-after comparison with no control; E4 calibrated model or structured case study by independent researchers; E5 practitioner account, testimony or media report.

**Claim grade.** [IC] two or more independent sources or an official record; [MS] the account of the party the claim is about; [TBV] plausible and unconfirmed. The page's `epistemic_status` follows the grade: [IC] gives `academic-inference`, [MS] gives `working-hypothesis`, and [TBV] gives `stub`, a first-pass record awaiting enrichment.

## The register

![[cases.base]]

The tabs group the cases by continent, mountain region, country, mountain system and climate, and filter them to Mediterranean and arid climates, cases that name the retention function, cases where the community holds both the rules and the money, reciprocal agreements, contracted providers, legal personhood, tenure, lineage, [[glossary/a-e/asset-based-community-development|ABCD]] lineage, measured water evidence, failures and captures, and independent evidence. The last two tabs list the cases awaiting enrichment and the date each was last checked. Click a column heading to sort by it.

## Filter keys

| Key | Values |
|---|---|
| `continent` | Africa, Asia, Europe, North America, Oceania, South America |
| `mountain_region` | Andes; Mexico and North America; Iberia, Mediterranean and Arabia; Alps and Europe; Himalaya; Southeast and East Asia; Africa; Oceania |
| `country`, `subnational`, `mountain_system` | Free text, spelled the same on every page |
| `coordinates` | Approximate centroid as `[latitude, longitude]`, for map views |
| `koppen`, `climate_group`, `rainfall` | Köppen classes as a list; climate group from the first class (`tropical`, `arid`, `mediterranean`, `temperate`, `continental`, `polar-alpine`); rainfall as reported |
| `lineage_type` | `abcd-by-name`, `abcd-framed`, `commons`, `customary`, `community-forestry`, `community-land-trust`, `territory-of-life`, `biocultural-heritage`, `reciprocity`, `legal-personhood`, `negotiated-payments`, `water-fund`, `state-program`, `ngo-program`, `practitioner-innovation` |
| `tenure_type` | `communal`, `customary`, `private`, `state`, `trust`, `legal-personhood`, `contested`, `mixed` |
| `assets`, `beyond_market` | Lists of codes, for example `["A7", "A8"]` and `["B1", "B2"]` |
| `names_retention_function`, `failure_or_capture` | `true` or `false` |
| `evidence_water`, `evidence_community`, `grade`, `independent` | E1 to E5; [IC], [MS], [TBV]; `yes`, `partial`, `mixed`, `no` |
| `briefs` | Slugs of the research briefs that use the case |
| `last_checked` | The date someone last checked the page against its sources |

## Adding and enriching cases

A new case gets its own page at `cases/<region>/<case-title>.md`, in the folder of its `mountain_region`, with the `case` tag first, the keys above in the order the existing pages use, and the brief's slug in `briefs`. An enrichment run that re-reads a case updates the entries and `last_checked`, adds its own brief to `briefs`, and raises the grade and `epistemic_status` only where a source supports it. Keep `case_id` and the file name unchanged, so links and filters keep working.

## Related

- [[research/mountain-water-commons|Mountain Water Commons]]
- [[research/water-retention-evidence|Retention Works on the Slope, Unproven at the River]]
- [[concepts/water-retention-landscapes|Water Retention Landscapes]]
- [[concepts/exclusion-from-water-finance|Exclusion from Water Finance]]
- [[glossary/a-e/commons|Commons]]
- [[investors/index|Nature Performance Bond Investor Register]]

## Provenance

Created on 9 November 2026, when the 46-row case table of the Mountain Water Commons brief moved into one page per case and two bases: `cases/cases.base` for the full register and `research/mountain-water-commons.base` for the brief's own cases. The register follows the pattern of the investor register. Entries were copied from the table without change. The `continent`, `mountain_region`, `coordinates`, `climate_group`, `lineage_type`, `tenure_type`, `names_retention_function` and `failure_or_capture` keys were added for filtering; coordinates are approximate and were set at writing. The CSV that carried the table is no longer linked. Revised the same day: the case pages moved into eight regional folders, each with an index page holding the brief's narrative for that region and a base of its cases.
