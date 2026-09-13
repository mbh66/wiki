---
title: "Tax-to-Commons Policy Scan"
aliases: ["tax-to-commons policy scan", "fiscal transvestment policy scan", "tax-to-commons prompt"]
tags: ["tool", "ai", "prompt", "fiscal", "transvestment", "policy", "bioregional-economics", "bff"]
url: ""
maintained_by: "Michael Haupt"
platform: "Any AI assistant with web search (Claude, ChatGPT, Perplexity, etc.)"
pricing: "Varies by platform"
created: 2026-09-13
updated: 2026-09-13
source_project: "BioConomy"
source_documents: ["concepts/tax-to-commons-pathways.md"]
epistemic_status: "documented-framework"
---

A reusable prompt that produces a jurisdiction-specific policy brief identifying the legal mechanisms through which public revenue can be redirected toward a [[bioregional-financing-facility-bff|Bioregional Financing Facility]] (BFF) or commons trust. Any [[biohub|BioHub]] or community group exploring [[concepts/tax-to-commons-pathways|tax-to-commons pathways]] can use this prompt to map the fiscal landscape of their jurisdiction before drafting a proposal.

## What it does

The prompt asks an AI assistant to search for statutes, regulations, and policy instruments across four documented classes of legal mechanism, plus three structural questions about constitutional constraints, institutional forms, and freedom-of-information status. The output is a policy brief with cited statute numbers and section references, suitable for handing to a lawyer or presenting to a municipal council.

The four legal-mechanism classes are drawn from the wiki's [[concepts/tax-to-commons-pathways|Tax-to-Commons Pathways]] entry. The prompt is designed so that the person using it does not need to have read that entry first, though doing so will sharpen their follow-up questions.

## How to use it

1. Copy the prompt below.
2. Replace **[your jurisdiction]** with your country, state or province, and municipality.
3. Paste it into any AI assistant that has web search capability. Claude, ChatGPT, and Perplexity have all been tested. The prompt works best with models that cite sources.
4. Review the output against the statutes cited. AI assistants can hallucinate statute numbers. Verify every reference before using it in a proposal.
5. Use the output as the starting point for assembling the four components a [[concepts/tax-to-commons-pathways|tax-to-commons proposal]] requires: a legal hook, an institutional recipient, a measurable deliverable, and a governance structure.

## The prompt

> I am researching how public revenue in **[your jurisdiction: country, state/province, and municipality]** could be redirected toward a bioregional commons trust or financing facility. The BioConomy wiki (wiki.bioconomy.earth) documents a strategy called "tax-to-commons pathways," which identifies four classes of legal mechanism that enable this redirection. I need you to search for the specific laws, statutes, and policy instruments in my jurisdiction that correspond to each class.
>
> **For each of the four classes below, find and cite the relevant statute, regulation, or policy instrument in my jurisdiction. If nothing exists, say so and note the nearest equivalent or the gap.**
>
> **1. Percentage designation laws**
> Laws that allow individual taxpayers to direct a percentage of their income tax to a qualifying nonprofit, trust, or community organization. Examples from other jurisdictions: Hungary's 1% Law (Act CXXVI of 1996), Italy's otto per mille, Poland and Lithuania's percentage-philanthropy mechanisms. What I need: the statute (if any), the qualifying entity requirements, the percentage permitted, and how an organization registers to receive designations.
>
> **2. Ecological fiscal transfers**
> Mechanisms that redistribute intergovernmental transfers (from national/federal to state/provincial, or from state/provincial to municipal) based on ecological performance criteria such as protected area coverage, watershed restoration, biodiversity outcomes, or land-use classification. Examples: Brazil's ICMS-E (Ecological ICMS), Portugal's Local Finances Law (2007). What I need: the transfer formula, whether ecological criteria are included or could be added, the administrative body that sets the formula, and any documented proposals to introduce ecological weighting.
>
> **3. Property rates or tax differentiation for conservation land**
> Laws that permit differential property tax rates, exemptions, or rebates for land held in conservation, commons trust, or ecological restoration. Examples: South Africa's Municipal Property Rates Act (2004), US conservation easement tax incentives, UK agricultural relief. What I need: the relevant property tax statute, the categories of land that qualify for differential treatment, the authority that grants the classification, and whether commons-trust or community-land-trust structures qualify.
>
> **4. Municipal or local acceptance of complementary currency**
> Any legal provision, historical precedent, or active proposal under which a municipality accepts a non-national currency, voucher, or credit for partial payment of local taxes, fees, rates, or fines. Include relevant central bank legislation that governs or restricts this. Examples: the Wörgl stamp scrip experiment (Austria, 1932), Rohan Grey's municipal currency proposals, the Money on the Left Collective's movement-based proposals. What I need: the central bank act and legal tender provisions, any municipal fiscal powers that could accommodate partial payment in an alternative unit, and any documented cases or proposals.
>
> **Additionally, address these structural questions:**
>
> **5. Constitutional constraints on revenue allocation**
> What constitutional or statutory provisions govern how tax revenue is collected, pooled, and allocated in this jurisdiction? Specifically: Is all revenue required to flow into a consolidated fund? What authority does a municipality have to ring-fence or redirect a portion of local revenue? Cite the specific sections.
>
> **6. Institutional forms for receiving public funds**
> What legal entity types in this jurisdiction are recognized as competent to receive and administer redirected public revenue? Consider: trusts, cooperatives, Section 21 companies or equivalent nonprofits, community benefit organizations, special-purpose vehicles. What governance, auditing, and reporting requirements apply to each?
>
> **7. Freedom of information status**
> Has anyone filed a formal freedom-of-information or access-to-information request asking the treasury, revenue service, or central bank in this jurisdiction to describe the accounting treatment of incoming tax receipts at the reserve level? Search FOI databases and repositories for this jurisdiction. If no such request has been filed, note that as a gap and identify the relevant access-to-information statute under which one could be filed.
>
> **Format your response as a jurisdiction-specific policy brief.** Cite statute numbers, act names, and section references. Where a mechanism does not exist, state the gap clearly and note whether introduction would require new legislation, a regulation change, or an administrative decision. Where a mechanism exists but has never been used for commons-directed purposes, say so.
>
> **Background reading:** The concepts underlying this scan are documented at https://wiki.bioconomy.earth/llms.txt, particularly the entries on Tax-to-Commons Pathways, Transvestment, the Five Transvestment Pathways, Sound Finance, and the Bioregional Financing Facility (BFF).

