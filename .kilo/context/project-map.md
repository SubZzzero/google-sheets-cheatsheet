# Project Map

## Summary
- Project: `google-sheets-cheatsheet`
- Type: single-page React + Vite app
- Purpose: local cheatsheet/catalog of Google Sheets formulas grouped by category
- UI language: mostly Russian
- Deploy target: Firebase Hosting

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

## Repository Layout
```text
src/
  main.jsx
  App.jsx
  App.module.css
  assets/
    reset.css
    style.css
  data/
    formulas.js
  components/
    Header/
    Sidebar/
    Home/
    CardList/
    Card/
    Footer/
public/
  logo.png
  github.png
index.html
firebase.json
```

## App Flow
1. `src/main.jsx` mounts `<App />` and loads global styles.
2. `src/App.jsx` imports `formulas`, computes categories and counts, and owns screen state.
3. If `activeCategory === null`, render `Home`.
4. If a category is selected, render `Sidebar` + `CardList`.
5. `CardList` renders a grid of `Card` components.
6. `Footer` is always present.

## Component Map
- `src/App.jsx`
  - Main orchestration layer.
  - Owns `activeCategory` and `isSidebarOpen`.
  - Computes ordered categories from dataset + `CATEGORY_ORDER`.
  - Computes category counters for the home screen.
- `src/components/Header/Header.jsx`
  - Branding and mobile menu trigger only.
  - Does not own navigation state.
- `src/components/Sidebar/Sidebar.jsx`
  - Category navigation UI.
  - Stateless besides props.
  - Desktop: sticky sidebar.
  - Mobile: drawer with backdrop.
- `src/components/Home/Home.jsx`
  - Landing screen with hero, usage hints, and category grid.
  - Contains `CATEGORY_META`, so category presentation metadata is not data-driven yet.
- `src/components/CardList/CardList.jsx`
  - Selected-category screen.
  - Shows title, subtitle, home button, and card grid.
- `src/components/Card/Card.jsx`
  - Formula presentation.
  - Owns copy-feedback state only.
  - Depends on `formula.exampleDetails` contract.
- `src/components/Footer/Footer.jsx`
  - External GitHub profile link.

## State Ownership
- `App.jsx`
  - `activeCategory`
  - `isSidebarOpen`
- `Card.jsx`
  - `isCopied`
- No router, global store, URL state, or external persistence.

## Data Flow
- Canonical source: `src/data/formulas.js`
- Imported directly only by `src/App.jsx`
- Dataset drives:
  - category list
  - category order
  - category counts
  - filtered formulas by selected category
  - card content and clipboard payload
- Exported `formulas` are derived from `baseFormulas` and already include `exampleDetails`.

## Coupling Notes
- Adding a category currently requires coordinated changes in:
  - `src/data/formulas.js`
  - `src/App.jsx` (`CATEGORY_ORDER`)
  - `src/components/Home/Home.jsx` (`CATEGORY_META`)
- `Card.jsx` assumes `formula.exampleDetails` always includes:
  - `purpose`
  - `variables`
  - `calculation`
  - `result`

## UI System Notes
- Styling is built from:
  - global reset in `src/assets/reset.css`
  - global base styles in `src/assets/style.css`
  - CSS Modules per component
- Current visual language:
  - light theme only
  - white cards
  - green/gray accents
  - soft shadows
  - rounded corners
- Shared design tokens are minimal; most visual values still live inside local CSS modules.

## Responsive Model
- Around `900px`
  - app layout stops using desktop sidebar grid
  - sidebar becomes an overlay drawer
  - header spacing shrinks
- Around `640px`
  - category grid becomes single-column
  - card/list spacing tightens
  - content stacks more aggressively for mobile
- `Card` syntax blocks support horizontal overflow.

## Current Product Capabilities
- Browse categories
- Open category cards
- View syntax, description, example, and generated variable legend
- Copy formula syntax to clipboard

## Current Gaps
- No search
- No routing or URL state
- No tests
- No TypeScript
- No runtime content validation
- No data split by category files
- No dedicated clipboard failure UI

## High-Risk Areas For Changes
- `src/data/formulas.js`
  - monolithic source data + derivation logic
- `src/App.jsx`
  - central UI flow and selectors
- `src/components/Card/Card.jsx`
  - hard dependency on derived `exampleDetails`
- `index.html`
  - metadata/localization drift from current product state

## Metadata / SEO Notes
- `index.html` still uses `lang="en"`
- Title is technical: `google-sheets-cheatsheet`
- Favicon points to `/favicon.svg`, but `public/` currently contains only `logo.png` and `github.png`

## Extension Points
- Search across formulas
- Category deep-linking / URL state
- Centralized category config instead of `CATEGORY_ORDER` + `CATEGORY_META`
- Dataset split by category
- Runtime/schema validation for formulas
- Localized cleanup for remaining English UI labels

## Validation Baseline
- Start with `npm run lint`
- For UI changes also run `npm run build`
- For context-only changes, verify paths and facts against the actual codebase
