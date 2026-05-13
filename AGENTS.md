# Project Agents Context

## Purpose
- Project: `google-sheets-cheatsheet`
- Product: a small client-side cheatsheet/catalog of Google Sheets formulas.
- Main user flow: choose a category -> open formula cards -> read syntax/description/example -> copy syntax.

## Stack
- React 19
- Vite 8
- JavaScript / JSX
- CSS Modules + global CSS
- ESLint 9
- Firebase Hosting

## Runbook
- Dev: `npm run dev`
- Lint: `npm run lint`
- Build: `npm run build`
- Preview: `npm run preview`

## Key Files
- `src/main.jsx` - mounts `<App />` and loads global styles.
- `src/App.jsx` - root UI controller and category/screen state owner.
- `src/data/formulas.js` - canonical data source and derived-data pipeline.
- `src/components/Home/Home.jsx` - landing screen and category card metadata.
- `src/components/Sidebar/Sidebar.jsx` - category navigation.
- `src/components/CardList/CardList.jsx` - selected-category screen.
- `src/components/Card/Card.jsx` - formula card and copy-to-clipboard behavior.
- `index.html` - shell metadata and root node.

## Architecture
- No backend, router, API, or external data source.
- All product content is local and flows from `src/data/formulas.js`.
- `App.jsx` owns:
  - `activeCategory`
  - `isSidebarOpen`
- Render flow:
  - no active category -> `Home`
  - selected category -> `Sidebar` + `CardList`
- `Card` assumes `formula.exampleDetails` is always present.

## Data Rules
- `src/data/formulas.js` is the highest-risk file in the repo.
- Formula records are enriched into exported `formulas` with `exampleDetails`.
- Adding a category currently requires coordinated updates in:
  - `src/data/formulas.js`
  - `src/App.jsx` (`CATEGORY_ORDER`)
  - `src/components/Home/Home.jsx` (`CATEGORY_META`)
- Keep syntax strings compatible with the current parser used by `extractSyntaxArgs()`.

## Current Snapshot
- 80 formulas
- 9 categories
- Mostly Russian UI, but some labels are still English: `COPY`, `COPIED`, `Example`
- No tests, no TypeScript, no URL state, no search

## High-Risk Areas
- `src/data/formulas.js` - monolithic content + derivation logic
- `src/App.jsx` - central screen/navigation logic
- `src/components/Card/Card.jsx` - depends on `exampleDetails` contract
- `index.html` - currently has localization/SEO mismatches

## Change Guidance
- For UI-flow changes, inspect `src/App.jsx` first.
- For formula/content changes, inspect `src/data/formulas.js` first.
- For new categories, update both data and UI metadata/order together.
- Validate with `npm run lint` after code changes.
- For UI changes, also run `npm run build`.

## Context Files
- `.kilo/context/project-map.md` - architecture and file map
- `.kilo/context/data-contracts.md` - formula/data contracts and invariants
- `.kilo/context/development-playbook.md` - operational steps for common changes
- `.kilo/context/open-questions.md` - unresolved product/technical questions
- `.kilo/context/change-log.md` - context history and notable decisions