## Design notes

The prompt asks for statutes and section numbers rather than general descriptions, because the person using it will need specific references to draft an actual proposal for their municipal council or governing body.

The FOI question is included because the research underlying the [[concepts/tax-to-commons-pathways|Tax-to-Commons Pathways]] entry found that almost no one has filed a formal information request asking a treasury or central bank to describe the accounting treatment of incoming tax receipts. The absence of such requests is itself a finding: the fiscal-space argument that underlies the entire tax-to-commons proposition rests on an accounting mechanic that can be confirmed or weakened through primary-source documentation, and in most jurisdictions that documentation has never been formally requested.

The "format as a policy brief" instruction pushes the output toward something a BioHub team can hand to a lawyer or present to a municipal council, rather than a conversational explainer.

## Limitations

AI assistants can fabricate statute numbers. Every reference in the output must be verified against the jurisdiction's actual statute books or official gazettes before it is used in any proposal or public document.

The prompt covers the four legal-mechanism classes documented in the wiki. Other fiscal pathways may exist in specific jurisdictions that do not map to these four classes. The output is a starting point for legal research, not a substitute for it.

The complementary-currency section (class 4) will return limited results in most jurisdictions, because few municipalities have explored this path. The prompt is designed to surface the gap as clearly as it surfaces existing mechanisms.

## Related pages

- [[concepts/tax-to-commons-pathways|Tax-to-Commons Pathways]]
- [[concepts/transvestment|Transvestment]]
- [[frameworks/five-transvestment-pathways|The Five Transvestment Pathways]]
- [[concepts/sound-finance|Sound Finance]]
- [[bioregional-financing-facility-bff|Bioregional Financing Facility (BFF)]]
- [[frameworks/three-feature-test|The Three-Feature Test]]
- [[essays/ai-quick-engage|AI Quick-Engage]]

## Provenance

Written September 2026. The prompt structure is derived from the four legal-hook classes documented in the Tax-to-Commons Pathways concept entry, which itself synthesizes research across Hungarian, Brazilian, Portuguese, South African, and Austrian fiscal mechanisms. The structural questions (sections 5-7) address the prerequisites the concept entry identifies for any tax-to-commons proposal: constitutional constraints, institutional recipient requirements, and the FOI gap.

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://wiki.bioconomy.earth/tools/ai/tax-to-commons-policy-scan/",
  "name": "Tax-to-Commons Policy Scan",
  "description": "A reusable AI prompt that produces a jurisdiction-specific policy brief identifying legal mechanisms for redirecting public revenue toward a bioregional commons trust or financing facility.",
  "applicationCategory": "AI Tool",
  "operatingSystem": "Any AI assistant with web search",
  "author": {
    "@type": "Person",
    "name": "Michael Haupt"
  },
  "datePublished": "2026-09-13",
  "isPartOf": {
    "@id": "https://wiki.bioconomy.earth/#website"
  },
  "keywords": [
    "tool",
    "ai",
    "prompt",
    "fiscal",
    "transvestment",
    "policy",
    "tax-to-commons",
    "bioregional-economics"
  ]
}
</script>
