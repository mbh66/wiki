---
title: "Bankable Service Alignment Template"
description: "The fifth template in the founding suite. Tests a financial instrument against a BioHub's Terms of Engagement, then maps the BioHub's services onto the instrument and records the build-out needed to meet it."
aliases: ["alignment template", "bankable service alignment", "instrument alignment template"]
tags: ["template", "founding-suite", "finance", "bankable-services"]
created: 2026-08-26
updated: 2026-09-30
source_project: "VoG as Patron Project Prototype"
source_documents: ["Bankable_Service_Alignment_Template_v0_1.md", "Bankable_Service_Alignment_Template_v0_2.md"]
epistemic_status: "documented-framework"
---

The fifth template in the [[templates/index|founding suite]]. Maps the [[biohub|BioHub]]'s [[retention-logic|retention services]] onto a specific financial instrument: a nature-linked [[performance-based-bond|performance-based bond]], a [[payment-for-ecosystem-services-pes|payment for ecosystem services]] mechanism, a biodiversity credit instrument, a carbon market mechanism, a water fund structure, or comparable outcomes-based finance instrument. Produces three outputs: the [[alignment-statement|Alignment Statement]], the Alignment Evidence Pack, and the [[alignment-compact|Alignment Compact]].

The full prompt text is on [[templates/bankable-service-alignment-template-prompts|Bankable Service Alignment Template: Prompts]].

## Overview

The three establishment templates produce nine outputs describing what the BioHub is, where it operates, and what it tenders. The [[templates/place-mandate-template|Place Mandate Template]] then sets the terms on which the BioHub engages with any outside party. None of these produce a specific alignment between the BioHub's services and a financial instrument's architecture. A performance-based bond has its own verification methodology, its own outcome metrics, its own payment triggers, its own implementation agent requirements, and its own investor structure. The BioHub's services must be legible to the instrument's architecture for a tender to proceed.

This template builds that legibility on the BioHub's terms. It first tests the instrument against the [[terms-of-engagement|Terms of Engagement]]: each element of the fixed ground and of the instrument test is checked against the instrument's documentation. An instrument that requires the place to change what the Terms fix fails, however well the services would otherwise align, and the run stops for cohort review. The cohort does not revise the Terms to fit an instrument; any revision follows the place's own process, as the Terms set out. Where the test passes, the template produces a mapping between what the BioHub delivers from the ground up and what the instrument demands from the market down. The mapping surfaces gaps: where the BioHub's monitoring does not yet meet the instrument's verification standard, where the BioHub's governance does not yet satisfy the instrument's implementation requirements, where the BioHub's evidence base does not yet meet the instrument's due diligence threshold.

The template is instrument-agnostic. Appendix A of the prompts page uses South Africa's Cape Water Performance-Based Bond (JSE ticker FR31PB) as a worked reference case. The template works equally for nature-linked performance-based bonds, PES mechanisms, biodiversity credit instruments, carbon market mechanisms, water fund structures, and other outcomes-based finance instruments.

## When to run this template

Run this template after the [[templates/place-mandate-template|Place Mandate Template]] has been completed and the cohort has identified at least one financial instrument (existing or planned) that purchases services the BioHub can deliver. The BioHub should have:

- The nine outputs of the three establishment templates produced and accepted by the cohort.
- The three Place Mandate outputs, with the Terms of Engagement co-signed by the cohort and the place's ratifying authorities.
- At least one target financial instrument identified by name, issuer, or instrument class.
- Access to the instrument's public documentation (prospectus, term sheet, implementation plan, verification methodology) or, where the instrument does not yet exist, access to comparable instruments in the same class.
- A service from the [[tenderable-services-portfolio|Tenderable Services Portfolio]] that the target instrument is designed to purchase.

Do not map services onto an instrument before applying the Terms' instrument test.

Do not run this template as a substitute for the establishment suite. A BioHub that has not established its identity, [[bioregion|BioRegion]], and value proposition cannot align with a financial instrument because it has nothing to align.

