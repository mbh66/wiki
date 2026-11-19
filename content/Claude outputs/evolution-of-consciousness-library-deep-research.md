# Deep Research Instructions: The Evolution of Consciousness. A Graded Library and a Claim Grid

Version 0.1, 19 November 2026. Prepared for a stand-alone Claude deep research run. It builds the BioConomy wiki's reference library on the evolution of consciousness, and the data for a claim grid modelled on Tom Morgan's *Anomaly Grid* (The Leading Edge). Michael's three seed documents are reproduced in Appendix A, so the run needs no attachments.

---

## 1. What this run produces

Six deliverables:

1. **The library,** a CSV file and a Markdown table, one row per work (section 7.1). Every author and work on Michael's lists (Appendix A) appears. The run adds the works the field needs and the lists lack, including the critics.
2. **The people register,** a CSV file, one row per person in the library or the practice register, with a proposed wiki folder (section 7.2).
3. **The claim chain,** a Markdown file: the sequence of claims the grid tests, with the evidence type each step rests on and the connecting words between steps (section 5).
4. **The grid data,** a CSV file, one row per source and claim: the source's position (Affirms, Qualifies, Dissents, Silent), one sentence on what it says, and a page-level citation (section 7.3).
5. **The dating table,** a CSV file: where each source places each threshold in time, beside the archaeological record (section 7.4).
6. **An evidence brief,** 30 to 50 KB, at the working path `research/evolution-of-consciousness` on the BioConomy wiki, which explains the library, the grid and the dating table, and grades the propositions in section 9. Then a **hand-back** to Michael (section 17).

The grid page itself is built after the run, from the grid data. The run does not build it.

### 1.1 The question

People have argued for two centuries that human consciousness has a history: that the way people perceive, remember, reason and belong has changed in identifiable steps, and may still be changing. The argument runs through palaeoanthropology, comparative cognition, developmental psychology, philosophy of mind, the history of ideas, complexity science, contemplative traditions and Indigenous knowledge. Its authors rarely read each other.

This run asks:

1. **The library.** Which works make up the field? Which set out a sequence, which supply evidence for or against one, and which criticise the idea of a sequence itself?
2. **The claims.** What does the evolution-of-consciousness argument actually claim, step by step, and what kind of evidence does each step rest on (section 5)?
3. **The positions.** For each major source, which steps does it affirm, qualify or dispute, and where is it silent?
4. **The dates.** Where does each source place each threshold, and how do those dates compare with the archaeological and fossil record?
5. **The hinge.** Which steps depend on whether consciousness is produced by brains or is a basic feature of reality, and which hold either way?
6. **The standing.** How is each source received in its own field? Where a source's central claim is rejected by most specialists, say so in their terms.
7. **The place.** What does the Southern African record (Blombos Cave, Pinnacle Point, Wonderwerk Cave, the Cradle of Humankind, San knowledge as San scholars and San communities have published it) contribute to the dating and the argument?

A finding that the evidence for a step is thin is a full answer. Report it as plainly as a strong one.

### 1.2 Why this matters to the network

Every site in Michael's network reads human history through the [Major Evolutionary Transitions](https://wiki.bioconomy.earth/concepts/major-evolutionary-transitions/): five structures of consciousness (Mimetic, Magical, Mythic, Material, Mycelial) joined by four transitions, with the fourth under way. That sequence is Michael's synthesis, built on Roger Briggs, and is tagged `[MS]`. The wiki holds source pages for only a handful of the works it rests on (section 8). A reader who wants to check the sequence has nowhere to go. This run gives that reader a graded library, and shows step by step where the sources agree and where they part.

### 1.3 The distinctions to keep

