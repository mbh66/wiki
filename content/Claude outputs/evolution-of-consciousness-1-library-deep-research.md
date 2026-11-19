# Deep Research Instructions, Run 1 of 2: The Evolution of Consciousness Library

Version 0.1, 19 November 2026. Prepared for a stand-alone Claude deep research run. It builds the BioConomy wiki's graded reference library on the evolution of consciousness. Run 2 (*The Evolution of Consciousness Grid*) takes this run's library and people register as its inputs, and builds the claim grid, modelled on Tom Morgan's *Anomaly Grid*, and the dating table. Michael's seed lists are reproduced in Appendix A, so this run needs no attachments.

---

## 1. What this run produces

Four deliverables:

1. **The library,** a CSV file and a Markdown table, one row per work (section 6.1). Every author and work on Michael's reading list (Appendix A.1) appears. The run adds the works the field needs and the list lacks, including the critics.
2. **The people register,** a CSV file, one row per person in the library and every person on Michael's thought-leaders list (Appendix A.2), with a proposed wiki folder (section 6.2).
3. **A library note,** 10 to 20 KB, at the working path `research/evolution-of-consciousness-library` on the BioConomy wiki. It says how the library was built, what each tier holds and where the field is thin.
4. **A hand-back** to Michael (section 14), including the list of grid candidates Run 2 needs.

### 1.1 The question

People have argued for two centuries that human consciousness has a history: that the way people perceive, remember, reason and belong has changed in identifiable steps, and may still be changing. The argument runs through palaeoanthropology, comparative cognition, developmental psychology, philosophy of mind, the history of ideas, complexity science, contemplative traditions and Indigenous knowledge. Its authors rarely read each other.

This run asks:

1. **The works.** Which works make up the field? Which set out a sequence, which supply evidence for or against one, and which criticise the idea of a sequence itself?
2. **The records.** For every work on Michael's list, what are the correct author, title, first publication year, publisher and edition?
3. **The coverage.** Which parts of the argument (section 4.1) does each work speak to, and is every part covered from more than one direction?
4. **The standing.** How is each work received in its own field? Where its central claim is rejected by most specialists, say so in their terms.
5. **The people.** Who are the people behind the works and the practice, in their public roles, and which already have pages on the wiki?

Where the field is thin on a part of the argument, say so as plainly as where it is rich.

### 1.2 Why this matters to the network

Every site in Michael's network reads human history through the [Major Evolutionary Transitions](https://wiki.bioconomy.earth/concepts/major-evolutionary-transitions/): five structures of consciousness (Mimetic, Magical, Mythic, Material, Mycelial) joined by four transitions, with the fourth under way. That sequence is Michael's synthesis, built on Roger Briggs, and is tagged `[MS]`. The wiki holds source pages for only a handful of the works it rests on (section 7.1). A reader who wants to check the sequence has nowhere to go. This run gives that reader a graded library.

### 1.3 The distinctions to keep

- **Consciousness versus cognition versus culture.** Some works study awareness (what it is like to be something), some study cognitive capacities (memory, language, planning), and some study cultural forms (myth, writing, institutions). Record which each work studies in the `discipline` and `finding` columns.
- **Individual development versus cultural sequence.** Kegan and Graves measured adults. Gebser and Jaynes read cultural records. Code each work for which it studies.
- **Michael's synthesis versus its components.** Gebser, Graves, Kegan, Donald, Briggs and Sahtouris keep their own lineages and terms. The five structure names and the synthesis across them are Michael's. Never attribute the synthesis to a component author.
- **Metaphor versus mechanism.** "Mycelial" is the network's metaphor for a form of coordination. Fungal network science (Simard, Stamets, and their critics) is evidence about fungi. Say where a work uses the biology as metaphor.
- **A work's claim versus its standing.** Record what the work argues first, then how its field receives it, in separate columns.

## 2. Scope

**In scope.** The origin and evolution of consciousness in animals; the cognitive evolution of hominins; cognitive archaeology; orality, literacy and the history of mind; structure-of-consciousness and stage theories of cultural history; developmental psychology of adults; integral and spiral models; complexity and cosmic-evolution accounts that claim a direction; the philosophy of mind where it bears on the evolution question; the metacrisis literature that names a transition in consciousness; Teilhard's noosphere and its successors (global brain, collective intelligence); Indigenous and non-Western knowledge of mind, in its own voice; the critics of all these, including critics of any single linear sequence.

