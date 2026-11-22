# Anabranch

The code for https://anabranch.bioconomy.earth. The site presents Michael Haupt's thesis on the two streams of consciousness step by step, with the positions of the grid sources on each step.

Everything the site shows lives in the wiki's `content/` folder, which stays the single record:

| What                                         | Where in `content/`                                                                                                                                                   |
| -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| The thesis: title, subtitle, introduction    | `research/evolution-of-consciousness/anabranch/index.md` (frontmatter `site_title`, `site_subtitle`; the introduction is the body text before the first `##` heading, or after a `##` heading at the very top, which becomes its heading) |
| The nine steps                               | `research/evolution-of-consciousness/anabranch/t1-...md` to `t9-...md` (tag `anabranch-step`)                                                                         |
| The grid steps each thesis step borrows from | `research/evolution-of-consciousness/steps/`                                                                                                                          |
| Source positions                             | `sources/`: `grid_*` fields, and `anabranch_*` fields once a research run checks a source against the thesis wording                                                  |
| Dated thresholds                             | `research/evolution-of-consciousness/dates/`                                                                                                                          |

This folder holds only the code. It sits at the wiki repo's root, outside `content/`, so Quartz never publishes it.

```
anabranch/
  scripts/build-data.mjs   reads the wiki, writes site/data/
  site/                    what Netlify publishes: index.html, style.css, app.js
  site/data/               built data (not in git; built locally and on Netlify)
  netlify.toml
```

## Change the wording

Edit the step pages or the landing page in the wiki, as you would any page. The site picks the change up on the next build. Wikilinks in a step's `claim`, `evidence_type` or `note` become links on the site.

## Build locally

From this folder:

```
npm install        # first time only
npm run data       # reads ../content, writes site/data/
```

The script prints the sources found, the tally for each step, and any warnings: an unknown grid code, a link that does not resolve, frontmatter that does not parse. It also writes `content/private/evolution-of-consciousness/anabranch-inherited-squares.md`, the list of squares still to check, for the next research brief, and `content/research/evolution-of-consciousness/anabranch/source-count.md`, the source counts by group and by step that the thesis page embeds under "The sources in numbers". The count page is rewritten only when a number changes; commit it with the source pages that changed it.

Then open `site/index.html` in a browser. No server is needed.

## How a research run adds positions

A source's position on a thesis step is inherited from the grid step named in the step page's `crosswalk` field until a run checks it. A run that checks it writes these fields to the source page:

```yaml
briefs: [..., "anabranch"]
anabranch_steps: ["T2"]
anabranch_t2: affirms # affirms | qualifies | dissents | silent
anabranch_t2_says: "What the source says on this step"
anabranch_t2_cite: "Where it says it"
anabranch_t2_grade: "[IC]"
```

Checked positions override inherited ones. A source outside the grid also carries `anabranch_group`. The Run 3 brief in `content/private/evolution-of-consciousness/instructions/` sets out the full rules.

## Deploy on Netlify

One time:

1. In Netlify, choose Add new site, then Import an existing project, and pick `mbh66/wiki`.
2. Set the branch to `v5`, the base directory to `anabranch`, the build command to `npm ci && npm run data`, and the publish directory to `site`. `netlify.toml` sets the same values, apart from the base directory, which only the Netlify settings can hold.
3. Under Domain management, add `anabranch.bioconomy.earth`. At your DNS host, add a CNAME record: name `anabranch`, value `<your-site-name>.netlify.app`. Netlify issues the HTTPS certificate once the record resolves.

After that there is nothing to do by hand. Every push to `v5` reaches Netlify, and `scripts/should-build.sh` decides whether to build. It lets a build run only when a push changes the code here, a thesis page, or a frontmatter line the site reads on a source page in the grid or the Anabranch layer. Every other push is cancelled before anything deploys. Netlify's Free plan allows about 20 production deploys a month and pauses the account's sites when its credits run out, so this keeps deploys to the pushes that matter. Changes to the grid's step pages and the dated thresholds wait for the next build that does run. To deploy by hand, use Trigger deploy in the Netlify dashboard; the check always lets that through.

The wiki itself still deploys to GitHub Pages as before; this adds a second site and changes nothing in the Quartz workflows.
