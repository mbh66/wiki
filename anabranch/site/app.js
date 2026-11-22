;(function () {
  "use strict"

  // The river waits a second after the page has loaded before it starts
  // drawing, so the first frames are not lost while the page settles.
  const startRiver = () =>
    setTimeout(() => document.querySelector(".river")?.classList.add("go"), 1000)
  if (document.readyState === "complete") startRiver()
  else window.addEventListener("load", startRiver)

  const D = window.ANABRANCH
  const WIKI = "https://wiki.bioconomy.earth"

  if (!D) {
    document.getElementById("app-error").hidden = false
    return
  }

  const MARK = { affirms: "●", qualifies: "◐", dissents: "✕", silent: "" }
  const glyph = (p) =>
    p && p !== "silent" ? `<span class="glyph glyph-${p}" aria-hidden="true"></span>` : ""
  const WORD = {
    affirms: "Affirms",
    qualifies: "Qualifies",
    dissents: "Dissents",
    silent: "Silent",
  }
  const STATUS = { mapped: "Coded", partial: "Partly coded", pending: "Not yet tested" }
  // How the reading of a square was made, shown beside its grade
  const READ_FROM = {
    text: "Read in the work itself.",
    abstract: "Read from the work's own abstract or its publisher's description.",
    review: "Read from a review or reference entry about the work.",
    summary: "Read from summaries of the work. The passage has not been checked.",
  }
  const GRADES = {
    "[IC]": "an official record or two independent sources",
    "[TBV]": "plausible and unconfirmed",
    "[MS]": "rests on Michael Haupt's own project documents",
  }

  const esc = (s) =>
    String(s ?? "").replace(
      /[&<>"']/g,
      (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c],
    )
  const rich = (s) =>
    esc(s).replace(
      /\[([^\]]+)\]\(wiki:([^)\s]+)\)/g,
      (m, text, path) => `<a href="${WIKI}/${path}">${text}</a>`,
    )
  const plain = (s) => String(s ?? "").replace(/\[([^\]]+)\]\(wiki:[^)\s]+\)/g, "$1")
  const num = (id) => Number(String(id).replace(/\D/g, ""))
  const groupName = (g) => g.replace(/^\d+\.\s*/, "")
  const shortAuthor = (a) => {
    const names = String(a || "")
      .split(/;| and /)
      .map((n) => n.trim())
      .filter(Boolean)
    if (!names.length) return ""
    const first = names[0].replace(/\s+et al\.?$/, "")
    return names.length > 1 || /et al/.test(a) ? `${first} et al.` : first
  }
  const listWords = (items) =>
    items.length < 2
      ? items.join("")
      : `${items.slice(0, -1).join(", ")} and ${items[items.length - 1]}`

  const stepById = Object.fromEntries(D.steps.map((s) => [s.id, s]))

  // Header
  document.getElementById("title").textContent = D.title
  document.getElementById("subtitle").textContent = D.subtitle
  document.getElementById("intro").innerHTML =
    (D.introHeading ? `<h2 class="intro-heading" id="intro-heading">${esc(D.introHeading)}</h2>` : "") +
    D.intro
      .map((b) =>
        typeof b === "string"
          ? `<p>${rich(b)}</p>`
          : `<ul>${b.list.map((i) => `<li>${rich(i)}</li>`).join("")}</ul>`,
      )
      .join("")
  // The scroll cue lands on the introduction's heading when it has one
  if (D.introHeading) document.querySelector(".scroll-cue").setAttribute("href", "#intro-heading")

  // The sources in numbers, counted from the data so they change as sources are added
  {
    const criticGroups = D.groups.filter((g) => /^\d+\.\s*critics\b/i.test(g))
    const critics = D.sources.filter((s) => criticGroups.includes(s.group)).length
    const seed = D.sources.filter((s) => s.seedList).length
    const inGroup = (g) => D.sources.filter((s) => s.group === g).length
    let html = `<p>${D.sources.length} sources are coded on the thesis, in ${D.groups.length} groups.`
    if (criticGroups.length)
      html += ` ${criticGroups.length === 1 ? "Group" : "Groups"} ${listWords(criticGroups.map((g) => g.match(/^\d+/)[0]))}, the critics, ${criticGroups.length === 1 ? "holds" : "hold"} ${critics} of them, and ${seed} are on Michael Haupt's recommended reading list.</p>`
    else html += ` ${seed} are on Michael Haupt's recommended reading list.</p>`
    html += `<table class="count-table">
      <caption class="visually-hidden">Sources in each group</caption>
      <thead><tr><th scope="col">Group</th><th scope="col" class="num">Sources</th></tr></thead>
      <tbody>${D.groups
        .map((g) => `<tr><th scope="row">${esc(g)}</th><td class="num">${inGroup(g)}</td></tr>`)
        .join("")}</tbody>
      <tfoot><tr><th scope="row">Total</th><td class="num">${D.sources.length}</td></tr></tfoot>
    </table>`
    document.getElementById("counts-body").innerHTML = html
  }

  // On narrow screens, crop the river to the Anabranch itself
  const riverSvg = document.querySelector(".river svg")
  const narrow = window.matchMedia("(max-width: 640px)")
  const fitRiver = () =>
    riverSvg.setAttribute("viewBox", narrow.matches ? "330 15 740 245" : "0 0 1320 290")
  fitRiver()
  narrow.addEventListener("change", fitRiver)

  // The chain
  function tally(c) {
    const total = c.affirms + c.qualifies + c.dissents + c.silent
    const seg = (p) =>
      `<span class="bar-${p}" style="width:${((c[p] / total) * 100).toFixed(2)}%"></span>`
    return `<div class="tally">
      <div class="bar" aria-hidden="true">${seg("affirms")}${seg("qualifies")}${seg("dissents")}</div>
      <p class="tally-text">${c.affirms} affirm, ${c.qualifies} qualify, ${c.dissents} dissent, ${c.silent} silent</p>
    </div>`
  }

  function stepLinks(s) {
    const links = []
    if (s.url) links.push(`<a href="${esc(s.url)}">This step on the wiki</a>`)
    if (s.gridStep)
      links.push(`<a href="${esc(s.gridStep.url)}">Grid step ${esc(s.gridStep.code)}</a>`)
    for (const g of s.secondarySteps || [])
      links.push(`<a href="${esc(g.url)}">Grid step ${esc(g.code)}</a>`)
    if (s.counts) links.push(`<a href="#grid">Sources on this step</a>`)
    return links.length ? `<p class="step-links">${links.join("")}</p>` : ""
  }

  let chain = ""
  for (const part of D.parts) {
    const steps = D.steps.filter((s) => s.part === part.id)
    if (!steps.length) continue
    chain += `<section class="part" aria-labelledby="${part.id}-h">
      <h2 class="part-title" id="${part.id}-h">${esc(part.title)}</h2>
      <ol class="chain" start="${num(steps[0].id)}">`
    for (const s of steps) {
      chain += `<li class="step" id="${s.id}" data-status="${s.status}">
        ${s.connector ? `<p class="connector">${esc(s.connector)}</p>` : ""}
        <article class="step-card" aria-labelledby="${s.id}-claim">
          <p class="step-num">Step ${num(s.id)}${s.name ? `: <span class="step-name">${esc(s.name)}</span>` : ""}</p>
          <h3 class="claim" id="${s.id}-claim">${rich(s.claim)}</h3>
          <dl class="step-meta">
            <div><dt>Evidence</dt><dd>${rich(s.evidence)}</dd></div>
            <div><dt>Status</dt><dd><span class="status status-${s.status}">${STATUS[s.status] || esc(s.status)}</span></dd></div>
          </dl>
          ${s.counts ? tally(s.counts) : ""}
          <p class="note">${rich(s.note)}</p>
          ${stepLinks(s)}
        </article>
      </li>`
    }
    chain += `</ol></section>`
  }
  document.getElementById("steps").innerHTML = chain

  // Grid
  const pending = D.steps.filter((s) => !s.counts).map((s) => String(num(s.id)))
  const inherited = D.steps.some(
    (s) => s.counts && s.checked < D.sources.filter((src) => src.cells[s.id].position).length,
  )
  let lede = `<p>Each row is a source and each column is a step of the argument. Select a mark to read what the source says and where it says it.</p>`
  if (pending.length) {
    lede += `<p>${pending.length === 1 ? "Step" : "Steps"} ${listWords(pending)} ${pending.length === 1 ? "has" : "have"} no coded positions yet.</p>`
  }
  if (inherited) {
    lede += `<p>The other columns carry positions from the wiki's evolution of consciousness grid. They have not yet been checked against the wording of these steps.</p>`
  }
  document.getElementById("grid-lede").innerHTML = lede

  let table = `<thead><tr><th scope="col" class="col-source">Source</th>`
  for (const s of D.steps) {
    table += `<th scope="col" class="col-step${s.counts ? "" : " is-pending"}">
      <a href="#${s.id}" title="Step ${num(s.id)}, ${esc(plain(s.short))}: ${esc(plain(s.claim))}"><span class="col-num">${num(s.id)}</span><span class="col-label">${esc(plain(s.short))}</span></a></th>`
  }
  table += `</tr></thead>`

  for (const group of D.groups) {
    table += `<tbody><tr class="group"><th scope="colgroup" colspan="${D.steps.length + 1}">${esc(groupName(group))}</th></tr>`
    D.sources.forEach((src, i) => {
      if (src.group !== group) return
      table += `<tr><th scope="row">
        <a href="${esc(src.wikiUrl)}" title="${esc(src.title)}">${esc(shortAuthor(src.author) || src.title)}${src.year ? `, ${esc(src.year)}` : ""}<span class="visually-hidden">: ${esc(src.title)}</span></a>${src.seedList ? `<span class="seed" title="On Michael Haupt's reading list">*</span>` : ""}
      </th>`
      for (const s of D.steps) {
        const c = src.cells[s.id]
        if (!c.position) {
          table += `<td class="pending"></td>`
        } else if (c.position === "silent") {
          table += `<td></td>`
        } else {
          const label = `${src.title}, step ${num(s.id)}: ${WORD[c.position]}`
          table += `<td><button type="button" class="mark mark-${c.position}" data-src="${i}" data-step="${s.id}" aria-label="${esc(label)}">${glyph(c.position)}</button></td>`
        }
      }
      table += `</tr>`
    })
    table += `</tbody>`
  }
  const tableEl = document.getElementById("grid-table")
  tableEl.querySelector("caption").textContent =
    `Positions of ${D.sources.length} sources on each step of the Anabranch argument`
  tableEl.insertAdjacentHTML("beforeend", table)

  // Detail panel
  const panel = document.getElementById("panel")
  const panelBody = document.getElementById("panel-body")
  let opener = null

  function openPanel(srcIndex, stepId) {
    const src = D.sources[srcIndex]
    const s = stepById[stepId]
    const c = src.cells[stepId]
    let html = `<p class="panel-step">Step ${num(s.id)}: ${esc(plain(s.short))}</p>
      <h3 id="panel-title">${esc(src.title)}</h3>
      <p class="panel-by">${esc(src.author)}${src.year ? `, ${esc(src.year)}` : ""}</p>
      <p class="panel-pos">${glyph(c.position)}${WORD[c.position]}</p>`
    if (c.says) html += `<p class="panel-says">${esc(c.says)}</p>`
    if (c.cite) html += `<p class="panel-cite">Where: ${esc(c.cite)}</p>`
    if (c.grade)
      html += `<p class="panel-grade">Grade ${esc(c.grade)}${GRADES[c.grade] ? `: ${GRADES[c.grade]}` : ""}</p>`
    if (READ_FROM[c.readFrom]) html += `<p class="panel-read">${READ_FROM[c.readFrom]}</p>`
    if (c.basis === "inherited") {
      html += `<p class="panel-basis">Taken from grid step ${esc(c.from)} on the wiki. Not yet checked against the wording of this step.</p>`
    } else if (c.basis === "checked") {
      html += `<p class="panel-basis">Checked against the wording of this step.</p>`
    }
    if (c.secondary && c.secondary.length) {
      html += `<ul class="panel-also">${c.secondary
        .map(
          (e) =>
            `<li>Also on grid step ${esc(e.code)}: ${WORD[e.position].toLowerCase()}${e.says ? `. ${esc(e.says)}` : ""}</li>`,
        )
        .join("")}</ul>`
    }
    const links = [`<a href="${esc(src.wikiUrl)}">Source page on the wiki</a>`]
    if (s.gridStep)
      links.push(`<a href="${esc(s.gridStep.url)}">Grid step ${esc(s.gridStep.code)}</a>`)
    html += `<p class="panel-links">${links.join("")}</p>`
    panelBody.innerHTML = html
    if (typeof panel.showModal === "function") panel.showModal()
    else panel.setAttribute("open", "")
  }

  tableEl.addEventListener("click", (e) => {
    const btn = e.target.closest("button.mark")
    if (!btn) return
    opener = btn
    openPanel(Number(btn.dataset.src), btn.dataset.step)
  })
  panel.addEventListener("close", () => opener && opener.focus())
  panel.addEventListener("click", (e) => {
    if (e.target === panel) panel.close()
  })

  // Sources list
  const byYear = [...D.sources].sort(
    (a, b) => (a.year ?? 0) - (b.year ?? 0) || a.title.localeCompare(b.title),
  )
  document.getElementById("source-list").innerHTML = byYear
    .map(
      (src) =>
        `<li>${esc(src.author)}${src.year ? ` (${esc(src.year)})` : ""}. <a href="${esc(src.wikiUrl)}"><cite>${esc(src.title)}</cite></a>.</li>`,
    )
    .join("")

  // Footer
  const built = new Date(D.generated).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  document.getElementById("footer").innerHTML =
    `<p>The thesis is Michael Haupt's, set out step by step on the
    <a href="${esc(D.thesisPage)}">BioConomy wiki</a>. The evidence on this page comes from the
    <a href="${esc(D.wiki)}">evolution of consciousness research</a> on the BioConomy wiki, which holds the full
    <a href="${esc(D.grid)}">claim grid</a>, the graded library and the dating table. Data built ${esc(built)}.</p>
    <p><a href="data/anabranch.json">Download the data as JSON</a></p>`
  // Folded sections: "Where the sources stand" and "Sources" start closed.
  // A reader's choice is remembered in this browser; storage can be missing,
  // so every read and write is guarded.
  for (const d of document.querySelectorAll("details.fold")) {
    const key = "anabranch-fold-" + d.dataset.fold
    try {
      if (localStorage.getItem(key) === "open") d.open = true
    } catch (e) {}
    d.addEventListener("toggle", () => {
      try {
        localStorage.setItem(key, d.open ? "open" : "closed")
      } catch (e) {}
    })
  }
  // A link or address pointing into a folded section opens it first,
  // so "Sources on this step" still lands on the grid.
  const openFold = (hash) => {
    const target = hash && hash.length > 1 && document.getElementById(hash.slice(1))
    if (!target) return
    const d = target.closest("details.fold") || target.querySelector("details.fold")
    if (d) d.open = true
  }
  document.addEventListener("click", (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (link) openFold(link.getAttribute("href"))
  })
  window.addEventListener("hashchange", () => openFold(location.hash))
  openFold(location.hash)
})()