- **Consciousness versus cognition versus culture.** Some sources study awareness (what it is like to be something), some study cognitive capacities (memory, language, planning), and some study cultural forms (myth, writing, institutions). Record which each source studies. A change in culture is evidence of a change in consciousness only if a source argues the link.
- **Content versus structure.** A change in what people believe differs from a change in how awareness is organised (Gebser's claim). Code which kind of change each source describes.
- **Individual development versus cultural sequence.** Kegan and Graves measured adults. Gebser and Jaynes read cultural records. The claim that the two follow parallel sequences is separate, and contested. Keep it separate.
- **Sequence versus ranking.** A sequence in time places structures in order. It places no living person or people in that order. Section 14 sets the rule.
- **Measured versus dated versus argued versus testified.** Keep the evidence types in section 6 apart, cell by cell.
- **The metaphysical question versus the historical one.** Whether consciousness is fundamental (Chalmers's hard problem, idealism, panpsychism, filter theories) is a different question from whether its human forms have changed. Code each claim for whether it depends on the answer.
- **Michael's synthesis versus its components.** Gebser, Graves, Kegan, Donald, Briggs and Sahtouris keep their own lineages and terms. The five names and the synthesis across them are Michael's. Never attribute the synthesis to a component author.
- **Metaphor versus mechanism.** "Mycelial" is the network's metaphor for a form of coordination. Fungal network science (Simard, Stamets, and their critics) is evidence about fungi. Report each in its own terms and say where a source uses the biology as metaphor.

## 2. Scope

**In scope.** The origin and evolution of consciousness in animals; the cognitive evolution of hominins; cognitive archaeology; orality, literacy and the history of mind; structure-of-consciousness and stage theories of cultural history; developmental psychology of adults; integral and spiral models; complexity and cosmic-evolution accounts that claim a direction; the philosophy of mind where it bears on the evolution question; the metacrisis literature that names a transition in consciousness; Teilhard's noosphere and its successors (global brain, collective intelligence); the critics of all these, including critics of any single linear sequence.

**Out of scope.** Psi, near-death and reincarnation research as evidence in their own right: Morgan's grid covers them, and the wiki does not adopt them. Report a source's psi claims only where the source makes them central, and code them as the source's position. Clinical consciousness science (anaesthesia, disorders of consciousness) except where it informs the evolution question. Artificial consciousness, except one short note on how the field's main theories treat it. Forecasts of collapse: the network does not write about collapse.

## 3. The seed lists, and what to do with them

Appendix A reproduces three of Michael's documents: a list of favourite reads (32 entries), a list of mycelial thought leaders (24 entries) and his working page on the evolution of consciousness.

1. **Every name stays.** Every author on the reading list gets a row in the library. Every person on the thought-leaders list gets a row in the people register.
2. **Every entry gets checked.** Confirm author, title, year of first publication, publisher and the edition Michael names. Several entries look wrong (section 8.2). Correct each in the hand-back with the source.
3. **Place each entry.** Give each a tier (section 7.1). A practitioner with no published work on consciousness goes into the practice register (section 7.2), with what they have built. Nobody is dropped.
4. **Mark provenance.** Every row from Michael's lists carries `on_seed_list: yes`. This plays the role of the star in Morgan's grid, and feeds the disclosure in section 7.3.
5. **The working page is a draft.** Treat Michael's evolution-of-consciousness page as a statement of his position `[MS]`, and test its dates and claims like any other source. Section 8.3 names the parts that need care.

## 4. The model grid

Tom Morgan's *The Anomaly Explained* (The Leading Edge, theleading-edge.org) sets out a chain of claims, each labelled with the kind of evidence behind it and the sources that support it, joined by connecting words (AND, EXPLAINED BY, SO, TOGETHER, FELT AS). Under the chain sits a matrix: sources down the side, grouped by kind, claims across the top, each square marked Affirms, Qualifies, Dissents or Silent, with a note on what that source says. A star marks sources from Morgan's own reading, and a disclosure states how many there are and that the grid omits the critics.

This run keeps the form, credits it to Morgan, and changes one thing: **the critics are in.** The network's rule is to set views side by side, each in its own words (ground.md, section 4). The disclosure will say how many sources come from Michael's lists, and that the grid includes dissent by design.

## 5. The claim chain

Test this chain. Refine the wording of any step where the sources show it is stated badly, and record each change in the hand-back. Do not add steps without saying why.

**Part A. Consciousness has a history**

- **A1. Minds evolved.** Awareness is found, in graded forms, across many animal lineages, and arose by evolution. *Expected evidence: measured study.* Look to Godfrey-Smith, Feinberg and Mallatt, Ginsburg and Jablonka, Deacon, Levin, the Cambridge Declaration on Consciousness (2012) and the New York Declaration on Animal Consciousness (2024).
- AND
- **A2. Human cognition changed in identifiable steps.** The hominin record shows distinct capacities arriving at different times: tool traditions, fire, symbolic marking, language, external memory. *Expected evidence: dated record.* Look to Donald, Deacon, Tomasello, Lewis-Williams, Henshilwood and the Blombos record, Ong, Havelock, Malafouris.
- EXPLAINED BY
- **A3. The steps changed the structure of awareness itself.** Each step changed how people experience space, time, self and world, beyond what they believed. *Expected evidence: theory.* Look to Gebser, Jaynes, Barfield, Neumann, W. I. Thompson, McGilchrist, Wilber.

**Part B. The steps have a shape**

- **B1. Individuals develop through stages.** Adults can move through measurable stages of meaning-making. *Expected evidence: measured study.* Look to Piaget, Loevinger, Graves, Kegan, Cook-Greuter, and the validation literature for their instruments.
- AND
- **B2. Culture and person follow parallel sequences.** The cultural sequence and the individual sequence show the same order. *Expected evidence: theory.* Look to Wilber, Beck and Cowan, Habermas, Gebser; and to the critics of recapitulation.
- SO
- **B3. Complexity has a direction.** Cosmic, biological and cultural evolution show a trend toward greater complexity and integration, and consciousness rides that trend. *Expected evidence: established science for the first half, theory for the second.* Look to Prigogine, Chaisson, Teilhard, Young, McIntosh, Laszlo, Maynard Smith and Szathmáry; and to Gould's *Full House* and others who deny a direction.

**TOGETHER: the network's position** `[MS]`

- **The sequence.** Five structures (Mimetic, Magical, Mythic, Material, Mycelial) joined by four transitions, co-present in every person, ranking no one.

**Part C. Where we are**

- **C1. Earlier structures stay present.** No structure replaces the ones before it; all are active in everyone now. *Expected evidence: theory, with some measured support.* Look to Gebser, Wilber, Beck and Cowan, McGilchrist, Donald (who holds that each stage is retained).
- **C2. A new structure is emerging now.** A transition comparable to the earlier ones is under way. *Expected evidence: theory and testimony.* Look to Gebser's integral structure, Graves's momentous leap, Briggs, Rowson, Schmachtenberger, Björkman, Bateson.
- FELT AS
- **C3. Its sign is networked, collective mind.** The new structure shows up as distributed, relational, collective intelligence. *Expected evidence: theory, a few studies.* Look to Teilhard and Vernadsky on the noosphere, Heylighen and the Global Brain Institute, Bauwens, Woolley and colleagues on collective intelligence, the mycelial thought leaders as practice.
- RESISTED BY
- **C4. The current structure resists it.** The structure that leads now (Gebser's deficient mental-rational, McGilchrist's left-hemisphere emphasis, Kuhn's normal science) holds the new one back. *Expected evidence: theory.*

**The hinge (cross-cutting)**

- **H. Consciousness is fundamental.** Consciousness is a basic feature of reality and is not produced by brains. *Expected evidence: argument.* Look to Chalmers, Nagel, Kelly and colleagues, Bohm, Penrose and Hameroff, Kastrup, Goff, Hoffman, Sheldrake; and to Dennett, Blackmore, Seth, Churchland. For each step A1 to C4, record whether it depends on H.

## 6. Evidence types

The chain labels each step with one of these, the way Morgan's grid labels its steps. The library grades each work's own design with the same ladder.

| Level | Type | Design |
|---|---|---|
| E1 | Measured study | Experiment, comparative study or validated instrument, with replication |
| E2 | Dated record | Fossil, archaeological or documentary record with published dating |
| E3 | Theory on evidence | A theory built on reviewed evidence and tested against it |
| E4 | Synthesis or speculation | A framework, synthesis or model with illustrative cases |
| E5 | Tradition or testimony | Contemplative, religious or Indigenous tradition; first-person report |

E5 is a separate kind of knowledge and carries no lower worth. The grid records which kind each claim rests on, so readers can see it.

## 7. Output formats

### 7.1 The library

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
| `tier` | `canon` (sets out a sequence or structure later work answers), `evidence` (supplies data a claim rests on), `critic` (disputes a sequence, a step or a source), `practice` (applies the ideas), `context` (frames the field, such as Kuhn) |
| `design` | E1 to E5 |
| `claims` | Chain steps the work speaks to, for example `A2;A3;C1` |
| `standing` | One sentence on how the work is received in its own field, with a source |
| `finding` | One sentence: what it argues or found |
| `on_seed_list` | `yes` or `no` |
| `existing_page` | The wiki slug where a page already exists (section 8.1), else blank |
| `grade` | `[IC]`, `[MS]` or `[TBV]` for the bibliographic record and the finding |

Target 120 to 200 works. Breadth matters less than coverage of every step from more than one direction. Each step A1 to C4 and H needs at least two critics or qualifiers.

### 7.2 The people register

One row per person: `name`, `slug`, `proposed_folder` (`people/ancestors` for the deceased whose work founded a lineage, `people/theorists`, `people/practitioners`, `people/indigenous`), `role` (from a public source), `organisation`, `key_works` (library slugs), `relation_to_theme` (one sentence), `public_url`, `on_seed_list`, `existing_page`, `verified` (`yes` or `no`).

The thought leaders in Appendix A.2 are mostly practitioners. Record what each has built and published, with a link. Where a name cannot be confirmed (Michael marks David Thomson "to be validated", and "llja Panic" may be a misspelling), say so and leave `verified: no`.

### 7.3 The grid data

Choose 40 to 55 sources for the grid: those that take a clear position on at least three steps. Group them in rows:

1. Mind and brain science
2. Philosophy of mind
3. Cognitive archaeology and the history of mind
4. Developmental maps
5. Complexity and cosmic evolution
6. Cultural and historical theorists
7. Metacrisis and the mycelial turn
8. Traditions and testimony
9. Critics of the sequence

One CSV row per source and step: `source_slug`, `row_group`, `step` (A1 to C4, or H), `position` (`affirms`, `qualifies`, `dissents`, `silent`), `says` (one sentence in the run's own words; blank for silent), `citation` (work, page or chapter), `depends_on_H` (`yes`, `no`, `unclear`), `on_seed_list`, `grade`.

Mark a square `silent` when the source does not address the step. Do not infer a position from a source's general sympathies.

Draft the disclosure for the grid page in the hand-back: how many grid sources come from Michael's lists, that the grid includes critics by design, that the chain's wording is the network's, and that the TOGETHER step is Michael's position `[MS]`.

### 7.4 The dating table

One row per source and threshold: `source_slug`, `threshold` (the source's own name for the stage), `nearest_network_structure` (Mimetic, Magical, Mythic, Material, Mycelial, or `none`), `date_given` (as the source gives it), `basis` (what the source rests the date on), `record_check` (the nearest dated evidence in the archaeological or fossil record, with its source), `fit` (`consistent`, `earlier`, `later`, `undated`, `not-comparable`).

Include Michael's working page (Appendix A.3), the wiki's MET page, Briggs, Donald, Gebser, Jaynes, Wilber, Beck and Cowan, Jaspers on the Axial Age, Bellah, and any other source that dates its stages.

## 8. What is already known

Verify each item against the source. Correct any error and do not re-summarise what holds.

### 8.1 Pages the wiki already holds

The wiki has source pages for Gebser, *The Ever-Present Origin*; Kegan, *In Over Our Heads*; Graves, *Levels of Existence* and *Human Nature Prepares for a Momentous Leap*; Beck and Cowan, *Spiral Dynamics*; Cook-Greuter on the developmental perspective; Sahtouris, *EarthDance*; Vernadsky, *The Biosphere*; Margulis, *Symbiotic Planet*; Ronfeldt on the noosphere; Rowson on Bildung; Andersen and Björkman, *The Nordic Secret*; Eliade, *The Sacred and the Profane*; Sharpe, *Three Horizons*; and two Tom Morgan pieces (*After the Crash*, *Thinking the Unthinkable*). It has people pages for Briggs, Björkman, Rowson, Bauwens, Emmett, Heylighen, Kegan, Eisenstein, Andersen and Eliade (theorists) and for Graves, Sahtouris, Vernadsky, Margulis and Steiner (ancestors). `[MS]`

It has no page for McGilchrist, Wilber, Donald, Jaynes, Teilhard, Chalmers, Dennett, Bohm, Prigogine, Deacon, Godfrey-Smith or most of the reading list. Check the live site's `llms.txt` and `sources/` folder on the day of the run and correct this list.

Concept pages to read first: [Major Evolutionary Transitions](https://wiki.bioconomy.earth/concepts/major-evolutionary-transitions/), [Structures of Consciousness](https://wiki.bioconomy.earth/concepts/structures-of-consciousness), [Convergences](https://wiki.bioconomy.earth/concepts/convergences), [The Momentous Leap](https://wiki.bioconomy.earth/concepts/the-momentous-leap), [Consciousness and Value Creation](https://wiki.bioconomy.earth/concepts/consciousness-and-value-creation), [Bildung](https://wiki.bioconomy.earth/concepts/bildung), and the glossary entries for Mycelial Consciousness, Material Consciousness, Noosphere, Second Tier and Momentous Leap.

### 8.2 Seed-list entries that look wrong

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
- The working page spells the Kogi as "Columbian"; the country is Colombia.

### 8.3 Parts of the working page that need care

- **Dates.** The page dates Mimetic to 3.5 million years ago, Magical to 1 million, Mythic to 70,000 and Material to 12,000. Donald, whom the page cites, ties mimetic culture to *Homo erectus*, about 2 million years ago `[TBV]`. The wiki's MET page places Material with the scientific revolution and Mythic with the early empires; the working page places Material at the Neolithic. Record each source's dates in the dating table and report where the network's own pages disagree.
- **Living peoples.** The page gives the Kogi and Aboriginal Australians as examples of Magical consciousness, and the Inuit and Native Americans as examples of Mythic consciousness. ground.md forbids using the sequence to place any people behind or ahead of another. The run must not repeat these examples, in the brief or the grid. Report them in the hand-back with a proposed revision. Indigenous knowledge appears in the library through its own scholars and in their own terms (section 13).
- **The modern examples.** The page's examples of each structure in modern life (TikTok dances, brand tribalism, quarterly reports) are Michael's illustrations `[MS]`. They fit the co-presence claim (C1). Leave them out of the grid.

## 9. Propositions to grade

Grade each with evidence for, evidence against, a grade and one line on what the wiki can safely say.

**P1.** The evidence that awareness exists in graded forms across many animal lineages is strong and broadly accepted (A1).

**P2.** Donald's dates for mimetic and mythic culture, and the dated hominin record, place the first threshold later than 3.5 million years ago.

**P3.** The Southern African record (Blombos, Pinnacle Point, Wonderwerk) moves the earliest dated evidence for fire use and symbolic behaviour earlier than the dates most sequence theorists use.

**P4.** Stage models of individual adult development have measured support; stage models of cultural history mostly do not (B1 against B2).

**P5.** Evidence on early cities and social forms, including Graeber and Wengrow's *The Dawn of Everything* (2021), contradicts any single linear sequence of social forms, while leaving room for sequences of cognitive capacity.

**P6.** Most sequence theorists hold that earlier structures remain present (C1), and this is the most widely shared step among them.

**P7.** Claims that a new structure is emerging (C2, C3) rest on theory and testimony; no measured study shows a population-level change of the kind the earlier transitions describe.

**P8.** The popular account of the "wood wide web" outruns the field evidence (Karst and colleagues, 2023, *Nature Ecology and Evolution*), and the network's use of mycelium is safe as metaphor and unsafe as biology.

**P9.** Steps A1, A2, B1 and C1 hold whether or not consciousness is fundamental; steps A3, B3 and C2 depend on the answer, or are read differently under each answer.

**P10.** Sources disagree on when the structure the network calls Material begins (the Neolithic, the Axial Age, the Renaissance or the scientific revolution), and the disagreement is about what each source counts as the defining capacity.

## 10. Evidence the claims must face

1. **The teleology critique.** Give at full strength the case, from evolutionary biology and philosophy of history, that evolution has no direction and that stage sequences read the present back into the past (Gould; Popper, *The Poverty of Historicism*; critics of Teilhard such as Medawar).
2. **The ranking critique.** Give at full strength the case that stage theories of culture have been used to rank peoples, from nineteenth-century social evolutionism onward, and say how each modern sequence answers it, if it does.
3. **The Eurocentrism critique.** Many sequences are built from European records. Report work that tests them against Africa, Asia, the Americas and Australia.
4. **The measurement critique.** Report the validation record, and its gaps, for Spiral Dynamics, Hawkins's Map of Consciousness (which rests on applied kinesiology), Kegan's Subject-Object Interview and Loevinger's sentence-completion test.
5. **Contested sources.** Jaynes, Sheldrake, Hawkins and Hancock make central claims most specialists in their fields reject. Report each claim, the main rejection and any reply, in neutral terms, without ridicule and without endorsement. Their standing goes in the `standing` column.
6. **The hard-problem split.** Give Dennett's and Blackmore's case at full strength beside Chalmers's and Kelly's. The grid maps the split and leaves it open.

## 11. Place

The network asks every page to stay connected to a place. Southern Africa holds some of the deepest dated record of the human mind. Cover, from published sources:

- Blombos Cave (Southern Cape): engraved ochre and shell beads, and the dates assigned to them.
- Pinnacle Point (Mossel Bay): early marine resource use and pigment.
- Wonderwerk Cave (Northern Cape): the dating of early controlled fire.
- The Cradle of Humankind: the hominin record and the *Homo naledi* debate on deliberate burial.
- David Lewis-Williams and the Rock Art Research Institute (University of the Witwatersrand) on San rock art and altered states, with the published critiques.
- San knowledge, as San scholars, the South African San Council and published San testimony present it, with the San Code of Research Ethics (2017).

Give no location of rock art or burial sites beyond what the official heritage record already publishes. Name the institutions that hold the knowledge.

## 12. Where to look

### 12.1 Michael's lists

Every work in Appendix A.

### 12.2 Gaps to fill

The lists lack several works the field treats as central. Find them, read them, and decide their tier:

- **Animal and early mind:** Feinberg and Mallatt, *The Ancient Origins of Consciousness* (2016); Ginsburg and Jablonka, *The Evolution of the Sensitive Soul* (2019); Deacon, *The Symbolic Species* (1997) and *Incomplete Nature* (2011) (Deacon is on the thought-leaders list); Michael Levin on basal cognition; the 2012 and 2024 declarations.
- **Human cognitive evolution:** Tomasello, *The Cultural Origins of Human Cognition* (1999); Mithen, *The Prehistory of the Mind* (1996); Lewis-Williams, *The Mind in the Cave* (2002); Malafouris, *How Things Shape the Mind* (2013); Henshilwood's Blombos publications; Donald's later work, including *A Mind So Rare* (2001).
- **Orality and literacy:** Ong, *Orality and Literacy* (1982); Havelock, *Preface to Plato* (1963); McLuhan, *The Gutenberg Galaxy* (1962).
- **Structure-of-consciousness theorists:** Barfield, *Saving the Appearances* (1957); Neumann, *The Origins and History of Consciousness* (1949); Aurobindo, *The Life Divine*; Steiner on the evolution of consciousness; Tarnas, *The Passion of the Western Mind* (1991); Abram, *The Spell of the Sensuous* (1996).
- **Cultural and historical sequences:** Jaspers, *The Origin and Goal of History* (1949); Bellah, *Religion in Human Evolution* (2011); Habermas on social evolution; Maynard Smith and Szathmáry, *The Major Transitions in Evolution* (1995).
- **Developmental psychology:** Piaget; Loevinger, *Ego Development* (1976); Kegan, *The Evolving Self* (1982); Cook-Greuter.
- **Philosophy and science of consciousness:** Nagel, "What Is It Like to Be a Bat?" (1974); Evan Thompson, *Mind in Life* (2007); Varela, Thompson and Rosch, *The Embodied Mind* (1991); Seth, *Being You* (2021); Tononi and Koch on integrated information; Goff, *Galileo's Error* (2019); Kastrup; Solms, *The Hidden Spring* (2021); Hoffman, *The Case Against Reality* (2019).
- **Collective mind:** Heylighen and the Global Brain Institute; Woolley and colleagues on collective intelligence (*Science*, 2010); Lévy, *Collective Intelligence* (1994).
- **Indigenous and non-Western knowledge, in its own voice:** Yunkaporta, *Sand Talk* (2019); Cajete, *Native Science* (2000); Kimmerer, *Braiding Sweetgrass* (2013); Deloria; African philosophy of personhood and Ubuntu (Ramose, Metz, Menkiti), reported in its authors' terms.
- **Critics:** Graeber and Wengrow, *The Dawn of Everything* (2021); Gould, *Full House* (1996); Medawar's review of Teilhard (1961); critiques of Jaynes (including Block's review); critiques of Wilber (including Meyerhoff, *Bald Ambition*); critiques of Spiral Dynamics; Churchland; Karst and colleagues (2023) on mycorrhizal networks.

### 12.3 Bodies to check

Report each by its own stated aims: the Jean Gebser Society; the Integral Institute and Integral Life; the Global Brain Institute (Vrije Universiteit Brussel); the Consilience Project; Perspectiva; the Emerge network; the Division of Perceptual Studies (University of Virginia), only as the home of Kelly and colleagues; the Rock Art Research Institute (Wits); the Centre for Early Sapiens Behaviour (SapienCE, University of Bergen), with its Blombos work; the Evolutionary Studies Institute (Wits).

## 13. Sources and balance

1. Read the wiki corpus first (section 8.1), then search outside it.
2. Look as hard for evidence against each step as for evidence for it.
3. Give full weight to evidence from Southern Africa and the rest of Africa, and say plainly where there is little.
4. Prefer peer-reviewed work and academic presses, then trade books by specialists, then practitioner material. Label anything that is not peer-reviewed.
5. Grade every claim, directly after it:
   - `[IC]` Independently Corroborated: two or more independent sources, or an official record.
   - `[MS]` Mission-Sourced: the account of the party the claim is about, its partners, or Michael's own documents.
   - `[TBV]` To Be Verified: plausible and unconfirmed.
   Never upgrade a claim without a new source. Never state a `[TBV]` claim in a title or description. Never invent a figure, date, page number, source, person or organisation.
6. Report a source's position in its own terms first, then its standing.
7. Label your own inferences as inferences.
8. Quotations under fifteen words, one per source, each credited and linked. Paraphrase everything else.
9. Indigenous and traditional knowledge appears through its own published scholars and its own institutions. Do not translate it into the network's structure names. Kogui terms appear only where cited (ground.md, section 8).
10. Recommend an `epistemic_status` for the brief from the balance of its grades: mostly `[IC]` gives `academic-inference`; mostly `[MS]` gives `working-hypothesis`; mostly `[TBV]` gives `stub`.

## 14. What stays out, and how people are described

- **No ranking.** No sequence, scale or map in the library may be used, in the brief or the grid, to place a living people, culture, community or person at a stage. Where a source does this (Hawkins's calibrations of nations and groups, Spiral Dynamics colours applied to cultures), report that the source does it, and do not repeat the placements.
- Describe every author only through what they have published and said. Attribute no motives.
- Name living people only in a public role recorded by a public source. Never name a child.
- No contact details for individuals.
- Give equal scrutiny to sources Michael admires and to their critics.

## 15. Brief format

Working title: "The Evolution of Consciousness: A Graded Library." Propose a better one if the evidence suggests it.

```yaml
---
title: "..."
description: "..."            # at most 280 characters, says what the page contains, no [TBV] claims
aliases: ["evolution of consciousness library", "consciousness evolution reading list", "consciousness grid"]
tags: ["research", "consciousness", "evolution-of-consciousness", "library", "bioconomy"]
created: 2026-11-19
updated: 2026-11-19
source_project: "BioConomy"
epistemic_status: "..."
---
```

Body, in this order, with no level-one heading:

1. One-sentence thesis, stating the result.
2. Overview, two to four paragraphs, for a practitioner anywhere who arrives without context.
3. A note on the grid's form, crediting Tom Morgan's *Anomaly Grid*, and the disclosure (section 7.3).
4. The distinctions (section 1.3).
5. The claim chain (section 5), as refined, each step with its evidence type.
6. Step by step, A1 to C4: what the sources say, where they agree, where they part.
7. The hinge (H), and which steps depend on it.
8. The dating table, with its findings.
9. Place: the Southern African record (section 11).
10. The library: how it was built, its tiers, and the table (with a link to the CSV).
11. P1 to P10, each with evidence for, evidence against, grade and what the wiki can say.
12. Evidence the claims must face (section 10).
13. `## Related`, `## Sources` (full citations grouped by tier, linked to `sources/` pages where they exist), `## Provenance`.

Link existing wiki pages in the form `[[concepts/major-evolutionary-transitions|Major Evolutionary Transitions]]`, and link a glossary term on its first mention.

## 16. Voice

- British spelling (organisation, behaviour, palaeoanthropology), except in quotations and titles.
- Grade 10 reading level. Give each general idea one plain sentence the first time it appears, and define each technical term once.
- No em dashes. Use periods, commas, colons, semicolons or parentheses.
- No "not X, but Y" constructions in any form, including "X, not Y", "rather than", "instead of", and "X does not mean Y. It means Z."
- No three-part rhythmic phrases.
- No hollow praise and no stock phrases ("leverage", "navigate", "delve", "unpack", "tapestry", "landscape" as a metaphor, "journey" for a process, "in today's world", "it's worth noting", "ultimately", "moreover", "furthermore", "indeed", "in essence"). R. L. Kuhn's title *Landscape of Consciousness* may be cited as a title.
- No closing summary that restates the brief.
- Describe what each source claims and how it is received. Let readers judge its worth.

## 17. Hand back

With the brief and the four CSV files, return:

1. The verdict on P1 to P10, one line each.
2. The claim chain as refined, with every change from section 5 and the reason.
3. Every correction to Michael's lists (section 8.2 and anything else found), with the old record, the new record and the source.
4. A proposed revision of the working page (Appendix A.3): dates, the living-peoples examples (section 8.3), and the Kogi spelling.
5. Recommended edits, quoted line by line, to the Major Evolutionary Transitions and Structures of Consciousness pages, where the dating table or the grid shows a statement needs changing.
6. The disclosure text for the grid page.
7. The top 30 works for new `sources/` pages, in priority order, and the people who need new `people/` pages, with folder.
8. Proposed glossary entries, each with a one-sentence definition and its `term_type` (likely candidates: structure of consciousness, mimetic culture, bicameral mind, aperspectival, noosphere if its entry needs revising, hard problem).
9. Material whose home is another of Michael's sites (for example Framer OS, for consciousness-based entrepreneurship). Name it and leave it unfiled.
10. Every judgment call Michael should check, including the choice of grid sources, how positions were assigned where a source is ambiguous, and how contested sources were described.

---

## Appendix A. Michael's seed documents `[MS]`

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

### A.3 Evolution of Consciousness (working page)

The Evolution of Consciousness refers to the gradual development of conscious awareness and cognitive complexity in living organisms, from simple reflexive responses in early life forms to the self-awareness and reflective thought observed in humans and animals. Where Cultural Evolution is the development of exterior expressions of consciousness, Consciousness Evolution is the development of interior bases for culture.

According to Roger Briggs in *Emerging World*, which draws on Jean Gebser, Merlin Donald, Arthur Young and Ken Wilber, human consciousness has undergone four Cognitive METs, each preceded by a Momentous Leap:

- **Mimetic Consciousness:** emerged around 3.5 million years ago. The first hominins described from Africa, very basic tool use. Grunts and gestures, miming to spread ideas.
- **Magical Consciousness:** emerged around 1 million years ago. *Homo erectus*, *Homo heidelbergensis* and the Neanderthals; advanced tool-making and the use of fire; animism, emotional engagement and a magical connection to all living beings. Oral language with minimal grammar. (Examples given: the Kogi, Aboriginal Australians. See section 8.3.)
- **Mythic Consciousness:** emerged around 70,000 years ago. *Homo sapiens*; language and the telling of myths; complex syntax and storytelling traditions. (Examples given: the Inuit, Native Americans, Indigenous Knowledge Systems. See section 8.3.)
- **Material Consciousness:** emerged around 12,000 years ago with the Neolithic Revolution. Cities, monumental architecture, written language (from about 3200 BCE), social hierarchy, organised warfare, empires, patriarchy, overshoot, objectified reality, scarcity and separation.
- **Mycelial Consciousness:** sometimes called Planetary Consciousness; emerging over about the last sixty years, at least in Western nations. A move from individual, competitive intelligence to collective, collaborative wisdom, embodying Teilhard's noosphere, enhanced by digital technology, Indigenous wisdom and planetary intelligence.

The page closes with examples of each structure in modern life (mime and infant imitation; superstition and brand tribalism; national and corporate origin stories; corporate hierarchies and quarterly reports; open source and mutual aid networks). See section 8.3.

## Appendix B. The model

Morgan, T. *The Anomaly Explained* (The Anomaly Grid). The Leading Edge, theleading-edge.org. The grid's chain runs from "consciousness isn't confined to the body" and "it has a direction" to "the evolution of consciousness is the purpose of a life", with 25 sources in four groups (anomaly research, science and theory, developmental maps, traditions and testimony), 18 of them from Morgan's own reading. Its disclosure states that it omits the critics. Sources it shares with this run: McGilchrist, Prigogine, Teilhard, Wilber, Spiral Dynamics, Laszlo, Chaisson, Levin, Hoffman.
