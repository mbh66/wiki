// Build the Anabranch site data from the BioConomy wiki.
//
// Everything is read from the wiki's content folder:
//   research/evolution-of-consciousness/anabranch/   the thesis: index.md and one page per step
//   research/evolution-of-consciousness/steps/       the grid's claim steps
//   research/evolution-of-consciousness/dates/       dated thresholds
//   sources/                                         grid fields and anabranch fields
// and writes:
//   site/data/anabranch.json   for agents and anyone who wants the data
//   site/data/anabranch.js     the same data, loaded by the page (works from file://)
//   private/evolution-of-consciousness/anabranch-inherited-squares.md
//                              squares not yet checked, for the next research brief
//                              (only when the private folder exists, so never on Netlify)
//   research/evolution-of-consciousness/anabranch/source-count.md
//                              source counts by group and step, embedded in the thesis page
//
// Usage: npm run data
// The content folder defaults to ../content (this folder sits at the wiki repo's
// root). Override with WIKI_CONTENT=/path/to/content npm run data

import { readFileSync, readdirSync, writeFileSync, mkdirSync, existsSync } from "node:fs"
import { join, dirname, resolve, relative } from "node:path"
import { fileURLToPath } from "node:url"
import YAML from "yaml"

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const WIKI = resolve(process.env.WIKI_CONTENT || join(ROOT, "..", "content"))
const WIKI_URL = "https://wiki.bioconomy.earth"
const RESEARCH = join(WIKI, "research", "evolution-of-consciousness")
const THESIS = join(RESEARCH, "anabranch")
const GRID_BRIEF = "evolution-of-consciousness-grid"
const ANABRANCH_BRIEF = "anabranch"
const CODES = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3", "C4", "H", "H2"]
const POSITIONS = ["affirms", "qualifies", "dissents", "silent"]

const warnings = []
const warn = (msg) => warnings.push(msg)

if (!existsSync(RESEARCH)) {
  console.error(`Wiki research folder not found at ${RESEARCH}`)
  console.error("Set WIKI_CONTENT to the wiki's content folder and run again.")
  process.exit(1)
}

function readFrontmatter(path) {
  const text = readFileSync(path, "utf8")
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  if (!match) return null
  try {
    return YAML.parse(match[1]) || {}
  } catch (err) {
    warn(
      `Skipped ${relative(WIKI, path)}: frontmatter does not parse (${err.message.split("\n")[0]})`,
    )
    return null
  }
}

const asList = (v) => (v == null ? [] : Array.isArray(v) ? v : [v])
const isDraft = (fm) => fm.draft === true || fm.draft === "true"

function wikiPath(path) {
  return relative(WIKI, path)
    .replace(/\\/g, "/")
    .replace(/\.md$/, "")
    .replace(/(^|\/)index$/, "$1")
}

function pages(dir) {
  if (!existsSync(dir)) return []
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md") && f !== "index.md")
    .map((f) => {
      const path = join(dir, f)
      const fm = readFrontmatter(path)
      if (!fm) return null
      return { slug: f.replace(/\.md$/, ""), url: `${WIKI_URL}/${wikiPath(path)}`, fm }
    })
    .filter(Boolean)
}

// Every published page, so wikilinks can be resolved the way Quartz resolves them
const allPages = new Map()
;(function walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || (dir === WIKI && entry.name === "private")) continue
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path)
    else if (entry.name.endsWith(".md")) {
      const full = relative(WIKI, path).replace(/\\/g, "/").replace(/\.md$/, "")
      allPages.set(full.toLowerCase(), wikiPath(path))
      const base = full.split("/").pop().toLowerCase()
      if (base !== "index" && !allPages.has(base)) allPages.set(base, wikiPath(path))
    }
  }
})(WIKI)

