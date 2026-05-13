# Data Contracts

## Canonical Dataset
- File: `src/data/formulas.js`
- Raw source: `baseFormulas`
- Final export: `formulas`
- Role: single source of truth for product content and derived example data

## Current Snapshot
- Total formulas: 80
- Total categories: 9
- Category counts:
  - `Базовые`: 10
  - `Часто используемые`: 10
  - `Логические`: 10
  - `Поиск`: 10
  - `Текст`: 10
  - `Данные`: 4
  - `Массивы`: 6
  - `Дата и время`: 10
  - `Импорт`: 10

## Raw Formula Shape
Each item in `baseFormulas` follows:

```js
{
  id: number,
  name: string,
  category: string,
  description: string,
  syntax: string,
  example: string,
}
```

## Exported Formula Shape
Each item in exported `formulas` follows:

```js
{
  id: number,
  name: string,
  category: string,
  description: string,
  syntax: string,
  example: string,
  exampleDetails: {
    purpose: string,
    variables: string[],
    calculation: string,
    result: string,
  },
}
```

## Derivation Pipeline
`src/data/formulas.js` contains both content and derivation logic.

### `extractSyntaxArgs(syntax)`
- Takes the substring between the first `(` and the last `)`.
- Removes square brackets from optional arguments.
- Removes `...` from variadic arguments.
- Splits by commas.
- Trims and filters empty values.

### `buildVariablesLegend(syntax)`
- Calls `extractSyntaxArgs(syntax)`.
- Deduplicates argument names.
- Maps each argument token through `ARGUMENT_HINTS`.
- Falls back to `рабочий аргумент функции` for unknown tokens.
- If no arguments are present, returns one explanatory fallback line.

### `buildExampleDetails(formula)`
- Uses `formula.description` as `purpose`.
- Builds `variables` from `syntax`.
- Uses `EXAMPLE_NARRATIVES[formula.name]` when available.
- Falls back to generic `calculation` and `result` text otherwise.

### Final Export
- `formulas` is built with `baseFormulas.map(...)`.
- Every exported item is expected to include a complete `exampleDetails` object.

## Hard Invariants
- `id` must be unique.
- `name` should be unique.
- `name` should stay aligned with keys in `EXAMPLE_NARRATIVES`.
- `category` must be a valid display category used by the UI.
- `syntax` must stay compatible with `extractSyntaxArgs()`.
- `description` should stay short and user-facing.
- `example` should remain realistic and readable.

## Known Categories
- `Базовые`
- `Часто используемые`
- `Логические`
- `Поиск`
- `Текст`
- `Данные`
- `Массивы`
- `Дата и время`
- `Импорт`

## Cross-File Coupling
- Category additions currently require changes in:
  - `src/data/formulas.js`
  - `src/App.jsx` (`CATEGORY_ORDER`)
  - `src/components/Home/Home.jsx` (`CATEGORY_META`)
- `Card.jsx` depends on `formula.exampleDetails` existing with all four fields.
- `App.jsx` depends on category strings to build navigation and counts.

## Known Parser Assumptions
- Syntax strings use comma-separated English-style argument notation.
- Optional arguments use `[]`.
- Variadic arguments use `...`.
- Nested syntax structures are not modeled explicitly; parsing is string-based.
- No locale-aware parsing exists.

## Current Content Drift
- `EXAMPLE_NARRATIVES` currently covers the full formula set, so cards do not fall back today.
- `ARGUMENT_HINTS` is not fully exhaustive for all parsed tokens.
- Known tokens currently falling back to generic hint text:
  - `value2`
  - `places`
  - `criterion`
  - `criteria_range1`
  - `criterion1`
  - `criteria_range2`
  - `criterion2`
  - `sum_range`
  - `value_if_na`
  - `search_for`
  - `replace_with`
  - `occurrence_number`
  - `regular_expression`

## Safe Change Rules
- When editing one formula, keep the change as local as possible.
- When renaming a formula, verify the corresponding `EXAMPLE_NARRATIVES` key.
- When changing syntax format, verify `extractSyntaxArgs()` still parses it correctly.
- When adding a category, update data, category order, and home metadata together.
- When changing `exampleDetails` structure, verify `Card.jsx` rendering assumptions.

## Refactor Opportunities
- Split `baseFormulas` by category into smaller files.
- Move `ARGUMENT_HINTS` and `EXAMPLE_NARRATIVES` into dedicated modules.
- Add runtime validation for duplicate ids, category drift, and parser compatibility.
- Add tests for syntax parsing and example-details generation.
