# Open Questions

## Product
- Should the interface become fully Russian, or should some English labels remain intentional?
- Should formula discovery stay category-only, or is search now expected?
- Should categories or formula cards become linkable via URL?
- Is the current content scope stable, or is steady formula expansion expected?

## Content Model
- Should `src/data/formulas.js` remain one file, or is category-based splitting now desirable?
- Should formula examples and narratives be treated as stricter editorial content with review rules?
- Should missing `ARGUMENT_HINTS` coverage be treated as a content-quality bug?
- Should syntax arguments remain parser-derived, or become explicit structured data per formula?

## UI / UX
- Should `COPY`, `COPIED`, and `Example` be translated?
- Should copy-to-clipboard get stronger failure handling or visible feedback?
- Should the home screen surface total formula count or other summary metrics?
- Should the mobile sidebar get stronger accessibility behavior such as Escape handling or focus management?

## Technical
- Should tests be introduced now, or only after data and layout stabilize?
- Should SEO cleanup happen soon:
  - `html lang`
  - document title
  - favicon target in `index.html`
- Should category order and category metadata move to one source of truth?
- Should the formula contract eventually be typed with TypeScript or JSDoc?
- Should runtime validation be added for duplicate ids, category drift, and parser compatibility?

## Working Assumptions Until Changed
- Keep changes minimal and local.
- Preserve the current React + CSS Modules architecture unless there is a strong reason to refactor.
- Treat `src/data/formulas.js` as the canonical data source.
- Validate UI work on both desktop and mobile layouts.
