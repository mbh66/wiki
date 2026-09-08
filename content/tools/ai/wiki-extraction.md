---
title: "Wiki Extraction"
aliases: ["wiki-extraction", "wiki extraction skill", "/wiki-extraction"]
tags: ["tool", "ai", "skill", "extraction", "quartz", "wiki"]
url: ""
maintained_by: "Michael Haupt"
platform: "Claude (Cowork)"
pricing: "Included with Claude subscription"
created: 2026-09-08
updated: 2026-09-08
source_project: "BioConomy"
source_documents: []
epistemic_status: "documented-fact"
---

A Claude skill that extracts publishable content from a Claude project knowledge base (and any synced Google Drive resources) into a folder of structured markdown files ready for a Quartz-based wiki. Invoked as `/wiki-extraction` inside a Claude session linked to the wiki's content folder.

This page documents the skill in enough detail that a reader can build their own version for a different wiki. The architecture is a single SKILL.md file (the instruction set Claude follows) plus three reference files (frontmatter templates, scoping questions, extraction report template). Everything below is the actual implementation.

## What it does

The skill reads every document in a Claude project's knowledge base, produces a candidate page list organized by the wiki's category structure (concepts, frameworks, research, essays, sources, people, glossary), inventories the existing wiki to avoid duplicates, then writes the pages in batched commits through the device bridge.

The extraction is opinionated. It enforces the wiki's YAML frontmatter schema, its folder conventions, its epistemic-status tagging, and its wikilink and auto-linking rules. It preserves the source author's voice rather than rewriting into a generic wiki register.

## Skill architecture

A Claude skill is a markdown file (SKILL.md) placed in the user's skills directory, optionally accompanied by reference files the skill can read during execution. The directory structure for this skill:

```
wiki-extraction/
├── SKILL.md                              # The instruction set
└── references/
    ├── frontmatter-templates.md          # YAML shapes per category
    ├── scoping-questions.md              # Interview checklist
    └── extraction-report-template.md     # Report skeleton
```

When the user invokes `/wiki-extraction`, Claude loads SKILL.md into its context and follows the instructions. The reference files are read on demand during execution, not loaded upfront. This keeps the initial context cost low for a skill whose reference material runs to several thousand words.

## The SKILL.md

The instruction set below is the complete, working SKILL.md. Adapt the category structure, frontmatter schema, and voice rules for your own wiki.

### Trigger conditions

```markdown
## When to use this skill

Trigger for any of these:
- "Extract from my project into the wiki at [path]"
- "Populate my Quartz wiki from these docs"
- "Turn this project knowledge base into wiki pages"
- "Add the missing pages to my wiki"
- "Build the vault from this project's docs"
- Follow-up passes on a wiki this skill already helped build

Don't trigger for:
- Producing a single document, report, or one-off deliverable
- Editing an existing wiki page inline
- Extracting data from tables, PDFs, or spreadsheets without a wiki target
```

### Workflow sequence

The skill follows an eight-step sequence. Steps 1 through 3 are planning; steps 4 through 6 are production; steps 7 and 8 are delivery.

**Step 1: Interview.** Before touching the corpus, ask the user three questions that most change the shape of the run: (a) how to see the existing wiki state (device bridge recommended), (b) planning round first or straight through (planning round recommended for 15+ documents), (c) where the output should land (directly into the wiki folder, as a zipped bundle, or both). Also confirm exclusion criteria, superseding rules, and voice preferences.

**Step 2: Planning round.** For any corpus of more than about 15 documents, read everything and produce a candidate page list organized by category. For each candidate: the proposed slug, a one-line preview, the source document(s), and any merge targets. Flag open decisions explicitly. Deliver the plan as a markdown file and wait for sign-off.

**Step 3: Inventory.** Enumerate the existing wiki's pages under each category folder. Note the naming convention, frontmatter format, and typical length. Sample a few existing pages to internalize the voice. Flag any pages marked as "First-pass entry: sections require enrichment" as enrichment candidates. Revise the planning-round list so it covers only gaps and enrichments.

**Step 4: Write pages** in category batches. Auto-link glossary terms on first mention inline during writing. Match the size ranges documented in the frontmatter templates.