Do not run this template against an instrument that does not purchase services the BioHub offers. If the instrument purchases carbon offsets and the BioHub's carbon sequestration service is categorized as speculative pending research in the Value Proposition Evidence Pack's [[readiness-diagnostic|readiness diagnostic]], the alignment exercise is premature. Resolve the speculative categorization first through field research.

## Prerequisite documents

- The nine outputs of the three establishment templates.
- The three outputs of the Place Mandate Template: the [[place-mandate|Place Mandate]], the [[twenty-year-value-ledger|Twenty-Year Value Ledger]], and the Terms of Engagement with its instrument test.
- [[biostack|BioStack]] and [[bioconomy|BioConomy]] foundational document.
- Framework of coordination forms ([[frameworks/time-framework|TIME]], or an equivalent).
- Commitment pooling document (the [[ruddick-will|Ruddick]] and Burgess-Bergstra basis).
- Target instrument documentation: all publicly available material on the specific financial instrument or instrument class the BioHub is targeting.

## The three prompts

**Prompt 1: Test the terms and map the alignment hypothesis.** Opens with the Terms test: each element of the Terms of Engagement's fixed ground and instrument test is marked compatible, negotiable, or incompatible against the instrument's documentation. An incompatible element stops the run for cohort review. Where the test passes, produces a first-pass mapping of the BioHub's services against the target instrument's architecture, with two faces (bottom-up: what the BioHub delivers; top-down: what the instrument demands). Categorizes each row as aligned, alignable, misaligned, or not applicable. Includes an alignment summary and a gap inventory. The mapping is a hypothesis for cohort review.

**Prompt 2: Build the alignment evidence pack.** Takes the confirmed alignment hypothesis and builds an evidence pack across seven sections: instrument class research (survey of the instrument class globally), instrument mechanics analysis, verification methodology deep dive, regulatory and legal mapping, precedent alignment cases, price-discovery evidence, and an alignment stress test that revises the Prompt 1 map in light of the evidence. Also produces a readiness diagnostic and gap register specific to instrument alignment.

**Prompt 3: The three final documents.** Produces the Alignment Statement, the Alignment Evidence Pack, and the Alignment Compact.

## The three outputs

**Alignment Statement.** Short, formal document. Five to ten pages. Maps the BioHub's [[retention-economics|retention]] services onto the target instrument's architecture. States what the BioHub delivers, what the instrument purchases, how the two align, where the gaps are, and what makes the BioHub a credible counterparty. This is the document the BioHub coordinator sends to the instrument's arranger, verification agent, or implementation partner as first contact.

**Alignment Evidence Pack.** Long, structured referential document. Twenty-five to forty-five pages. Compiles the instrument research, verification methodology analysis, precedent instrument cases globally, the specific mapping between what the BioHub delivers and what the instrument purchases, regulatory and legal requirements, and price-discovery evidence specific to the instrument. The operational knowledge base for preparing the specific instrument-aligned tender.

**Alignment Compact.** Coordination and commitment document. Five to ten pages. Co-signed by the cohort. Establishes what the cohort commits to build toward instrument readiness. Specifies the build-out steps, the monitoring and verification architecture to be constructed, the governance requirements to be met, the partnerships to be formalized, and the timeline. A [[e-form-emergent|+E coordination instrument]] that binds the cohort to a shared build-out trajectory without depending on any single institution's mandate or any single funder's cycle. It operates under the Terms of Engagement and may not contradict them.

## Cohort work between prompts

Between Prompts 1 and 2, the coordinator convenes the cohort to review the alignment hypothesis. The cohort confirms which alignment pathways warrant deeper evidence work, flags any gaps the hypothesis has surfaced that the cohort can address from local knowledge, and identifies open questions for Prompt 2 to research.

Between Prompts 2 and 3, the coordinator convenes the cohort to review the evidence pack, resolve tensions, confirm the build-out priorities, and agree on timeline commitments.

