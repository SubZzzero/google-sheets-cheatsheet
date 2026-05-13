# Change Log

## Purpose
This file tracks project-specific engineering decisions and context accumulated during assistant work.

## 2026-05-06
### Context bootstrap
- Performed a repository analysis and captured architecture, data flow, and risk areas.
- Added `/.kilo/context/` helper files for persistent project context.

### Context structure introduced
- `project-map.md`: quick architecture and file navigation reference
- `data-contracts.md`: source data and derived-data contract for formulas
- `open-questions.md`: product and technical ambiguities to keep visible
- `change-log.md`: ongoing decision/history log

### Current notable facts
- Project is a small React/Vite SPA with no router and no tests.
- Core complexity is concentrated in `src/data/formulas.js`.
- App UI is mostly Russian, but some labels remain in English.
- Firebase Hosting is already configured for SPA rewrites.

## 2026-05-13
### Context refresh and indexing
- Re-ran a full repository analysis against the current codebase.
- Added root `AGENTS.md` as the main project-context entrypoint.
- Refreshed `project-map.md` with verified component boundaries, state ownership, responsive behavior, and extension points.
- Refreshed `data-contracts.md` with the current dataset snapshot, derivation pipeline, parser assumptions, and known hint-coverage drift.
- Added `development-playbook.md` for fast operational guidance on common UI/content changes.
- Normalized `open-questions.md` around product, content, UX, and technical tradeoffs.

### Current notable facts
- Dataset snapshot remains `80` formulas across `9` categories.
- `src/data/formulas.js` is still the canonical source of truth and the highest-risk file.
- Category additions still require coordinated updates in `formulas.js`, `App.jsx`, and `Home.jsx`.
- `index.html` metadata is still out of sync with the Russian product UI.

## Logging Rules
- Add an entry when architecture, contracts, or product behavior changes.
- Prefer short factual notes over narrative history.
- Record decisions that future work may depend on.