**Step 5: Commit** pages to the wiki folder through the device bridge in batches of up to 50 files per `device_commit_files` call.

**Step 6: Extraction report.** Produce `_extraction-report.md` listing pages created, documents excluded, merges performed, open editorial decisions, and cross-project handoffs.

**Step 7: Deliver** the report.

**Step 8: Sanity check.** Five random pages read as if unseen: do they stand alone, do wikilinks resolve, does the voice hold.

### Category structure

The Quartz wiki uses a fixed folder layout. Adapt this to your own wiki's architecture.

```
content/
├── index.md
├── concepts/          # 6-18KB typical
├── frameworks/        # 6-17KB typical
├── research/          # 15-50KB typical (longest pages)
├── essays/            # Variable
├── sources/           # 900-1800 bytes
├── people/            # 500-5000 bytes
└── glossary/          # 800-2000 bytes
```

Size ranges reflect Quartz reading patterns. Sources and glossary entries are short by design. Research briefs are the longest pages in the wiki.

### Page body structure

**Concepts, frameworks, research:** one-sentence definition or thesis; 2 to 4 paragraph overview; detailed treatment under H2/H3 subheadings; related pages (bulleted wikilinks); sources (bulleted citations linking to `/sources/`); provenance note (one paragraph naming source documents and editorial decisions).

**Glossary:** one-sentence definition; optional extended definition (1 to 3 paragraphs); optional contrast with adjacent terms; related terms (wikilinks); sources; provenance.

**People and sources:** short. People get a one-paragraph descriptor, career/contribution summary, selected works, and related pages. Sources get a full citation, one paragraph on what the work argues and why it matters, and a "Cited by" list.

### Auto-linking rules

Link glossary terms on first mention per page in body prose. Use the pipe syntax `[[glossary/slug|Display Text]]` so the link reads naturally. Subsequent mentions in the same page are unlinked. Skip auto-linking inside code fences, YAML frontmatter, blockquotes marked as direct quotes, heading lines, and the term's own glossary page.

### Voice and editorial rules

Preserve the source documents' voice. Do not rewrite finished prose into a generic wiki register. Apply the following conversions by default (configurable at the interview step):

- American spelling throughout (unless in direct quotes or proper nouns).
- No em dashes. Periods, commas, colons, semicolons, and parentheses do the structural work.
- No rhetorical oppositions ("not X, but Y" and its variants).
- No three-part rhythmic phrases.
- Where a claim depends on evidence the corpus does not fully hold, flag the gap in the provenance note.

### Delivery mechanics

The device bridge accepts files through `SendUserFile` plus `device_commit_files`. Practical limits: 50 files per `device_commit_files` call, 20MB per file, 100MB per call. Split into 2 to 3 batches by category. A common split: batch 1 for concepts, frameworks, research, and people; batch 2 for sources, glossary, and the extraction report.

## Reference file 1: Frontmatter templates

These are the exact YAML shapes for each category. Match the field order shown.

### Concepts

```yaml
---
title: "Human-Readable Title"
aliases: ["alternative names", "abbreviations", "informal variants"]
tags: ["concept", "topic-tag-1", "topic-tag-2"]
created: 2026-08-25
updated: 2026-08-25
source_project: "Project Name"
source_documents: ["Primary_Source.md", "Secondary_Source.md"]
epistemic_status: "documented-framework"
---
```

### Frameworks

```yaml
---
title: "The Named Framework"
aliases: ["framework acronym", "framework alternate name"]
tags: ["framework", "domain-tag"]
created: 2026-08-25
updated: 2026-08-25
source_project: "Project Name"
source_documents: ["Framework_Source.md"]
epistemic_status: "documented-framework"
---
```

### Research briefs

```yaml
---
title: "Research Brief Title"
aliases: ["informal name"]
tags: ["research", "topic-tag-1", "topic-tag-2"]
created: 2026-08-25
updated: 2026-08-25
source_project: "Project Name"
source_documents: ["Research_Brief_Source.md"]
epistemic_status: "academic-inference"
---
```

### Essays

```yaml
---
title: "Essay Title"
aliases: []
tags: ["essay", "topic-tag"]
created: 2026-08-25
updated: 2026-08-25
source_project: "Project Name"
source_documents: ["Essay_Source.md"]
epistemic_status: "documented-framework"
---
```