**Out of scope.** Psi, near-death and reincarnation research as evidence in their own right: the wiki does not adopt them. A work on Michael's list that centres on them (for example *Irreducible Mind*) stays in the library, coded for what it argues. Clinical consciousness science, except where it informs the evolution question. Artificial consciousness. Forecasts of collapse: the network does not write about collapse.

## 3. The seed lists, and what to do with them

Appendix A reproduces two of Michael's documents: a list of favourite reads (32 entries) and a list of mycelial thought leaders (24 entries).

1. **Every name stays.** Every author on the reading list gets a row in the library. Every person on the thought-leaders list gets a row in the people register.
2. **Every entry gets checked.** Confirm author, title, year of first publication, publisher and the edition Michael names. Several entries look wrong (section 7.2). Correct each in the hand-back with the source.
3. **Place each entry.** Give each a tier (section 4.3). A practitioner with no published work on consciousness stays in the people register with what they have built, and gets no library row. Nobody is dropped.
4. **Mark provenance.** Every row from Michael's lists carries `on_seed_list: yes`. Run 2 uses this for the grid's disclosure, the way Morgan's grid stars the sources from his own reading.

## 4. Coding frame

### 4.1 The parts of the argument

Run 2 tests this chain of claims. Tag each work with the parts it speaks to, so Run 2 can choose grid sources. Do not grade the claims here.

| Code | Claim |
|---|---|
| A1 | Minds evolved: awareness exists in graded forms across many animal lineages |
| A2 | Human cognition changed in identifiable, datable steps |
| A3 | The steps changed the structure of awareness itself, beyond what people believed |
| B1 | Individuals develop through measurable stages |
| B2 | Culture and person follow parallel sequences |
| B3 | Complexity has a direction, and consciousness rides it |
| C1 | Earlier structures stay present in everyone |
| C2 | A new structure is emerging now |
| C3 | Its sign is networked, collective mind |
| C4 | The current structure resists the new one |
| H | Consciousness is fundamental and is not produced by brains (the cross-cutting question) |

### 4.2 Evidence types

Grade each work's own design:

| Level | Type | Design |
|---|---|---|
| E1 | Measured study | Experiment, comparative study or validated instrument, with replication |
| E2 | Dated record | Fossil, archaeological or documentary record with published dating |
| E3 | Theory on evidence | A theory built on reviewed evidence and tested against it |
| E4 | Synthesis or speculation | A framework, synthesis or model with illustrative cases |
| E5 | Tradition or testimony | Contemplative, religious or Indigenous tradition; first-person report |

E5 is a separate kind of knowledge and carries no lower worth.

### 4.3 Tiers

- `canon`: sets out a sequence or a structure of consciousness that later work answers.
- `evidence`: supplies data a claim rests on.
- `critic`: disputes a sequence, a step or a source.
- `practice`: applies the ideas.
- `context`: frames the field (for example Thomas Kuhn on paradigms).

A work can hold one tier only. Choose the one that describes its main contribution to this field.

## 5. Coverage tests

Before finishing, check the library against these and report the result in the library note and the hand-back:

1. Every part A1 to C4 and H has at least three works in support and at least two critics or qualifiers.
2. Every discipline in section 2 has at least three works.
3. Southern Africa and the rest of Africa are represented in the dated record and in philosophy of mind and personhood (section 8.3).
4. Indigenous knowledge appears through its own scholars and institutions.
5. Report the share of works by women, and by authors from outside Europe and North America, for the whole library and for the seed list. Report the numbers without comment.

Breadth matters less than meeting these tests. Target 120 to 200 works.

## 6. Output formats

### 6.1 The library

One row per work. The first columns match the wiki's source-page frontmatter, so each row can become a page in `sources/`.

