#!/usr/bin/env bash
# Netlify's ignore command for the Anabranch site.
#
# Netlify runs this before each build. Exit 0 skips the build (no deploy, no
# credits used); exit 1 lets it run. The site builds only when a push changes
# something it displays:
#   - this folder (the code), apart from the README
#   - the thesis pages in content/research/evolution-of-consciousness/anabranch/,
#     apart from the evidence brief and the generated source-count page
#   - on a source page in the grid or the Anabranch layer, a line of frontmatter
#     the site reads (positions, group, title, author, year, briefs, seed flag)
# Edits to other pages, to the body text of source pages, to the grid's step
# pages and to the dated thresholds never trigger a deploy. They reach the site
# with the next build that does run.
#
# A deploy started by hand from the Netlify dashboard (same commit as the last
# build) always runs. So does any build where the comparison cannot be made.

set -u

from="${CACHED_COMMIT_REF:-}"
to="${COMMIT_REF:-HEAD}"

cd "$(git rev-parse --show-toplevel)" || exit 1

if [ -z "$from" ] || [ "$from" = "$to" ]; then
  echo "Anabranch: no earlier build to compare with, building."
  exit 1
fi

if ! changed=$(git diff --name-only "$from" "$to" 2>/dev/null); then
  echo "Anabranch: cannot compare $from with $to, building."
  exit 1
fi

reads_site() {
  # Frontmatter keys the site reads from a source page
  git diff -U0 "$from" "$to" -- "$1" |
    grep -E '^[+-](grid_|anabranch_|title:|author:|year:|briefs:|on_seed_list:|draft:|tags:)' |
    grep -vE '^(\+\+\+|---)' >/dev/null
}

in_layer() {
  # Is the page in the grid or the Anabranch layer, before or after the change?
  { git show "$to:$1" 2>/dev/null; git show "$from:$1" 2>/dev/null; } |
    grep -E '^briefs:.*(evolution-of-consciousness-grid|"anabranch")' >/dev/null
}

while IFS= read -r file; do
  [ -z "$file" ] && continue
  case "$file" in
    anabranch/README.md) ;;
    anabranch/*)
      echo "Anabranch: code changed ($file), building."
      exit 1
      ;;
    content/research/evolution-of-consciousness/anabranch/evidence.md) ;;
    content/research/evolution-of-consciousness/anabranch/source-count.md) ;;
    content/research/evolution-of-consciousness/anabranch/*.md)
      echo "Anabranch: thesis page changed ($file), building."
      exit 1
      ;;
    content/sources/*.md)
      if in_layer "$file" && reads_site "$file"; then
        echo "Anabranch: source positions changed ($file), building."
        exit 1
      fi
      ;;
  esac
done <<< "$changed"

echo "Anabranch: nothing the site shows has changed, skipping this deploy."
exit 0