Both cohort review steps operate under the decision-making forms established in the [[founding-compact|Founding Compact]]. Neither can be delegated to the AI. See [[running-a-template|Running a Template]] for the shared conventions.

## The alignment map

Prompt 1's central deliverable is the alignment map. For each outcome the instrument purchases, a two-column alignment shows what the BioHub delivers (from the bottom-up analysis of the establishment documents) and what the instrument requires (from the top-down analysis of the instrument documentation). Each row is categorized:

- **Aligned.** The BioHub's current capacity meets the instrument's requirement. Cite the specific evidence from the establishment documents.
- **Alignable.** The BioHub's capacity is oriented toward the requirement but does not yet meet it. Specify the gap and what build-out is [[needed|needed]].
- **Misaligned.** The BioHub's current work does not correspond to this requirement. State whether the misalignment is structural (the BioHub's retention logic conflicts with the instrument's design) or developmental (the capacity can be built but is not yet present).
- **Not applicable.** The instrument requirement does not apply to this BioHub's context.

Each row also carries a Terms column recording whether meeting the instrument's requirement would touch the fixed ground of the Terms of Engagement. A row that is aligned on capacity and incompatible with the Terms is treated as misaligned, and the misalignment is structural.

Where the instrument is designed as a series (with multiple tranches covering different geographies or ecosystems), the alignment map identifies which tranche or series extension the BioHub would target and why.

## Verification is the load-bearing joint

A BioHub can have strong retention services and a well-coordinated cohort, but if its monitoring architecture does not produce data in the form the verification agent accepts, the alignment fails at the point of measurement. Prompt 2's verification methodology deep dive receives the most research depth for this reason.

Verification is distinct from monitoring. Verification is the independent, third-party assessment of whether outcomes have been achieved. Monitoring is the ongoing measurement the BioHub or its partners conduct. Both are needed. They serve different parties and operate under different standards. The Alignment Compact's monitoring and verification architecture section specifies what the BioHub commits to build to meet the instrument's verification standard.

## Retention meets market

A performance-based bond operates on market logic (+M). The BioHub's Alignment Compact governs the relationship between the bond's market logic and the BioHub's retention logic (+E). The Compact ensures that the instrument's payment structure does not reduce the BioHub's coordination work to a contractor relationship. The BioHub tenders a service; it does not contract out its governance. The Terms of Engagement set the outer boundary of that relationship. This distinction is visible in the Alignment Compact's provisions on governance requirements, risk register, and relationship to the [[tender-compact|Tender Compact]].

## The Cape Water bond reference case

Appendix A of the prompts page uses South Africa's Cape Water Performance-Based Bond (JSE ticker FR31PB) as a worked reference case. The bond was issued at ZAR 2.5 billion (approximately US$132 million) on 1 April 2026 and listed on the JSE on 17 April 2026, arranged by Rand Merchant Bank, with co-anchor investors including the International Finance Corporation, FSD Africa Investments, and Aluwani Capital Partners, and with the FirstRand Foundation as outcomes-based funder. The Nature Conservancy South Africa is the implementation agent for the first tranche. Conservation Alpha is the independent verification agent.

A BioHub operating within a nationally designated [[strategic-water-source-area-swsa|Strategic Water Source Area]] but outside the bond's first tranche geography would target a subsequent tranche in the series, aligning its Water Retention Landscape restoration work to Conservation Alpha's verification methodology and building the monitoring infrastructure the methodology requires.

The reference case is illustrative. Instrument mechanics, regulatory environments, and verification methodologies vary across jurisdictions and asset classes. The template surfaces the jurisdiction-specific and instrument-specific details.

## Handoff to operational work

The three outputs feed:

**Instrument-party engagement.** Alignment Statement is the first-contact document, sent with the Terms of Engagement. Evidence Pack answers due diligence questions. Alignment Compact demonstrates that a credible build-out plan exists and is governed by cohort commitment.