| Column | Content |
|---|---|
| `slug` | Proposed source-page slug, for example `donald-1991-origins-of-the-modern-mind` |
| `title` | Full title |
| `author` | All authors or editors as published |
| `year` | Year of first publication in the original language |
| `edition_year` | Year of the edition cited, where different |
| `type` | `book`, `edited-volume`, `journal-article`, `book-chapter`, `report`, `lecture`, `talk`, `article` |
| `publisher` | Publisher, or journal with volume(issue) and pages |
| `doi_isbn` | DOI or ISBN, blank where none exists |
| `url` | A stable URL, checked on the day of the run |
| `subject` | Always includes `consciousness`; add others from the wiki's list where they fit |
| `discipline` | For example palaeoanthropology, comparative cognition, developmental psychology, philosophy of mind, history of ideas, complexity science, contemplative tradition, Indigenous knowledge |
| `tier` | Section 4.3 |
| `design` | E1 to E5 |
| `claims` | Parts the work speaks to, for example `A2;A3;C1` |
| `stance` | For each part in `claims`, a one-letter lean: `a` affirms, `q` qualifies, `d` disputes, for example `A2:a;A3:q`. Run 2 checks and refines these |
| `standing` | One sentence on how the work is received in its own field, with a source |
| `finding` | One sentence: what it argues or found |
| `on_seed_list` | `yes` or `no` |
| `existing_page` | The wiki slug where a page already exists (section 7.1), else blank |
| `grade` | `[IC]`, `[MS]` or `[TBV]` for the bibliographic record and the finding |

### 6.2 The people register

One row per person: `name`, `slug`, `proposed_folder` (`people/ancestors` for the deceased whose work founded a lineage, `people/theorists`, `people/practitioners`, `people/indigenous`), `role` (from a public source), `organisation`, `key_works` (library slugs), `built` (for practitioners: what they have founded or made, with a link), `relation_to_theme` (one sentence), `public_url`, `on_seed_list`, `existing_page`, `verified` (`yes` or `no`).

The thought leaders in Appendix A.2 are mostly practitioners. Where a name cannot be confirmed (Michael marks David Thomson "to be validated", and "llja Panic" may be a misspelling), say so and leave `verified: no`.

## 7. What is already known

Verify each item against the source. Correct any error and do not re-summarise what holds.

### 7.1 Pages the wiki already holds

The wiki has source pages for Gebser, *The Ever-Present Origin*; Kegan, *In Over Our Heads*; Graves, *Levels of Existence* and *Human Nature Prepares for a Momentous Leap*; Beck and Cowan, *Spiral Dynamics*; Cook-Greuter on the developmental perspective; Sahtouris, *EarthDance*; Vernadsky, *The Biosphere*; Margulis, *Symbiotic Planet*; Ronfeldt on the noosphere; Rowson on Bildung; Andersen and Björkman, *The Nordic Secret*; Eliade, *The Sacred and the Profane*; Sharpe, *Three Horizons*; and two Tom Morgan pieces (*After the Crash*, *Thinking the Unthinkable*). It has people pages for Briggs, Björkman, Rowson, Bauwens, Emmett, Heylighen, Kegan, Eisenstein, Andersen and Eliade (theorists) and for Graves, Sahtouris, Vernadsky, Margulis and Steiner (ancestors). `[MS]`

It has no page for McGilchrist, Wilber, Donald, Jaynes, Teilhard, Chalmers, Dennett, Bohm, Prigogine, Deacon, Godfrey-Smith or most of the reading list. Check the live site's `llms.txt` and `sources/` folder on the day of the run and correct this list.

