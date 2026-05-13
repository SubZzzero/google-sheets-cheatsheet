# Development Playbook

## Purpose
- This file is the shortest operational guide for common project changes.
- Use it when the task is implementation-focused and you need fast file targeting.

## Baseline Rules
- Keep changes minimal and local.
- Inspect `src/App.jsx` first for UI-flow changes.
- Inspect `src/data/formulas.js` first for formula/content changes.
- Treat `src/data/formulas.js` as the highest-risk file in the repo.
- After code changes, run `npm run lint`.
- After UI changes, also run `npm run build`.

## Common Tasks

### Change landing screen or category discovery
Check these files first:
- `src/components/Home/Home.jsx`
- `src/components/Home/Home.module.css`
- `src/App.jsx`
- `src/App.module.css`

Watch for:
- category count shape passed from `App.jsx`
- `CATEGORY_META` coverage for all categories
- desktop/mobile behavior around the home category grid

### Change category navigation
Check these files first:
- `src/App.jsx`
- `src/components/Header/Header.jsx`
- `src/components/Sidebar/Sidebar.jsx`
- `src/components/Sidebar/Sidebar.module.css`

Watch for:
- `activeCategory`
- `isSidebarOpen`
- desktop sticky sidebar vs mobile drawer behavior
- backdrop close flow on mobile

### Change selected-category screen
Check these files first:
- `src/components/CardList/CardList.jsx`
- `src/components/CardList/CardList.module.css`
- `src/components/Card/Card.jsx`
- `src/components/Card/Card.module.css`

Watch for:
- card grid responsiveness
- copy button behavior
- dependency on `formula.exampleDetails`

### Edit an existing formula
Check these files first:
- `src/data/formulas.js`

Verify before finishing:
- `id` is unchanged unless intentionally replaced
- `name` still matches the narrative key if renamed
- `category` is one of the known UI categories
- `syntax` still works with `extractSyntaxArgs()`
- `example` stays realistic and user-facing

### Add a new formula
Primary file:
- `src/data/formulas.js`

Checklist:
1. Add the new record to `baseFormulas`.
2. Keep the category string aligned with existing UI categories.
3. Add or verify matching entry in `EXAMPLE_NARRATIVES`.
4. Check whether new syntax tokens need `ARGUMENT_HINTS` entries.
5. Verify the exported card still has meaningful `exampleDetails`.

### Add a new category
Required files:
- `src/data/formulas.js`
- `src/App.jsx`
- `src/components/Home/Home.jsx`

Checklist:
1. Add formulas using the new category string.
2. Update `CATEGORY_ORDER` in `App.jsx` if explicit ordering is needed.
3. Add matching `CATEGORY_META` entry in `Home.jsx`.
4. Verify the home grid count and sidebar navigation both show the category.

### Change metadata / SEO
Check these files first:
- `index.html`
- `public/`
- `README.md` if public-facing product wording also changes

Current known issues:
- `lang="en"`
- technical `<title>`
- favicon points to `/favicon.svg`, but `public/` currently has only `logo.png` and `github.png`

## Validation Matrix

### Context-only file changes
- Verify file paths and factual accuracy.
- Review `git diff`.

### Data/content changes
- Run `npm run lint`.
- Read the affected formula entries again to verify syntax and category consistency.

### UI changes
- Run `npm run lint`.
- Run `npm run build`.
- Check desktop/mobile assumptions in touched components.

### Architecture/refactor changes
- Run `npm run lint`.
- Run `npm run build`.
- Re-read dependent files for contract drift.
- Update `.kilo/context/*.md` files if the project model changed.

## Sensitive Areas
- `src/data/formulas.js`
- `src/App.jsx`
- `src/components/Card/Card.jsx`
- `index.html`

## When To Update Context Files
- Update `AGENTS.md` when the high-level project model changes.
- Update `project-map.md` when component responsibilities or app flow change.
- Update `data-contracts.md` when formula shape, derivation, or category rules change.
- Update `open-questions.md` when new unresolved tradeoffs appear.
- Update `change-log.md` when architecture or working assumptions materially change.