// [[target|text]] and [[target]] become [text](wiki:path), which the page turns into links
function convertLinks(text, where) {
  return String(text ?? "").replace(
    /\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]+))?\]\]/g,
    (m, target, label) => {
      const key = target.trim().replace(/\.md$/, "").toLowerCase()
      const path = allPages.get(key)
      const shown = label || target.split("/").pop()
      if (path === undefined) {
        warn(`Unresolved link [[${target}]] in ${where}; shown as plain text`)
        return shown
      }
      return `[${shown}](wiki:${path})`
    },
  )
}

function body(path) {
  return readFileSync(path, "utf8").replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, "")
}

function position(value, where) {
  if (value == null || value === "") return null
  const p = String(value).trim().toLowerCase()
  if (POSITIONS.includes(p)) return p
  warn(`Unknown position "${value}" in ${where}; treated as silent`)
  return "silent"
}

// Thesis: the landing page and one page per step
const thesisIndex = join(THESIS, "index.md")
if (!existsSync(thesisIndex)) {
  console.error(`Thesis landing page not found at ${thesisIndex}`)
  process.exit(1)
}
const thesisFm = readFrontmatter(thesisIndex) || {}
// The introduction runs from the top of the body to the first "## " heading
// after it. A "## " heading at the very top is the introduction's own heading.
// Each block is a paragraph (a string) or a bullet list ({ list: [items] }).
let introText = body(thesisIndex).replace(/^\s+/, "")
let introHeading = null
const introHead = introText.match(/^## +(.+)\r?\n/)
if (introHead) {
  introHeading = introHead[1].trim()
  introText = introText.slice(introHead[0].length)
}
const oneLine = (s) => convertLinks(s.replace(/\s*\n\s*/g, " ").trim(), "anabranch/index")
const intro = introText
  .split(/\n## /)[0]
  .split(/\n\s*\n/)
  .map((b) => b.trim())
  .filter(Boolean)
  .map((b) =>
    /^[-*] /.test(b)
      ? { list: b.split(/\n(?=[-*] )/).map((item) => oneLine(item.replace(/^[-*] +/, ""))) }
      : oneLine(b),
  )

const thesisSteps = pages(THESIS)
  .filter((p) => asList(p.fm.tags).includes("anabranch-step") && !isDraft(p.fm))
  .sort((a, b) => (a.fm.step_order ?? 99) - (b.fm.step_order ?? 99))
if (!thesisSteps.length) warn("No thesis step pages (tag anabranch-step) found")

const partTitles = []
for (const p of thesisSteps)
  if (p.fm.step_part && !partTitles.includes(p.fm.step_part)) partTitles.push(p.fm.step_part)
const parts = partTitles.map((title, i) => ({ id: `P${i + 1}`, title }))

const thesis = {
  steps: thesisSteps.map((p) => {
    const fm = p.fm
    const where = `anabranch/${p.slug}`
    return {
      id: fm.anabranch_step,
      part: parts.find((x) => x.title === fm.step_part)?.id ?? null,
      short: fm.short || fm.anabranch_step,
      name: fm.name || null,
      connector: fm.connector || null,
      claim: convertLinks(fm.claim, where),
      evidence: convertLinks(fm.evidence_type, where),
      status: fm.status,
      primary: fm.crosswalk || null,
      secondary: asList(fm.crosswalk_also),
      note: convertLinks(fm.note, where),
      url: p.url,
    }
  }),
}

for (const step of thesis.steps) {
  if (!/^T\d+$/.test(step.id || ""))
    warn(`A thesis step page has no valid anabranch_step: ${step.url}`)
  if (!["mapped", "partial", "pending"].includes(step.status))
    warn(`Thesis step ${step.id} has unknown status "${step.status}"`)
  for (const code of [step.primary, ...step.secondary].filter(Boolean)) {
    if (!CODES.includes(code)) warn(`Thesis step ${step.id} names unknown grid code ${code}`)
  }
  if (step.status === "pending" && step.primary)
    warn(`Thesis step ${step.id} is pending but names a grid step`)
}

// Wiki claim steps
const gridSteps = {}
for (const page of pages(join(RESEARCH, "steps"))) {
  const { fm } = page
  if (!asList(fm.tags).includes("claim-step") || isDraft(fm)) continue
  gridSteps[fm.step_code] = {
    code: fm.step_code,
    title: fm.title,
    claim: fm.claim,
    connector: fm.connector,
    evidence: fm.evidence_type,
    url: page.url,
    counts: {
      affirms: fm.affirms_count ?? null,
      qualifies: fm.qualifies_count ?? null,
      dissents: fm.dissents_count ?? null,
      silent: fm.silent_count ?? null,
    },
  }
}
for (const code of CODES)
  if (!gridSteps[code]) warn(`No wiki step page found for grid code ${code}`)

// What a square's reading was made from (standing instructions v1.6, section 5)
const READ_FROM = ["text", "abstract", "review", "summary"]
function readFrom(value, where, key) {
  if (value == null || value === "") return ""
  if (!READ_FROM.includes(value)) {
    warn(`${where}: ${key} has unknown value "${value}"`)
    return ""
  }
  return value
}

// Grid sources
function gridEntry(fm, code, where) {
  const k = code.toLowerCase()
  return {
    position: position(fm[`grid_${k}`], where) ?? "silent",
    says: fm[`grid_${k}_says`] || "",
    cite: fm[`grid_${k}_cite`] || "",
    grade: fm[`grid_${k}_grade`] || "",
    readFrom: readFrom(fm[`grid_${k}_basis`], where, `grid_${k}_basis`),
  }
}

function thesisCell(fm, step, where) {
  const k = step.id.toLowerCase()
  const checked = position(fm[`anabranch_${k}`], where)
  const secondary = asList(step.secondary)
    .map((code) => ({ code, ...gridEntry(fm, code, where) }))
    .filter((e) => e.position !== "silent")
  if (checked) {
    return {
      position: checked,
      says: fm[`anabranch_${k}_says`] || "",
      cite: fm[`anabranch_${k}_cite`] || "",
      grade: fm[`anabranch_${k}_grade`] || "",
      readFrom: readFrom(fm[`anabranch_${k}_basis`], where, `anabranch_${k}_basis`),
      basis: "checked",
      secondary,
    }
  }
  if (!step.primary) return { position: null, basis: "pending", secondary }
  return {
    ...gridEntry(fm, step.primary, where),
    basis: "inherited",
    from: step.primary,
    secondary,
  }
}

const sources = []
for (const page of pages(join(WIKI, "sources"))) {
  const { fm } = page
  if (!asList(fm.tags).includes("source") || isDraft(fm)) continue
  const briefs = asList(fm.briefs)
  const inGrid = briefs.includes(GRID_BRIEF)
  if (!inGrid && !briefs.includes(ANABRANCH_BRIEF)) continue
  const where = `sources/${page.slug}`
  const group = inGrid ? fm.grid_group : fm.anabranch_group
  if (!group) warn(`${where} has no ${inGrid ? "grid_group" : "anabranch_group"}`)
  const declared = asList(fm.anabranch_steps)
  const present = thesis.steps
    .map((s) => s.id)
    .filter((id) => fm[`anabranch_${id.toLowerCase()}`] != null)
  if (declared.join() !== present.join())
    warn(`${where}: anabranch_steps [${declared}] does not match its anabranch fields [${present}]`)
  const cells = {}
  for (const step of thesis.steps) cells[step.id] = thesisCell(fm, step, where)
  sources.push({
    slug: page.slug,
    title: fm.title,
    author: fm.author || "",
    year: fm.year ?? null,
    group: group || "Ungrouped",
    seedList: fm.on_seed_list === "yes" || fm.on_seed_list === true,
    link: fm.url || null,
    wikiUrl: page.url,
    grade: fm.grade || "",
    cells,
  })
}
const groupNumber = (g) => Number((g.match(/^(\d+)\./) || [])[1] ?? 99)
sources.sort(
  (a, b) =>
    groupNumber(a.group) - groupNumber(b.group) ||
    a.group.localeCompare(b.group) ||
    (a.year ?? 0) - (b.year ?? 0) ||
    a.title.localeCompare(b.title),
)
const groups = [...new Set(sources.map((s) => s.group))]

// Counts per thesis step
const steps = thesis.steps.map((step) => {
  const counts = { affirms: 0, qualifies: 0, dissents: 0, silent: 0 }
  let checked = 0
  let coded = 0
  for (const s of sources) {
    const c = s.cells[step.id]
    if (c.position) {
      counts[c.position] += 1
      coded += 1
    }
    if (c.basis === "checked") checked += 1
  }
  return {
    ...step,
    secondary: asList(step.secondary),
    counts: coded ? counts : null,
    checked,
    gridStep: step.primary ? gridSteps[step.primary] || null : null,
    secondarySteps: asList(step.secondary)
      .map((c) => gridSteps[c])
      .filter(Boolean),
  }
})

// A step coded directly on source pages needs no grid step; one with neither is a gap
for (const s of steps) {
  if (s.status !== "pending" && !s.primary && !s.checked)
    warn(`Thesis step ${s.id} is ${s.status} but names no grid step and no source is coded on it`)
  if (s.status === "pending" && s.checked)
    warn(`Thesis step ${s.id} is pending but ${s.checked} source(s) are coded on it`)
}

// Dated thresholds
const dates = []
for (const page of pages(join(RESEARCH, "dates"))) {
  const { fm } = page
  if (!asList(fm.tags).includes("dated-threshold") || isDraft(fm)) continue
  dates.push({
    slug: page.slug,
    title: fm.title,
    source: fm.source_label,
    sourceSlug: fm.source_slug || null,
    threshold: fm.threshold,
    structure: fm.network_structure,
    structureOrder: fm.structure_order ?? null,
    dateGiven: fm.date_given,
    yearsAgo: typeof fm.years_ago === "number" ? fm.years_ago : null,
    basis: fm.basis,
    recordCheck: fm.record_check,
    fit: fm.fit,
    grade: fm.grade || "",
    url: page.url,
  })
}
dates.sort(
  (a, b) =>
    (a.structureOrder ?? 99) - (b.structureOrder ?? 99) || (b.yearsAgo ?? 0) - (a.yearsAgo ?? 0),
)

const data = {
  generated: new Date().toISOString(),
  wiki: `${WIKI_URL}/research/evolution-of-consciousness/`,
  grid: `${WIKI_URL}/research/evolution-of-consciousness/grid`,
  thesisPage: `${WIKI_URL}/research/evolution-of-consciousness/anabranch/`,
  title: thesisFm.site_title || thesisFm.title,
  subtitle: thesisFm.site_subtitle || thesisFm.description || "",
  introHeading,
  intro,
  parts,
  steps,
  groups,
  sources,
  dates,
}

const out = join(ROOT, "site", "data")
mkdirSync(out, { recursive: true })
const json = JSON.stringify(data, null, 2)
writeFileSync(join(out, "anabranch.json"), json + "\n")
writeFileSync(join(out, "anabranch.js"), `window.ANABRANCH = ${json};\n`)

// Squares still inherited from a grid step, for the next research brief
const inheritedLines = [
  "# Inherited squares",
  "",
  `Generated by \`npm run data\` on ${data.generated.slice(0, 10)}. Each square shows a position copied from a wiki grid step and not yet checked against the Anabranch wording.`,
  "",
]
for (const step of steps) {
  if (!step.primary) continue
  const byPos = { affirms: [], qualifies: [], dissents: [] }
  for (const s of sources) {
    const c = s.cells[step.id]
    if (c.basis === "inherited" && byPos[c.position]) byPos[c.position].push(`\`${s.slug}\``)
  }
  const n = byPos.affirms.length + byPos.qualifies.length + byPos.dissents.length
  inheritedLines.push(`**${step.id} (${n} squares, inherited from ${step.primary})**`)
  for (const [pos, list] of Object.entries(byPos)) {
    if (list.length)
      inheritedLines.push(`- ${pos[0].toUpperCase()}${pos.slice(1)}: ${list.join(", ")}`)
  }
  inheritedLines.push("")
}
const privateDir = join(WIKI, "private", "evolution-of-consciousness")
if (existsSync(privateDir))
  writeFileSync(join(privateDir, "anabranch-inherited-squares.md"), inheritedLines.join("\n"))

// Source counts, embedded in the thesis landing page (![[...source-count]]).
// Rewritten only when a number changes, so a run with no new sources leaves git clean.
const countPath = join(THESIS, "source-count.md")
{
  const thesisLink = (i, label) =>
    `[[${wikiPath(join(THESIS, thesisSteps[i].slug + ".md"))}\\|${label}]]`
  const criticGroups = groups.filter((g) => /^\d+\.\s*critics\b/i.test(g))
  const critics = sources.filter((s) => criticGroups.includes(s.group)).length
  const seed = sources.filter((s) => s.seedList).length
  const body = [
    "%% Generated by `npm run data` in anabranch/. Edits here are overwritten on the next run. %%",
    "",
    `${sources.length} sources are coded on the thesis, in ${groups.length} groups. ` +
      `${criticGroups.length === 1 ? "Group" : "Groups"} ${criticGroups.map((g) => g.match(/^\d+/)[0]).join(" and ")}, ` +
      `the critics, ${criticGroups.length === 1 ? "holds" : "hold"} ${critics} of them, ` +
      `and ${seed} are on Michael Haupt's recommended reading list.`,
    "",
    "| Group | Sources |",
    "| --- | ---: |",
    ...groups.map((g) => `| ${g} | ${sources.filter((s) => s.group === g).length} |`),
    `| Total | ${sources.length} |`,
    "",
    "Positions on each step. *Not yet coded* counts the sources no research run has read against the step.",
    "",
    "| Step | Affirms | Qualifies | Dissents | Silent | Not yet coded |",
    "| --- | ---: | ---: | ---: | ---: | ---: |",
    ...steps.map((s, i) => {
      const c = s.counts || { affirms: 0, qualifies: 0, dissents: 0, silent: 0 }
      const coded = c.affirms + c.qualifies + c.dissents + c.silent
      return `| ${thesisLink(i, `${s.id}. ${s.short}`)} | ${c.affirms} | ${c.qualifies} | ${c.dissents} | ${c.silent} | ${sources.length - coded} |`
    }),
    "",
  ].join("\n")
  const existing = existsSync(countPath) ? readFileSync(countPath, "utf8") : ""
  const existingBody = existing.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n\r?\n?/, "")
  if (existingBody !== body) {
    const page = [
      "---",
      'title: "The Anabranch Sources in Numbers"',
      "description: How many sources are coded on the Anabranch thesis, by group and by step. Generated from the source pages by the Anabranch build script.",
      "tags:",
      "  - research",
      "  - evolution-of-consciousness",
      "  - anabranch",
      `updated: ${data.generated.slice(0, 10)}`,
      "generated_by: anabranch/scripts/build-data.mjs",
      "---",
      "",
      body,
    ].join("\n")
    writeFileSync(countPath, page)
    console.log(`Updated ${relative(WIKI, countPath)}`)
  }
}

console.log(`Wiki: ${WIKI}`)
console.log(`Grid sources: ${sources.length} in ${groups.length} groups`)
console.log(`Wiki claim steps: ${Object.keys(gridSteps).length}`)
console.log(`Dated thresholds: ${dates.length}`)
for (const s of steps) {
  const c = s.counts
  const tally = c
    ? `${c.affirms} affirm, ${c.qualifies} qualify, ${c.dissents} dissent, ${c.silent} silent`
    : "no coded positions"
  console.log(
    `  ${s.id} ${s.status.padEnd(7)} ${s.primary || "-"}  ${tally}${s.checked ? `, ${s.checked} checked` : ""}`,
  )
}
if (warnings.length) {
  console.log(`\n${warnings.length} warning(s):`)
  for (const w of warnings) console.log(`  - ${w}`)
}
console.log(`\nWrote ${relative(ROOT, join(out, "anabranch.json"))} and anabranch.js`)