Read first: [Major Evolutionary Transitions](https://wiki.bioconomy.earth/concepts/major-evolutionary-transitions/), [Structures of Consciousness](https://wiki.bioconomy.earth/concepts/structures-of-consciousness), [Convergences](https://wiki.bioconomy.earth/concepts/convergences), [The Momentous Leap](https://wiki.bioconomy.earth/concepts/the-momentous-leap), and the glossary entries for Mycelial Consciousness, Material Consciousness and Noosphere.

### 7.2 Seed-list entries that look wrong

Each of these is `[TBV]`. Check it and report the correct record.

- Penrose, *The Road to Reality*: the list gives 2007; first publication appears to be 2004 (Jonathan Cape). His books on consciousness are *The Emperor's New Mind* (1989) and *Shadows of the Mind* (1994). Add both.
- Gebser, *Structures of Consciousness* (1987): this appears to be Georg Feuerstein's *Structures of Consciousness: The Genius of Jean Gebser*. Attribute it to Feuerstein. *The Ever-Present Origin* first appeared in German in two parts (1949, 1953); the English translation by Noel Barstad and Algis Mickunas is dated 1985 on the wiki and 1986 on the list.
- "Steve Macintosh": the author of *Integral Consciousness and the Future of Evolution* appears to be Steve McIntosh.
- Beck, *Spiral Dynamics*: co-authored with Christopher Cowan; Blackwell, 1996.
- Hawkins, *Power vs. Force*: first published 1995; 2014 appears to be a later edition.
- Young, *The Reflexive Universe*: first published 1976.
- Varela, *Sleeping, Dreaming, and Dying*: edited by Varela, recording conversations with the Dalai Lama; first published 1997.
- Wilber, *Transformations of Consciousness* (1986): co-authored with Jack Engler and Daniel P. Brown.
- Teilhard, *The Phenomenon of Man*: French 1955, English 1959.
- Sheldrake, *Chaos, Creativity, and Cosmic Consciousness* (2001): co-authored with Terence McKenna and Ralph Abraham.
- R. L. Kuhn, *Landscape of Consciousness* (2024): appears to be a journal article, "A landscape of consciousness: Toward a taxonomy of explanations and implications", in *Progress in Biophysics and Molecular Biology*.
- Schmachtenberger, *The Third Attractor* (2022): find the form (talk, essay, podcast) and the date. It may not be a book.
- Rowson, *Living in the Metacrisis* (2021): confirm title, form and date.
- Hancock, *Visionary* (2022): confirm whether it is a revised edition of *Supernatural* (2005), and cite both.

## 8. Where to look

### 8.1 Michael's lists

Every work in Appendix A.

### 8.2 Gaps to fill

The list lacks several works the field treats as central. Find them, read them, and decide their tier:

- **Animal and early mind:** Feinberg and Mallatt, *The Ancient Origins of Consciousness* (2016); Ginsburg and Jablonka, *The Evolution of the Sensitive Soul* (2019); Deacon, *The Symbolic Species* (1997) and *Incomplete Nature* (2011) (Deacon is on the thought-leaders list); Michael Levin on basal cognition; the Cambridge Declaration on Consciousness (2012) and the New York Declaration on Animal Consciousness (2024).
- **Human cognitive evolution:** Tomasello, *The Cultural Origins of Human Cognition* (1999); Mithen, *The Prehistory of the Mind* (1996); Lewis-Williams, *The Mind in the Cave* (2002); Malafouris, *How Things Shape the Mind* (2013); Donald, *A Mind So Rare* (2001).
- **Orality and literacy:** Ong, *Orality and Literacy* (1982); Havelock, *Preface to Plato* (1963); McLuhan, *The Gutenberg Galaxy* (1962).
- **Structure-of-consciousness theorists:** Barfield, *Saving the Appearances* (1957); Neumann, *The Origins and History of Consciousness* (1949); Aurobindo, *The Life Divine*; Steiner on the evolution of consciousness; Tarnas, *The Passion of the Western Mind* (1991); Abram, *The Spell of the Sensuous* (1996).
- **Cultural and historical sequences:** Jaspers, *The Origin and Goal of History* (1949); Bellah, *Religion in Human Evolution* (2011); Habermas on social evolution; Maynard Smith and Szathmáry, *The Major Transitions in Evolution* (1995).
- **Developmental psychology:** Piaget; Loevinger, *Ego Development* (1976); Kegan, *The Evolving Self* (1982); Cook-Greuter; and the validation literature for their instruments.
- **Philosophy and science of consciousness:** Nagel, "What Is It Like to Be a Bat?" (1974); Evan Thompson, *Mind in Life* (2007); Varela, Thompson and Rosch, *The Embodied Mind* (1991); Seth, *Being You* (2021); Tononi and Koch on integrated information; Goff, *Galileo's Error* (2019); Kastrup; Solms, *The Hidden Spring* (2021); Hoffman, *The Case Against Reality* (2019).
- **Complexity and direction:** Chaisson, *Cosmic Evolution* (2001); Laszlo; Prigogine and Stengers, *Order Out of Chaos* (1984).
- **Collective mind:** Heylighen and the Global Brain Institute; Woolley and colleagues on collective intelligence (*Science*, 2010); Lévy, *Collective Intelligence* (1994).
- **Indigenous and non-Western knowledge, in its own voice:** Yunkaporta, *Sand Talk* (2019); Cajete, *Native Science* (2000); Kimmerer, *Braiding Sweetgrass* (2013); Deloria; African philosophy of personhood and Ubuntu (Ramose, Metz, Menkiti), reported in its authors' terms.
- **Critics:** Graeber and Wengrow, *The Dawn of Everything* (2021); Gould, *Full House* (1996); Popper, *The Poverty of Historicism* (1957); Medawar's review of Teilhard (1961); critiques of Jaynes (including Block's review); critiques of Wilber (including Meyerhoff, *Bald Ambition*); critiques of Spiral Dynamics; Churchland; Karst and colleagues (2023, *Nature Ecology and Evolution*) on mycorrhizal networks; the critiques of Hawkins's method and of Hancock's archaeology.

