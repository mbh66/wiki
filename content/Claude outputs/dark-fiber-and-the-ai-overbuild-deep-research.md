# Deep Research Instructions: Dark Fiber and the AI Overbuild

Version 0.1, 7 November 2026. Prepared for a Claude deep research run. Builds on three documents Michael supplied or the wiki already holds (section 6): Gary Marcus's *Report from the Vatican* (31 October 2026), the wiki's research brief *Planet Labs: Ownership, Mission and the Terms of Ask Planet* (7 November 2026), and the wiki's disruption snapshot for early November 2026. It is allied to the essay *After the Crash: A BioConomy Reading* (7 November 2026).

---

## 1. What this run produces

Three deliverables:

1. **An evidence brief,** 25 to 50 KB, at the working path `research/dark-fiber-and-the-ai-overbuild`. Michael will decide after reading it whether it is published.
2. **Two reference tables,** each delivered as a Markdown table inside the brief and as a separate CSV with the same columns (section 5): a fiber and AI parallels table, and an AI use register.
3. **A hand-back** to Michael (section 14).

### 1.1 The question

Between about 1996 and 2001, telecom carriers and their financiers laid far more optical fiber than the market could use. When the bubble burst, most of that fiber sat unlit ("dark"), carriers went bankrupt, and the capacity was later bought for a fraction of its cost. The cheap capacity then carried the next decade of the internet, and the uses it carried were set by whoever bought it and by the rules under which they bought it.

Michael sees the same pattern in today's investment in data centers for AI. He wants to know:

1. How close the parallel between the fiber build-out and the AI build-out really is, and where it breaks.
2. If the AI build-out is repriced, who inherits the capacity, and for what.
3. What the record shows about AI being put to defense, security and surveillance use on one side, and to place-based and prosocial use on the other, and how capital, compute and institutional support divide between the two.

### 1.2 The framing: who inherits the overbuild?

The run tests one organizing claim:

> Infrastructure built in a speculative installation period is repriced when the speculation ends. The uses it serves in the period that follows depend on who acquires it cheaply, and on the institutions under which they acquire it.