**Tender preparation.** When the readiness diagnostic's ready-after-specified-build-out items are completed, the BioHub prepares a specific tender proposal. That proposal operates under the Tender Compact (from the Value Proposition Template) and draws on the Alignment Statement and Evidence Pack for instrument-specific content.

**Partnership formalization.** The Alignment Compact's partnership commitments drive formal engagement with conservation bodies, verification agents, implementation partners, and other coordination partners.

**Monitoring and verification build-out.** The Alignment Compact's monitoring and verification architecture section provides the specification for the infrastructure the BioHub commits to build.

**Subsequent instrument alignment.** This template can be run again for a different target instrument. A BioHub may align with multiple instruments simultaneously (a water bond and a biodiversity credit mechanism, for example). Each run produces its own Alignment Statement, Evidence Pack, and Compact. Where two instruments share verification requirements or governance conditions, cross-referencing between alignment runs reduces duplication.

**Multi-BioHub coordination.** Where more than one BioHub in a BioRegion targets the same instrument, the respective Alignment Compacts are coordinated under the BioRegion Charter's multi-BioHub coordination protocols. See [[using-templates-across-biohubs|Using Templates Across BioHubs]].

## Related pages

- [[templates/bankable-service-alignment-template-prompts|Bankable Service Alignment Template: Prompts]]
- [[templates/index|The Templates]]
- [[biohub-identity-template|BioHub Identity Template]]
- [[bioregion-establishment-template|BioRegion Establishment Template]]
- [[value-proposition-template|BioConomy Value Proposition Template]]
- [[templates/place-mandate-template|Place Mandate Template]]
- [[terms-of-engagement|Terms of Engagement]]
- [[running-a-template|Running a Template]]
- [[performance-based-bond|Performance-Based Bond]]
- [[payment-for-ecosystem-services-pes|Payment for Ecosystem Services]]
- [[bioregional-financing-facility-bff|Bioregional Financing Facility]]
- [[strategic-water-source-area-swsa|Strategic Water Source Area]]
- [[water-retention-landscape|Water Retention Landscape]]
- [[alignment-statement|Alignment Statement]]
- [[alignment-compact|Alignment Compact]]
- [[readiness-diagnostic|Readiness Diagnostic]]
- [[gap-register|Gap Register]]
- [[e-form-emergent|+E Coordination Form]]
- [[m-form-market|+M Coordination Form]]

## Sources

- The Nature Conservancy (2018). *[[sources/tnc-gctwf-business-case|Greater Cape Town Water Fund: Business Case]]*
- Greater Cape Town Water Fund. *[[sources/gctwf-sustainable-funding|Sustainable Funding for Nature-Based Solutions]]*
- Power, S. and Seefeld, L. *[[sources/power-seefeld-biofi|BioFi: Bioregional Finance for the Regenerative Economy]]*
- [[sources/lemaitre-2019|Le Maitre, D. et al. (2019). Water yield from invasive alien plant control]]
- [[sources/van-wilgen-2008|van Wilgen, B. et al. (2008). Invasive alien plants and ecosystem services]]

## Provenance

Extracted from *Bankable Service Alignment Template* v0.1 (August 26, 2026) in the VoG as Patron Project Prototype knowledge base. Full prompt text, output specifications, evidentiary discipline (IC / MS / TBV tagging), constraints, caveats, and the Cape Water bond worked reference case (Appendix A) remain in the source document. This page presents the shape of the template, its position in the suite, the cohort work it requires, and the three documents it produces, in a form legible to a coordinator arriving at the wiki without prior context.

Adjusted 30 September 2026 when the [[templates/place-mandate-template|Place Mandate Template]] became the fourth template: renumbered as the fifth, with the Terms test added to Prompt 1, a Terms column added to the alignment map, and the rule that the Alignment Compact operates under the Terms of Engagement. Source document v0.1 was later lost. On the same day v0.2 was reconstructed from this page, the glossary entries extracted from v0.1, and the v0.2 changes, and its full prompt text was published on [[templates/bankable-service-alignment-template-prompts|Bankable Service Alignment Template: Prompts]].