### 8.3 The Southern African record

Add the key published works on Blombos Cave (Henshilwood and colleagues), Pinnacle Point (Marean and colleagues), Wonderwerk Cave (Berna and colleagues on early fire), the Cradle of Humankind and the *Homo naledi* burial debate, Lewis-Williams and the Rock Art Research Institute on San rock art with its critiques, and San knowledge as San scholars and the South African San Council have published it, with the San Code of Research Ethics (2017).

### 8.4 Bodies to check

Report each by its own stated aims: the Jean Gebser Society; the Integral Institute and Integral Life; the Global Brain Institute (Vrije Universiteit Brussel); the Consilience Project; Perspectiva; the Emerge network; the Division of Perceptual Studies (University of Virginia), only as the home of Kelly and colleagues; the Rock Art Research Institute (Wits); the Centre for Early Sapiens Behaviour (SapienCE, University of Bergen); the Evolutionary Studies Institute (Wits).

## 9. Contested works

Jaynes, Sheldrake, Hawkins and Hancock make central claims most specialists in their fields reject. Report each claim, the main rejection and any reply in the `standing` column, in neutral terms, without ridicule and without endorsement. Hawkins's Map of Consciousness rests on applied kinesiology; say so and report its validation record. Give Dennett and Blackmore the same care as Chalmers and Kelly.

## 10. Sources and balance

1. Read the wiki corpus first (section 7.1), then search outside it.
2. Look as hard for critics as for supporters.
3. Prefer peer-reviewed work and academic presses, then trade books by specialists, then practitioner material. Label anything that is not peer-reviewed.
4. Grade every claim, directly after it:
   - `[IC]` Independently Corroborated: two or more independent sources, or an official record.
   - `[MS]` Mission-Sourced: the account of the party the claim is about, its partners, or Michael's own documents.
   - `[TBV]` To Be Verified: plausible and unconfirmed.
   Never upgrade a claim without a new source. Never state a `[TBV]` claim in a title or description. Never invent a date, page number, source, person or organisation.
5. Label your own inferences as inferences.
6. Quotations under fifteen words, one per source, each credited and linked. Paraphrase everything else.
7. Indigenous and traditional knowledge appears through its own published scholars and its own institutions. Do not translate it into the network's structure names. Kogui terms appear only where cited.
8. Recommend an `epistemic_status` for the library note from the balance of its grades: mostly `[IC]` gives `academic-inference`; mostly `[MS]` gives `working-hypothesis`; mostly `[TBV]` gives `stub`.

## 11. What stays out, and how people are described