The claim draws on Carlota Perez's account of technological revolutions (installation period, frenzy, turning point, deployment period) and on the wiki's [S-curve thesis](https://wiki.bioconomy.earth/research/growth-economics). The run tests it twice: backward, on fiber, where the outcome is known; and forward, on AI, where the run can report only the evidence so far and the forks ahead.

Three questions carry the framing:

- **What is the dark fiber of AI?** Glass in the ground lasted decades. AI accelerators lose most of their value in a few years. The durable residue of the AI build-out may be something else: grid connections and power contracts, sites and buildings, water rights, cooling plant, trained open-weight models, and the people trained to run them. The run must establish what survives a repricing, because only what survives can be inherited.
- **Who bought the dark fiber, and what did it carry?** Platform companies, consolidated carriers, research and education networks, municipalities, community networks, and state intelligence agencies tapping the backbone all took a share. The run should establish the shares and the rules that decided them.
- **Who is positioned to inherit AI capacity?** Defense ministries and security agencies are buyers of last resort with stable budgets. Place-based and prosocial users (forest monitors, farmer advisory services, water managers, health services, Indigenous and local language projects) mostly run small, bounded systems and have little capital. The run should report what the record shows about each, and what institutions exist or are proposed that would decide the split.

Two normative reference points frame the use question without settling it:

- **Pope Leo XIV's address of 30 October 2026** (section 6.1): the decisive question is "What purpose should it serve?"; decisions about targeting and border databases must never be delegated; AI must be directed to the common good; and the most urgent need is "institutions capable of putting these principles into practice."
- **Gary Marcus's distinction** in the same report between bounded systems (GPS navigation, AlphaFold), which work on a defined problem with a defined database and have not caused harm, and open-ended agents, which have.

The run reports evidence against these reference points. It does not adopt them as conclusions.

### 1.3 The distinctions to keep

- **Parallel and identity.** A rhyme in the financing or the narrative is a finding. The two build-outs are still different technologies with different physical lives. Report where the parallel holds, where it fails, and where the evidence is too thin to say.
- **Capacity and use.** Who owns the infrastructure and what it is used for are separate questions. A company can build for chatbots and sell to a navy.
- **Defense, security and surveillance.** These overlap but are not the same. Keep military applications (targeting, autonomy, intelligence analysis), domestic security and policing, border and migration control, and commercial surveillance in separate rows.
- **Place-based and prosocial.** A prosocial use serves a public good anywhere (protein folding, weather forecasting). A place-based use serves a specific place and is governed, at least in part, by the people of that place. Some uses are both. Keep the labels separate.
- **Dual use inside one firm.** Planet Labs is the worked example: about 70 percent of revenue from defense and intelligence in the quarter to 31 July 2026, alongside free forest-monitoring programs [IC per the wiki's brief]. Look for the same pattern in other firms and report it without inferring motive.

## 2. Terms to verify and define

- **Dark fiber.** Installed optical fiber not yet lit with transmission equipment. Distinguish the narrow meaning (unlit strands, often leased to buyers who light them) from the loose meaning (idle capacity after the crash). Note that much of the post-2001 "glut" was also unused wavelengths on lit fiber.
- **Installation period, frenzy, turning point, deployment period.** Perez, *Technological Revolutions and Financial Capital* (2002). Quote her definitions. Report any published view by Perez on whether the AI build-out fits her model.
- **Vendor financing.** Equipment makers lending to their own customers to buy their equipment (Lucent, Nortel, Cisco in 1999 to 2001). Define it, and define the current terms the run will meet: circular or round-trip investment, special purpose vehicles for data centers, private credit, GPU-backed lending.
- **Useful life and depreciation.** How long a fiber route, a data center shell, a power interconnection and an AI accelerator are depreciated over in company filings, and the debate over whether accelerator lives are set too long.
- **Stranded asset.** Use the standard finance definition and the climate-finance usage.
- **Dual use.** The export-control meaning and the general meaning.
- **Open access.** In telecoms: rules requiring owners of infrastructure to sell capacity to others on equal terms. Report whether any comparable rule has been proposed for compute.

## 3. Where to look

### 3.1 The fiber build-out, 1996 to 2005

- **Scale.** Total telecom capital expenditure in the United States and worldwide, 1996 to 2002, and as a share of GDP. Route miles and fiber miles laid. The share of fiber lit in 2001 to 2003 (a figure of "2 to 5 percent" is widely quoted; trace it to its origin and grade it).
- **Demand forecasts.** The claim, attributed to WorldCom and UUNET executives, that internet traffic doubled every 100 days. Andrew Odlyzko's work showing traffic roughly doubling each year. Report how the forecast was used to justify investment.
- **Financing.** Vendor financing by Lucent, Nortel and Cisco, with amounts and write-offs. Junk bond issuance by carriers. The role of analysts (for example Jack Grubman) and the 2003 Global Analyst Research Settlement.
- **Accounting.** WorldCom's capitalization of line costs (US\$3.8 billion first disclosed in June 2002, later larger), Global Crossing's capacity swaps (IRUs), Qwest. Report as recorded by courts and regulators.
- **The crash.** Market value lost by telecom firms, 2000 to 2002. The bankruptcies: Global Crossing (January 2002), WorldCom (July 2002), 360networks, Flag Telecom, KPNQwest, Metromedia Fiber and others. Sale prices of networks in bankruptcy as a share of their build cost.
- **Who bought, and what the fiber carried.**
  - Platform companies, especially reports of Google buying dark fiber from about 2005.
  - Consolidators such as Level 3.
  - Research and education networks (Internet2, National LambdaRail, European NRENs) and whether they acquired cheap capacity.
  - Municipal and community networks, and the state laws later passed to restrict them.
  - State surveillance on the backbone: the AT&T Folsom Street facility (Room 641A, disclosed 2006), and the NSA Upstream program (disclosed 2013). Report what courts, inspectors general and official reviews found.
  - Africa and the Global South: the SAT-3/WASC consortium and wholesale prices before 2009, the arrival of SEACOM, EASSy and other cables from 2009, and the price falls that followed. Use only as a comparison; detail about one country belongs elsewhere (section 11).
- **Institutions.** Open access and unbundling rules under the Telecommunications Act of 1996 and their later rollback; universal service funds; net neutrality. Report whether the rules in force when capacity was cheap affected who got it.

### 3.2 The AI build-out, 2023 to November 2026

- **Scale.** Capital expenditure by Microsoft, Alphabet, Amazon, Meta, Oracle and the frontier labs, by year, and as a share of US GDP. Announced projects (for example Stargate) and their stated cost, set against what has been built. Data center power demand and grid interconnection queues. Use filings and official statistics first.
- **Demand evidence.** Revenue of AI model companies set against their spending. Evidence on productivity gains from AI (the early November snapshot reports thin evidence; update it). Forecasts of compute demand used to justify investment, and who made them.
- **Financing.** Nvidia's investments in and agreements with its customers; arrangements in which a supplier, a lab and a cloud provider each fund the others; data center special purpose vehicles and private credit deals; GPU-collateralized loans. Report amounts, dates and parties from filings and reputable reporting.
- **Accounting.** The useful lives hyperscalers assign to servers and accelerators, changes to those lives since 2020, and published critiques. Report without inferring wrongdoing.
- **The November 2026 repricing.** Use the wiki's [early November snapshot](https://wiki.bioconomy.earth/disruption/20261107-early-november) as the starting point and update it to the date of the run. Report what has happened since to capex guidance, credit spreads on data center debt, and project cancellations or delays.
- **What would survive a repricing.** For each layer (sites and shells, power contracts and interconnections, cooling and water, accelerators, networking, trained models, skilled staff), give the evidence on useful life and resale value.

### 3.3 AI for defense, security and surveillance

Build the register (table 5.2) from the record. Leads to verify, not to assume:

- **Defense contracts with frontier labs and cloud providers:** US Department of Defense awards to AI model companies in 2025 and 2026; the Joint Warfighting Cloud Capability; national security versions of commercial models.
- **Defense-first AI firms:** Palantir (Maven Smart System, Army enterprise agreements, ImmigrationOS), Anduril, Shield AI, Scale AI's defense work, Helsing in Europe. Revenue, contract values, valuations.
- **Targeting and autonomy:** reporting on AI-assisted targeting systems in recent conflicts, including the systems reported in Gaza by +972 Magazine and others, and the responses of the governments and militaries named. Report claims and denials together.
- **Border, migration and policing:** biometric border systems, migration databases, facial recognition firms (for example Clearview AI), automated license plate reader networks. Regulatory actions against them.
- **Commercial Earth observation:** Planet Labs and its peers, using the wiki's brief for Planet.
- **International governance:** the Geneva negotiations on lethal autonomous weapons in November 2026 that the Pope refers to, and their outcome by the date of the run.

### 3.4 AI for place-based and prosocial outcomes

Leads to verify:

- **Science as a public good:** AlphaFold and its open database; machine learning weather models (GraphCast and successors) and their use by national weather services.
- **Environmental monitoring:** Climate TRACE, Global Fishing Watch, Global Forest Watch, Skylight and EarthRanger (Allen Institute), acoustic forest monitoring (Rainforest Connection), methane detection (Carbon Mapper).
- **Agriculture and water:** farmer advisory services using language models (for example Digital Green's Farmer.Chat), CGIAR programs, irrigation and catchment management tools.
- **Language and data sovereignty:** Te Hiku Media in Aotearoa New Zealand and its Kaitiakitanga license, Masakhane, Lelapa AI's models for African languages, the CARE Principles for Indigenous Data Governance.
- **Public and community compute:** national or public AI models (for example Switzerland's), research computing for universities, community-owned or cooperative compute, and any proposals to take over surplus data center capacity for public use.
- **Bounded systems:** evidence on the compute, cost and energy needs of small and task-specific models used in place-based work, set against frontier systems. This tests Marcus's distinction.

### 3.5 Measuring the split

The run should attempt, with stated uncertainty, an order-of-magnitude comparison of capital, compute and public funding going to each track in 2025 and 2026. If the data does not allow a comparison, say so and say what data would be needed. Do not manufacture a ratio.

## 4. Hypotheses to grade

Grade each with evidence for, evidence against, a grade and one line on what a practitioner can safely conclude.

**H1. Scale.** AI capital expenditure, as a share of US GDP, has exceeded the peak of telecom capital expenditure in 1999 to 2001.

**H2. Financing rhymes.** The AI build-out uses financing structures that resemble telecom vendor financing and capacity swaps: suppliers funding their customers, and parties booking revenue from each other.

**H3. Forecasts rhyme.** The demand forecasts used to justify AI investment share the features of the "doubling every 100 days" claim: a single interested source, extrapolation from an early growth rate, and little independent measurement.

**H4. The residue differs.** The durable residue of the AI build-out lies in power, sites and water more than in accelerators, so the "dark fiber" of AI is grid capacity and land.

**H5. Cheap capacity went to the platforms and the state.** After the fiber crash, the largest shares of cheap capacity went to platform companies and carriers, and the backbone became a site of state surveillance, while public, research and community networks took a smaller share.

**H6. Defense is the buyer of last resort.** As commercial AI revenue falls short of investment, defense, intelligence and security contracts are growing as a share of AI company revenue, following the pattern in Planet Labs.

**H7. Place-based AI is bounded and cheap.** Place-based and prosocial applications mostly run on small or task-specific models and do not depend on the frontier build-out, so a repricing would harm them less than it harms open-ended agents.

**H8. Institutions decided the fiber outcome and will decide the AI one.** The rules in force when capacity became cheap (open access, universal service, limits on municipal networks, surveillance law) shaped who got fiber; comparable rules for compute are absent or only proposed. This tests the Pope's fifth point.

## 5. Reference tables

### 5.1 Fiber and AI parallels

| Column | Content |
|---|---|
| `dimension` | Scale, financing, accounting, forecasts, analysts and media, physical life, crash trigger, buyers of distressed assets, surveillance, public and community access, institutions |
| `fiber_record` | What happened, 1996 to 2005, with figures and dates |
| `ai_record` | What has happened, 2023 to the run date, with figures and dates |
| `parallel` | Strong, partial, weak, or breaks |
| `note` | One line on where it holds or fails |
| `grade` | `[IC]`, `[MS]` or `[TBV]` for the weakest claim in the row |
| `sources` | Short citations |

### 5.2 AI use register

| Column | Content |
|---|---|
| `organization` | Name as recorded |
| `kind` | Frontier lab, hyperscaler, defense contractor, startup, government agency, NGO, research institute, community organization |
| `track` | Defense, domestic security and policing, border and migration, commercial surveillance, prosocial, place-based, dual use |
| `application` | What the system does, as described in the record |
| `place` | Country or region, and whether the use is governed by people of that place |
| `money` | Contract value, funding or revenue, with currency and dates |
| `compute` | Frontier model, cloud service, small or task-specific model, unknown |
| `governance` | Human oversight, published evaluation, data license or community consent, as recorded |
| `grade` | |
| `sources` | |

Aim for at least 15 rows in each of the defense-security and prosocial-place-based groups, chosen for size and for how well the record documents them.

## 6. What is already known

### 6.1 *Report from the Vatican* (Gary Marcus, 31 October 2026)

Marcus reports meeting Pope Leo XIV on 30 October 2026 and quotes the Pope's five points, with paragraph references to the encyclical *Magnifica Humanitas*:

1. The future of AI "is not pre-determined"; the decisive question is "What purpose should it serve?" A reliable system serving the person is worth more than a powerful one whose consequences cannot be foreseen (nos. 97, 104).
2. Machines are tools, not persons; granting them rights or legal personhood risks obscuring human responsibility (no. 99).
3. Certain decisions must never be delegated: "When a person is placed on a target list or entered into a border control database, there is a danger that he or she will be reduced to a mere data point." AI must be "disarmed" (no. 110), and the Pope encouraged the states meeting in Geneva in November to ban lethal autonomous weapons (nos. 198 to 200).
4. Intelligent technologies must serve the common good and never "serve merely the interests of a privileged few" (nos. 71 to 72, 161).
5. The most urgent need is "institutions capable of putting these principles into practice," with shared standards, independent oversight and accountability (nos. 64, 105, 107).

Marcus's own remarks, as he transcribed them:

- The industry settled on one approach, the large language model, which predicts well and reasons, sticks to facts and follows instructions poorly.
- Bounded systems such as GPS navigation and AlphaFold "work with a particular problem, a particular database, in a particular way" and have not caused harm.
- Open-ended agents have caused about "10,000 incidents," including an incident at Hugging Face, an attack on a French refrigeration system and cyberattacks in Japan. He calls for a voluntary or mandated product recall of such agents.
- AI companies "are spending much more money than they're earning" and sell agents because agents "burn more tokens."

Verify the Pope's text against the Vatican's published version of the address and the encyclical. Treat Marcus's incident figures and company finance claims as `[TBV]` until corroborated. Marcus is a Global Ambassador for the encyclical through the Domus Communis Foundation; label him as an interested party on the policy question.

### 6.2 The wiki's Planet Labs brief

Read https://wiki.bioconomy.earth/research/planet-labs-ownership-and-mission. Take from it the revenue mix (defense and intelligence about 70 percent of revenue in the quarter to 31 July 2026), the founder voting control, the public benefit charter, and the terms of the Planet AI app (queries kept out of training, reports owned by Planet). Use Planet as the worked example of dual use inside one firm. Do not repeat its research.

### 6.3 The early November snapshot

Read https://wiki.bioconomy.earth/disruption/20261107-early-november. It records a Democratic sweep of the US Congress, local votes against data centers almost everywhere they were held, a fall of about 5.5 percent in the Nasdaq Composite in one session (about US\$2.5 trillion of market value), thin evidence of AI productivity gains, and a Federal Reserve still raising rates. Start the AI repricing section from it and update to the run date.

### 6.4 *After the Crash: A BioConomy Reading*

Read https://wiki.bioconomy.earth/essays/after-the-crash-a-bioconomy-reading if published, or ask Michael for the draft. It reads the disruption as the end of the steep part of the S-curve and as the arrival of the Emergent form of coordination. This run supplies evidence for or against that reading on one front, the infrastructure of the build-out. It also takes up the question that essay held over: Tom Morgan's observation that high-agency people are using AI to bring their gifts to market. Treat that as one row type in the prosocial track (individual and small-business use) and report the evidence Morgan cites (Stripe's May to June 2026 research on solo founders) as `[TBV]` until checked.

### 6.5 Michael's background

Michael worked in telecommunications and systems integration across several continents through the fiber build-out. His recollections are not evidence for this brief. List in the hand-back any questions the record leaves open that his experience might answer.

## 7. Evidence the framing must face

Give the strongest case against the framing as fully as the case for it:

1. **The parallel may be shallow.** AI capacity is being used heavily now, and the fiber glut was idle capacity. Report utilization evidence for data centers and accelerators.
2. **The buyers differ.** The fiber build-out was financed by debt-laden new carriers; the AI build-out is financed mostly by the cash flows of the largest and most profitable companies in history. A repricing may hurt their shareholders without forcing distressed sales.
3. **Accelerators do not wait.** A dark fiber strand could be lit years later; an idle accelerator becomes obsolete. There may be no cheap inheritance at all, only write-offs.
4. **Defense and prosocial uses may share the same base.** The Planet example shows defense revenue paying for satellites that forest monitors use. Report published arguments that defense spending funds civilian capability, and arguments against.
5. **The deployment period after fiber was broadly beneficial.** Cheap bandwidth carried search, video, mobile money and open-source software as well as surveillance. Report the full range of what it carried.

## 8. Sources and balance

1. **Primary records first:** company filings, court records, regulator findings, official statistics, contract databases, the Vatican's published texts.
2. **Then peer-reviewed work and books by economic historians,** for example Perez, Odlyzko, William Janeway, and studies of the telecom bubble.
3. **Then reputable journalism,** then company statements, then commentary and newsletters. Label interested parties: investors, vendors, advocates, and companies describing their own impact.
4. **Look as hard for contradicting evidence as for supporting evidence.** If you find no serious opposition to a claim, say so and say where you looked.
5. **Date every figure** and name its source.
6. **Grade every claim:**
   - `[IC]` Independently Corroborated: two or more independent sources, or an official record.
   - `[MS]` Mission-Sourced: from the account of the party the claim is about, or from the wiki's own project documents.
   - `[TBV]` To Be Verified: plausible and unconfirmed.
7. **Recommend a status** for each hypothesis from the wiki's scale: `documented-fact`, `documented-framework`, `academic-inference`, `structural-inference`, `working-hypothesis`, `speculative-projection`.

## 9. The corpus

Check https://wiki.bioconomy.earth/llms.txt and read the pages that bear on the brief, at least: the S-curve research brief, Deceleration Indicators, Surveillance Capitalism (which treats Palantir as part of the data-fusion complex), the Alpha Window, the Emancipation Architecture, the Planet AI App tool page and the disruption folder. Use the glossary vocabulary exactly. Propose glossary entries in the hand-back for terms the brief needs and the glossary lacks (for example dark fiber, installation period, turning point, vendor financing, stranded asset, dual use, open access). Do not coin other terms.

## 10. Scope

- In scope: the fiber build-out and crash, 1996 to 2005, with the global picture and US detail; the AI build-out, 2023 to the run date; defense, security, surveillance, prosocial and place-based uses of AI worldwide.
- Out of scope: investment advice. Report figures and analyst views; do not say whether to buy or sell anything, or predict a crash date.
- Out of scope: technical debates about model capability, except where they bear on what a repricing leaves behind or on the bounded and open-ended distinction.
- Out of scope: verdicts on wars or on the conduct of named armed forces. Report what systems were supplied, to whom, and what is on record about their use, with responses.

## 11. Conflict of interest, and how parties and people are described

**Conflict note.** This run is carried out by Claude, made by Anthropic. Anthropic is a frontier AI company: it builds or leases data center capacity, it has reported contracts and products for government and national security customers, its investors include hyperscalers whose capital spending this brief examines, and its models power the Planet AI app. State this at the top of the brief's Provenance section. Apply the same tests to Anthropic as to every other company, using the public record only, and do not rely on Claude's own knowledge of Anthropic for any claim.

Then:

- Describe every company, government, organization and person only through what they have said or done, as recorded. Never state what they want, intend or would accept.
- Do not attribute motives. Report statements, contracts and decisions, with dates.
- Name individuals only through public roles and published statements.
- Give a right-of-reply line for every criticism: the party's published response, or a note that none was found.
- Material about one specific place (a South African data center, a Western Cape catchment, the Valley of Grace) belongs on the BioHubs directory or the W2DF register. List it in the hand-back and keep only brief examples in the brief.

## 12. Brief format

Working title: "Dark Fiber and the AI Overbuild: Who Inherits the Capacity." Propose a better one if the evidence suggests it.

```yaml
---
title: "..."
description: "..."            # at most 280 characters, says what the page contains, no [TBV] claims
aliases: ["dark fiber", "AI overbuild", "AI data center bubble", "telecom bubble"]
tags: ["research", "disruption", "deceleration", "ai-capex", "data-centers", "dual-use", "bioconomy"]
created: 2026-11-07
updated: 2026-11-07
source_project: "BioConomy"
source_documents: ["dark-fiber-and-the-ai-overbuild-deep-research.md", "Gary Marcus, 'Report from the Vatican' (31 October 2026)"]
epistemic_status: "..."
---
```

Body, in this order, with no level-one heading:

1. One-sentence thesis stating what the record shows.
2. Overview, two to four paragraphs, for a practitioner who did not live through the fiber bubble.
3. The fiber build-out and what it left: scale, financing, crash, buyers, uses, institutions.
4. The AI build-out to date: scale, financing, accounting, demand evidence, the November 2026 repricing.
5. What survives a repricing, layer by layer.
6. Table 5.1 with commentary.
7. AI for defense, security and surveillance.
8. AI for place-based and prosocial outcomes.
9. Table 5.2 and the attempt at measuring the split (section 3.5).
10. H1 to H8, each with evidence for, evidence against, grade, recommended status and one line on what a practitioner can conclude.
11. Evidence the framing must face (section 7).
12. The forks ahead: the institutional choices on record (proposed, adopted or absent) that would decide who inherits AI capacity, set against the Pope's fifth point. State them as choices the record shows, without recommending one.
13. A summary table: claim, grade, recommended status, safe to state publicly (yes / with caveat / no).
14. `## Related`, `## Sources` (full citations with URLs), `## Provenance` (opening with the conflict note).

Write dollar amounts as `US\$` and rand amounts as `R`: the site renders a bare `$` pair as math.

## 13. Voice

- American spelling, except in quotations and proper names.
- No em dashes.
- No "not X, but Y" constructions in any form, including "X, not Y", "rather than", "instead of", and "X does not mean Y. It means Z."
- No three-part rhythmic phrases.
- No hollow praise and no stock phrases ("leverage", "navigate", "delve", "unpack", "tapestry", "landscape" as a metaphor, "journey" for a process, "in today's world", "it's worth noting", "ultimately", "moreover", "furthermore", "indeed", "in essence").
- No closing summary that restates the brief.
- Diagnostic tone. Report what was built, financed, signed, sold and said, according to which record.

## 14. Hand back

With the brief and both CSVs, return:

1. The verdict on H1 to H8, one line each.
2. A plain answer to the organizing claim in section 1.2: how well it holds for fiber, what the evidence so far says for AI, and where it is silent.
3. The single strongest parallel and the single clearest break between the two build-outs, each in two sentences.
4. What the record shows survives an AI repricing, in five lines or fewer.
5. The five largest defense and security uses and the five best-documented place-based or prosocial uses, by money, with sources.
6. The institutional proposals on record that bear on who inherits AI capacity.
7. Questions for Michael that his telecom experience might answer.
8. Proposed glossary entries, each with a one-sentence definition and its `term_type`.
9. Sources used that have no page in the wiki's `sources/` folder, with full citations.
10. Place-specific material for the W2DF register or the BioHubs directory.
11. Every judgment call Michael should check, including how sources were weighed and how the conflict note was handled.