### Sources

```yaml
---
title: "Full Work Title"
author: "Author Name"
year: 2026
type: "book | paper | report | essay"
publisher: "Publisher Name"
url: "https://..."
doi: "10.xxxx/xxxxx"
tags: ["source", "topic-tag"]
created: 2026-08-25
updated: 2026-08-25
source_project: "Project Name"
---
```

Source pages do not carry an `epistemic_status` field. Length target: 900 to 1800 bytes. Structure: full citation, one paragraph on what the work argues and why it matters, a "Cited by" list of wiki pages that reference this source.

### People

```yaml
---
title: "Person's Name"
aliases: ["Preferred Name", "Alternate Spelling"]
tags: ["person", "domain-tag-1", "domain-tag-2"]
created: 2026-08-25
updated: 2026-08-25
source_project: "Project Name"
source_documents: ["Source_That_Mentions_Person.md"]
epistemic_status: "documented-fact"
---
```

Length target: 500 to 5000 bytes. Short stub for peripheral figures; longer for people central to the wiki's argument.

### Glossary

```yaml
---
title: "Term Name"
aliases: ["term variants", "abbreviations"]
tags: ["glossary", "domain-tag"]
term_type: "coined | borrowed-technical | framework | acronym"
first_defined_in: "Source_Document.md"
related_terms: ["adjacent-term-slug", "another-adjacent-term"]
source_project: "Project Name"
created: 2026-08-25
updated: 2026-08-25
epistemic_status: "documented-framework"
---
```

Glossary frontmatter has two extra fields (`term_type`, `first_defined_in`) not present in other categories.

## Reference file 2: Scoping questions

The interview checklist. The first three questions are the minimum; the rest tighten scope on an unfamiliar corpus.

### Minimum three (always ask)

1. **How should I see what's already in the wiki?** Options: connect the wiki folder via the device bridge (recommended), treat the wiki as empty, paste a file list.

2. **Given the corpus size, how do you want me to proceed?** Options: planning round first (recommended for 15+ docs), straight through in one pass, just the top-priority slice.

3. **Where should the output land?** Options: write directly into the wiki's `content/` folder, deliver as a zipped bundle, both.

### Scope tightening

4. **What are the exclusion criteria?** Site-specific content, personal/correspondence/draft material, content belonging to a different project's thread, content that fails a publishability bar.

5. **Are there superseding rules?** When a newer document explicitly corrects an older one, is the newer canonical? Is there a specific document treated as the current primary thesis? Are there frameworks in transition that change which vocabulary is canonical?

6. **What voice preferences apply?** American vs. British spelling. Em dashes (usually forbidden). Rhetorical oppositions (usually forbidden). Three-part rhythmic phrases (usually forbidden). Preserve source voice vs. impose a house voice. Preserve epistemic layering (IC / MS / TBV tags).

7. **What categories does the wiki use?** Default: concepts / frameworks / research / essays / sources / people / glossary. Confirm this matches the target wiki.

### Deliverables and reporting

8. **How much narrative in the extraction report?** Comprehensive, summary only, or machine-readable.

9. **Should I enrich existing pages flagged as "First-pass entry"?** In the same pass, separately, or only if the source material is now available.

10. **Are there specific documents to skip regardless of publishability?** Named documents, PDFs, drafts.

### Delivery mechanics

11. **What device bridge access do I have?** Wiki folder connected (and path), delete permissions (usually no), force-overwrite authorization for enrichment.

12. **How should I handle failures?** Retry policy, batch size preference.

## Reference file 3: Extraction report template

Every extraction pass produces `_extraction-report.md` alongside the pages. The report's most important sections are the open decisions and cross-project handoffs: those are what the human user reads first.

### Report skeleton