- **No ranking.** No sequence, scale or map in the library may be used to place a living people, culture, community or person at a stage. Where a work does this (Hawkins's calibrations of nations and groups, Spiral Dynamics colours applied to cultures), record that the work does it, and do not repeat the placements.
- Describe every author only through what they have published and said. Attribute no motives.
- Name living people only in a public role recorded by a public source. Never name a child.
- No contact details for individuals.
- Give no location of rock art or burial sites beyond what the official heritage record already publishes.

## 12. Library note format

Working title: "The Evolution of Consciousness Library." Propose a better one if the material suggests it.

```yaml
---
title: "..."
description: "..."            # at most 280 characters, says what the page contains, no [TBV] claims
aliases: ["evolution of consciousness library", "consciousness evolution reading list"]
tags: ["research", "consciousness", "evolution-of-consciousness", "library", "bioconomy"]
created: 2026-11-19
updated: 2026-11-19
source_project: "BioConomy"
epistemic_status: "..."
---
```

Body, in this order, with no level-one heading:

1. One-sentence statement of what the library holds.
2. Overview, two or three paragraphs, for a practitioner anywhere who arrives without context.
3. How the library was built: the seed lists, the gaps filled, the tiers, the evidence types.
4. The library by tier, with the table (and a link to the CSV).
5. The coverage tests (section 5) and their results, including where the field is thin.
6. A short note that the companion grid (Run 2) will test the claims the works make.
7. `## Related`, `## Sources`, `## Provenance`.

Link existing wiki pages in the form `[[concepts/major-evolutionary-transitions|Major Evolutionary Transitions]]`, and link a glossary term on its first mention.

## 13. Voice

- British spelling (organisation, behaviour, palaeoanthropology), except in quotations and titles.
- Grade 10 reading level. Define each technical term once.
- No em dashes. Use periods, commas, colons, semicolons or parentheses.
- No "not X, but Y" constructions in any form, including "X, not Y", "rather than", "instead of", and "X does not mean Y. It means Z."
- No three-part rhythmic phrases.
- No hollow praise and no stock phrases ("leverage", "navigate", "delve", "unpack", "tapestry", "landscape" as a metaphor, "journey" for a process, "in today's world", "it's worth noting", "ultimately", "moreover", "furthermore", "indeed", "in essence"). R. L. Kuhn's title *Landscape of Consciousness* may be cited as a title.
- No closing summary.
- Describe what each work claims and how it is received. Let readers judge its worth.

## 14. Hand back

With the library note and the two CSV files, return:

1. Every correction to Michael's lists (section 7.2 and anything else found), with the old record, the new record and the source.
2. **The grid candidates for Run 2:** 40 to 55 works that take a clear position on at least three parts (section 4.1), each with its proposed row group: mind and brain science; philosophy of mind; cognitive archaeology and the history of mind; developmental maps; complexity and cosmic evolution; cultural and historical theorists; metacrisis and the mycelial turn; traditions and testimony; critics of the sequence. Include at least eight critics.
3. The coverage test results (section 5), with the parts and disciplines that remain thin.
4. The top 30 works for new `sources/` pages, in priority order, and the people who need new `people/` pages, with folder.
5. Proposed glossary entries, each with a one-sentence definition and its `term_type`.
6. Material whose home is another of Michael's sites (for example Framer OS, for consciousness-based entrepreneurship). Name it and leave it unfiled.
7. Every judgment call Michael should check, including tier assignments for works that could sit in two tiers, and how contested works were described.

---

## Appendix A. Michael's seed lists `[MS]`

Reproduced as given, apart from Roam link brackets. Corrections belong in the hand-back.

### A.1 Consciousness literature

A list of favourite reads in the exploration of the Evolution of Consciousness and the way human thinking has developed over millennia.

- Kelly and Kelly (eds.), *Irreducible Mind* (2007); Kelly, Crabtree and Marshall (eds.), *Beyond Physicalism* (2015)
- Nora Bateson, *Combining* (2023)
- Don Beck, *Spiral Dynamics* (1995)
- Tomas Björkman, *The World We Create* (2019)
- Susan Blackmore, *Conversations on Consciousness* (2005)
- David Bohm, *Wholeness and the Implicate Order* (1980)
- Roger Briggs, *Emerging World* (2021)
- David Chalmers, *The Conscious Mind* (1996)
- Pierre Teilhard de Chardin, *The Phenomenon of Man* (1955)
- Daniel Dennett, *Consciousness Explained* (1991)
- Merlin Donald, *Origins of the Modern Mind* (1991)
- Jean Gebser, *The Ever-Present Origin* (1986) and *Structures of Consciousness* (1987)
- Peter Godfrey-Smith, *Other Minds* (2016)
- Graham Hancock, *Visionary* (2022)
- David Hawkins, *Power vs. Force* (2014), *The Map of Consciousness Explained* (2020)
- William James, *The Varieties of Religious Experience* (1902)
- Julian Jaynes, *The Origin of Consciousness in the Breakdown of the Bicameral Mind* (1976)
- Robert Lawrence Kuhn, *Landscape of Consciousness* (2024)
- Thomas Kuhn, *The Structure of Scientific Revolutions* (1962)
- Gary Lachman, *A Secret History of Consciousness* (2003), *Rudolf Steiner: An Introduction to His Life and Work* (2007), *Politics and the Occult* (2008), *Lost Knowledge of the Imagination* (2017)
- Steve Macintosh, *Integral Consciousness and the Future of Evolution* (2007), *Evolution's Purpose* (2012), *The Presence of the Infinite* (2015)
- Iain McGilchrist, *The Master and His Emissary* (2009) and *The Matter with Things* (2021)
- Roger Penrose, *The Road to Reality: A Complete Guide to the Laws of the Universe* (2007)
- Ilya Prigogine, *The End of Certainty: Time, Chaos, and the New Laws of Nature* (1997)
- Jonathan Rowson, *Living in the Metacrisis* (2021)
- Daniel Schmachtenberger, *The Third Attractor* (2022)
- Rupert Sheldrake, *Chaos, Creativity, and Cosmic Consciousness* (2001)
- William Irwin Thompson, *The Time Falling Bodies Take to Light* (1981), *Coming Into Being* (1996), *Self and Society* (2004)
- Francisco Varela, *Sleeping, Dreaming, and Dying: An Exploration of Consciousness* (2002)
- Ken Wilber, *The Spectrum of Consciousness* (1977), *The Atman Project* (1980), *Transformations of Consciousness* (1986), *Sex, Ecology, Spirituality: The Spirit of Evolution* (1995), *Integral Psychology: Consciousness, Spirit, Psychology, Therapy* (2000)
- Arthur Young, *The Reflexive Universe* (1999)

### A.2 Mycelial thought leaders

Individuals bringing Mycelial Consciousness and Mycelial Science into business and life.

- Ariana Bahrami: creator of Hy Playground
- Michel Bauwens: created the P2P Foundation; author of [The mycelial approach to social change](https://blog.p2pfoundation.net/the-mycelial-approach-to-social-change-networking-transformations-instead-of-achieving-hierarchical-reform/)
- Roger Briggs: author of *Emerging World*, who talks about Planetary Consciousness
- Jennifer Brown: Mycelial Manifesto
- Dorian Cavé: dissertation on online communities aimed at radical change
- Terrence Deacon: author of *The Symbolic Species: The Co-evolution of Language and the Brain* and *Incomplete Nature: How Mind Emerged from Matter*
- Jeff Emmett and Scott Morris: created MycoFi (Mycelial Finance)
- Marissa Feinberg: founded The Mycelium
- Robert Fishkin: created Adjacent Possible
- David Hodgson: founder of Mycelial LLC, launching The Gaian League
- Indy Johar: founder of Dark Matter Labs; author of [Mycelial Sovereignty](https://indyjohar.substack.com/p/mycelial-sovereignty-re-seating-power)
- Richard Ng: founded IndigiDAO
- llja Panic: software developer who curates Cyberbiomes, a platform on projects that blend biology with digital innovation
- David Rug: Project Liminality
- Dayana Sanchez: merging Solarpunk and the gifted, with an interest in mycelial thought
- Elisabet Sahtouris: popularised the Butterfly Transformations analogy
- Suzanne Simard: popularised the "Wood Wide Web"; author of *Finding the Mother Tree* (2021)
- Paul Stamets: mycologist and entrepreneur; author of *Mycelium Running* (2005)
- David Thomson: to be validated
- Tijn Tjoelker: created the Mycelium Substack
- Clément Vidal: Global Brain Institute
- Josephine Watson: founder of Mycelial Law, LLC
- David Sloan Wilson: interest in the Noosphere and the Evolution of Consciousness