```markdown
---
title: "[Project Name] Wiki Extraction Report"
tags: ["extraction-report", "meta"]
created: YYYY-MM-DD
updated: YYYY-MM-DD
source_project: "[Project Name]"
---

# Extraction Report

## Summary

Extraction pass conducted [DATE] against the [PROJECT NAME] project
knowledge base ([N] project docs, [N] PDFs, [N] synced resources).
The pre-existing wiki at [PATH] already carried [N] concepts,
[N] frameworks, [N] research briefs, [N] essays, [N] glossary entries,
[N] people, and [N] sources. This pass added [N] new or enriched files.

| Category | New pages | Enrichments |
|---|---|---|
| Concepts | N | N |
| Frameworks | N | N |
| Research | N | N |
| Essays | N | N |
| People | N | N |
| Sources | N | N |
| Glossary | N | N |
| **Total** | **N** | **N** |

## New pages

List by category with full paths.

## Enriched pages

Existing pages that were rewritten or expanded.

## Excluded documents

One line each with the reason (site-specific, superseded, out of scope,
correspondence, framework already in wiki).

## Merged documents

Where multiple source documents consolidated into a single wiki page,
name the canonical source and the folded source(s).

## Open decisions for human review

Numbered list. Each names the decision, provides context,
and recommends a resolution or lists options.

## Cross-project handoffs

Concepts, sources, or people that likely have richer treatment
in a different project.

## Sources needing verification

External references where citation details could not be confirmed.

## Glossary linking summary

Total auto-links inserted. Terms linked. Terms skipped because
they appeared inside code fences, headings, or direct quotes.
Ambiguous cases requiring human review.

## Sanity check

Five randomly selected pages read as if unseen.

## Top three open decisions

Reprise of the highest-priority items from the decisions section,
written to be standalone for readers who skip the rest.
```

## Common failure modes

Six patterns account for most extraction problems. Naming them here so a skill builder can write against them.

**Writing before inventory.** Producing pages that duplicate existing content. The inventory step is not optional.

**Rewriting the source voice.** The wiki loses the specificity of the author's argument. Default to preservation; only convert per explicit rules.

**Silent scope decisions.** Deciding a document is in-scope or out-of-scope without naming the call. Log every borderline call in the extraction report.

**Under-linking or over-linking.** Every occurrence of a glossary term linked is clutter; no occurrences linked is a decorative glossary. First mention per page, in body prose only.

**Batches too large for `device_commit_files`.** The 50-file cap per call silently truncates or errors. Count before committing; split into 2 to 3 batches.

**Missing provenance notes.** Future maintenance passes cannot trace what a page came from. Every page ends with a provenance note.

## Building your own version

To adapt this skill for a different wiki:

1. **Create the directory.** Place a folder in your Claude skills directory (typically `~/.claude/skills/` on desktop, or in the synced skills location for Cowork). Name it after your skill's slug.

2. **Write SKILL.md.** Copy the workflow sequence above and adjust: your wiki's folder layout (the category structure), your frontmatter schema, your voice rules, and your size targets. The eight-step sequence (interview, planning round, inventory, write, auto-link, commit, report, sanity check) transfers to any structured extraction. The specifics inside each step are what you customize.

3. **Write your reference files.** Three files cover most wikis: frontmatter templates (the exact YAML shape per category, so Claude produces consistent metadata), scoping questions (the interview checklist, so each run starts from confirmed scope), and an extraction report template (the report skeleton, so every pass produces auditable output). Place these under a `references/` subdirectory.

4. **Set your trigger conditions.** The `When to use this skill` section controls when Claude invokes the skill automatically. Write trigger phrases that match how you actually ask for extractions. Write negative triggers for tasks that sound similar but should not invoke the skill.

5. **Test on a small corpus first.** Run the skill against 5 to 10 documents and review the output before scaling. The planning round catches structural problems early; the extraction report catches editorial problems after the fact.

The skill's power is in the constraints. A wiki that enforces consistent frontmatter, consistent size ranges, consistent voice, and consistent provenance notes is a wiki that both humans and AI agents can navigate reliably. The skill encodes those constraints so they hold across extraction passes, across projects, and across sessions.

## Related pages

- [[tools/ai/index|AI Tools]]
- [[tools/index|Tools]]

## Provenance

Entry created 8 September 2026 documenting the wiki-extraction skill as used in constructing this wiki. Updated the same day to include the full implementation: SKILL.md workflow, all three reference files, failure modes, and build-your-own instructions. The skill's source is a Claude skill definition maintained by the wiki's author.
